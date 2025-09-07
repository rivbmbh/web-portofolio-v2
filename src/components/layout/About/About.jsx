// import useWindowSize from "../../common/Hooks/useWindowSize";
import Certificate from "./Certificate";

const About = () => {
  // const { width, height } = useWindowSize();
  // const isIpadPro = width === 1024 && height === 1366;
  return (
    <>
      <section id="about" className={`px-10 pb-10 text-white mb-14 font-pixel`}>
        <div className="container mx-auto">
          <div className="grid items-center justify-center grid-cols-1 gap-4">
            <div className="w-full px-3">
              <h2 className="mb-5 text-3xl font-semibold text-center sm:text-4xl ">
                About Me
              </h2>
              <div className="space-y-5">
                <p className="text-base text-center sm:px-4">
                  I am an Information Systems graduate who discovered a passion
                  for programming starting in my fifth semester. Over the past
                  three years, I have been learning independently, exploring
                  various tech stacks, and joining trainings to strengthen my
                  skills. Beyond coding, I also have an interest in graphic
                  design and digital mapping, which allow me to combine
                  creativity with technical expertise.
                </p>
                <p className="text-base text-center sm:px-4">
                  As part of this learning journey, below I’ve included several
                  certificates from trainings and programs I’ve completed.
                </p>
              </div>
            </div>
            <Certificate />
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
