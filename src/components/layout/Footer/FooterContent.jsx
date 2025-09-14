import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { iconSosmed } from "../../../js/style";

const FooterContent = () => {
  const medsosLinksProfile = [
    { href: "https://github.com/rivbmbh", icon: faGithub, label: "Github" },
    {
      href: "https://www.linkedin.com/in/rivaldo-angelo-bomboah-9b9a20295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: faLinkedin,
      label: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/rivaldo_bomboah?igsh=emh0aGp1eGsyem1y",
      icon: faInstagram,
      label: "Instagram",
    },
    {
      href: "https://www.facebook.com/share/17BADKtKup/",
      icon: faFacebook,
      label: "Facebook",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between px-4">
        <div className="text-base font-bold leading-tight">
          <h3>Rivaldo Angelo Bomboah</h3>
        </div>

        {/* social media links */}
        <div className="flex flex-col items-center justify-center gap-4 xs:flex-row">
          {medsosLinksProfile.map((data, index) => (
            <a
              key={data.label + index}
              target="_blank"
              href={data.href}
              aria-label={`${data.label} Profile`}
            >
              <FontAwesomeIcon icon={data.icon} className={iconSosmed()} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default FooterContent;
