import { useImageFullView } from "../../common/Modal/ImageFullViewContext";
// import { preview } from "vite";

const Avatar = () => {
  const { openImage } = useImageFullView();

  return (
    <div className="flex justify-center w-full lg:w-1/2">
      <img
        src="assets/img/rab-(400).webp"
        srcSet="
          assets/img/rab-(160).webp 160w,
          assets/img/rab-(320).webp 320w,
          assets/img/rab-(400).webp 400w
        "
        sizes="(max-width: 640px) 160px,
         (max-width: 1024px) 320px,
         400px"
        alt="avatar"
        className="max-w-full w-80 min-[1280px]:w-[400px]"
        loading="lazy"
        onClick={() => openImage("assets/img/rab-(400).webp", "Avatar Mr.RAB")}
      />
    </div>
  );
};

export default Avatar;
