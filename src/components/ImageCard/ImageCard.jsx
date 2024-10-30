import React from "react";
import s from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  return (
    <div className={s.imageCard} onClick={onClick}>
      <img src={image.urls.thumb} alt={image.tags} />
    </div>
  );
};

export default ImageCard;
