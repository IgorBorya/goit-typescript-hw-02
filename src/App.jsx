import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import toast from "react-hot-toast";

const ACCESS_KEY = "7wuvv6rFgDuH5W9-kRiomWYwM2sOVcW4sN60Q_Va3nI"; // Unsplash API ключ

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const fetchImages = async () => {
    if (!query) return;
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=12&client_id=${ACCESS_KEY}`
      );
      if (response.data.results.length === 0) {
        toast.error("No images found. Try a different search.");
        return;
      }
      setImages((prevImages) => [...prevImages, ...response.data.results]);
    } catch (err) {
      setError("Something went wrong. Please try again later.");
      toast.error("Error fetching images.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query !== "") {
      fetchImages();
    }
  }, [query, page]);

  const handleSearchSubmit = (newQuery) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const openModal = (largeImageURL) => {
    setModalImage(largeImageURL);
    setShowModal(true);
  };

  const closeModal = () => {
    setModalImage(null);
    setShowModal(false);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <p>{error}</p>}
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={() => setPage((prevPage) => prevPage + 1)} />
      )}
      {showModal && (
        <ImageModal largeImageURL={modalImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
