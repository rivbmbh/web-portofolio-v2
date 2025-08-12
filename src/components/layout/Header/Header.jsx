import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ButtonResume from "../../common/Button/ButtonResume";
import NavMobile from "./NavMobile";
import NavDekstop from "./NavDekstop";

// import { motion } from "motion";

const Header = ({ isOpenResume, setIsOpenResume }) => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY <= 10); // Ubah sesuai kebutuhan (bisa 0–20px)
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky max-w-full w-full top-0 z-50 px-6 ${
          isTop ? "bg-transparent" : "bg-gray-700/50 backdrop-blur-sm shadow-md"
        } transition-all duration-500`}
      >
        <div className={`flex justify-between items-center py-3 font-pixel `}>
          <div className={`text-4xl font-bold text-primary`}>
            <a href="#" className="block">
              RAB
            </a>
          </div>

          <NavDekstop
            isOpenResume={isOpenResume}
            setIsOpenResume={setIsOpenResume}
          />

          <NavMobile
            isOpenResume={isOpenResume}
            setIsOpenResume={setIsOpenResume}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
