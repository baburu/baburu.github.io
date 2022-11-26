import "./css/template.css";
import "./css/research.css";
import "./css/dpstable.css";
import Header from "./header";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Nikke from "./nikke";
import DPSChartDD from "./dps_chart_dd";
import DPSChartBBAP from "./dps_chart_bb_ap";
import DPSChartCL from "./dps_chart_cl";
import DPSChartCA from "./dps_chart_ca";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/nikke" />} />
        <Route path="/nikke" element={<Nikke />} />
        <Route path="/dps_chart_dd" element={<DPSChartDD />} />
        <Route path="/dps_chart_bb_ap" element={<DPSChartBBAP />} />
        <Route path="/dps_chart_cl" element={<DPSChartCL />} />
        <Route path="/dps_chart_ca" element={<DPSChartCA />} />
      </Routes>
    </div>
  );
}

export default App;