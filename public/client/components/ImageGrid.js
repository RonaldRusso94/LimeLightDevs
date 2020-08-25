import React from "react";

const ImageGrid = ({
  children,
  className,
  content,
  title,
  description,
  img,
}) => {
  return (
    <div className={`${className} flex flex-col my-4 sm:my-0`}>
      <div className="sm:w-1/2 flex flex-col items-center justify-center">
        {content}
        <h1 className="text-2xl">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="sm:w-1/2 flex flex-col items-center justify-center">
        <img className="w-full" src={img} alt="cat" />
      </div>
    </div>
  );
};

export default ImageGrid;
