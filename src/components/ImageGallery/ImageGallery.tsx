import React from "react";
import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { ImageURLs } from "../ImageCard/ImageCard";

type ImageGalleryProps = {
  images: {
    id: string;
    urls: ImageURLs;
    tags: string;
    largeImageURL: string;
  }[];
  onImageClick: (largeImageURL: string) => void;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <li className={s.galleryItem} key={image.id}>
          <ImageCard image={image} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
