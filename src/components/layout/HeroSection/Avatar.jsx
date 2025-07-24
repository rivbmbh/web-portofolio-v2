import { useState } from "react";
import { preview } from "vite";

const Avatar = () => {
  const [isView, setIsView] = useState(false);
  function handleViewIMG() {
    setIsView((preview) => !preview);
  }
  return (
    <>
      <div
        className={`${
          isView
            ? "w-full absolute scale-105 mx-auto"
            : "w-full mb-5 sm:mb-0 sm:w-1/2 h-max"
        }`}
      >
        <img
          src="assets/img/rab.png"
          alt="myavatar"
          className="w-64 mx-auto"
          onClick={handleViewIMG}
        />
      </div>
    </>
  );
};

export default Avatar;
