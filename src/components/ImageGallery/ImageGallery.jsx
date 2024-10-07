import React from "react";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <li className={s.galleryItem} key={image.id}>
          <img
            src={image.urls.small}
            alt={image.alt_description}
            onClick={() => onImageClick(image.urls.full)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
