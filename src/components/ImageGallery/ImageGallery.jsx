import React from "react";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div>
      {images.map((image) => (
        <div key={image.id}>
          <img
            src={image.urls.small} // Тут використовуй ключ urls.small для зображення
            alt={image.alt_description} // Або image.description
            onClick={() => onImageClick(image.urls.full)} // Можливо ти захочеш відкрити велике зображення у модальному вікні
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
