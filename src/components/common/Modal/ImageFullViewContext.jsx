import { createContext, useContext, useState } from "react";

const ImageFullViewContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useImageFullView = () => useContext(ImageFullViewContext);

export const ImageFullViewProvider = ({ children }) => {
  const [viewingImage, setViewingImage] = useState(null);
  const [caption, setCaption] = useState("");

  const openImage = (src, caption = "") => {
    setViewingImage(src);
    setCaption(caption);
  };
  const closeImage = () => {
    setViewingImage(null);
    setCaption("");
  };

  return (
    <ImageFullViewContext.Provider
      value={{ viewingImage, openImage, closeImage, caption }}
    >
      {children}
    </ImageFullViewContext.Provider>
  );
};
