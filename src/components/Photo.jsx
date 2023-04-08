import { useEffect, useState } from "react";
import axios from "axios";
import "./Photo.css";

const Photo = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  const getPhotos = async (page) => {
    try {
      const photos = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=8`
      );
      return photos.data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoadMorePhotos = async () => {
    try {
      const loadMorePhotos = await getPhotos(page);
      setPhotos([...photos, ...loadMorePhotos]);
      setPage((page) => page + 1);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleLoadMorePhotos();
  }, []);
  return (
    <div>
      <div className="listPhotos">
        {photos &&
          photos.map((photo, index) => (
            <div key={photo.id}>
              <img src={photo.download_url} alt="image" />
            </div>
          ))}
      </div>
      <button onClick={handleLoadMorePhotos}>Load more</button>
    </div>
  );
};

export default Photo;
