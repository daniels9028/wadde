import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="fixed w-full left-0 top-0 bg-white shadow-md">
      <div className="container mx-auto h-20 lg:px-10 px-4 flex flex-row justify-between items-center">
        <div className="flex flex-row gap-4 items-center">
          <img src={logo} alt="logo" className="w-6 h-6" />
          <h1 className="text-lg font-bold">Wadde</h1>
        </div>
        <ul className="lg:flex hidden flex-row items-center gap-8 cursor-pointer font-semibold tracking-wide">
          <li>All Pages</li>
          <li>Pricing</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
        <button className="bg-[#F15757] text-white rounded-full py-2 px-8 tracking-wide hover:bg-white hover:text-black border-2 hover:border-[#F15757] transition-all duration-200">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
