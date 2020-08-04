import Carousel from "../components/common/Carousel";

class carousalExample extends React.Component {
  render() {
    const images = [
      "https://via.placeholder.com/400x200",
      "https://via.placeholder.com/400x200",
      "https://via.placeholder.com/400x200",
      "https://via.placeholder.com/400x200",
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
          <div className="bg-blue-500">
            <Carousel images={images}/>
          </div>
        </div>
      </div>
    );
  }
}

export default carousalExample;
