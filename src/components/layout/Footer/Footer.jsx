import FooterBackground from "./FooterBackground";
import FooterContent from "./FooterContent";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 w-full px-4 py-5 text-white transition-all duration-500 border-t-2 border-gray-900 shadow-md h-max font-pixel backdrop-blur-sm">
        <div className="container mx-auto">
          <article>
            <FooterContent />
            <FooterBackground />
          </article>
        </div>
      </footer>
    </>
  );
};

export default Footer;
