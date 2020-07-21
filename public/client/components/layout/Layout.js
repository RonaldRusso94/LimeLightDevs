import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <nav>
        <TopNavbar />
        <Navbar />
      </nav>
      {children}
    </>
  );
};

export default Layout;
