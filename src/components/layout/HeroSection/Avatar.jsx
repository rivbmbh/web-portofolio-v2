import { useImageFullView } from "../../common/Modal/ImageFullViewContext";
// import { preview } from "vite";

const Avatar = () => {
  const { openImage } = useImageFullView();

  return (
    <div className="flex xs:flex-1 xs:min-w-[300px] xs:max-w-[500px] sm:min-w-full sm:max-w-full lg:min-w-[300px] lg:max-w-[500px] px-4 sm:px-0 mb-5 sm:mb-0 transition-transform duration-200 ease-in-out ">
      <img
        src="assets/img/rab.png"
        alt="myavatar"
        className="w-56 min-[300px]:w-64 h-auto mx-auto xs:w-80 2zl:w-5/6"
        onClick={() => openImage("assets/img/rab.png", "Avatar Mr.RAB")}
      />
    </div>
  );
};

export default Avatar;
