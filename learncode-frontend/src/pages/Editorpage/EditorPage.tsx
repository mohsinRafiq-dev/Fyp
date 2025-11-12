import { useLocation } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import AiAssistantPanel from "./Components/AiAssistantPanel";
import CodeEditor from "./Components/CodeEditor";
import "./EditorPage.css";

function EditorPage() {
  const { isDark } = useTheme();
  const location = useLocation();

  const state = location.state as {
    code?: string;
    language?: string;
  } | null;

  return (
    <div className={`editor-page flex ${isDark ? "dark-mode" : "light-mode"}`}>
      <CodeEditor initialCode={state?.code} initialLanguage={state?.language} />
      <AiAssistantPanel />
    </div>
  );
}

export default EditorPage;
