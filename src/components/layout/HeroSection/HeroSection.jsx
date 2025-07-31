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
      <section id="home" className="w-full px-4 text-white pb-14 font-pixel">
        <div className="flex flex-col-reverse items-center justify-center gap-10 mt-10 sm:flex-row sm:justify-between">
          <div className="w-full px-8 sm:px-0 sm:w-1/2">
            {/* floting chat */}
            <FloatingMessage />
            <Introduce />
            <Profession />

            <div className="flex flex-wrap w-full gap-5 mt-14 ">
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
          <Avatar />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
