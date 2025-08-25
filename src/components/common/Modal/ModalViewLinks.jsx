import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalViewLinks = ({ titleLink, fullLink, shortLink }) => {
  return (
    <>
      <a
        href={fullLink}
        target="_blank"
        className="flex flex-col w-full gap-3 p-5 xs:flex-row xs:items-center hover:bg-slate-700 group"
      >
        <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
          <FontAwesomeIcon
            icon={faLink}
            className="text-sm text-black xs:text-md"
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
