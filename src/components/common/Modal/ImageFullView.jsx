// ImageModal.js
import { useImageFullView } from "./ImageFullViewContext";

export default function ImageFullView() {
  const { viewingImage, closeImage } = useImageFullView();

  if (!viewingImage) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={closeImage}
    >
      <img
        src={viewingImage}
        alt="Zoomed"
        className="max-w-[90%] max-h-[90%] rounded shadow-xl"
      />
    </div>
  );
}
