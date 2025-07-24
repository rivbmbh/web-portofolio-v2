import { useState } from "react";
// import { preview } from "vite";

const Avatar = () => {
  const [isView, setIsView] = useState(false);
  function handleViewIMG() {
    setIsView((preview) => !preview);
  }
  return (
    <>
      {isView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs bg-slate-950/60"></div>
      )}
      <div
        className={`${
          isView
            ? "w-full max-w-full absolute scale-105 xs:scale-110 sm:scale-125 m-auto z-[55]"
            : "w-full mb-5 sm:mb-0 sm:w-1/2 h-max"
        } transition-transform duration-200 ease-in-out`}
      >
        <img
          src="assets/img/rab.png"
          alt="myavatar"
          className="w-64 mx-auto"
          onClick={handleViewIMG}
        />
        {isView && (
          <p className="w-full mt-10 text-center">
            * Click the image to exit full view.
          </p>
        )}
      </div>
    </>
  );
};

export default Avatar;
