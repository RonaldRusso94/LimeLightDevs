import Link from "next/link";

const NavItem = (props) => {
  return (
    <li className="flex mr-1">
      <Link href={props.href}>
        <a className="block p-2 mr-1 cursor-pointer hover:opacity-75">
          {props.children}
        </a>
      </Link>

      {props.dot !== false ? (
        <span className="hidden md:flex text-gray-600 items-center mt-1">
          &#9679;
        </span>
      ) : null}
    </li>
  );
};

export default NavItem;
