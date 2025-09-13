import Certificate from "./Certificate";
import Summary from "./Summary";

const About = () => {
  return (
    <>
      <section id="about" className={`px-10 pb-10 text-white mb-29 font-pixel`}>
        <div className="container mx-auto">
          <article className="grid items-center justify-center grid-cols-1 gap-4">
            <Summary />
            <Certificate />
          </article>
        </div>
      </section>
    </>
  );
};
export default About;
