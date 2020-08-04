import Carousel from "../components/Carousel";
import Layout from "../components/layout/Layout";

class index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="flex pt-4">
          <div className=" text-center w-1/2 bg-red-100 px-4">
            <h1 className=" text-4xl">Short Striking Bold Text</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, itaque?
            </p>
          </div>

          <div className="w-1/2">
            <div className="bg-blue-500 ">
              <Carousel />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default index;
