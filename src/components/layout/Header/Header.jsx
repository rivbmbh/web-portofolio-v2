import { useState } from "react";
import { hamburgerLine } from "../../../js";
import { motion, AnimatePresence } from "framer-motion";
// import { motion } from "motion";

const Header = () => {
  const [isOpenNavMenu, setIsOpenNavMenu] = useState(false);

  function handleOpenNavMenu() {
    setIsOpenNavMenu((prev) => !prev);
  }

  return (
    <>
      <header className={`sticky top-0 z-50 bg-transparent`}>
        <div
          className={`flex justify-between items-center py-4 md:py-5 font-roboto-flex`}
        >
          <div className={`text-3xl font-bold text-emerald-800`}>
            <span>LOGO</span>
          </div>

          {/* nav dekstop */}
          <nav
            className={`hidden md:flex justify-center gap-8 text-sm text-white`}
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
          </nav>

          {/* mobile screen */}
          <div className={`md:hidden relative mt-1`}>
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
                  className={`bg-amber-200 absolute right-1 top-10 flex flex-col gap-5 w-36 p-5 text-sm rounded-md shadow`}
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
