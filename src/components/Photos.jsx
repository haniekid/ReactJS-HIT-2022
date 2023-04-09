import { useEffect, useState } from "react";
import axios from "axios";
import "./Photos.css";
// import * as ReactBootStrap from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  const getPhotos = async (page) => {
    try {
      const photos = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=8`
      );
      setLoading((loading) => false);
      return photos.data;
    } catch (error) {
      console.error(error);
    }
  };

  // window.onload = function () {
  //   console.log("Page loaded");
  //   setLoading((loading2) => false);
  // };

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
      {loading ? (
        <div style={{ padding: "2rem", fontSize: "3rem" }}>
          <Spinner animation="border" variant="primary" />
          <Spinner animation="border" variant="secondary" />
          <Spinner animation="border" variant="success" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="warning" />
        </div>
      ) : (
        ""
      )}

      {/* {loading2 ? (
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      ) : (
        " "
      )} */}

      <div className="listPhotos">
        {photos.length > 0
          ? photos.map((photo, index) => (
              <div key={photo.id}>
                <img src={photo.download_url} alt="image" />
              </div>
            ))
          : ""}
      </div>

      <button onClick={handleLoadMorePhotos}>Load more</button>
    </div>
  );
};

export default Photos;
