import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ChatWindow from "../components/ChatWindow";
import LanguageToggle from "../components/LanguageToggle";
import { LOANS_PROMPT } from "../prompts/systemPrompts";

export default function Loans() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("en");
  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="bg-green-800 text-white px-4 py-3 flex items-center gap-3 shadow justify-between flex-wrap">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate("/")} className="p-1 rounded-full hover:bg-green-700">
            <ArrowLeft size={20} />
          </button>
          <div>
            <h2 className="font-bold text-lg leading-tight">💰 Loan Assistant</h2>
            <p className="text-xs text-green-200">Mudra · SVANidhi · NABARD · More</p>
          </div>
        </div>
        <LanguageToggle value={language} onChange={setLanguage} />
      </div>
      <div className="flex-1 overflow-hidden">
        <ChatWindow
          systemPrompt={LOANS_PROMPT}
          placeholderText="Ask about loans, eligibility, documents..."
          accentColor="green"
          language={language}
        />
      </div>
    </div>
  );
}