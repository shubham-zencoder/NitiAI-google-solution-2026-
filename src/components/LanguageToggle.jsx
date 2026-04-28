import React from "react";

export default function LanguageToggle({ value = "en", onChange }) {
  return (
    <div className="inline-flex items-center rounded-full bg-white/10 p-1 text-xs font-semibold text-white">
      <button
        type="button"
        onClick={() => onChange?.("en")}
        className={`rounded-full px-3 py-1 transition ${value === "en" ? "bg-white text-slate-900" : "text-white/80"}`}
      >
        English
      </button>
      <button
        type="button"
        onClick={() => onChange?.("hi")}
        className={`rounded-full px-3 py-1 transition ${value === "hi" ? "bg-white text-slate-900" : "text-white/80"}`}
      >
        हिंदी
      </button>
    </div>
  );
}