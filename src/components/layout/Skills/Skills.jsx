import { useEffect, useRef, useState } from "react";
import { useScrollTrigger } from "../../common/Scroll/ScrollTriggerContext";
import SkillSquare from "./SkillSquare";
import webdevSkills from "/public/assets/data/webdevskills.json";
import otherSkills from "/public/assets/data/otherskills.json";
import { useLanguage } from "../../common/Language/LanguageContext";

const Skills = () => {
  const { isEnglish } = useLanguage();
  const { ScrollTrigger } = useScrollTrigger();
  const containerRef = useRef(null);
  const [triggered, setTriggered] = useState(false);

  function addSkill(
    key,
    percent,
    imgSrc,
    imgFullSrc,
    captionID,
    captionEN,
    gridStartPosition,
  ) {
    if (gridStartPosition === undefined || gridStartPosition === null) {
      gridStartPosition = "";
    }
    return (
      <SkillSquare
        key={key}
        start={triggered}
        percent={percent}
        imgSrc={`/assets/icons-tools-programming-language/${imgSrc}.avif`}
        imgFullSrc={`/assets/icons-tools-programming-language/${imgFullSrc}.avif`}
        captionID={captionID}
        captionEN={captionEN}
        // gridStartPosition={gridStartPosition}
      />
    );
  }

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current, // elemen yang memicu animasi
      start: "top 30%", // ketika top kontainer masuk 70% dari viewport
      once: true, // hanya jalankan sekali
      onEnter: () => {
        setTriggered(true); // memberi sinyal ke SkillCircle untuk mulai animasi
      },
      // scrub: 5,
      // markers: true,
      // pin: true,
    });

    return () => trigger.kill(); //hapus animasi
  }, [ScrollTrigger]);

  return (
    <>
      <section
        ref={containerRef}
        id="skills"
        className="relative w-full px-5 py-16 text-white bg-gray-900 md:px-10 md:py-20 font-pixel"
      >
        <p className="absolute text-sm bottom-5 right-5">
          *
          {isEnglish
            ? "Ring fullness indicates mastery"
            : "Semakin penuh lingkaran, semakin dikuasai"}
          ...
        </p>
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center w-full mb-5 sm:px-4 md:px-8">
            <p className="mb-3 text-3xl font-bold sm:text-4xl text-center min-[770px]:text-start ">
              {isEnglish ? "Skills" : "Keahlian"}
            </p>
            <p className="font-normal text-center">
              {isEnglish
                ? "Here are my skills, divided into two main categories, along with the software, applications, and programming languages that I have developed a solid level of proficiency in."
                : "Berikut Keahlian saya yang terbagi dua bagian dengan menyertai software, applikasi serta bahasa pemograman yang sudah saya rasa cukup kuasai"}
            </p>
          </div>
          <article className="flex flex-col justify-between min-[770px]:gap-3 py-5">
            <div className="flex flex-col items-center justify-center w-full mt-8 mb-8">
              <h2 className="mb-10 text-2xl font-semibold sm:text-3xl text-center min-[770px]:text-start">
                *{" "}
                {isEnglish
                  ? "Web Development Skill"
                  : "Keahlian Mengembangkan Website"}
              </h2>

              {/* circle tools/programming language */}
              <div className="grid w-full grid-cols-1 min-[200px]:grid-cols-2 xs:grid-cols-3 gap-8 xs:gap-2 min-[770px]:gap-8 lg:gap-4 min-[770px]:grid-cols-3 lg:grid-cols-4 ">
                {webdevSkills.map((data, index) =>
                  addSkill(
                    data + index,
                    data.percent,
                    data.imgSrc,
                    data.imgFullSrc,
                    data.captionID,
                    data.captionEN,
                    data.gridStartPosition,
                  ),
                )}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
              <h2 className="mb-10 text-2xl font-semibold sm:text-3xl text-center min-[770px]:text-start ">
                * {isEnglish ? "Other skills" : "Keahlian lainnya"}
              </h2>

              {/* circle other skills */}
              <div className="grid w-full grid-cols-1 min-[200px]:grid-cols-2 xs:grid-cols-3 gap-8 xs:gap-2 min-[770px]:gap-8 lg:gap-4 min-[770px]:grid-cols-3 lg:grid-cols-4 ">
                {otherSkills.map((data, index) =>
                  addSkill(
                    data + index,
                    data.percent,
                    data.imgSrc,
                    data.imgFullSrc,
                    data.captionID,
                    data.captionEN,
                    data.gridStartPosition,
                  ),
                )}
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Skills;
