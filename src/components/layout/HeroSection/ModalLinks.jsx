import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ViewLinks from "../../common/Modal/ViewLinks";

const ModalLinks = ({ handleOpenModalLinks }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center h-full p-5 text-white bg-slate-950/50 backdrop-blur-xs font-pixel">
        <div className="relative flex flex-col justify-center w-full bg-gray-900 rounded-md h-max md:w-3/6">
          <div>
            <h3 className="py-4 text-3xl text-center">Links</h3>
            {/* button close modal */}
            <button
              className="absolute top-0 right-0 w-full m-5 text-2xl text-right xs:text-3xl"
              onClick={handleOpenModalLinks}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <div className="border-t border-t-slate-700"></div>

          <div className="text-lg">
            <ViewLinks
              titleLink="Instagram"
              fullLink="https://www.instagram.com/rivaldo_b13"
              shortLink="www.instagram.com/rivaldo_b13"
            />
            <div className="border-t border-t-slate-700"></div>
            <ViewLinks
              titleLink="Github"
              fullLink="https://github.com/rivbmbh"
              shortLink="github.com/rivbmbh"
            />
            <div className="border-t border-t-slate-700"></div>
            <ViewLinks
              titleLink="LinkedIn"
              fullLink="https://www.linkedin.com/in/rivaldo-angelo-bomboah-9b9a20295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              shortLink="www.linkedin.com/in/rivaldo-angelo-bomboah"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalLinks;
