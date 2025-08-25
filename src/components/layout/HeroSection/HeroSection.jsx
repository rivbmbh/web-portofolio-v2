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
        className="px-5 pt-10 mt-10 text-white mb-14 pb-14 sm:px-10 font-pixel"
      >
        <div className="container mx-auto sm:mx-0">
          <div className="flex flex-wrap items-center justify-center">
            <div className="self-center w-full px-4 lg:w-1/2">
              <FloatingMessage />
              <Introduce />
              <Profession />

              <div className="flex flex-wrap self-center w-full gap-5 mt-14">
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
        </div>
      </section>
    </>
  );
};

export default HeroSection;
