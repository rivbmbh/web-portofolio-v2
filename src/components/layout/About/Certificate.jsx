import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Certificate = () => {
  const certificatedName = [
    "js_dicoding",
    "database_administrator",
    "devops_dicoding",
    "ms_excel",
    "webdev_kominfo",
    "webgis",
  ];
  const [numPages, setNumPages] = useState();
  const [pageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className="w-full px-3 mt-10">
      {/* <h2 className="mb-6 text-3xl font-semibold text-center sm:text-4xl">
        Certificated
      </h2> */}
      <div className="flex flex-wrap justify-center gap-8">
        {certificatedName.map((pdfName, index) => (
          <div key={index + pdfName}>
            <a
              href={`/assets/certificate/${pdfName}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block text-white group w-max"
            >
              <div className="overflow-hidden h-[141px] w-max font-pixel group-hover:scale-105 transition-all ease-in-out duration-300">
                <Document
                  file={`/assets/certificate/${pdfName}.pdf`}
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <Page
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                    pageNumber={pageNumber}
                    width={400}
                    noData={
                      <div className="bg-black ">
                        ⚠️ Failed to load pdf file
                      </div>
                    }
                    loading={<div className="bg-black ">⏳ Loading...</div>}
                    scale={0.5}
                  />
                </Document>
                Page {pageNumber} of {numPages}
              </div>
              {/* Overlay "See more..." */}
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/50 group-hover:opacity-100">
                <span className="text-lg font-semibold text-white">
                  View Certificate
                </span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Certificate;
