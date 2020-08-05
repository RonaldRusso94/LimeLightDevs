import Carousel from "../components/Carousel";

const Hero = () => {
  return (
    <div className="">
      <div className="flex px-10 py-12 bg-white justify-between">
        <div className="w-1/2 mr-8 flex justify-center flex-col">
          <h1 className="text-3xl md:text-5xl mb-4 leading-tight font-bold">
            Website Development For Your Business or Product
          </h1>
          <p className="mb-2">
            Limelight is a web development agency specializing in designing and
            building amazing websites for all your website needs.
          </p>
          <ul className="ml-4 mb-2">
            <li className="">
              <span className="mr-2">&#8594;</span> 100% Customer Satisfaction
            </li>
            <li className="">
              <span className="mr-2">&#8594;</span> Award winning
              designers/developers
            </li>
            <li className="">
              <span className="mr-2">&#8594;</span> Unique designs
            </li>
          </ul>
          <p className="">
            We rated <span className="font-bold">8.9</span> out of{" "}
            <span className="font-bold">10</span> ⭐⭐⭐⭐⭐ served 1248+
            customers
          </p>
          <p></p>
        </div>

        <div className="w-1/2">
          <div className="font-none shadow-xl">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
