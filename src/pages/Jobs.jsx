import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ChatWindow from "../components/ChatWindow";
import LanguageToggle from "../components/LanguageToggle";
import { JOBS_PROMPT } from "../prompts/systemPrompts";

export default function Jobs() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("en");
  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Top bar */}
      <div className="bg-blue-700 text-white px-4 py-3 flex items-center gap-3 shadow justify-between flex-wrap">
        <div className="flex items-center gap-3">
        <button onClick={() => navigate("/")} className="p-1 rounded-full hover:bg-blue-600">
          <ArrowLeft size={20} />
        </button>
        <div>
          <h2 className="font-bold text-lg leading-tight">💼 Jobs Assistant</h2>
          <p className="text-xs text-blue-200">Resume · Matching · Interview Prep</p>
        </div>
        </div>
        <LanguageToggle value={language} onChange={setLanguage} />
      </div>
      <div className="flex-1 overflow-hidden">
        <ChatWindow
          systemPrompt={JOBS_PROMPT}
          placeholderText="Ask about jobs, resume, interviews..."
          accentColor="blue"
          language={language}
        />
      </div>
    </div>
  );
}