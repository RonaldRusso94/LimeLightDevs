import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";

const Layout = ({ children, className }) => {
  return (
    <>
      <nav>
        <TopNavbar />
        <Navbar />
      </nav>
      <main
        className={`mt-8 md:mt-12 lg:mt-20 w-11/12 lg:w-9/12 xl:w-8/12 mx-auto ${className}`}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
