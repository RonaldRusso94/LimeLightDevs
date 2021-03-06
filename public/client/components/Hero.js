import Carousel from "../components/Carousel";

const Hero = () => {
  const slides = [
    {
      src: "http://placekitten.com/g/400/200",
      alt: "A cute image of a kitten",
    },
    {
      src: "http://placekitten.com/g/400/200",
      alt: "A cute image of a kitten",
    },
    {
      src: "http://placekitten.com/g/400/200",
      alt: "A cute image of a kitten",
    },
  ];

  return (
    <div className="xl:flex items-center  sm:p-10 p-4 bg-gray-300 border-2 border-indigo-800">
      <div className="w-full xl:w-1/2 text-center xl:px-4">
        <div>
          <h1 className="text-4xl md:text-5xl mb-8 leading-tight font-bold tracking-tight">
            Website Development For Your Business or Product
          </h1>
          <div className="text-sm md:text-base">
            <p className="mb-6">
              Limelight is a web development agency specializing in designing
              and building amazing websites for all your website needs.
            </p>
            <ul className="ml-4 mb-6">
              <li>
                <p>
                  <span>&#8594;</span> 100% Customer Satisfaction
                </p>
              </li>
              <li>
                <p>
                  <span>&#8594;</span> Award winning designers/developers
                </p>
              </li>
              <li>
                <p>
                  <span>&#8594;</span> Unique designs
                </p>
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

      <div className="w-full mt-4 lg:mt-0 md:w-10/12 xl:w-6/12 mx-auto">
        <div className="font-none shadow-xl">
          <Carousel slides={slides} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
