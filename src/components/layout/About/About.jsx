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
              <p className="text-base text-center sm:px-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, delectus ut. Sequi ratione sit explicabo officia
                expedita quaerat nesciunt dolore aliquid autem, rerum saepe
                ipsum ut eum rem eligendi nisi provident porro officiis soluta?
                Sapiente quas dolorem dolor nobis, quae ipsum iure soluta
                consectetur eveniet voluptate placeat tempora, voluptatum
                quisquam.
              </p>
            </div>
            <Certificate />
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
