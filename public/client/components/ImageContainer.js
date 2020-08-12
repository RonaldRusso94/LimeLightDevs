import React from "react";

const ImageContainer = ({ children, className, title, description, img }) => {
  return (
    <div className={`${className} flex`}>
      <div className="w-1/2 flex flex-col items-center justify-center">
        <h1 className="text-2xl">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center">
        <p>
          <img src={img} alt="cat" />
        </p>
      </div>
    </div>
  );
};

export default ImageContainer;
