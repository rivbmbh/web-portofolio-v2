import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { iconSosmed } from "../../../js/style";
const FooterContent = () => {
  return (
    <>
      <div className="flex items-center justify-between px-4">
        <div className="text-base font-bold leading-tight">
          <h3>Rivaldo Angelo Bomboah</h3>
        </div>

        {/* social media links */}
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
    </>
  );
};

export default FooterContent;
