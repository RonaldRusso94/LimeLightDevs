import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import Button from "../common/Button";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="bg-gray-200 w-full z-10 sm:flex px-2 sm:px-4 lg:px-8">
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
          <Link href="/">
            <a className="block p-2" href="#">
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <a className="block p-2" href="#">
              Services
            </a>
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            <a className="block p-2" href="#">
              Portfolio
            </a>
          </Link>
        </li>
        <li>
          <Link href="/packages">
            <a className="block p-2" href="#">
              Packages
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
