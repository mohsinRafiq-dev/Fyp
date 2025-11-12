import http from "http";
import app from "./app.js";
import containerManager from "./services/containerManager.js";
import codeExecutorWSService from "./services/codeExecutorWSService.js";
import connectDB, { stopMemoryServer } from "./config/database.js";

const PORT = process.env.PORT || 5000;
// Allow disabling executor containers for environments without Docker
const EXECUTORS_ENABLED =
  (process.env.EXECUTORS_ENABLED ?? "true").toLowerCase() !== "false";

const server = http.createServer(app);

// Start containers before starting the server (optional)
async function startServer() {
  try {
    // Connect to database first
    await connectDB();

    if (EXECUTORS_ENABLED) {
      console.log("Starting executor containers...");
      await containerManager.startAllContainers();
      console.log("All executor containers are ready");
    } else {
      console.log(
        "EXECUTORS_ENABLED is false - skipping executor containers startup"
      );
    }

    server.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

// Graceful shutdown
async function shutdown() {
  console.log("\nShutting down gracefully...");

  // Close WebSocket connections
  codeExecutorWSService.closeAllConnections();

  // Stop all containers
  if (EXECUTORS_ENABLED) {
    await containerManager.stopAllContainers();
  }

  // Stop in-memory Mongo if used
  await stopMemoryServer();

  // Close HTTP server
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });

  // Force exit after 10 seconds
  setTimeout(() => {
    console.error("Forced shutdown");
    process.exit(1);
  }, 10000);
}

// Handle shutdown signals
process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);

server.on("error", (error) => {
  console.error("Server error:", error);
});

// Start the server
startServer();
