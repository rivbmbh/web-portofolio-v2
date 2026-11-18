import { useState } from "react";
import ModalViewProject from "./ModalViewProject";

const ProjectFolderIcon = ({
  projectName,
  imageName,
  description,
  url = " ",
  technology,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpenFolder() {
    setIsOpen((prev) => !prev);
  }
  return (
    <>
      <div
        className="flex flex-col items-center justify-center mx-auto mt-8"
        onClick={handleOpenFolder}
      >
        <img
          // src={`/assets/img/folder-${isOpen ? "open" : "close"}.webp`}
          src={`/assets/projects/icon/${imageName}.avif`}
          alt="path"
          className={`w-[64%] nonview hover:grayscale-75 transition-all ease-in-out duration-500`}
          loading="lazy"
        />
        <p className="mt-3 text-center text-[16px]">{projectName}</p>
      </div>
      {isOpen && (
        <ModalViewProject
          projectName={projectName}
          description={description}
          isClose={handleOpenFolder}
          image={imageName}
          url={url}
          tech={technology}
        />
      )}
    </>
  );
};

export default ProjectFolderIcon;
