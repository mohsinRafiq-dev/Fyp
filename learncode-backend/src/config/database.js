import mongoose from "mongoose";
import dotenv from "dotenv";
import { MongoMemoryServer } from "mongodb-memory-server";

dotenv.config();

let memoryServer = null;

/**
 * Attempt to connect to a real MongoDB instance.
 * If it fails and ALLOW_INMEMORY_DB=true, fall back to an in-memory server
 * so the backend can run for development without a local Mongo installation.
 */
const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  const allowMemory =
    (process.env.ALLOW_INMEMORY_DB || "true").toLowerCase() === "true";

  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    if (!allowMemory) {
      console.error(
        "In-memory fallback disabled (set ALLOW_INMEMORY_DB=true to enable)."
      );
      process.exit(1);
    }
    console.log("Starting in-memory MongoDB...");
    memoryServer = await MongoMemoryServer.create();
    const memUri = memoryServer.getUri();
    const conn = await mongoose.connect(memUri);
    console.log("✅ Connected to in-memory MongoDB instance");
    return conn;
  }
};

export const stopMemoryServer = async () => {
  if (memoryServer) {
    try {
      await memoryServer.stop();
      console.log("In-memory MongoDB stopped");
    } catch (e) {
      console.error("Failed to stop in-memory MongoDB:", e.message);
    }
  }
};

export default connectDB;
