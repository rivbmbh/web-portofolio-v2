import ButtonConnect from "../../common/Button/ButtonConnect";
import Profession from "./Profession";
import Introduce from "./Introduce";
import FloatingMessage from "./FloatingMessage";
import HandPoint from "./HandPoint";

const Personal = ({ isSmallScreen }) => {
  return (
    <div className="self-center w-full sm:pl-4 lg:w-1/2">
      <FloatingMessage />
      <Introduce />
      <Profession />

      <div className="flex flex-wrap w-full gap-5 mt-14">
        <HandPoint isSmallScreen={isSmallScreen} />
        <ButtonConnect
          url="#"
          name="Let's Connect"
          effect="active:scale-105 active:-rotate-3 transition-all ease-in-out duration-200 active:bg-emerald-700 hover:bg-emerald-700"
        />
      </div>
    </div>
  );
};

export default Personal;
