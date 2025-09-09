import { effectNav } from "../../../js/style";
import ButtonResume from "../../common/Button/ButtonResume";
import { useActiveSection } from "../../common/Effect/ActiveSectionContext";

const NavDekstop = ({ isOpenResume, setIsOpenResume }) => {
  const activeSection = useActiveSection();
  const sections = ["home", "about", "skills", "projects"];
  return (
    <>
      <nav
        className={`hidden md:flex justify-center items-center gap-8 text-md text-white h-max ease-in-out duration-200 delay-100 transition-all active:duration-100`}
      >
        {sections.map((section, index) => (
          <a
            key={index + section}
            href={`#${section}`}
            className={`capitalize ${effectNav({
              active: activeSection === section,
            })}`}
          >
            {section}
          </a>
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
