function AiAssistantPanel() {
  return (
    <div className="ai-panel flex flex-col flex-[1] overflow-hidden">
      {/* Assistant Header */}
      <div className="ai-header flex items-center justify-between p-3 border-b flex-shrink-0">
        <h2 className="font-semibold">AI Assistant</h2>
        <button
          className="ai-header-btn hover:opacity-80 transition-colors"
          title="Settings"
        >
          {/* Using a simple gear emoji for placeholder */}
          ⚙️
        </button>
      </div>

      {/* Chat Area */}
      <div className="chat-area flex-1 p-4 overflow-y-auto space-y-4">
        {/* Example Message */}
        <div className="flex flex-col gap-2">
          <div className="ai-message p-3 rounded-lg border text-sm max-w-[85%] self-start">
            Hello! I'm your AI assistant. How can I help you today?
          </div>
        </div>
        {/* Add more messages here */}
      </div>

      {/* Input Box */}
      <div className="p-3 border-t bg-opacity-50 flex-shrink-0">
        <div className="ai-input-box flex items-center gap-2 rounded-lg border px-3 py-2 focus-within:outline">
          <input
            type="text"
            placeholder="Ask the AI anything..."
            className="ai-input flex-1 bg-transparent outline-none text-sm"
          />
          <button
            className="ai-send-btn hover:opacity-80 transition-colors"
            title="Send"
          >
            {/* Using a simple arrow emoji for placeholder */}➤
          </button>
        </div>
      </div>
    </div>
  );
}

export default AiAssistantPanel;
