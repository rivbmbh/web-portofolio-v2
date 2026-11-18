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
        role="button"
        tabIndex={0}
        aria-label={`Buka detail proyek ${projectName}`}
        className="flex flex-col items-center justify-center mx-auto mt-8 cursor-pointer focus:outline-none"
        onClick={handleOpenFolder}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleOpenFolder();
          }
        }}
      >
        <img
          src={`/assets/projects/icon/${imageName}.avif`}
          alt={`Folder icon for ${projectName}`}
          className="w-[64%] nonview hover:grayscale-75 transition-all ease-in-out duration-500"
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
