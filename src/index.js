import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Nikke from "./nikke";
import DPSDestroyers from "./dps_chart_dd";
import DPSLightCruisers from "./dps_chart_cl";
import DPSHeavyCruisers from "./dps_chart_ca";
import DPSAircraftCarriers from "./dps_chart_cv";
import DPSBattleshipsHE from "./dps_chart_bb_he";
import DPSBattleshipsAP from "./dps_chart_bb_ap";
import Research from "./research";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Navigate to="/nikke" />} />
        <Route path="nikke" element={<Nikke />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
