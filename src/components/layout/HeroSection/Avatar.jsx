import { useImageFullView } from "../../common/Modal/ImageFullViewContext";

const Avatar = () => {
  const { openImage } = useImageFullView();

  return (
    <div className="flex justify-center w-full lg:w-1/2">
      <img
        src="assets/img/rab_large.avif"
        srcSet="
        assets/img/rab_small.avif 160w,
        assets/img/rab_medium.avif 320w,
        assets/img/rab_large.avif 400w
      "
        sizes="(max-width: 640px) 160px,
       (max-width: 1024px) 320px,
       400px"
        alt="Foto profil Rivaldo Angelo Bomboah - Web Developer Portfolio"
        className="max-w-full cursor-pointer w-80 xl:w-100"
        fetchPriority="high"
        decoding="async"
        onClick={() => openImage("assets/img/rab_large.avif", "Avatar Mr.RAB")}
      />
    </div>
  );
};

export default Avatar;
