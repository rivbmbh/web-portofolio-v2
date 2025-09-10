import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonResume from "../../common/Button/ButtonResume";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { iconSosmed } from "../../../js/style";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 w-full px-4 py-5 text-white transition-all duration-500 border-t-2 border-gray-900 shadow-md h-max font-pixel backdrop-blur-sm">
        <div className="flex items-center justify-between px-4">
          <div className="text-base font-bold leading-tight">
            <a href="#">Rivaldo Angelo Bomboah</a>
          </div>

          {/* media social links */}
          <div className="flex flex-col items-center justify-center gap-4 xs:flex-row">
            <a href="#">
              <FontAwesomeIcon icon={faGithub} className={iconSosmed()} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} className={iconSosmed()} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} className={iconSosmed()} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faXTwitter} className={iconSosmed()} />
            </a>
          </div>
        </div>

        {/* background footers */}
        <div className="absolute inset-0 w-full h-full -z-10">
          <img
            src="assets/img/footer-bg (4).webp"
            alt="footer-bg"
            className="object-cover object-bottom w-full h-full opacity-50 nonview"
            loading="lazy"
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
