import "./css/template.css";
import "./css/research.css";
import "./css/dpstable.css";
import Header from "./header";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Nikke from "./nikke";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/nikke" />} />
        <Route path="/nikke" element={<Nikke />} />
      </Routes>
    </div>
  );
}

export default App;