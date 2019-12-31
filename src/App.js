import React, { useState } from "react";
import "./App.css";
import ZipEntry from "./components/ZipEntry";
import Forecast from './components/Forecast';
import backdrop1 from "./img/backdrop1.jpg";

function App() {
  const [view, setView] = useState("forecast"); // remember to set back to zip entry
  const [forecastZip, setForecastZip] = useState("");
  let content;

  if (view === "ZipEntry") {
    content = <ZipEntry setView={setView} setForecastZip={setForecastZip} />;
  }
  if (view === "forecast") {
    content = <Forecast setView={setView} forecastZip={forecastZip} />;
  }
  return <div id="bodyDiv" style={{backgroundImage: backdrop1, backgroundSize: "cover"}}>{content}</div>
}

export default App;
