import React from "react";
import "./styles.css";
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
              Logo
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
              <a href="/projects">About Us</a>{" "}
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
            className="block text-white hover:text-gray-300 focus:text-gray-300 focus:outline-none float-right pr-4 py-5"
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
            <div className="bg-[#00A3FF] p-2">
              <div className="navigations">
                <ul className="text-white">
                  <li className="py-2">
                    <a href="/">Home</a>
                  </li>
                  <li className="py-2">
                    <a href="/projects">Projects</a>
                  </li>
                  <li className="py-2">
                    <a href="/expertize">Experts</a>
                  </li>
                  <li className="py-2">
                    <a href="/partners">Partners</a>
                  </li>
                  <li className="py-2">
                    <a href="/solutions">Solutions</a>
                  </li>
                  <li className="py-2">
                    <a href="/csr">CSR</a>
                  </li>
                </ul>
              </div>
              <div className="lg:w-2/12 lg:p-4 lg:flex mt-2">
                <a
                  href="/contactUs"
                  className="linear hover:bg-blue-700 text-white font-bold py-2 px-9 rounded-full text-sm font-thin"
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;