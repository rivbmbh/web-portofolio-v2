import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonConnect = ({ url, name, hover }) => {
  return (
    <>
      <a
        href={url}
        className={`block py-2.5 px-5 border-2 border-emerald-800 rounded-sm w-max ${hover}`}
      >
        {name}
      </a>
    </>
  );
};

export default ButtonConnect;
