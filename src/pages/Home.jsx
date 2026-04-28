import React from "react";
import ModuleCard from "../components/ModuleCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 text-white px-4 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="text-5xl mb-3">🇮🇳</div>
        <h1 className="text-4xl font-bold tracking-tight">NitiAI</h1>
        <p className="text-blue-200 mt-2 text-sm">
          Your AI partner for Jobs, Loans & Healthcare
        </p>
        <p className="text-blue-300 text-xs mt-1">नौकरी · कर्ज · स्वास्थ्य</p>
      </div>

      {/* Cards */}
      <div className="max-w-md mx-auto space-y-4">
        <ModuleCard
          title="Jobs / नौकरी"
          subtitle="Resume building, job matching, interview prep"
          emoji="💼"
          route="/jobs"
          bgColor="bg-blue-700 hover:bg-blue-600"
        />
        <ModuleCard
          title="Loans / ऋण"
          subtitle="Mudra, SVANidhi, NABARD and more schemes"
          emoji="💰"
          route="/loans"
          bgColor="bg-green-800 hover:bg-green-700"
        />
        <ModuleCard
          title="Healthcare / स्वास्थ्य"
          subtitle="Symptoms, doctors, Ayushman Bharat card"
          emoji="🏥"
          route="/healthcare"
          bgColor="bg-red-800 hover:bg-red-700"
        />
      </div>

      {/* Footer */}
      <p className="text-center text-blue-400 text-xs mt-10">
        Built with Gemini AI · Google Solution Challenge 2026
      </p>
    </div>
  );
}