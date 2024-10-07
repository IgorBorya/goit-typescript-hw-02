import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ largeImageURL, onClose }) => {
  return (
    <Modal
      isOpen={!!largeImageURL}
      onRequestClose={onClose}
      contentLabel="Image Modal"
    >
      <img src={largeImageURL} alt="" />
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default ImageModal;
