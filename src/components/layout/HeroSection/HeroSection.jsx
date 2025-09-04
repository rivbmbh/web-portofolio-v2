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
        className="px-4 pt-10 text-white min-h-[40vh] sm:pt-16 mb-14 pb-20 font-pixel"
      >
        <div className="container mx-auto sm:mx-0">
          <div className="flex flex-wrap items-center justify-between">
            <Personal isSmallScreen={isSmallScreen} />

            <Avatar />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
