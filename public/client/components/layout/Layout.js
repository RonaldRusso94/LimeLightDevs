import Head from "next/head";

import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} | Limelight` : "Limelight"}</title>
      </Head>
      {/* <TopNavbar /> */}
      <Navbar />
      <main className="pt-16 bg-gray-200">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
