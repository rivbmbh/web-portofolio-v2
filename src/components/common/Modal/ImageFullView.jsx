// ImageModal.js
import { useState } from "react";
import { useImageFullView } from "./ImageFullViewContext";
import LoadinDots from "../Effect/LoadingDots";

export default function ImageFullView() {
  const { viewingImage, caption, closeImage } = useImageFullView();
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    // setTimeout(() => {
    //   setLoading(false);
    // }, 5000);
    setLoading(false);
  };

  if (!viewingImage) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center h-screen p-8 text-white font-pixel bg-slate-950/50 backdrop-blur-xs">
      {loading && (
        <LoadinDots className="flex items-center justify-center w-full h-full text-lg font-bold" />
      )}

      <img
        src={viewingImage}
        alt="Zoomed"
        className={`max-w-[90%] max-h-[90%] rounded shadow-xl transition-all duration-300 ${
          loading ? "opacity-0 hidden" : "opacity-100 block"
        }`}
        onClick={closeImage}
        onLoad={handleImageLoad}
      />

      {!loading && (
        <>
          <h2 className="mt-3 text-2xl font-semibold text-center">{caption}</h2>
          <p className="w-full mt-5 text-sm text-center">
            * Click the image to exit full view.
          </p>
        </>
      )}
    </div>
  );
}
