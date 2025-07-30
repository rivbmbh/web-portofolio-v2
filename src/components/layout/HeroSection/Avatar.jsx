import { useImageFullView } from "../../common/Modal/ImageFullViewContext";
// import { preview } from "vite";

const Avatar = () => {
  const { openImage } = useImageFullView();

  return (
    <>
      <div
        className={`w-full mb-5 sm:mb-0 sm:w-1/2 h-max
         transition-transform duration-200 ease-in-out`}
      >
        <img
          src="assets/img/rab.png"
          alt="myavatar"
          className="w-64 mx-auto"
          onClick={() => openImage("assets/img/rab.png", "Avatar Mr.RAB")}
        />
      </div>
    </>
  );
};

export default Avatar;
