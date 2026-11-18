import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const LazyPdfPreview = ({ pdfName }) => {
  const [numPages, setNumPages] = useState(1);

  return (
    <Document
      file={`/assets/certificate/${pdfName}.pdf`}
      onLoadSuccess={({ numPages: total }) => setNumPages(total)}
      loading={
        <div className="w-[200px] h-[141px] flex items-center justify-center bg-black/80 text-xs text-white">
          ⏳ Loading...
        </div>
      }
      noData={
        <div className="w-[200px] h-[141px] flex items-center justify-center bg-black/80 text-xs text-red-400">
          ⚠️ Failed to load
        </div>
      }
    >
      <Page
        renderAnnotationLayer={false}
        renderTextLayer={false}
        pageNumber={1}
        width={400}
        scale={0.5}
      />
      <div className="text-[10px] text-center text-slate-300 py-0.5 bg-black/70">
        Page 1 of {numPages}
      </div>
    </Document>
  );
};

export default LazyPdfPreview;
