import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

const ModalViewProject = ({ caption, isClose, images = [] }) => {
  const scrollRef = useRef(null);

  const scrollAmount = 600;

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
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center h-screen p-4 text-white bg-slate-950/50 backdrop-blur-xs font-pixel">
      {/* button close modal */}
      <button
        className="w-full m-5 text-3xl text-right xs:text-4xl"
        onClick={isClose}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>

      <div className="relative flex items-center justify-center w-full gap-2">
        {/* scroll to left */}
        <button
          className="text-4xl transition-all duration-500 ease-in-out hover:scale-110 active:scale-110"
          onClick={scrollLeft}
        >
          <FontAwesomeIcon icon={faChevronCircleLeft} />
        </button>

        <div
          ref={scrollRef}
          className="flex w-full max-w-4xl gap-4 p-4 overflow-x-hidden scroll-smooth"
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`project-${index}`}
              className="flex-shrink-0 w-full h-auto rounded shadow-xl"
            />
          ))}
        </div>

        {/* scroll to right */}
        <button
          className="text-4xl transition-all duration-500 ease-in-out hover:scale-110 active:scale-110"
          onClick={scrollRight}
        >
          <FontAwesomeIcon icon={faChevronCircleRight} />
        </button>
      </div>

      <h2 className="mt-3 text-2xl font-semibold text-center">{caption[0]}</h2>
      <p className="text-center">{caption[1]}</p>
    </div>
  );
};

export default ModalViewProject;
