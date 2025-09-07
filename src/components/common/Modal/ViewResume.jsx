import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import ButtonCloseModal from "../Button/ButtonCloseModal";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const ViewResume = ({ setIsOpenResume }) => {
  const [numPages, setNumPages] = useState();
  const [pageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs bg-slate-950/60 font-pixel">
      <div className="bg-transparent pb-5 pt-10 max-w-3xl w-[90%] h-[90vh] overflow-scroll snap-proximity rounded">
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
            noData={<div className="">⚠️ Failed to load pdf file</div>}
            loading={<div className="">⏳ Loading...</div>}
          />
          <ButtonCloseModal
            action={() => setIsOpenResume(false)}
            position="left-1 -top-9"
            customStyle="z-20 text-white"
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
