import { useImageFullView } from "../../common/Modal/ImageFullViewContext";
// import { preview } from "vite";

const Avatar = () => {
  const { openImage } = useImageFullView();

  return (
    <div className="w-full px-4 lg:w-1/2">
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
