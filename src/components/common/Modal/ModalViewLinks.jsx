import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalViewLinks = ({ titleLink, fullLink, shortLink }) => {
  return (
    <>
      <a
        href={fullLink}
        target="_blank"
        className="flex flex-col w-full gap-3 p-5 xs:flex-row xs:items-center hover:bg-gray-700 group"
      >
        <div className="flex items-center justify-center w-3/12 px-2 py-2.5 border border-gray-700 xs:w-max">
          <FontAwesomeIcon
            icon={faLink}
            className="text-white text-md xs:text-md"
          />
        </div>
        <div className="w-full">
          <h5 className="font-bold text-gold">{titleLink}</h5>
          <p className="w-full group-hover:underline">{shortLink}</p>
        </div>
      </a>
    </>
  );
};

export default ModalViewLinks;
