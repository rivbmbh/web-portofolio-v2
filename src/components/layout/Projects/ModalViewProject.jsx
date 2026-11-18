import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import ButtonCloseModal from "../../common/Button/ButtonCloseModal";
import LoadingDots from "../../common/Effect/LoadingDots";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ModalViewProject = ({
  projectName,
  description,
  isClose,
  image,
  url,
  tech,
}) => {
  const scrollRef = useRef(null);
  const [loading, setLoading] = useState(true);

  function handleImageLoad() {
    setLoading(false);
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
        <div
          ref={scrollRef}
          className="relative flex w-full max-w-full gap-4 p-4 overflow-hidden h-max sm:max-w-4xl 2xl:max-w-5xl scroll-smooth"
        >
          {loading && (
            <LoadingDots className="absolute inset-0 m-auto text-lg font-bold text-center" />
          )}

          <img
            src={`/assets/projects/${image}.avif`}
            alt={`Screenshot ${projectName}`}
            className={`shrink-0 w-full sm:w-[80%] md:w-[60%] mx-auto rounded shadow-xl nonview ${loading ? "opacity-0 absolute" : "opacity-100"
              }`}
            loading="lazy"
            onLoad={handleImageLoad}
          />
        </div>
      </div>

      {!loading && (
        <>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-wrap items-center gap-2"
              >
                <span className="text-lg font-semibold md:text-2xl hover:underline">
                  {projectName}
              </span>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="transition-all duration-200 ease-in-out size-3 md:size-4 hover:scale-90"
              />
          </a>
          <div className="flex flex-col w-auto gap-2 px-0 text-center xs:px-2 sm:px-4 md:px-10 md:w-[60%]">
            <p className="text-base text-emerald-400 sm:text-sm">
              tech stack : {tech}
            </p>
            <p className="">{description}.</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ModalViewProject;
