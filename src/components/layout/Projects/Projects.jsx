import ProjectFolderIcon from "./ProjectFolderIcon";
import dataProjects from "/public/assets/data/projects";

const Projects = () => {
  const pathProjectsImg = "/public/assets/projects/";

  function showImages(totalImage, imgName) {
    const images = [];
    for (let i = 1; i <= totalImage; i++) {
      images.push(`${pathProjectsImg}${imgName} (${i}).webp`);
    }
    return images;
  }

  return (
    <>
      <section
        id="projects"
        className="w-full px-4 pt-6 pb-8 mt-10 text-white bg-gray-900 font-pixel"
      >
        <div className="container mx-auto">
          <article>
            <h2 className="text-4xl font-bold text-center">Projects</h2>
            <p className="mt-3 text-base text-center">
              Presented below are independent projects, client engagements, and
              projects I managed during my previous professional experience.
            </p>
            <div className="grid grid-cols-2 min-[390px]:grid-cols-3 gap-1 sm:grid-cols-4">
              {dataProjects.map((data, index) => (
                <ProjectFolderIcon
                  key={index + data.imageName}
                  projectName={data.projectName}
                  images={showImages(data.totalImage, data.imageName)}
                  description={data.description}
                  url={data.url}
                />
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Projects;
