import React, { useState } from "react";
import "./App.css";
import ZipEntry from "./components/ZipEntry";

function App() {
  const [view, setView] = useState("ZipEntry");
  if (view === "ZipEntry") {
    return <ZipEntry />;
  }
}

export default App;
