import { useState } from "react";
import { effectNav, hamburgerLine } from "../../../js/style";
import { useActiveSection } from "../../common/Effect/ActiveSectionContext";
import { motion, AnimatePresence } from "framer-motion";
import ButtonResume from "../../common/Button/ButtonResume";
import useScrollTo from "../../common/Hooks/useScrollTo";
import ChooseLanguage from "../../common/Language/ChooseLanguage";
import { useLanguage } from "../../common/Language/LanguageContext";

const NavMobile = ({ isOpenResume, setIsOpenResume }) => {
  const { isEnglish } = useLanguage();
  const sectionEN = ["home", "about", "certificates", "skills", "projects"];
  const sectionID = [
    "beranda",
    "tentang saya",
    "sertifikasi",
    "Keahlian",
    "proyek",
  ];
  const sections = isEnglish ? sectionEN : sectionID;
  const activeSection = useActiveSection();
  const [isOpenNavMenu, setIsOpenNavMenu] = useState(false);
  const scrollTo = useScrollTo(70);

  function handleOpenNavMenu() {
    setIsOpenNavMenu((prev) => !prev);
  }

  return (
    <div className="relative mt-1 md:hidden md:mt-0">
      <div className="flex items-center justify-center gap-5">
        <ChooseLanguage />
        {/* hamburger button (mobile) */}
        <button
          type="button"
          aria-label="Buka navigasi menu"
          aria-expanded={isOpenNavMenu}
          className="p-1 bg-transparent border-none cursor-pointer focus:outline-none"
          onClick={handleOpenNavMenu}
        >
          <span
            className={`${hamburgerLine()} ${
              isOpenNavMenu ? "origin-top-left rotate-45" : ""
            }`}
          ></span>
          <span
            className={`${hamburgerLine()} ${isOpenNavMenu ? "scale-0" : ""}`}
          ></span>
          <span
            className={`${hamburgerLine()} ${
              isOpenNavMenu ? "origin-bottom-left -rotate-45" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* nav menu mobile */}
      <AnimatePresence>
        {isOpenNavMenu && (
          <motion.nav
            key="mobile-nav"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            aria-label="Navigasi Menu Mobile"
            className="bg-gray-700/50 backdrop-blur-sm shadow-md absolute right-0 top-[59px] flex flex-col gap-y-4 w-44 py-6 px-4 items-stretch text-md text-white"
          >
            {sections.map((section, index) => (
              <a
                key={sectionEN[index]}
                href={`#${sectionEN[index]}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(sectionEN[index]);
                  setIsOpenNavMenu(false);
                }}
                className={`w-full capitalize text-start cursor-pointer ${effectNav(
                  {
                    active: activeSection === sectionEN[index],
                  },
                )}`}
              >
                {section}
              </a>
            ))}
            <div className="w-full max-w-full border-b border-gray-600"></div>
            <ButtonResume
              name="Resume"
              onClick={() => {
                setIsOpenResume(!isOpenResume);
                setIsOpenNavMenu(false);
              }}
            />
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMobile;
