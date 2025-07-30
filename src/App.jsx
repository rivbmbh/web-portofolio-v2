// src/App.jsx
import Header from "./components/layout/Header";
import HeroSection from "./components/layout/HeroSection";
import { useState } from "react";
import ViewResume from "./components/common/Modal/ViewResume";
import Skills from "./components/layout/Skills/Skills";
import { ImageFullViewProvider } from "./components/common/Modal/ImageFullViewContext";
import ImageFullView from "./components/common/Modal/ImageFullView";
import { ScrollTriggerProvider } from "./components/common/Scroll/ScrollTriggerContext";

function App() {
  const [isOpenResume, setIsOpenResume] = useState(false);

  return (
    <>
      <ScrollTriggerProvider>
        <ImageFullViewProvider>
          <Header
            isOpenResume={isOpenResume}
            setIsOpenResume={setIsOpenResume}
          />

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
      </ScrollTriggerProvider>
    </>
  );
}

export default App;
