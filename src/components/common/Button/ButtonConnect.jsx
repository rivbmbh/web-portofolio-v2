import { useState } from "react";
import ModalLinks from "../../layout/HeroSection/ModalLinks";

  const ButtonConnect = ({ name, effect }) => {
    const [isOpenLinks, setIsOpenLinks] = useState(false);

    function handleOpenModalLinks() {
      setIsOpenLinks((prev) => !prev);
    }
    return (
      <>
      <button
          type="button"
          className={`block py-2.5 px-5 border-2 border-emerald-800 rounded-xs w-max cursor-pointer ${effect}`}
          onClick={handleOpenModalLinks}
        >
          {name}
      </button >

        { isOpenLinks && (
          <ModalLinks handleOpenModalLinks={handleOpenModalLinks} />
        )
  }
    </>
  );
};

export default ButtonConnect;
