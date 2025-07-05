import { useState } from "react";
import { hamburgerLine } from "../../../js";

const Header = () => {
  const [isOpenNavMenu, setIsOpenNavMenu] = useState(false);

  function handleOpenNavMenu() {
    setIsOpenNavMenu((prev) => !prev);
  }

  return (
    <>
      <header className={`sticky top-0 z-50 dark:bg-amber-600`}>
        <div
          className={`flex justify-between items-center px-2 py-5 font-roboto-flex`}
        >
          <div className={`text-3xl font-bold text-white`}>
            <span>NAME</span>
          </div>

          {/* nav dekstop */}
          <nav className={`hidden md:flex justify-center gap-8 text-base`}>
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

          {/* hamburger button (mobile) */}
          <div className={`md:hidden`}>
            <button onClick={handleOpenNavMenu}>
              <span
                className={` ${hamburgerLine()} ${
                  isOpenNavMenu ? "origin-top-left rotate-45" : ""
                }`}
              ></span>
              <span
                className={` ${hamburgerLine()} ${
                  isOpenNavMenu ? "scale-0" : ""
                }`}
              ></span>
              <span
                className={` ${hamburgerLine()} ${
                  isOpenNavMenu ? "origin-bottom-left -rotate-45" : ""
                }`}
              ></span>
            </button>
          </div>

          {/* nav menu mobile */}
        </div>
      </header>
    </>
  );
};

export default Header;
