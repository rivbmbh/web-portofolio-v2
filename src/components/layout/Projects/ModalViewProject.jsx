import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import ButtonCloseModal from "../../common/Button/ButtonCloseModal";

const ModalViewProject = ({ caption, isClose, images = [], url = "" }) => {
  const scrollRef = useRef(null);
  const firstImgRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);
  console.info(images);
  useEffect(() => {
    if (firstImgRef.current) {
      setScrollAmount(firstImgRef.current.offsetWidth + 16); // +16 kalau ada gap
    }
  }, []);

  function scrollLeft() {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  }

  function scrollRight() {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center h-full p-5 text-white bg-slate-950/50 backdrop-blur-xs font-pixel">
      {/* button close modal */}

      <ButtonCloseModal
        action={isClose}
        position="top-0 right-0"
        customStyle="z-20 w-full m-5 sm:absolute"
      />
      <div className="relative flex items-center justify-center w-full px-5 md:gap-2">
        {/* scroll to left */}
        <button
          className="text-2xl transition-all duration-500 ease-in-out sm:text-3xl hover:scale-110 active:scale-110"
          onClick={scrollLeft}
        >
          <FontAwesomeIcon icon={faChevronCircleLeft} />
        </button>

        <div
          ref={scrollRef}
          className="flex w-full max-w-full gap-4 p-4 overflow-hidden h-max sm:max-w-4xl 2xl:max-w-5xl scroll-smooth"
        >
          {images.map((img, index) => (
            <img
              key={index}
              ref={index === 0 ? firstImgRef : null} // simpan ref di gambar pertama
              src={img}
              alt={`project-${index}`}
              className="flex-shrink-0 w-full h-full rounded shadow-xl nonview"
              loading="lazy"
            />
          ))}
        </div>

        {/* scroll to right */}
        <button
          className="text-2xl transition-all duration-500 ease-in-out sm:text-3xl hover:scale-110 active:scale-110"
          onClick={scrollRight}
        >
          <FontAwesomeIcon icon={faChevronCircleRight} />
        </button>
      </div>

      <h2 className="text-2xl font-semibold text-center ">{caption[0]}</h2>
      <p className="text-center">{caption[1]}</p>
      <a href={url[1]} target="_blank" className="text-blue-400 underline">
        {url[0]}
      </a>
    </div>
  );
};

export default ModalViewProject;
