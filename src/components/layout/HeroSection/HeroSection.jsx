import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
// import { iconSosmed } from "../../../js/style";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import ButtonConnect from "../../common/Button/";
import { useEffect, useState } from "react";

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
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex items-center justify-center text-base mb-3 bg-gray-400 py-1.5 px-2 rounded-sm relative w-max -rotate-12"
            >
              <div
                className="absolute right-2 -bottom-1.5 w-0 h-0 
            border-l-[9px] border-r-[9px] border-t-[9px] 
            border-l-transparent border-r-transparent 
            border-t-gray-400"
              ></div>
              <p className="text-base">It's me</p>
            </motion.div>
            {/* introduce */}
            <div className="w-full my-4 text-5xl font-bold xs:my-2">
              <p>Rivaldo</p>
              <div className="items-center xs:text-end xs:flex xs:gap-4">
                <p>Angelo </p>
                <p>Bomboah</p>
              </div>
            </div>
            {/* profesion */}
            <div>
              <p className="text-base">I'm a...</p>
              <TypeAnimation
                sequence={[
                  "Web Devoloper", // Word 'One'
                  1000, // Waits 1s
                  "Graphic Design", // Word two
                  1500,
                  "and",
                  700,
                  "Digital Cartographer.",
                  1500,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-xl font-bold md:text-2xl text-amber-300"
              />
            </div>

            <div className="flex flex-wrap w-full gap-5 mt-10 ">
              <motion.div
                animate={
                  isSmallScreen
                    ? { y: [0, 10, 0] } // jika layar kecil, gerakan vertikal
                    : { x: [0, 10, 0] } // jika normal, gerakan horizontal
                }
                transition={{
                  duration: 1.8, // durasi satu siklus
                  repeat: Infinity, // loop terus-menerus
                  ease: "easeInOut",
                }}
              >
                <FontAwesomeIcon
                  icon={faHandPointRight}
                  className="text-xl text-orange-200 max-[230px]:rotate-90"
                />
              </motion.div>
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
