import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const ScrollBackToTop = () => {
  const [isBottom, setIsBottom] = useState(false);

  function handleClickToHome() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      // Sudah sampai bawah
      if (windowHeight + scrollPosition >= pageHeight - 5) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Jalankan saat mount juga agar state benar
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`absolute flex items-center justify-center rounded-full w-14 h-14 right-3.5 ${
        isBottom ? "bottom-52 min-[320px]:bottom-20" : "bottom-1"
      } bg-gray-800/30 animate-bounce backdrop-blur-sm transition-all duration-500 ease-in-out  active:bg-gray-700/60 hover:bg-gray-700/60`}
      onClick={handleClickToHome}
    >
      <FontAwesomeIcon
        icon={faAngleUp}
        className="text-4xl text-center text-white"
      />
    </div>
  );
};

export default ScrollBackToTop;
