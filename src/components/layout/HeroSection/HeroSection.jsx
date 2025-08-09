import ButtonConnect from "../../common/Button/ButtonConnect";
import { useEffect, useState } from "react";
import Profession from "./Profession";
import Introduce from "./Introduce";
import FloatingMessage from "./FloatingMessage";
import HandPoint from "./HandPoint";
import Avatar from "./Avatar";

const HeroSection = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkWidthScreen = () => {
      setIsSmallScreen(window.innerWidth <= 230);
    };

    //check load, menjalankan fungsi langsung saat komponen pertama kali dirender,
    checkWidthScreen();

    //resize, setiap kali pengguna mengubah ukuran jendela (resize), checkScreen dijalankan ulang
    window.addEventListener("resize", checkWidthScreen);

    // Menghapus event listener ketika tidak digunakan agar tidak membebani memori atau menyebabkan bug
    return () => window.removeEventListener("resize", checkWidthScreen);
  }, []);

  return (
    <>
      <section
        id="home"
        className="w-full py-5 mb-10 sm:mb-20 text-white min-h-[80vh] h-max sm:m-0 sm:px-10 font-pixel"
      >
        <div className="flex flex-wrap justify-center w-full gap-10 mt-10">
          <div className="flex-1 items-center min-w-[300px] max-w-[500px] sm:min-w-full sm:max-w-full lg:min-w-[300px] lg:max-w-[500px] px-8 sm:px-0">
            <FloatingMessage />
            <Introduce />
            <Profession />

            <div className="flex flex-wrap w-full gap-5 mt-14">
              <HandPoint isSmallScreen={isSmallScreen} />
              <ButtonConnect
                url="#"
                name="Let's Connect"
                effect="active:scale-105 active:-rotate-3 transition-all ease-in-out duration-200 active:bg-emerald-700 hover:bg-emerald-700"
              />
            </div>
          </div>

          <Avatar />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
