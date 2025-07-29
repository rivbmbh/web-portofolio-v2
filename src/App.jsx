// src/App.jsx
import Header from "./components/layout/Header";
import HeroSection from "./components/layout/HeroSection";
import { useState } from "react";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import ViewResume from "./components/common/Modal/ViewResume";
import Skills from "./components/layout/Skills/Skills";
import { ImageFullViewProvider } from "./components/common/Modal/ImageFullViewContext";
import ImageFullView from "./components/common/Modal/ImageFullView";

function App() {
  const [isOpenResume, setIsOpenResume] = useState(false);
  // const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <>
      <ImageFullViewProvider>
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
        <ImageFullView />
      </ImageFullViewProvider>
    </>
  );
}

export default App;
