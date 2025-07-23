// src/App.jsx
import Header from "./components/layout/Header";
import HeroSection from "./components/layout/HeroSection";
import { useState } from "react";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import ViewResume from "./components/common/Modal/ViewResume";
import Skills from "./components/layout/Skills/Skills";

function App() {
  const [isOpenResume, setIsOpenResume] = useState(false);
  // const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <>
      <Header isOpenResume={isOpenResume} setIsOpenResume={setIsOpenResume} />

      {/* Resume */}
      {isOpenResume && (
        <ViewResume
          isOpenResume={isOpenResume}
          setIsOpenResume={setIsOpenResume}
        />
      )}

      <HeroSection />
      <Skills />
    </>
  );
}

export default App;
