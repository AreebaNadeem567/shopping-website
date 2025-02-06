"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-pink-300 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 sm:px-8 lg:px-10 relative">
        {/* Logo */}
        <h1 className="text-xl text-gray-800 font-bold">My Store</h1>

        {/* Menu Toggle Button for small screens */}
        <button
          className="lg:hidden text-gray-800 focus:outline-none text-3xl transition duration-300"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="navbar-menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navbar Links */}
        <div
          id="navbar-menu"
          role="navigation"
          className={`${
            isOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row lg:items-center w-full lg:w-auto bg-pink-400 lg:bg-transparent absolute top-full left-0 lg:relative lg:top-0 z-20 sm:px-4 md:px-6 lg:px-8 transition-all duration-300`}
        >
          {["HOME", "ABOUT", "PRODUCTS", "CONTACT"].map((link) => (
            <Link
              key={link}
              className="text-gray-800 hover:text-black-400 transition duration-300 py-2 px-4 lg:py-0 lg:mx-2 sm:py-1 sm:px-2"
              href={`#${link.toLowerCase()}`}
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;