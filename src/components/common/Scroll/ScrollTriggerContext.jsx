import { createContext, useContext, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerContext = createContext();

export const ScrollTriggerProvider = ({ children }) => {
  useEffect(() => {
    ScrollTrigger.defaults({
      /*    
      saat scroll masuk -> animasi play
      saat scroll keluar -> animasi pause
      saat masuk lagi -> resume
      saat keluar sepenuhnya -> reset 
      */
      toggleActions: "play pause resume reset",
    });

    return () => {
      ScrollTrigger.killAll(); //menghentikan dan membersihkan semua trigger untuk mencegah memory leaks.
    };
  }, []);

  return (
    <ScrollTriggerContext.Provider value={{ gsap, ScrollTrigger }}>
      {children}
    </ScrollTriggerContext.Provider>
  );
};

//custom hook
export const useScrollTrigger = () => useContext(ScrollTriggerContext);
