import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";

const Layout = ({ children, className}) => {
  const containerClasses = className ||  "mx-1 md:mx-8 bg-green-400 px-8 py-4 md:px-12 md:py-8" //"md:mx-8 mx-1 bg-green-400 p-4"
  return (
    <>
      <nav>
        <TopNavbar />
        <Navbar />
      </nav>
      <main className="mt-2">
        <div className={containerClasses}>
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
