import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <nav>
        <TopNavbar />
        <Navbar />
      </nav>
      <main className="mt-2">{children}</main>
    </>
  );
};

export default Layout;
