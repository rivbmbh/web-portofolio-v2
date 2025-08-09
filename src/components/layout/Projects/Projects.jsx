import ProjectFolderIcon from "./ProjectFolderIcon";

const Projects = () => {
  const pathProjectsImg = "/public/assets/projects/";
  return (
    <>
      <section
        id="projects"
        className="w-full px-4 pt-6 pb-8 mt-10 text-white bg-gray-900 font-pixel"
      >
        <h2 className="mb-5 text-4xl font-bold text-center">Projects</h2>
        <div className="grid grid-cols-2 min-[390px]:grid-cols-3 gap-1 sm:grid-cols-4">
          <ProjectFolderIcon
            projectName={`web-asassincreed`}
            images={[
              `${pathProjectsImg}acv (1).png`,
              `${pathProjectsImg}acv (2).png`,
              `${pathProjectsImg}acv (3).png`,
              `${pathProjectsImg}acv (4).png`,
            ]}
            description="loreem ipus mdafma njalfn ckm axl  fjndalfkmn"
          />
          <ProjectFolderIcon
            projectName={`web-autis`}
            images={[
              `${pathProjectsImg}acv (1).png`,
              `${pathProjectsImg}acv (2).png`,
              `${pathProjectsImg}acv (3).png`,
              `${pathProjectsImg}acv (4).png`,
            ]}
            description="loreem ipus mdafma njalfn ckm axl  fjndalfkmn"
          />
          <ProjectFolderIcon
            projectName={`web-sporthub`}
            images={[
              `${pathProjectsImg}acv (1).png`,
              `${pathProjectsImg}acv (2).png`,
              `${pathProjectsImg}acv (3).png`,
              `${pathProjectsImg}acv (4).png`,
            ]}
            description="loreem ipus mdafma njalfn ckm axl  fjndalfkmn"
          />
          <ProjectFolderIcon
            projectName={`web-portal-berita`}
            images={[
              `${pathProjectsImg}acv (1).png`,
              `${pathProjectsImg}acv (2).png`,
              `${pathProjectsImg}acv (3).png`,
              `${pathProjectsImg}acv (4).png`,
            ]}
            description="loreem ipus mdafma njalfn ckm axl  fjndalfkmn"
          />
          <ProjectFolderIcon
            projectName={`web-prediction`}
            images={[
              `${pathProjectsImg}acv (1).png`,
              `${pathProjectsImg}acv (2).png`,
              `${pathProjectsImg}acv (3).png`,
              `${pathProjectsImg}acv (4).png`,
            ]}
            description="loreem ipus mdafma njalfn ckm axl  fjndalfkmn"
          />
          <ProjectFolderIcon
            projectName={`web-dashboard-admin`}
            images={[
              `${pathProjectsImg}acv (1).png`,
              `${pathProjectsImg}acv (2).png`,
              `${pathProjectsImg}acv (3).png`,
              `${pathProjectsImg}acv (4).png`,
            ]}
            description="loreem ipus mdafma njalfn ckm axl  fjndalfkmn"
          />
          <ProjectFolderIcon
            projectName={`webgis-kuma`}
            images={[
              `${pathProjectsImg}acv (1).png`,
              `${pathProjectsImg}acv (2).png`,
              `${pathProjectsImg}acv (3).png`,
              `${pathProjectsImg}acv (4).png`,
            ]}
            description="loreem ipus mdafma njalfn ckm axl  fjndalfkmn"
          />
          <ProjectFolderIcon
            projectName={`webgis-wisata`}
            images={[
              `${pathProjectsImg}acv (1).png`,
              `${pathProjectsImg}acv (2).png`,
              `${pathProjectsImg}acv (3).png`,
              `${pathProjectsImg}acv (4).png`,
            ]}
            description="loreem ipus mdafma njalfn ckm axl  fjndalfkmn"
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
