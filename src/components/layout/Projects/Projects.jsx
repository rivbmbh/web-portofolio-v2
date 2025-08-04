import { useState } from "react";

const Projects = () => {
  const open = "folder-open.png";
  const close = "folder-close.png";
  const [folderIcon, setFolderIcon] = useState(close);

  function handleChangeIcon() {
    setFolderIcon(open);
  }

  return (
    <>
      <section className="w-full px-4 my-10 text-white font-pixel">
        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <div className="flex flex-wrap items-center gap-4">
          <div
            className="flex items-stretch gap-1 mt-4 w-max"
            onClick={handleChangeIcon}
          >
            <img
              src={`/public/assets/img/${folderIcon}`}
              alt="path"
              className="w-6 h-6 nonview"
            />
            <p className="text-md">/landing-page</p>
          </div>
          {/* <img src="/public/assets/img/folder-open.png" alt="path" /> */}
        </div>
      </section>
    </>
  );
};

export default Projects;
