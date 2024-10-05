import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchImages = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=660478&r2luvSt2sA0VJUdxLP5-U8CawQjqRV5RxmAWPFmQLRc&q=${query}&image_type=photo&per_page=12&page=${page}`
      );
      const newImages = response.data.hits;

      if (newImages.length === 0) {
        toast.error("No images found!");
      } else {
        setImages((prevImages) => [...prevImages, ...newImages]);
      }
    } catch (error) {
      setError("Failed to fetch images.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchImages();
    }
  }, [query, page]);

  const handleSearchSubmit = (searchQuery) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    selectedImage(null);
  };

  return <></>;
}
