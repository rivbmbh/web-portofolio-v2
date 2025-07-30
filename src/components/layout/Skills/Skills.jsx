import { useEffect, useRef, useState } from "react";
import { useScrollTrigger } from "../../common/Scroll/ScrollTriggerContext";
import SkillCircle from "./SkillCircle";

const Skills = () => {
  const { ScrollTrigger } = useScrollTrigger();
  const containerRef = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current, // elemen yang memicu animasi
      start: "top 30%", // ketika top kontainer masuk 70% dari viewport
      once: true, // hanya jalankan sekali
      onEnter: () => {
        setTriggered(true); // memberi sinyal ke SkillCircle untuk mulai animasi
      },
    });

    return () => trigger.kill(); //hapus animasi
  }, [ScrollTrigger]);

  return (
    <>
      <section
        ref={containerRef}
        id="skills"
        className="flex justify-between w-full gap-2 mt-12 mb-10 text-white font-pixel"
      >
        <div className="flex flex-col items-center justify-center w-1/2">
          <h2 className="mb-10 text-5xl font-semibold text-start">
            Web Developer Skills
          </h2>

          {/* circle tools/programming language */}
          <div className="grid w-full grid-cols-4 gap-2">
            <SkillCircle
              start={triggered}
              percent={90}
              imgSrc="/assets/img/php.png"
            />
            <SkillCircle
              start={triggered}
              percent={75}
              imgSrc="/assets/img/js.png"
              gridStartPosition="col-start-2"
            />
            <SkillCircle
              start={triggered}
              percent={100}
              imgSrc="/assets/img/tailwindcss.png"
              gridStartPosition="col-start-4"
            />
            <SkillCircle
              start={triggered}
              percent={100}
              imgSrc="/assets/img/bootstrap.png"
              gridStartPosition=""
            />
            <SkillCircle
              start={triggered}
              percent={85}
              imgSrc="/assets/img/ci.png"
              gridStartPosition="col-start-3"
            />
            <SkillCircle
              start={triggered}
              percent={75}
              imgSrc="/assets/img/laravel.png"
              gridStartPosition="col-start-4"
            />
            <SkillCircle
              start={triggered}
              percent={70}
              imgSrc="/assets/img/nodejs.png"
              gridStartPosition="col-start-2"
            />
            <SkillCircle
              start={triggered}
              percent={60}
              imgSrc="/assets/img/react.png"
            />
            <SkillCircle
              start={triggered}
              percent={83}
              imgSrc="/assets/img/mysql.png"
              gridStartPosition="col-start-1"
            />
            <SkillCircle
              start={triggered}
              percent={55}
              imgSrc="/assets/img/mongodb.png"
              gridStartPosition="col-start-4"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-1/2">
          <h2 className="mb-10 text-5xl font-semibold text-start">
            Other skills and tools
          </h2>

          {/* circle tools/programming language */}
          <div className="grid w-full grid-cols-4 gap-2">
            <SkillCircle
              start={triggered}
              percent={75}
              imgSrc="/assets/img/arcgis.png"
              gridStartPosition="col-start-2"
            />
            <SkillCircle
              start={triggered}
              percent={75}
              imgSrc="/assets/img/excel.png"
              gridStartPosition="col-start-4  "
            />
            <SkillCircle
              start={triggered}
              percent={85}
              imgSrc="/assets/img/figma.png"
              gridStartPosition=""
            />
            <SkillCircle
              start={triggered}
              percent={60}
              imgSrc="/assets/img/qgis.png"
              gridStartPosition="col-start-3"
            />
            <SkillCircle
              start={triggered}
              percent={40}
              imgSrc="/assets/img/blender.png"
              gridStartPosition="col-start-4"
            />
            <SkillCircle
              start={triggered}
              percent={90}
              imgSrc="/assets/img/xd.png"
              gridStartPosition="col-start-3"
            />
            <SkillCircle
              start={triggered}
              percent={79}
              imgSrc="/assets/img/canva.png"
              gridStartPosition="col-start-3"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
