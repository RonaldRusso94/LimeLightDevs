const ImageGrid = ({ className, title, description, img }) => {
  return (
    <div className={`${className} flex flex-col my-4 sm:my-0`}>
      <div className="sm:w-5/12 mx-auto flex flex-col items-center justify-center">
        <h1 className="text-2xl">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="sm:w-5/12 mx-auto flex flex-col items-center justify-center">
        <img className="w-full" src={img} alt="cat" />
      </div>
    </div>
  );
};

export default ImageGrid;
