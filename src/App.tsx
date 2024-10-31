import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import toast from "react-hot-toast";
import { ImageURLs } from "./components/ImageCard/ImageCard";
type Image = {
  id: string;
  urls: ImageURLs;
  tags: string;
  largeImageURL: string;
};

const ACCESS_KEY = "NZzln6oib1vGq4GTUh-xLWCBSAGPWlk4hmOt9IF-4y8";

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const fetchImages = async (): Promise<void> => {
    if (!query) return;
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get<{ results: Image[] }>(
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

  const handleSearchSubmit = (newQuery: string): void => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const openModal = (largeImageURL: string): void => {
    setModalImage(largeImageURL);
    setShowModal(true);
  };

  const closeModal = (): void => {
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
