// src/App.jsx
import Header from "./components/layout/Header";
import HeroSection from "./components/layout/HeroSection";
import { useState } from "react";
import ViewResume from "./components/common/Modal/ViewResume";
import Skills from "./components/layout/Skills/Skills";
import { ImageFullViewProvider } from "./components/common/Modal/ImageFullViewContext";
import ImageFullView from "./components/common/Modal/ImageFullView";
import { ScrollTriggerProvider } from "./components/common/Scroll/ScrollTriggerContext";
import Footer from "./components/layout/Footer";
import { ActiveSectionProvider } from "./components/common/Effect/ActiveSectionContext";
import ScrollBackToTop from "./components/common/Scroll/ScrollBackToTop";
import Projects from "./components/layout/Projects";
import About from "./components/layout/About";

function App() {
  const [isOpenResume, setIsOpenResume] = useState(false);

  return (
    <>
      <ScrollTriggerProvider>
        <ImageFullViewProvider>
          <ActiveSectionProvider>
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
            <About />
            <Skills />
            <Projects />
            <ScrollBackToTop />
            <Footer
              isOpenResume={isOpenResume}
              setIsOpenResume={setIsOpenResume}
            />
            <ImageFullView />
          </ActiveSectionProvider>
        </ImageFullViewProvider>
      </ScrollTriggerProvider>
    </>
  );
}

export default App;
