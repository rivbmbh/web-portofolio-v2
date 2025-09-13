import { useEffect, useRef, useState } from "react";
import { useScrollTrigger } from "../../common/Scroll/ScrollTriggerContext";
import SkillCircle from "./SkillCircle";
import webdevSkills from "/public/assets/data/webdevskills.json";
import otherSkills from "/public/assets/data/otherskills.json";

const Skills = () => {
  const { ScrollTrigger } = useScrollTrigger();
  const containerRef = useRef(null);
  const [triggered, setTriggered] = useState(false);

  function addSkill(
    key,
    percent,
    imgSrc,
    imgFullSrc,
    caption,
    gridStartPosition
  ) {
    if (gridStartPosition === undefined || gridStartPosition === null) {
      gridStartPosition = "";
    }
    return (
      <SkillCircle
        key={key}
        start={triggered}
        percent={percent}
        imgSrc={`/assets/img/${imgSrc}.webp`}
        imgFullSrc={`/assets/img/${imgFullSrc}.webp`}
        caption={caption}
        gridStartPosition={gridStartPosition}
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
        className="w-full gap-10 px-2 mt-5 mb-20 text-white font-pixel"
      >
        <div className="container mx-auto">
          <article className="flex flex-col justify-between min-[770px]:gap-2 min-[770px]:flex-row">
            <div className="flex flex-col items-center justify-center w-full min-[770px]:w-1/2">
              <h2 className="mb-10 text-3xl font-semibold sm:text-4xl text-center min-[770px]:text-start">
                Web developer skills
              </h2>

              {/* circle tools/programming language */}
              <div className="grid w-full grid-cols-1 min-[200px]:grid-cols-2 xs:grid-cols-3 gap-8 xs:gap-2 min-[770px]:gap-8 lg:gap-4 min-[770px]:grid-cols-3 lg:grid-cols-4">
                {webdevSkills.map((data, index) =>
                  addSkill(
                    data + index,
                    data.percent,
                    data.imgSrc,
                    data.imgFullSrc,
                    data.caption,
                    data.gridStartPosition
                  )
                )}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full min-[770px]:w-1/2">
              <h2 className="mb-10 text-3xl font-semibold sm:text-4xl text-center min-[770px]:text-start">
                Other skills and tools
              </h2>

              {/* circle other skills */}
              <div className="grid w-full grid-cols-1 min-[200px]:grid-cols-2 xs:grid-cols-3 gap-8 xs:gap-2 min-[770px]:gap-8 lg:gap-4 min-[770px]:grid-cols-3 lg:grid-cols-4">
                {otherSkills.map((data, index) =>
                  addSkill(
                    data + index,
                    data.percent,
                    data.imgSrc,
                    data.imgFullSrc,
                    data.caption,
                    data.gridStartPosition
                  )
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
