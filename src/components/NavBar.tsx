import React from "react";
import "./styles.css";
import logo from "../assets/logo.jpeg";
type Props = {};

const NavBar = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="nav-container z-0 bg-[#d6d2b7] sticky top-0"
      style={{ zIndex: 1000000 }}
    >
      <div className="flex justify-center py-1">
        <div className="lg:w-2/12 w-1/2 lg:flex flex">
          <div className="lg:p-3 py-4 pl-2">
            {" "}
            <a href="/">
            <h1 className="text-black text-5xl font-bold tracking-tight md:text-6xl xl:text-4xl">
                ICEKA
              </h1>
            </a>{" "}
          </div>
        </div>
        <div className="lg:w-7/12 p-4 py-6">
          <ul className="lg:flex hidden justify-between text-black">
            <li className="px-2 text-md font-normal">
              {" "}
              <a href="/">Home</a>{" "}
            </li>
            <li className="px-2 text-md font-normal">
              {" "}
              <a href="/about">About Us</a>{" "}
            </li>
            <li className="px-2 text-md font-normal">
              {" "}
              <a href="/team">Our Team</a>{" "}
            </li>
            <li className="px-2 text-md font-normal">
              {" "}
              <a href="/challenges">E-Lab Challenges</a>{" "}
            </li>
            <li className="px-2 text-md font-normal">
              {" "}
              <a href="/solution">Solution</a>{" "}
            </li>
          </ul>
        </div>
        <div className="lg:hidden w-1/2">
          <button
            type="button"
            className="block text-black hover:text-gray-300 focus:text-gray-300 focus:outline-none float-right pr-4 py-5"
            onClick={handleToggle}
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 19 19"
            >
              {isOpen ? (
                <path
                  className="fill-current"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 8h14v2H5zm0 5h14v2H5zm0 5h14v2H5z"
                />
              ) : (
                <path
                  className="fill-current"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
                />
              )}
            </svg>
          </button>
          {isOpen && (
            <div className="bg-[#d6d2b7] p-2">
              <div className="navigations">
                <ul className="text-black">
                  <li className="py-2">
                    <a href="/">Home</a>
                  </li>
                  <li className="py-2">
                  <a href="/about">About Us</a>
                  </li>
                  <li className="py-2">
                  <a href="/team">Our Team</a>
                  </li>
                  <li className="py-2">
                  <a href="/challenges">E-Lab Challenges</a>
                  </li>
                  <li className="py-2">
                    <a href="/solution">Solution</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;