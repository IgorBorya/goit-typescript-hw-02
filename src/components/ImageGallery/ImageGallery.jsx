import React from "react";
import { ImageCard } from "./ImageCard";

export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};
