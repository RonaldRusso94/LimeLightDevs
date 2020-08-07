import Carousel from "../components/Carousel";

import Layout from "../components/layout/Layout";
import Hero from "../components/Hero";
import Button from "../components/common/Button";
import PackageDeal from "../components/PackageDeal";
import Packages from "../components/Packages";
<<<<<<< HEAD
import ContactFormSecondary from "../components/ContactFormSeconday";
=======
>>>>>>> ContactFormPrimary
import ContactFormPrimary from "../components/ContactFormPrimary";

class index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="md:mx-8 mx-1 bg-green-400 p-4">
          Index.js
          {/* <div className="md:mx-8 mx-2"> */}
          <Hero />
          <Packages />
<<<<<<< HEAD
          <ContactFormSecondary />
=======
>>>>>>> ContactFormPrimary
          <ContactFormPrimary />
        </div>
      </Layout>
    );
  }
}

export default index;
