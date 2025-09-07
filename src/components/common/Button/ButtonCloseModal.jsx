import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonCloseModal = ({ action, position, customStyle = "" }) => {
  return (
    <>
      <button
        className={`${position} text-lg text-right absolute xs:text-2xl active:scale-105 ${customStyle}`}
        onClick={action}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </>
  );
};

export default ButtonCloseModal;
