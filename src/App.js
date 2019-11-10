import React, { useState } from "react";
import "./App.css";
import ZipEntry from "./components/ZipEntry";
import Forecast from './components/Forecast';

function App() {
  const [view, setView] = useState("ZipEntry");
  if (view === "ZipEntry") {
    return <ZipEntry setView={setView} />;
  }
  if (view === "forecast") {
    return <Forecast setView={setView} />;
  }
}

export default App;
