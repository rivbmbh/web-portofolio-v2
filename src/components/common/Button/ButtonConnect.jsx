// import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonConnect = ({ url, name, effect }) => {
  return (
    <>
      <a
        href={url}
        className={`block py-2.5 px-5 border-2 border-emerald-800 rounded-xs w-max ${effect}`}
      >
        {name}
      </a>
    </>
  );
};

export default ButtonConnect;
