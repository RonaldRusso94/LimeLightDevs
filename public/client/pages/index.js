import Layout from "../components/layout/Layout";
import Carousel from "../components/Carousel";

const index = () => {
  return (
    <div>
      <div className="flex">
        <div className="bg-red-200 w-1/2 flex-none">Hello</div>
        <div className="bg-gray-400 w-1/2 flex-none">
          <Carousel />
        </div>
      </div>
      <div>
        <h1>THIS IS A BLOCK ELEMENT</h1>
      </div>
    </div>
  );
};

export default index;
