import SkillCircle from "./SkillCircle";

const Skills = () => {
  return (
    <>
      <section
        id="skills"
        className="flex justify-between w-full gap-2 mt-12 mb-10 text-white font-pixel"
      >
        <div className="flex flex-col items-center justify-center w-1/2">
          <h2 className="mb-10 text-5xl font-semibold text-start">
            Web Developer Skills
          </h2>

          {/* circle tools/programming language */}
          <div className="grid w-full grid-cols-4 gap-2">
            <SkillCircle percent={90} imgSrc="/assets/img/php.png" />
            <SkillCircle
              percent={75}
              imgSrc="/assets/img/js.png"
              gridStartPosition="col-start-2"
            />
            <SkillCircle
              percent={100}
              imgSrc="/assets/img/tailwindcss.png"
              gridStartPosition="col-start-4"
            />
            <SkillCircle
              percent={100}
              imgSrc="/assets/img/bootstrap.png"
              gridStartPosition=""
            />
            <SkillCircle
              percent={85}
              imgSrc="/assets/img/ci.png"
              gridStartPosition="col-start-3"
            />
            <SkillCircle
              percent={75}
              imgSrc="/assets/img/laravel.png"
              gridStartPosition="col-start-4"
            />
            <SkillCircle
              percent={70}
              imgSrc="/assets/img/nodejs.png"
              gridStartPosition="col-start-2"
            />
            <SkillCircle percent={60} imgSrc="/assets/img/react.png" />
            <SkillCircle
              percent={83}
              imgSrc="/assets/img/mysql.png"
              gridStartPosition="col-start-1"
            />
            <SkillCircle
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
              percent={75}
              imgSrc="/assets/img/arcgis.png"
              gridStartPosition="col-start-2"
            />
            <SkillCircle
              percent={75}
              imgSrc="/assets/img/excel.png"
              gridStartPosition="col-start-4  "
            />
            <SkillCircle
              percent={85}
              imgSrc="/assets/img/figma.png"
              gridStartPosition=""
            />
            <SkillCircle
              percent={60}
              imgSrc="/assets/img/qgis.png"
              gridStartPosition="col-start-3"
            />
            <SkillCircle
              percent={40}
              imgSrc="/assets/img/blender.png"
              gridStartPosition="col-start-4"
            />
            <SkillCircle
              percent={90}
              imgSrc="/assets/img/xd.png"
              gridStartPosition="col-start-3"
            />
            <SkillCircle
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
