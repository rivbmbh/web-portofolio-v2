// import { Bar } from "react-chartjs-2";

const Skills = () => {
  return (
    <>
      <section id="skills" className="w-full mt-12 text-white h-60">
        <h2 className="text-5xl font-semibold text-center font-pixel">
          My Skills
        </h2>
        <div className="flex flex-wrap justify-between w-4/5 mx-auto mt-5">
          <div className="flex items-center justify-center w-16 h-16 overflow-hidden rounded-full">
            <img
              src="/assets/img/js.png"
              alt="javascript"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex items-center justify-center w-16 h-16 overflow-hidden bg-white rounded-full">
            <img
              src="/assets/img/php.png"
              alt="javascript"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
