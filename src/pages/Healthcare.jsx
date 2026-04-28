import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ChatWindow from "../components/ChatWindow";
import LanguageToggle from "../components/LanguageToggle";
import { HEALTHCARE_PROMPT } from "../prompts/systemPrompts";

export default function Healthcare() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("en");
  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="bg-red-800 text-white px-4 py-3 flex items-center gap-3 shadow justify-between flex-wrap">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate("/")} className="p-1 rounded-full hover:bg-red-700">
            <ArrowLeft size={20} />
          </button>
          <div>
            <h2 className="font-bold text-lg leading-tight">🏥 Healthcare Assistant</h2>
            <p className="text-xs text-red-200">Symptoms · Doctors · Ayushman Bharat</p>
          </div>
        </div>
        <LanguageToggle value={language} onChange={setLanguage} />
      </div>
      <div className="flex-1 overflow-hidden">
        <ChatWindow
          systemPrompt={HEALTHCARE_PROMPT}
          placeholderText="Describe symptoms or ask about healthcare..."
          accentColor="red"
          language={language}
        />
      </div>
    </div>
  );
}