import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
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
          <a target="_blank" href="https://github.com/rivbmbh">
            <FontAwesomeIcon icon={faGithub} className={iconSosmed()} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/rivaldo-angelo-bomboah-9b9a20295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            <FontAwesomeIcon icon={faLinkedin} className={iconSosmed()} />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/rivaldo_bomboah?igsh=emh0aGp1eGsyem1y"
          >
            <FontAwesomeIcon icon={faInstagram} className={iconSosmed()} />
          </a>
          <a target="_blank" href="https://www.facebook.com/share/17BADKtKup/">
            <FontAwesomeIcon icon={faFacebook} className={iconSosmed()} />
          </a>
        </div>
      </div>
    </>
  );
};

export default FooterContent;
