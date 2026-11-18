import { useLanguage } from "./LanguageContext";

const ChooseLanguage = () => {
  const { isEnglish, handleChangeLanguage } = useLanguage();

  return (
    <div className="flex gap-1.5 text-white border border-slate-400">
      <p
        onClick={handleChangeLanguage}
        className={`${isEnglish ? "" : "bg-emerald-700 backdrop-blur-sm shadow-md text-slate-900"} cursor-pointer hover:underline px-1 transition-all duration-300 ease-in-out`}
      >
        ID
      </p>
      <p>|</p>
      <p
        onClick={handleChangeLanguage}
        className={`${isEnglish ? "bg-emerald-700 backdrop-blur-sm shadow-md text-slate-900" : ""} px-1 transition-all duration-300 ease-in-out cursor-pointer hover:underline`}
      >
        EN
      </p>
    </div>
  );
};

export default ChooseLanguage;
