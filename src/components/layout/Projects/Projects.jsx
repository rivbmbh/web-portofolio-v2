import { useLanguage } from "../../common/Language/LanguageContext";
import ProjectFolderIcon from "./ProjectFolderIcon";
import dataProjects from "/public/assets/data/projects";

const Projects = () => {
  const { isEnglish } = useLanguage();
  return (
    <>
      <section
        id="projects"
        className="w-full px-4 pt-6 pb-8 mt-10 text-white bg-gray-900 font-pixel"
      >
        <div className="container mx-auto">
          <article>
            <h2 className="text-4xl font-bold text-center">
              {isEnglish ? "Projects" : "Proyek"}
            </h2>
            <p className="mt-3 text-base text-center">
              {isEnglish
                ? "Presented below are independent projects, client engagements, and projects I managed during my previous professional experience."
                : "Berikut adalah proyek independen, pekerjaan bersama klien, serta proyek yang saya kelola selama pengalaman profesional sebelumnya."}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
              {dataProjects.map((data, index) => (
                <ProjectFolderIcon
                  key={index + data.imageName}
                  projectName={data.projectName}
                  imageName={data.imageName}
                  description={data.description}
                  url={data.url}
                  technology={data.tech}
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
