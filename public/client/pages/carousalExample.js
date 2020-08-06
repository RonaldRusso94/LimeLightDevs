import Carousel from "../components/common/Carousel";

class carousalExample extends React.Component {
  render() {
    const images = [
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/101x100",
      "https://via.placeholder.com/102x100",
      "https://via.placeholder.com/103x100",
      "https://via.placeholder.com/104x100",
      "https://via.placeholder.com/105x100",
      "https://via.placeholder.com/106x100",
      "https://via.placeholder.com/107x100",
      "https://via.placeholder.com/108x100",
      "https://via.placeholder.com/109x100",
    ]
  
    return (
      <div className="centerAlign">
        <div className=" text-center w-1/2 bg-red-100 px-4">
          <h1 className=" text-4xl">Short Striking Bold Text</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, itaque?
          </p>
        </div>

        <div className="w-1/2">
            <Carousel images={images} imagesPerSlide="5" 
              onMouseEnter={() => console.log("test")}
              onMouseLeave={() => console.log("test")}
              onClick={() => console.log("test")}
            />
        </div>
      </div>
    );
  }
}

export default carousalExample;
