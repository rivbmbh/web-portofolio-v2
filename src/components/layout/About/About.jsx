import Summary from "./Summary";

const About = () => {
  return (
    <>
      <section
        id="about"
        className={`px-5 md:px-10 py-16 md:py-20 bg-gray-900 text-white mb-14 font-pixel`}
      >
        <div className="container mx-auto">
          <article className="grid items-center justify-center grid-cols-1 gap-4">
            <Summary />
          </article>
        </div>
      </section>
    </>
  );
};
export default About;
