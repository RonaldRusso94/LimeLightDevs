const PortfolioGrid = ({ images }) => {
  return (
    <section className="sm:flex flex-wrap justify-center py-4 hidden">
      {images.map((image, i) => (
        <div className="py-2 sm:w-3/12 px-2" key={i}>
          <img src={image.value} className=" w-full" />
        </div>
      ))}
    </section>
  );
};

export default PortfolioGrid;
