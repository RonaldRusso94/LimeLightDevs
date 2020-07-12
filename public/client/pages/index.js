import Layout from "../components/layout/Layout";
import Carousel from "../components/Carousel";

const index = () => {
  return (
    <div>
      <Layout>
        <div className="flex mt-16">
          <div className="flex w-1/2 items-center justify-center h-12">
            Hello
          </div>
          <div className=" w-1/2">
            <Carousel />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default index;
