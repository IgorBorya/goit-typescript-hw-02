import React from "react";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className={s.gallery}>
      {images.map((image) => (
        <div className={s.galleryItem} key={image.id}>
          <img
            src={image.urls.small}
            alt={image.alt_description}
            onClick={() => onImageClick(image.urls.full)}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
