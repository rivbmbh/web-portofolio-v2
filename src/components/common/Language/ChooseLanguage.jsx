import { useLanguage } from "./LanguageContext";

const ChooseLanguage = () => {
  const { isEnglish, setLanguage } = useLanguage();

  return (
    <div className="flex gap-1.5 text-white border border-slate-400">
      <button
        type="button"
        aria-label="Ganti bahasa ke Indonesia"
        onClick={() => setLanguage("id")}
        className={`${isEnglish ? "" : "bg-emerald-700 backdrop-blur-sm shadow-md text-slate-900"} cursor-pointer hover:underline px-1 transition-all duration-300 ease-in-out`}
      >
        ID
      </button>
      <span className="self-center">|</span>
      <button
        type="button"
        aria-label="Switch language to English"
        onClick={() => setLanguage("en")}
        className={`${isEnglish ? "bg-emerald-700 backdrop-blur-sm shadow-md text-slate-900" : ""} px-1 transition-all duration-300 ease-in-out cursor-pointer hover:underline`}
      >
        EN
      </button >
    </div >
  );
};

export default ChooseLanguage;
