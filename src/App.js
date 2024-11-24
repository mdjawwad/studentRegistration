import React from "react";
import { Routes, Route } from "react-router-dom";
import LogIn from "./components/login/LogIn";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
