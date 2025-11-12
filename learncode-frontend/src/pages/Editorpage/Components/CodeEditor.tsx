import { useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import { useTheme } from "../../../contexts/ThemeContext";
import {
  handleLanguageChange,
  languageOptions,
  getDefaultCodeForLanguage,
} from "../../../functions";
import { codeAPI } from "../../../services/api";

export interface CodeEditorProps {
  initialCode?: string;
  initialLanguage?: string;
}

export default function CodeEditor({
  initialCode,
  initialLanguage,
}: CodeEditorProps) {
  const { isDark } = useTheme();

  // --- Your Existing State and Refs ---
  const [code, setCode] = useState(
    initialCode || getDefaultCodeForLanguage(initialLanguage || "python")
  );
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState(initialLanguage || "python");
  const [input, setInput] = useState("");
  const outputEndRef = useRef<HTMLDivElement>(null);

  // --- New State for Tabs ---
  const [activeTab, setActiveTab] = useState<"output" | "input">("output");

  // --- Your Existing Functions (Unchanged) ---
  const runCode = async () => {
    setLoading(true);
    setOutput("");
    setActiveTab("output");

    try {
      const codeNeedsInput =
        code.includes("input(") ||
        code.includes("cin >>") ||
        code.includes("process.stdin");

      if (!input.trim() && codeNeedsInput) {
        setOutput(
          "⚠️ Your code requires input!\n\nPlease provide input in the 'Input' tab.\nEach input should be on a separate line.\n\nExample:\nAlice\n25"
        );
        setLoading(false);
        return;
      }

      const result = await codeAPI.executeCode(code, language, input);

      if (result.success) {
        setOutput(result.data?.output || "No output");
      } else {
        setOutput(result.error || "Execution failed");
      }
    } catch (error: unknown) {
      const executionError = error as {
        response?: { data?: { message?: string } };
      };
      setOutput(
        executionError?.response?.data?.message ||
          "Error: Failed to execute code. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const changeLanguage = (newLanguage: string) => {
    handleLanguageChange(newLanguage, setLanguage, setCode);
    setOutput("");
  };

  return (
    <div className="flex flex-3 flex-col h-screen">
      <div className="flex flex-col flex-2 editor-container overflow-hidden">
        {/* Editor Header */}
        <div className="editor-header flex items-center justify-between px-4 py-2 border">
          <select
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="px-3 py-1 rounded text-sm border focus:outline-none transition-colors"
          >
            {languageOptions.map((lang) => (
              <option key={lang.id} value={lang.id}>
                {lang.name}
              </option>
            ))}
          </select>
          <div className="flex items-center gap-2">
            <button
              onClick={runCode}
              disabled={loading}
              className="run-btn px-3 py-1 rounded text-white text-sm font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "⏳ Running..." : "▶ Run"}
            </button>
            <button
              onClick={() => setCode(getDefaultCodeForLanguage(language))}
              className="reset-btn px-3 py-1 rounded text-sm font-medium hover:opacity-90 transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
        <Editor
          height="100%"
          theme={isDark ? "vs-dark" : "vs"}
          language={language === "cpp" ? "cpp" : language}
          value={code}
          onChange={(value) => setCode(value || "")}
          options={{ minimap: { enabled: false } }}
        />
      </div>

      {/* Bottom: Output/Input Panel */}
      <div className="output-panel flex flex-col flex-1 border-t">
        {/* Tab Headers */}
        <div className="flex items-center justify-between px-4 border-b">
          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab("output")}
              className={`tab-btn px-4 py-2 text-sm ${
                activeTab === "output" ? "active" : ""
              } transition-colors`}
            >
              Output
            </button>
            <button
              onClick={() => setActiveTab("input")}
              className={`tab-btn px-4 py-2 text-sm ${
                activeTab === "input" ? "active" : ""
              } transition-colors`}
            >
              Input
            </button>
          </div>
          {activeTab === "output" && (
            <div className="flex gap-2">
              <button
                onClick={() => navigator.clipboard.writeText(output)}
                title="Copy"
                className="icon-btn hover:opacity-80 transition-colors"
              >
                📋
              </button>
              <button
                onClick={() => setOutput("")}
                title="Clear"
                className="icon-btn hover:opacity-80 transition-colors"
              >
                🗑️
              </button>
            </div>
          )}
        </div>
        {/* Tab Content */}
        <div className="panel-content flex-1 p-3 overflow-auto">
          {activeTab === "output" ? (
            <pre className="output-text text-sm whitespace-pre-wrap font-mono">
              {output || "Your code's output will be displayed here."}
              <div ref={outputEndRef} />
            </pre>
          ) : (
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="input-textarea w-full h-full p-2 rounded border resize-none text-sm font-mono focus:outline-none transition-colors"
              placeholder="Provide all inputs here (one per line)..."
            />
          )}
        </div>
      </div>
    </div>
  );
}
