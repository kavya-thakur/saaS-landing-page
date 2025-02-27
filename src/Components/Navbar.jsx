import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { RiCloseFill, RiMenu3Line } from "@remixicon/react";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggleMenu = () => {
    setisOpen(!isOpen);
  };
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 m-2">
      <div className="text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-500">
        {/* left logo  */}
        <img width={120} height={24} src={logo} alt="logo" />

        {/* center links (hidden on mobile) */}
        <div className="hidden md:flex space-x-6 ">
          <a className={`hover:text-neutral-200`}>how it works</a>
          <a className={`hover:text-neutral-200`}>Pricing</a>
          <a className={`hover:text-neutral-200`}>Testimonial</a>
        </div>
        {/* right button (hidden on mobile ) */}

        <div className="hidden md:flex space-x-4 items-center ">
          <a className={"hover:text-neutral-200"}> login </a>
          <a
            className={
              "border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition"
            }
          >
            {" "}
            Get a Demo{" "}
          </a>
          <a
            className={
              "border border-blue-700 text-black py-2 px-4 rounded-lg bg-white transition"
            }
          >
            {" "}
            Start Free Trial{" "}
          </a>
        </div>
        {/* hamburger icon for mobile  */}
        <div className="md:hidden ">
          <button
            onClick={toggleMenu}
            className="text-white  focus:outline-none"
            aria-label={isOpen ? "Close Menu" : "Open Mneu"}
          >
            {isOpen ? <RiCloseFill /> : <RiMenu3Line />}
          </button>
        </div>
      </div>
      {/* { for mobile menu} */}
      {isOpen && (
        <div className="md:hidden bg-neutral-900/60 backdrop-blur-md border  border-neutral-800 p-4 rounded-xl mt-2 ">
          <div className="flex flex-col space-y-4 ">
            <a href="" className="hover:text-neutral-200 text-white font-medium">
              Product
            </a>
            <a href="" className="hover:text-neutral-200 text-white font-medium">
              Pricing
            </a>
            <a href="" className="hover:text-neutral-200 text-white font-medium">
              Resource
            </a>
            <a
              className={
                "border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition text-center font-semibold"
              }
            >
              {" "}
              Log in{" "}
            </a>
            <a
              className={
                "border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition text-center font-semibold"
              }
            >
              {" "}
              Get a Demo{" "}
            </a>
            <a
              className={
                "text-black py-2 px-4 rounded-lg bg-white  transition text-center font-semibold"
              }
            >
              {" "}
              Start Free Trial{" "}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
