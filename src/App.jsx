import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Loans from "./pages/Loans";
import Healthcare from "./pages/Healthcare";

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/healthcare" element={<Healthcare />} />
      </Routes>
    </Router>
  );
}

export default App;