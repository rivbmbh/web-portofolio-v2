import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonCloseModal = ({ action, position, customStyle = "" }) => {
  return (
    <>
      <button
        className={`${position} text-lg text-right xs:text-2xl ${customStyle}`}
        onClick={action}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </>
  );
};

export default ButtonCloseModal;
