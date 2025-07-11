import { TypeAnimation } from "react-type-animation";

const Profession = () => {
  return (
    <div>
      <p className="text-base">I'm a...</p>
      <TypeAnimation
        sequence={[
          "Web Devoloper", // Word 'One'
          1000, // Waits 1s
          "Graphic Design", // Word two
          1500,
          "and",
          700,
          "Digital Cartographer.",
          1500,
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        className="text-xl font-bold md:text-2xl text-amber-300"
      />
    </div>
  );
};

export default Profession;
