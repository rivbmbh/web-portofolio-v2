import { useState } from "react";
import { hamburgerLine } from "../../../js/style";
import { motion, AnimatePresence } from "framer-motion";
import ButtonResume from "../../common/Button/ButtonResume";

// import { motion } from "motion";

const Header = ({ isOpenResume, setIsOpenResume }) => {
  const [isOpenNavMenu, setIsOpenNavMenu] = useState(false);

  function handleOpenNavMenu() {
    setIsOpenNavMenu((prev) => !prev);
  }

  return (
    <>
      <header className={`sticky top-0 z-50 bg-transparent`}>
        <div
          className={`flex justify-between items-center py-4 md:py-5 font-pixel`}
        >
          <div className={`text-4xl font-bold text-emerald-800`}>
            <a href="#" className="block">
              RAB
            </a>
          </div>

          {/* nav dekstop */}
          <nav
            className={`hidden md:flex justify-center items-center gap-8 text-md text-white`}
          >
            <a href="#" className={`hover:underline`}>
              Home
            </a>
            <a href="#skills" className={`hover:underline`}>
              About
            </a>
            <a href="#skills" className={`hover:underline`}>
              Skills
            </a>
            <a href="#" className={`hover:underline`}>
              Projects
            </a>
            <a href="#" className={`hover:underline`}>
              Contact
            </a>
            <ButtonResume
              name="Resume"
              onClick={() => setIsOpenResume(!isOpenResume)}
            />
          </nav>

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
                className={`${hamburgerLine()} ${
                  isOpenNavMenu ? "scale-0" : ""
                }`}
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
                  className={`bg-white/40 backdrop-blur-sm absolute right-1 top-10 flex flex-col gap-4 w-44 p-6 items-stretch text-md rounded-md shadow`}
                >
                  <a href="#" className={`hover:underline`}>
                    Home
                  </a>
                  <a href="#" className={`hover:underline`}>
                    Skills
                  </a>
                  <a href="#" className={`hover:underline`}>
                    Projects
                  </a>
                  <a href="#" className={`hover:underline`}>
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
        </div>
      </header>
    </>
  );
};

export default Header;
