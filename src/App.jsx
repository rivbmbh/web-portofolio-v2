import { useState, lazy, Suspense } from "react";
import Header from "./components/layout/Header";
import HeroSection from "./components/layout/HeroSection";
import Skills from "./components/layout/Skills/Skills";
import { ImageFullViewProvider } from "./components/common/Modal/ImageFullViewContext";
import ImageFullView from "./components/common/Modal/ImageFullView";
import { ScrollTriggerProvider } from "./components/common/Scroll/ScrollTriggerContext";
import Footer from "./components/layout/Footer";
import { ActiveSectionProvider } from "./components/common/Effect/ActiveSectionContext";
import ScrollBackToTop from "./components/common/Scroll/ScrollBackToTop";
import Projects from "./components/layout/Projects";
import About from "./components/layout/About";
import Certificates from "./components/layout/Certificates";
import { LanguageProvider } from "./components/common/Language/LanguageContext";

const ViewResume = lazy(() => import("./components/common/Modal/ViewResume"));

function App() {
  const [isOpenResume, setIsOpenResume] = useState(false);

  return (
    <>
      <ScrollTriggerProvider>
        <ImageFullViewProvider>
          <ActiveSectionProvider>
            <LanguageProvider>
              <Header
                isOpenResume={isOpenResume}
                setIsOpenResume={setIsOpenResume}
              />

              {/* Resume (Lazy loaded only on click) */}
              {isOpenResume && (
                <Suspense fallback={null}>
                  <ViewResume
                    isOpenResume={isOpenResume}
                    setIsOpenResume={setIsOpenResume}
                  />
                </Suspense>
              )}

              <HeroSection />
              <About />
              <Certificates />
              <Skills />
              <Projects />
              <ScrollBackToTop />
              <Footer
                isOpenResume={isOpenResume}
                setIsOpenResume={setIsOpenResume}
              />
              <ImageFullView />
            </LanguageProvider>
          </ActiveSectionProvider>
        </ImageFullViewProvider>
      </ScrollTriggerProvider>
    </>
  );
}

export default App;
