import Layout from "../components/layout/Layout";
import Packages from "../components/Packages";
import ContactFormPrimary from "../components/ContactFormPrimary";

const packages = () => {
  return (
    <Layout>
        <Packages />
        <ContactFormPrimary />
    </Layout>
  );
};

export default packages;
