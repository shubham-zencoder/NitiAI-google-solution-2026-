const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
const GEMINI_MODEL = process.env.REACT_APP_GEMINI_MODEL || "gemini-2.5-flash-lite";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

export async function askGemini(userMessage, systemPrompt, conversationHistory = []) {
  if (!GEMINI_API_KEY || GEMINI_API_KEY === "your_gemini_api_key_here") {
    return {
      text: "Gemini API key is not configured yet. Add a valid REACT_APP_GEMINI_API_KEY to .env, restart the app, and try again.",
      history: conversationHistory
    };
  }

  const contents = [
    ...conversationHistory,
    {
      role: "user",
      parts: [{ text: userMessage }]
    }
  ];

  const body = {
    contents,
    systemInstruction: {
      parts: [{ text: systemPrompt }]
    },
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 800,
    }
  };

  try {
    const response = await fetch(GEMINI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Gemini API error: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!replyText) throw new Error("Empty response from Gemini");

    return {
      text: replyText,
      history: [
        ...conversationHistory,
        { role: "user", parts: [{ text: userMessage }] },
        { role: "model", parts: [{ text: replyText }] }
      ]
    };
  } catch (error) {
    console.error("Gemini error:", error);
    return {
      text: "Gemini request failed. Check your API key, Google AI Studio access, and network connection.",
      history: conversationHistory
    };
  }
}