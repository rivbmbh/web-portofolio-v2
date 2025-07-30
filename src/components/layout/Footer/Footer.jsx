import ButtonResume from "../../common/Button/ButtonResume";

const Footer = ({ isOpenResume, setIsOpenResume }) => {
  return (
    <>
      <footer className="w-full p-5 text-white border-t-2 border-gray-900 h-max font-pixel">
        <div className="flex items-center justify-between px-4">
          <span>📌2025 Rivaldo Angelo Bomboah</span>
          {/* nav dekstop */}
          <nav
            className={`hidden md:flex justify-center items-center gap-8 text-md text-white`}
          >
            <a href="#" className={`hover:underline`}>
              Home
            </a>
            <a href="#skills" className={`hover:underline`}>
              Skills
            </a>
            <a href="#" className={`hover:underline`}>
              Projects
            </a>
            <a href="#" className={`hover:underline`}>
              Contact
            </a>
            <ButtonResume
              name="Resume"
              onClick={() => setIsOpenResume(!isOpenResume)}
            />
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
