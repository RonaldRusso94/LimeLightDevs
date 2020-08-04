import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import Logo from "../common/Logo";
import NavItem from "./NavItem.js";
import Form from "../common/Form";

export const toggleClass = (elementId, classArray) => {
  classArray.forEach((cls) => {
    document.getElementById(elementId).classList.toggle(cls);
  });
};

export const addClass = (elementId, classArray) => {
  classArray.forEach((cls) => {
    document.getElementById(elementId).classList.add(cls);
  });
};

export const removeClass = (elementId, classArray) => {
  classArray.forEach((cls) => {
    document.getElementById(elementId).classList.remove(cls);
  });
};

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const navClasses = [];

  const handleMobileDropdown = (toggled) => {
    if (toggled) {
      toggleClass("navigation", ["hidden"]);

      removeClass("nav", ["flex-row"]);
      removeClass("form", ["w-3/6"]);

      addClass("navigation", ["mt-4"]);
      addClass("nav", ["flex-col", "justify-center"]);
      addClass("form", ["mt-4", "justify-center", "w-3/4"]);
      // open a menu
      return;
    } else {
      // close a menu
      toggleClass("navigation", ["hidden"]);

      removeClass("nav", ["flex-col", "justify-center"]);
      removeClass("navigation", ["mt-4"]);
      removeClass("form", ["mt-4", "justify-center", "w-3/4"]);

      addClass("nav", ["flex-row"]);
      addClass("form", ["w-3/6"]);
    }
  };

  return (
    <nav className="md:flex bg-gray-800 text-white w-full z-10 p-3 px-6 fixed">
      <div
        className="flex justify-between items-center w-full md:w-11/12 mx-auto"
        id="nav"
      >
        <div>
          <Logo />
        </div>
        <div className="w-3/6 md:w-4/12" id="form">
          <Form />
        </div>

        <ul
          id="navigation"
          className="hidden md:flex items-center justify-center flex-row"
        >
          <NavItem href="/">Home</NavItem>
          <NavItem href="/services">Services</NavItem>
          <NavItem href="/portfolio" dot={false}>
            Portfolio
          </NavItem>
        </ul>

        <div className="md:hidden">
          <Hamburger
            label="Show navagation menu"
            rounded
            color="white"
            size={24}
            onToggle={handleMobileDropdown}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
