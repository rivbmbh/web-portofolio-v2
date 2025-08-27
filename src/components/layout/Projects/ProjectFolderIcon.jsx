import { useState } from "react";
import ModalViewProject from "./ModalViewProject";

const ProjectFolderIcon = ({ projectName, images, description, url }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenFolder() {
    setIsOpen((prev) => !prev);
    // setIsOpen(true);
  }
  return (
    <>
      <div
        className="flex flex-col items-center justify-center w-full mt-4 gap-x-1"
        onClick={handleOpenFolder}
      >
        <img
          src={`/assets/img/folder-${isOpen ? "open" : "close"}.webp`}
          alt="path"
          className={`w-20 h-20 nonview hover:grayscale-75 transition-all ease-in-out duration-500`}
        />
        <p className="text-center text-md">{projectName}</p>
      </div>
      {isOpen && (
        <ModalViewProject
          caption={[projectName, description]}
          isClose={handleOpenFolder}
          images={images}
          url={url}
        />
      )}
    </>
  );
};

export default ProjectFolderIcon;
