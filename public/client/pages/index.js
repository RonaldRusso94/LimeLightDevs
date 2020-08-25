import Carousel from "../components/Carousel";

import Layout from "../components/layout/Layout";
import Hero from "../components/Hero";
import Button from "../components/common/Button";
import PackageDeal from "../components/PackageDeal";
import Packages from "../components/Packages";
import ContactFormSecondary from "../components/ContactFormSeconday";
import ContactFormPrimary from "../components/ContactFormPrimary";
import ImageGrid from "../components/ImageGrid";

class index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="md:mx-8 mx-1 bg-green-400 p-4">
          Index.js
          {/* <div className="md:mx-8 mx-2"> */}
          <Hero />
          <ContactFormSecondary />
          <Packages />
          <ImageGrid
            title={"Website"}
            className="sm:flex-row"
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facilis enim molestias non quo excepturi."
            }
            img={"http://placekitten.com/g/400/200"}
          />
          <ImageGrid
            className="sm:flex-row-reverse"
            title={"Mobile Apps"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facilis enim molestias non quo excepturi."
            }
            img={"http://placekitten.com/g/400/200"}
          />
          {/* <ContactFormPrimary /> */}
        </div>
      </Layout>
    );
  }
}

export default index;
