import React from "react";

export const ImageCard = ({ image }) => {
  return (
    <div>
      <img src={image.src} alt={image.alt} />
    </div>
  );
};
