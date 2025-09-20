import { useState } from "react";
import { effectNav, hamburgerLine } from "../../../js/style";
import { useActiveSection } from "../../common/Effect/ActiveSectionContext";
import { motion, AnimatePresence } from "framer-motion";
import ButtonResume from "../../common/Button/ButtonResume";
import useScrollTo from "../../common/Hooks/useScrollTo";

const NavMobile = ({ isOpenResume, setIsOpenResume }) => {
  const sections = ["home", "about", "skills", "projects"];
  const activeSection = useActiveSection();
  const [isOpenNavMenu, setIsOpenNavMenu] = useState(false);
  const scrollTo = useScrollTo(70);

  function handleOpenNavMenu() {
    setIsOpenNavMenu((prev) => !prev);
  }

  return (
    <>
      {/* mobile screen */}
      <div className={`md:hidden relative mt-1 mt:mt-0`}>
        {/* hamburger button (mobile) */}
        <div onClick={handleOpenNavMenu}>
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
              className={` bg-gray-700/50 backdrop-blur-sm shadow-md absolute right-0 top-[59px] flex flex-col gap-y-4 w-44 py-6 px-4 items-stretch text-md text-white`}
            >
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollTo(section)}
                  className={`w-full capitalize text-start ${effectNav({
                    active: activeSection === section,
                  })}`}
                >
                  {section}
                </button>
              ))}
              <div className="w-full max-w-full border-b border-gray-600"></div>
              <ButtonResume
                name="Resume"
                onClick={() => setIsOpenResume(!isOpenResume)}
              />
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default NavMobile;
