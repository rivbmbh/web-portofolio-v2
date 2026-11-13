import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useImageFullView } from "../../common/Modal/ImageFullViewContext";

const SkillCircle = ({
  start,
  percent,
  imgSrc,
  imgFullSrc,
  caption = "",
  // strokeColor = "text-gray-500",
  // gridStartPosition = "",
}) => {
  const circleRef = useRef(null);
  const offset = 100 - percent;
  const { openImage } = useImageFullView();

  useEffect(() => {
    if (!start) return;
    gsap.fromTo(
      circleRef.current,
      { strokeDashoffset: 100 },
      {
        strokeDashoffset: offset,
        duration: 3,
        ease: "power.inOut(2.7)",
      },
    );
  }, [start, offset]);

  return (
    <>
      <div
        className={`relative flex items-center justify-center-safe w-16 h-16 sm:w-18 sm:h-18 mx-auto`}
      >
        {/* <svg
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
        </svg> */}
        <div className="absolute w-[36%] h-[36%] sm:w-[48%] sm:h-[48%] overflow-hidden">
          <img
            rel="preload"
            src={imgSrc}
            alt="icon"
            className="object-contain"
            onClick={() => openImage(imgFullSrc, caption)}
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default SkillCircle;
