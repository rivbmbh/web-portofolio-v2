import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import ButtonCloseModal from "../Button/ButtonCloseModal";
import LoadinDots from "../Effect/LoadingDots";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const ViewResume = ({ setIsOpenResume }) => {
  const [numPages, setNumPages] = useState();
  const [pageNumber] = useState(1);
  const [loading, setLoading] = useState(true);

  function onDocumentLoadSuccess({ numPages }) {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    setNumPages(numPages);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs bg-slate-950/60 font-pixel">
      {loading && (
        <LoadinDots className="absolute inset-x-0 text-lg font-bold text-center text-white" />
      )}
      <div
        className={`bg-transparent pb-5 pt-10 max-w-3xl w-[90%] h-[90vh] overflow-scroll snap-proximity rounded transition-opacity duration-300 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Document
          file={`/assets/resume.pdf`}
          onLoadSuccess={onDocumentLoadSuccess}
          className="relative bg-transparent h-max"
        >
          <Page
            renderAnnotationLayer={false}
            renderTextLayer={false}
            pageNumber={pageNumber}
            width={735}
            noData={
              <div className="text-white">⚠️ Failed to load pdf file</div>
            }
          />
          <ButtonCloseModal
            action={() => setIsOpenResume(false)}
            position="left-1 -top-9"
            customStyle="z-20 text-white absolute active:scale-105"
          />
          <a
            href={`/assets/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute z-20 block font-normal text-white hover:underline right-4 -top-8 w-max"
          >
            Open in a new tab
          </a>
        </Document>
      </div>
    </div>
  );
};

export default ViewResume;
