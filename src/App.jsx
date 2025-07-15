// src/App.jsx
import React from "react";
import Header from "./components/layout/Header";
import LandingPage from "./components/layout/HeroSection";
import HeroSection from "./components/layout/HeroSection";
import { useState } from "react";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Viewer, Worker } from "@react-pdf-viewer/core";

function App() {
  const [isOpenResume, setIsOpenResume] = useState(false);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <>
      {isOpenResume && (
        <div
          className="absolute left-0 right-0 z-10 top-5"
          onClick={setIsOpenResume}
        >
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer
              fileUrl="/assets/cv_rab_2024.pdf"
              plugins={[]}
              className="w-32"
            />
          </Worker>
        </div>
      )}
      <Header isOpenResume={isOpenResume} setIsOpenResume={setIsOpenResume} />
      <HeroSection />
    </>
  );
}

export default App;
