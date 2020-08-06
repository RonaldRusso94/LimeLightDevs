import Carousel from "../components/Carousel";

import Layout from "../components/layout/Layout";
import Hero from "../components/Hero";
import Button from "../components/common/Button";
import PackageDeal from "../components/PackageDeal";
import Packages from "../components/Packages";
import ContactFormPrimary from "../components/ContactFormPrimary";

class index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="md:mx-8 mx-1">
          {/* <Hero /> */}
          <Packages />
          <ContactFormPrimary />
        </div>
      </Layout>
    );
  }
}

export default index;
