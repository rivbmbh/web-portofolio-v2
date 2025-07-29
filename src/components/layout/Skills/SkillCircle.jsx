import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useImageFullView } from "../../common/Modal/ImageFullViewContext";

const SkillCircle = ({
  percent,
  imgSrc,
  strokeColor = "text-gray-700",
  gridStartPosition = "",
}) => {
  const circleRef = useRef(null);
  const offset = 100 - percent;
  const { openImage } = useImageFullView();

  useEffect(() => {
    gsap.fromTo(
      circleRef.current,
      { strokeDashoffset: 100 },
      {
        strokeDashoffset: offset,
        duration: 2,
        ease: "power2.out",
      }
    );
  }, [offset]);

  return (
    <div
      className={`relative flex items-center justify-center w-24 h-24 mx-auto ${gridStartPosition}`}
    >
      <svg
        className="w-full h-full transform -rotate-90 text-slate-800"
        viewBox="0 0 36 36"
      >
        <circle
          className="bg-transparent"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          cx="18"
          cy="18"
          r="15"
        />
        <circle
          ref={circleRef}
          className={strokeColor}
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          cx="18"
          cy="18"
          r="15"
          strokeDasharray="100"
          strokeDashoffset="100"
        />
      </svg>
      <div className="absolute  w-[74%] h-[74%] overflow-hidden rounded-full">
        <img
          src={imgSrc}
          alt="icon"
          className="object-contain"
          onClick={() => openImage(imgSrc)}
        />
      </div>
    </div>
  );
};

export default SkillCircle;
