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
              `${pathProjectsImg}acv (1).webp`,
              `${pathProjectsImg}acv (2).webp`,
              `${pathProjectsImg}acv (3).webp`,
              `${pathProjectsImg}acv (4).webp`,
            ]}
            description="web static dari hasil belajar tailwindCSS"
          />
          <ProjectFolderIcon
            projectName={`dashboard-admin`}
            images={[
              `${pathProjectsImg}td (1).webp`,
              `${pathProjectsImg}td (2).webp`,
              `${pathProjectsImg}td (3).webp`,
            ]}
            description="web perusahaan jasa pembuatan sistem berbasis web dan mobile, dimana saya berkontribusi membangun web ini terutama pada bagian dashboard adminya"
            url={["tuamadigital.com", "https://www.tuamadigital.id"]}
          />
          <ProjectFolderIcon
            projectName={`web-sporthub`}
            images={[
              `${pathProjectsImg}acv (1).webp`,
              `${pathProjectsImg}acv (2).webp`,
              `${pathProjectsImg}acv (3).webp`,
              `${pathProjectsImg}acv (4).webp`,
            ]}
            description="loreem ipus mdafma njalfn ckm axl  fjndalfkmn"
          />
          <ProjectFolderIcon
            projectName={`web-kasir`}
            images={[
              `${pathProjectsImg}kasir (1).webp`,
              `${pathProjectsImg}kasir (2).webp`,
              `${pathProjectsImg}kasir (3).webp`,
              `${pathProjectsImg}kasir (4).webp`,
              `${pathProjectsImg}kasir (5).webp`,
              `${pathProjectsImg}kasir (6).webp`,
            ]}
            description="project ini saya buat dari mengikuti pelatihan dari dunia coding. Terdapat fitur payment with QRIS."
          />
          <ProjectFolderIcon
            projectName={`web-analisis`}
            images={[
              `${pathProjectsImg}acv (1).webp`,
              `${pathProjectsImg}acv (2).webp`,
              `${pathProjectsImg}acv (3).webp`,
              `${pathProjectsImg}acv (4).webp`,
            ]}
            description="loreem ipus mdafma njalfn ckm axl  fjndalfkmn"
          />
          <ProjectFolderIcon
            projectName={`web-portal-berita`}
            images={[
              `${pathProjectsImg}wpb (1).webp`,
              `${pathProjectsImg}wpb (2).webp`,
            ]}
            description="web ini saya bangun dengan tim Tuama Digital"
            url={["matajambi.com", "https://www.matajambi.com/"]}
          />
          <ProjectFolderIcon
            projectName={`webgis-kuma`}
            images={[
              `${pathProjectsImg}acv (1).webp`,
              `${pathProjectsImg}acv (2).webp`,
              `${pathProjectsImg}acv (3).webp`,
              `${pathProjectsImg}acv (4).webp`,
            ]}
            description="loreem ipus mdafma njalfn ckm axl  fjndalfkmn"
          />
          <ProjectFolderIcon
            projectName={`webgis-wisata`}
            images={[
              `${pathProjectsImg}acv (1).webp`,
              `${pathProjectsImg}acv (2).webp`,
              `${pathProjectsImg}acv (3).webp`,
              `${pathProjectsImg}acv (4).webp`,
            ]}
            description="loreem ipus mdafma njalfn ckm axl  fjndalfkmn"
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
