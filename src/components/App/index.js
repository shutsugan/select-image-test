import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ImageList from "../ImageList";
import SelecedImage from "../SelecedImage";
import Loader from "../Loader";
import { fetchImages } from "../../store/actions";

const App = () => {
  const dispatch = useDispatch();

  const images = useSelector((state) => state.images);
  const selectedImage = useSelector((state) => state.selectedImage);
  const previousImage = useSelector((state) => state.previousSelectedImage);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    const url = "https://abihome-test.herokuapp.com/test/images";
    fetchImages(url)(dispatch);
  }, [dispatch]);

  const displayError = <span className="error">Something went wrong!</span>;

  return (
    <div className="app">
      <ImageList images={images} />
      <div className="flex mb-1">
        {previousImage && (
          <SelecedImage label="Previous Image" image={previousImage} />
        )}
        {selectedImage && (
          <SelecedImage label="Selected Image" image={selectedImage} />
        )}
      </div>
      {loading && <Loader />}
      {error && displayError}
    </div>
  );
};

export default App;
