import Carousel from "../components/Carousel";

import Layout from "../components/layout/Layout";
import Hero from "../components/Hero";
import Button from "../components/common/Button";
import PackageDeal from "../components/PackageDeal";
import Packages from "../components/Packages";
import ContactFormSecondary from "../components/ContactFormSeconday";
import ContactFormPrimary from "../components/ContactFormPrimary";
import ImageContainer from "../components/ImageContainer";

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
          <ImageContainer className="flex flex-row-reverse">
            <img src="http://placekitten.com/g/400/200" alt="image" />
            <p>An image</p>
          </ImageContainer>
          {/* <ContactFormPrimary /> */}
        </div>
      </Layout>
    );
  }
}

export default index;
