import { effectNav } from "../../../js/style";
import ButtonResume from "../../common/Button/ButtonResume";
import { useActiveSection } from "../../common/Effect/ActiveSectionContext";
import useScrollTo from "../../common/Hooks/useScrollTo";

const NavDekstop = ({ isOpenResume, setIsOpenResume }) => {
  const sections = ["home", "about", "skills", "projects"];
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

        <ButtonResume
          name="Resume"
          onClick={() => setIsOpenResume(!isOpenResume)}
        />
      </nav>
    </>
  );
};

export default NavDekstop;
