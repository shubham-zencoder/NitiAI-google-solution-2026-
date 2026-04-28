import React from "react";
import { useNavigate } from "react-router-dom";

export default function ModuleCard({ title, subtitle, route, bgColor, emoji }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(route)}
      className={`w-full text-left p-5 rounded-2xl text-white shadow-md hover:shadow-lg 
        hover:scale-[1.02] transition-all duration-200 ${bgColor}`}
    >
      <div className="text-4xl mb-3">{emoji}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm opacity-80 mt-1">{subtitle}</p>
      <div className="mt-4 text-xs font-semibold opacity-70 uppercase tracking-wide">
        Tap to start →
      </div>
    </button>
  );
}