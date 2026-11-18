import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [isEnglish, setIsEnglish] = useState(false);
  function handleChangeLanguage() {
    setIsEnglish((prev) => !prev);
  }
  return (
    <LanguageContext.Provider value={{ isEnglish, handleChangeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
