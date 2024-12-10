import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FiAlignRight } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <nav className="container flex flex-row items-center justify-between h-20 px-4 mx-auto lg:px-10">
        <div className="flex flex-row items-center gap-4 z-50">
          <img src={logo} alt="logo" className="w-6 h-6" />
          <h1 className="text-lg font-bold">Wadde</h1>
        </div>
        <ul className="flex-row items-center hidden gap-8 font-medium tracking-wide cursor-pointer lg:flex">
          <li>All Pages</li>
          <li>Pricing</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
        <button className="bg-[#F15757] text-white rounded-full py-2 px-8 tracking-wide hover:bg-white hover:text-black border-2 hover:border-[#F15757] transition-all duration-200 lg:block hidden">
          Sign In
        </button>
        <div
          className="block text-3xl transition-all cursor-pointer lg:hidden z-50"
          onClick={() => setNav(!nav)}
        >
          {nav ? <FiX color="black" /> : <FiAlignRight color="black" />}
        </div>
        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="left-0 fixed top-0 w-full min-h-screen z-40 bg-white flex flex-col justify-center items-center gap-8"
        >
          <ul className="flex-col items-center gap-8 font-medium tracking-wide cursor-pointer flex">
            <li>All Pages</li>
            <li>Pricing</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
          <button className="bg-[#F15757] text-white rounded-full py-2 px-8 tracking-wide hover:bg-white hover:text-black border-2 hover:border-[#F15757] transition-all duration-200">
            Sign In
          </button>
        </motion.div>
      </nav>
    </header>
  );
};

export default Navbar;
