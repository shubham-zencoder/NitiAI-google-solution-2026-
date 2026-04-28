import React from "react";

export default function MessageBubble({ role, text, accentColor = "blue" }) {
  const isUser = role === "user";

  const bubbleColors = {
    blue: "bg-blue-600 text-white",
    green: "bg-green-700 text-white",
    red: "bg-red-700 text-white"
  };

  // Convert **bold** markdown and newlines to HTML
  const formatText = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br/>");
  };

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm
          ${isUser
            ? bubbleColors[accentColor]
            : "bg-white text-gray-800 border border-gray-200"
          }
          ${isUser ? "rounded-br-none" : "rounded-bl-none"}`}
        dangerouslySetInnerHTML={{ __html: formatText(text) }}
      />
    </div>
  );
}