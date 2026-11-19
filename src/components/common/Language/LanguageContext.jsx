import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [isEnglish, setIsEnglish] = useState(true);

  useEffect(() => {
    document.documentElement.lang = isEnglish ? "en" : "id";
  }, [isEnglish]);

  function handleChangeLanguage() {
    setIsEnglish((prev) => !prev);
  }

  function setLanguage(lang) {
    setIsEnglish(lang === "en");
  }

  return (
    <LanguageContext.Provider
      value={{ isEnglish, handleChangeLanguage, setLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);
