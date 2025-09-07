import { useImageFullView } from "../../common/Modal/ImageFullViewContext";
// import { preview } from "vite";

const Avatar = () => {
  const { openImage } = useImageFullView();

  return (
    <div className="flex justify-center w-full lg:w-1/2">
      <img
        src="assets/img/rab.webp"
        alt="myavatar"
        className="max-w-full w-80 min-[1280px]:w-[400px]"
        onClick={() => openImage("assets/img/rab.webp", "Avatar Mr.RAB")}
      />
    </div>
  );
};

export default Avatar;
