import { effectNav } from "../../../js/style";
import ButtonResume from "../../common/Button/ButtonResume";
import { useActiveSection } from "../../common/Effect/ActiveSectionContext";

const NavDekstop = ({ isOpenResume, setIsOpenResume }) => {
  const activeSection = useActiveSection();
  return (
    <>
      <nav
        className={`hidden md:flex justify-center items-center gap-8 text-md text-white h-max`}
      >
        <a
          href="#home"
          className={effectNav({ active: activeSection === "home" })}
        >
          Home
        </a>
        <a
          href="#about"
          className={effectNav({ active: activeSection === "about" })}
        >
          About
        </a>
        <a
          href="#skills"
          className={effectNav({ active: activeSection === "skills" })}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={effectNav({ active: activeSection === "projects" })}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={effectNav({ active: activeSection === "contact" })}
        >
          Contact
        </a>
        <ButtonResume
          name="Resume"
          onClick={() => setIsOpenResume(!isOpenResume)}
        />
      </nav>
    </>
  );
};

export default NavDekstop;
