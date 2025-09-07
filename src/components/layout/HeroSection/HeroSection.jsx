import { useEffect, useState } from "react";

import Avatar from "./Avatar";
import Personal from "./Personal";

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
        className={`text-white pt-14 sm:pt-16 md:pt-20 pb-24 font-pixel 
         min-h-[40vh]`}
      >
        <div className="container mx-auto sm:mx-0">
          <div className="flex flex-wrap items-center justify-between gap-5 sm:gap-0">
            <Personal isSmallScreen={isSmallScreen} />

            <Avatar />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
