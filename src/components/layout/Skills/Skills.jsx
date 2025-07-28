import SkillCircle from "./SkillCircle";

const Skills = () => {
  return (
    <>
      <section id="skills" className="w-full mt-12 mb-10 text-white font-pixel">
        <h2 className="mb-10 text-5xl font-semibold text-center">
          Web Developer Tools
        </h2>

        {/* circle tools/programming language */}
        <div className="grid w-4/5 grid-cols-6 gap-2 mx-auto">
          <SkillCircle percent={90} imgSrc="/assets/img/php.png" />
          <SkillCircle
            percent={75}
            imgSrc="/assets/img/js.png"
            gridStartPosition="col-start-3"
          />
          <SkillCircle
            percent={100}
            imgSrc="/assets/img/tailwindcss.png"
            gridStartPosition="col-start-5"
          />
          <SkillCircle percent={85} imgSrc="/assets/img/ci.png" />
          <SkillCircle percent={75} imgSrc="/assets/img/laravel.png" />
          <SkillCircle
            percent={70}
            imgSrc="/assets/img/nodejs.png"
            gridStartPosition="col-start-3"
          />
          <SkillCircle percent={60} imgSrc="/assets/img/react.png" />
          <SkillCircle
            percent={83}
            imgSrc="/assets/img/mysql.png"
            gridStartPosition="col-start-4"
          />
          <SkillCircle
            percent={55}
            imgSrc="/assets/img/mongodb.png"
            gridStartPosition="col-start-6"
          />
        </div>
      </section>
    </>
  );
};

export default Skills;
