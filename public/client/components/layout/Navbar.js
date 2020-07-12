import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import Button from "../common/Button";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className=" relative bg-gray-200 flex items-center justify-between">
      <a className="whitespace-no-wrap font-semibold" href="#">
        LimeLight Devs
      </a>
      <nav className="flex">
        <div className="sm:hidden">
          <Hamburger
            label="Show navagation menu"
            rounded
            color="black"
            size={24}
            onToggle={(toggled) => {
              if (toggled) {
                document.getElementById("a").classList.toggle("hidden");
                // open a menu
                return;
              } else {
                // close a menu
                document.getElementById("a").classList.toggle("hidden");
              }
            }}
          />
        </div>
      </nav>
      <ul
        className="bg-gray-200 hidden sm:flex absolute sm:relative w-full sm:w-auto  items-center top-98 sm:py-6"
        id="a"
      >
        <li className="mr-5">
          <a className="font-medium" href="#">
            Home
          </a>
        </li>
        <li className="mr-5">
          <a className="font-medium" href="#">
            Services
          </a>
        </li>
        <li className="mr-5">
          <a className="font-medium" href="#">
            Portfolio
          </a>
        </li>
        <li className="mr-5">
          <a className="font-medium" href="#">
            Packages
          </a>
        </li>
        <li className="mr-5">
          <a className="font-medium" href="#">
            How It Works
          </a>
        </li>
        <li className="mr-5">
          <Button>Get A Quote</Button>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
