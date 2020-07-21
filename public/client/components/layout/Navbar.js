import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import Button from "../common/Button";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    // <header className="  bg-gray-200">
    //   <nav className="relative flex items-center justify-between mx-6">
    //     <a className="whitespace-no-wrap font-semibold" href="#">
    //       LimeLight Devs
    //     </a>
    //     <div className="flex">
    //       <div className="sm:hidden">
    //         <Hamburger
    //           label="Show navagation menu"
    //           rounded
    //           color="black"
    //           size={24}
    //           onToggle={(toggled) => {
    //             if (toggled) {
    //               document.getElementById("a").classList.toggle("hidden");
    //               // open a menu
    //               return;
    //             } else {
    //               // close a menu
    //               document.getElementById("a").classList.toggle("hidden");
    //             }
    //           }}
    //         />
    //       </div>
    //     </div>
    //     <ul
    //       className="bg-gray-200 hidden sm:flex absolute sm:relative w-full sm:w-auto  items-center top-98 sm:py-6 z-10"
    //       id="a"
    //     >
    //       <li className="mr-5">
    //         <a className="font-medium" href="#">
    //           Home
    //         </a>
    //       </li>
    //       <li className="mr-5">
    //         <a className="font-medium" href="#">
    //           Services
    //         </a>
    //       </li>
    //       <li className="mr-5">
    //         <a className="font-medium" href="#">
    //           Portfolio
    //         </a>
    //       </li>
    //       <li className="mr-5">
    //         <a className="font-medium" href="#">
    //           Packages
    //         </a>
    //       </li>
    //       <li className="mr-5">
    //         <a className="font-medium" href="#">
    //           How It Works
    //         </a>
    //       </li>
    //       <li className="mr-5">
    //         <Button>Get A Quote</Button>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
    <header className="bg-gray-200 w-full z-10 sm:flex">
      <div className="flex justify-between items-center">
        <a href="#">Limelight Devs</a>

        <div className="sm:hidden">
          <Hamburger
            label="Show navagation menu"
            rounded
            color="black"
            size={24}
            onToggle={(toggled) => {
              if (toggled) {
                document
                  .getElementById("navigation")
                  .classList.toggle("hidden");
                // open a menu
                return;
              } else {
                // close a menu
                document
                  .getElementById("navigation")
                  .classList.toggle("hidden");
              }
            }}
          />
        </div>
      </div>

      <ul id="navigation" className="hidden sm:flex ml-auto">
        <li>
          <a className="block p-2" href="#">
            Home
          </a>{" "}
        </li>
        <li>
          <a className="block p-2" href="#">
            Services
          </a>
        </li>
        <li>
          <a className="block p-2" href="#">
            Portfolio
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
