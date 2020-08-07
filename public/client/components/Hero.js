import Carousel from "../components/Carousel";

const Hero = () => {
  return (
    <div className="">
      <div className="lg:flex-row flex-col flex px-8 md:px-12 py-16 md:py-20 bg-white justify-between">
        <div className="w-full lg:w-1/2 mr-8 flex justify-center flex-col">
          <div className="">
            <h1 className="text-3xl md:text-5xl mb-4 leading-tight font-bold">
              Website Development For Your Business or Product
            </h1>
            <div className="text-sm md:text-base w-full lg:w-9/12 mx-0">
              <p className="mb-4">
                Limelight is a web development agency specializing in designing
                and building amazing websites for all your website needs.
              </p>
              <ul className="ml-4 mb-4">
                <li className="">
                  <span className="mr-2">&#8594;</span> 100% Customer
                  Satisfaction
                </li>
                <li className="">
                  <span className="mr-2">&#8594;</span> Award winning
                  designers/developers
                </li>
                <li className="">
                  <span className="mr-2">&#8594;</span> Unique designs
                </li>
              </ul>
              <p className="text-sm mt-3 tracking-wide">
                We rated <span className="font-bold">8.9</span> out of
                <span className="font-bold"> 10 </span> ⭐⭐⭐⭐⭐ served
                <span className="font-bold"> 1248+ </span>
                customers
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/4 lg:w-1/2 mx-auto mt-8 lg:my-auto">
          <div className="font-none shadow-xl">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
