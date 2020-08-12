import Carousel from "../components/Carousel";

import Layout from "../components/layout/Layout";
import Hero from "../components/Hero";
import Button from "../components/common/Button";
import PackageDeal from "../components/PackageDeal";
import Packages from "../components/Packages";
import ContactFormSecondary from "../components/ContactFormSeconday";
import ContactFormPrimary from "../components/ContactFormPrimary";
import * as Image from "../components/Image/Image";

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
          {/* (!) Examples for using the Image Component  */}
          <Image.Container className="mt-10 p-4">
            <Image.Component
              src="http://placekitten.com/g/400/200"
              alt="A cute kitten :D"
            />
            <Image.Section className="px-4 py-2">
              <p>An image</p>
            </Image.Section>
          </Image.Container>
          {/* <ContactFormPrimary /> */}
        </div>
      </Layout>
    );
  }
}

export default index;
