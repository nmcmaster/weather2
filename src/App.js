import React, { useState } from "react";
import "./App.css";
import ZipEntry from "./components/ZipEntry";
import Forecast from './components/Forecast';

function App() {
  const [view, setView] = useState("ZipEntry");
  const [forecastZip, setForecastZip] = useState("");
  if (view === "ZipEntry") {
    return <ZipEntry setView={setView} setForecastZip={setForecastZip} />;
  }
  if (view === "forecast") {
    return <Forecast setView={setView} forecastZip={forecastZip} />;
  }
}

export default App;
