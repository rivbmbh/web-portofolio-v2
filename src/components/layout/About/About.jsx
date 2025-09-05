import Certificate from "./Certificate";

const About = () => {
  return (
    <>
      <section id="about" className="px-10 mb-10 text-white py-14 font-pixel">
        <div className="container mx-auto">
          <div className="grid items-center justify-center grid-cols-1 gap-4">
            <div className="w-full px-3">
              <h2 className="mb-5 text-3xl font-semibold text-center sm:text-4xl ">
                About Me
              </h2>
              <div className="space-y-5">
                <p className="text-base text-center sm:px-4">
                  I originally pursued a degree in Information Systems, but
                  along the way I discovered my true passion in programming.
                  Since my fifth semester, I’ve been learning to code more
                  seriously, mostly self-taught outside of campus, and my
                  curiosity has only grown stronger. Over the past three years,
                  I’ve explored various tech stacks, joined trainings, and built
                  a deeper understanding of software development. For me, coding
                  is not just a tool to solve business problems—it’s a space to
                  create, experiment, and build something meaningful.
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
