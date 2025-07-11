import ButtonConnect from "../../common/Button/";
import { useEffect, useState } from "react";
import Profession from "./Profession";
import Introduce from "./Introduce";
import FloatingMessage from "./FloatingMessage";
import HandPoint from "./HandPoint";

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
      <section className="w-full text-white pb-44 font-pixel">
        <div className="flex flex-col gap-10 mt-10 md:flex-row md:justify-between">
          <div className="w-full md:w-1/2">
            {/* floting chat */}
            <FloatingMessage />
            <Introduce />
            <Profession />

            <div className="flex flex-wrap w-full gap-5 mt-10 ">
              <HandPoint isSmallScreen={isSmallScreen} />
              <ButtonConnect
                url="#"
                name="Let's Connect"
                effect={`active:scale-105 active:-rotate-3 transition-all ease-in-out duration-200 active:bg-emerald-700 hover:bg-emerald-700`}
              />
            </div>
            {/* account social media */}
            {/* 
              <div className="mt-7">
                <ul className="flex items-center gap-4">
                  <li>
                    <a href="#" className="group">
                      <FontAwesomeIcon icon={faGithub} className={iconSosmed()} />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className={iconSosmed()}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className={iconSosmed()}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group">
                      <FontAwesomeIcon
                        icon={faXTwitter}
                        className={iconSosmed()}
                      />
                    </a>
                  </li>
                </ul>
                  <p className="text-base">
                    Let’s stay in touch beyond this portfolio. I share more of my
                    creative process, daily insights, and little moments that shape
                    my work on social media. Feel free to follow along and say
                    hello!
                  </p>
              </div> 
            */}
          </div>

          {/* my avatar */}
          <div>
            <h1>Avatar</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
