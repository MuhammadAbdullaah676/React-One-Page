import React from "react";

const ImageView = ({ src, alt, className }) => {
  return (
    <span className={className}>
      <img src={src} alt={alt} className="w-full" />
    </span>
  );
};

export default ImageView;
