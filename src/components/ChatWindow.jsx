import React, { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import MessageBubble from "./MessageBubble";
import { askGemini } from "../services/gemini";

export default function ChatWindow({
  systemPrompt,
  placeholderText,
  accentColor = "blue",
  language = "en"
}) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const bottomRef = useRef(null);

  const greetingPrompt =
    language === "hi"
      ? "नमस्ते, अपना संक्षिप्त परिचय दें।"
      : "Hello, introduce yourself briefly.";

  // Auto-greet on load
  useEffect(() => {
    const greet = async () => {
      setLoading(true);
      setMessages([]);
      setHistory([]);
      const result = await askGemini(greetingPrompt, systemPrompt, []);
      setMessages([{ role: "model", text: result.text }]);
      setHistory(result.history);
      setLoading(false);
    };
    greet();
  }, [systemPrompt, greetingPrompt]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userText = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userText }]);
    setLoading(true);

    const result = await askGemini(userText, systemPrompt, history);
    setMessages(prev => [...prev, { role: "model", text: result.text }]);
    setHistory(result.history);
    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const colorMap = {
    blue: "bg-blue-600",
    green: "bg-green-700",
    red: "bg-red-700"
  };

  return (
    <div className="flex flex-col h-full max-h-screen">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {messages.map((msg, i) => (
          <MessageBubble key={i} role={msg.role} text={msg.text} accentColor={accentColor} />
        ))}
        {loading && (
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
            <span>NitiAI is thinking...</span>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-4 py-3 border-t border-gray-200 bg-white">
        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholderText || "Type your message..."}
            className="flex-1 bg-transparent outline-none text-sm text-gray-700"
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className={`p-2 rounded-full text-white ${colorMap[accentColor]} disabled:opacity-40 transition`}
          >
            <Send size={16} />
          </button>
        </div>
        <p className="text-center text-xs text-gray-400 mt-2">Powered by Gemini AI · NitiAI</p>
      </div>
    </div>
  );
}