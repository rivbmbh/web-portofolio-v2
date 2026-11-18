import { useLanguage } from "../../common/Language/LanguageContext";
import CertificateCard from "./CertificateCard";

const certificateList = [
  { id: "js_dicoding", title: "JavaScript Basic - Dicoding" },
  { id: "database_administrator", title: "Database Administrator" },
  { id: "devops_dicoding", title: "DevOps Basics - Dicoding" },
  { id: "ms_excel", title: "Microsoft Excel" },
  { id: "english_basic", title: "English Basic" },
  { id: "webdev_kominfo", title: "Web Developer - Kominfo" },
  { id: "webgis", title: "WebGIS Specialist" },
  { id: "sertifikat_belajar_AI_dasar", title: "Belajar AI Dasar - Dicoding" },
  { id: "ai_for_work", title: "AI for Work" },
  { id: "ai_api_intergration", title: "AI API Integration" },
];

const Certificates = () => {
  const { isEnglish } = useLanguage();

  return (
    <section
      id="certificates"
      className="px-10 pb-10 text-white mb-18 font-pixel"
    >
      <div className="w-full px-3 mt-10">
        <h2 className="mb-5 text-3xl font-semibold text-center sm:text-4xl">
          {isEnglish ? "Certificates" : "Sertifikasi"}
        </h2>
        <p className="mb-5 text-base text-center sm:px-4">
          {isEnglish
            ? "This demonstrates my continued commitment to learning new things and expanding my skills, not only in programming but also in other areas beyond technology."
            : "Berikut ini tanda bahwa saya masih aktif belajar hal baru serta memperdalam Keahlian saya, dan tidak hanya terbatas pada programming tetapi juga di luar itu saya juga pelajari."}
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {
              certificateList.map((cert) => (
                <CertificateCard
                  key={cert.id}
                  pdfName={cert.id}
                  title={cert.title}
                />
              ))
            }
        </div>
      </div>
    </section>
  );
};

export default Certificates;
