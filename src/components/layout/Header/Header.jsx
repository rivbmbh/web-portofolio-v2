import { useEffect, useState } from "react";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";

const Header = ({ isOpenResume, setIsOpenResume }) => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY <= 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
          <header
            className={`sticky max-w-full w-full top-0 z-50 px-6 ${isTop ? "bg-transparent" : "bg-gray-700/50 backdrop-blur-sm shadow-md"
              } transition-all duration-500`}
          >
            <div className="flex justify-between items-center py-3 font-pixel">
              <div className="text-4xl font-bold text-primary">
                <a
                  href="#home"
                  aria-label="Kembali ke beranda Rivaldo Angelo Bomboah"
                  className="block"
                >
                  RAB
                </a>
              </div>

              <NavDesktop
                isOpenResume={isOpenResume}
                setIsOpenResume={setIsOpenResume}
              />

        <NavMobile
          isOpenResume={isOpenResume}
          setIsOpenResume={setIsOpenResume}
        />
      </div>
    </header >
  );
};

export default Header;
