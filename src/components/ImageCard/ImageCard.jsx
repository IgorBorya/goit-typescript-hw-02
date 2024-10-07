import React from "react";
import s from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  return (
    <div className={s.imageCard} onClick={onClick}>
      <img src={image.webformatURL} alt={image.tags} />
    </div>
  );
};

export default ImageCard;
