import React from "react";
import { useDispatch } from "react-redux";

import { selectImage } from "../../store/actions";

const ImageList = ({ images = [] }) => {
  const dispatch = useDispatch();

  const handleSelectImage = (image) => dispatch(selectImage(image));

  return (
    <div className="images-list grid">
      {images.map((image) => (
        <div
          key={image}
          className="image-item flex shadow"
          onClick={() => handleSelectImage(image)}
        >
          <img className="image" src={image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
