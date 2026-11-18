import { useState } from "react";
import ModalLinks from "../../layout/HeroSection/ModalLinks";

const ButtonConnect = ({ url, name, effect }) => {
  const [isOpenLinks, setIsOpenLinks] = useState(false);

  function handleOpenModalLinks() {
    setIsOpenLinks((prev) => !prev);
    // setIsOpen(true);
  }
  return (
    <>
      <a
        href={url}
        className={`block py-2.5 px-5 border-2 border-emerald-800 rounded-xs w-max ${effect}`}
        onClick={handleOpenModalLinks}
      >
        {name}
      </a>

      {isOpenLinks && (
        <ModalLinks handleOpenModalLinks={handleOpenModalLinks} />
      )}
    </>
  );
};

export default ButtonConnect;
