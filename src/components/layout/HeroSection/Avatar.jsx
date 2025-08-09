import { useImageFullView } from "../../common/Modal/ImageFullViewContext";
// import { preview } from "vite";

const Avatar = () => {
  const { openImage } = useImageFullView();

  return (
    <div className="flex-1 min-w-[300px] max-w-[500px] sm:min-w-full sm:max-w-full lg:min-w-[300px] lg:max-w-[500px] px-4 sm:px-0 mb-5 sm:mb-0 transition-transform duration-200 ease-in-out">
      <img
        src="assets/img/rab.png"
        alt="myavatar"
        className="w-5/6 h-auto mx-auto sm:w-72 md:w-80"
        onClick={() => openImage("assets/img/rab.png", "Avatar Mr.RAB")}
      />
    </div>
  );
};

export default Avatar;
