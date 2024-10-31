import React from "react";
import s from "./ImageCard.module.css";

export type ImageURLs = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
};

type ImageCardProps = {
  image: {
    urls: ImageURLs; // {} 'blablabla'
    tags: string;
  };
  onClick: (largeImageURL: string) => void;
};

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={s.imageCard} onClick={() => onClick(image.urls.full)}>
      <img src={image.urls.thumb} alt={image.tags} />
    </div>
  );
};

export default ImageCard;
