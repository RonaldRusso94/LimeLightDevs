import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import Button from "../common/Button";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
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
