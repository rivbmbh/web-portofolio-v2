// ImageModal.js
import { useImageFullView } from "./ImageFullViewContext";

export default function ImageFullView() {
  const { viewingImage, caption, closeImage } = useImageFullView();

  if (!viewingImage) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center h-screen p-8 text-white bg-slate-950/50 backdrop-blur-xs font-pixel"
      onClick={closeImage}
    >
      <img
        src={viewingImage}
        alt="Zoomed"
        className="max-w-[90%] max-h-[90%] rounded shadow-xl"
      />
      <h2 className="mt-3 text-2xl font-semibold text-center">{caption}</h2>

      <p className="w-full mt-5 text-sm text-center">
        * Click the image to exit full view.
      </p>
    </div>
  );
}
