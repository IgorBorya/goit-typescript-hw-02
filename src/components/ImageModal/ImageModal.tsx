import React from "react";
import Modal from "react-modal";
import "./ImageModal.css";

Modal.setAppElement("#root");

type ImageModalProps = {
  largeImageURL: string | null;
  onClose: () => void;
};

const ImageModal: React.FC<ImageModalProps> = ({ largeImageURL, onClose }) => {
  return (
    <Modal
      isOpen={!!largeImageURL}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className="modal"
    >
      <img className="modal_image" src={largeImageURL ?? ""} alt="" />
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default ImageModal;
