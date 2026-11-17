import { effectNav } from "../../../js/style";
import ButtonResume from "../../common/Button/ButtonResume";
import { useActiveSection } from "../../common/Effect/ActiveSectionContext";
import useScrollTo from "../../common/Hooks/useScrollTo";
import ChooseLanguage from "../../common/Language/ChooseLanguage";
import { useLanguage } from "../../common/Language/LanguageContext";

const NavDekstop = ({ isOpenResume, setIsOpenResume }) => {
  const { isEnglish } = useLanguage();
  const sectionEN = ["home", "about", "certificates", "skills", "projects"];
  const sectionID = [
    "beranda",
    "tentang saya",
    "sertifikasi",
    "Keahlian",
    "proyek",
  ];
  const sections = isEnglish ? sectionEN : sectionID;
  const activeSection = useActiveSection();
  const scrollTo = useScrollTo(70);

  return (
    <>
      <nav
        className={`hidden md:flex justify-center items-center gap-8 text-md text-white h-max ease-in-out duration-200 delay-100 transition-all active:duration-100`}
      >
        {sections.map((section, index) => (
          <button
            key={index + section}
            onClick={() => scrollTo(section)}
            className={`capitalize  ${effectNav({
              active: activeSection === section,
            })}`}
          >
            {section}
          </button>
        ))}

        <ChooseLanguage />

        <ButtonResume
          name="Resume"
          onClick={() => setIsOpenResume(!isOpenResume)}
        />
      </nav>
    </>
  );
};

export default NavDekstop;
