import { Viewer, Worker } from "@react-pdf-viewer/core";
import { useEffect, useRef } from "react";

const ViewResume = ({ isOpenResume, setIsOpenResume }) => {
  const pdfRef = useRef(null);

  useEffect(() => {
    const handleClickOutsidePdf = (e) => {
      if (pdfRef.current && !pdfRef.current.contains(e.target)) {
        setIsOpenResume(false);
      }
    };

    if (isOpenResume) {
      document.addEventListener("mousedown", handleClickOutsidePdf);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsidePdf);
    };
  }, [isOpenResume, setIsOpenResume]);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs bg-slate-950/60">
      <div
        ref={pdfRef}
        className="bg-white p-4 max-w-3xl w-[90%] h-[90vh] overflow-auto rounded"
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer fileUrl="/assets/cv_rab_2024.pdf" />
        </Worker>
      </div>
    </div>
  );
};

export default ViewResume;
