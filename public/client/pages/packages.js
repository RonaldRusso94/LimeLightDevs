import Layout from "../components/layout/Layout";
import Packages from "../components/Packages";
import ContactFormPrimary from "../components/ContactFormPrimary";

const packages = () => {
  return (
    <Layout>
      <div className="md:mx-8 mx-1 bg-green-400 p-4">
        <Packages />
        <ContactFormPrimary />
      </div>
    </Layout>
  );
};

export default packages;
