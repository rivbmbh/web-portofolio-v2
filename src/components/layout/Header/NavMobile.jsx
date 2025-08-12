import { useState } from "react";
import { effectNav, hamburgerLine } from "../../../js/style";
import { useActiveSection } from "../../common/Effect/ActiveSectionContext";
import { motion, AnimatePresence } from "framer-motion";
import ButtonResume from "../../common/Button/ButtonResume";

const NavMobile = ({ isOpenResume, setIsOpenResume }) => {
  const activeSection = useActiveSection();
  const [isOpenNavMenu, setIsOpenNavMenu] = useState(false);
  function handleOpenNavMenu() {
    setIsOpenNavMenu((prev) => !prev);
  }
  //   console.info(isOpenResume);
  return (
    <>
      {/* mobile screen */}
      <div className={`md:hidden relative mt-1 mt:mt-0`}>
        {/* hamburger button (mobile) */}
        <button onClick={handleOpenNavMenu}>
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

        {/* nav menu mobile */}
        <AnimatePresence>
          {isOpenNavMenu && (
            <motion.nav
              key="mobile-nav"
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className={` bg-gray-700/50 backdrop-blur-sm shadow-md absolute right-0 top-[59px] flex flex-col gap-y-2.5 w-44 py-6 px-4 items-stretch text-md text-white`}
            >
              <a
                href="#home"
                className={`w-full ${effectNav({
                  active: activeSection === "home",
                })}`}
              >
                Home
              </a>
              <a
                href="#about"
                className={`w-full ${effectNav({
                  active: activeSection === "about",
                })}`}
              >
                About
              </a>
              <a
                href="#skills"
                className={`w-full ${effectNav({
                  active: activeSection === "skills",
                })}`}
              >
                Skills
              </a>
              <a
                href="#"
                className={`w-full ${effectNav({
                  active: activeSection === "projects",
                })}`}
              >
                Projects
              </a>
              <a
                href="#"
                className={`w-full ${effectNav({
                  active: activeSection === "contact",
                })}`}
              >
                Contact
              </a>
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
