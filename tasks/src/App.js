import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainSection from "./components/MainSection";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function App() {
  return (
    <div>
      <MainSection />
    </div>
  );
}

export default App;
