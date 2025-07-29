import { createContext, useContext, useState } from "react";

const ImageFullViewContext = createContext();

export const useImageFullView = () => useContext(ImageFullViewContext);

export const ImageFullViewProvider = ({ children }) => {
  const [viewingImage, setViewingImage] = useState(null);

  const openImage = (src) => setViewingImage(src);
  const closeImage = () => setViewingImage(null);

  return (
    <ImageFullViewContext.Provider
      value={{ viewingImage, openImage, closeImage }}
    >
      {children}
    </ImageFullViewContext.Provider>
  );
};
