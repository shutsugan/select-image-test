import React from "react";

const SelecedImage = ({ label, image }) => (
  <div className="selected-image shadow">
    <h2>{label}</h2>
    <img src={image} alt="" />
  </div>
);

export default SelecedImage;
