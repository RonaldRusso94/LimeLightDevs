import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
