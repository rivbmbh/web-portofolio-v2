import { useEffect, useRef, useState, lazy, Suspense } from "react";

const LazyPdfPreview = lazy(() => import("./LazyPdfPreview"));

const CertificateCard = ({ pdfName, title }) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "100px" }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={cardRef} className="w-auto">
      <a
        href={`/assets/certificate/${pdfName}.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Lihat sertifikat ${title}`}
        className="relative block text-white group w-max mx-auto"
      >
        <div className="overflow-hidden h-35.25 w-[200px] font-pixel group-hover:scale-105 transition-all ease-in-out duration-300 bg-gray-950 border border-slate-700 rounded-sm">
          {shouldLoad ? (
            <Suspense
              fallback={
                <div className="w-[200px] h-[141px] flex items-center justify-center bg-black/80 text-xs text-white">
                  ⏳ Loading preview...
                </div>
              }
            >
              <LazyPdfPreview pdfName={pdfName} />
            </Suspense>
          ) : (
            <div className="w-[200px] h-[141px] flex flex-col items-center justify-center p-3 text-center bg-gray-900 text-white">
              <span className="text-2xl mb-1">📜</span>
              <span className="text-xs text-slate-300 line-clamp-2">{title}</span>
              <span className="text-[10px] text-slate-500 mt-2">Scroll to preview</span>
            </div>
          )}
        </div>
        {/* Overlay "View Certificate" */}
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/60 group-hover:opacity-100 rounded-sm">
          <span className="text-base font-semibold text-white">
            View Certificate
          </span>
        </div>
      </a>
    </div>
  );
};

export default CertificateCard;
