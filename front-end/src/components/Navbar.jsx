import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-red-500 to-gray-600 p-4 shadow-xl backdrop-blur-lg transition-all duration-500">
      <div className="flex items-center justify-between">
        <div className="text-white text-3xl font-extrabold tracking-wider uppercase transition-transform transform hover:scale-110 hover:text-teal-400">
          <Link to="/" onClick={closeMenu} className="hover:text-teal-400 transition-all duration-300 ease-in-out">
            Axel Gumiit
          </Link>
        </div>

    
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-white hover:text-teal-400 transition-all duration-300 ease-in-out transform hover:scale-110">Home</Link>
          <Link to="/projects" className="text-white hover:text-teal-400 transition-all duration-300 ease-in-out transform hover:scale-110">Projects</Link>
          <Link to="/contact" className="text-white hover:text-teal-400 transition-all duration-300 ease-in-out transform hover:scale-110">Contact</Link>
        </div>

    
        <button
          className="md:hidden text-white hover:text-teal-400 transition-all duration-300 ease-in-out focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className={`md:hidden mt-4 transition-all duration-500 ease-in-out ${isOpen ? "block" : "hidden"}`}>
        <Link to="/" onClick={closeMenu} className="block text-white py-3 px-5 rounded-md hover:bg-teal-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110">About</Link>
        <Link to="/projects" onClick={closeMenu} className="block text-white py-3 px-5 rounded-md hover:bg-teal-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110">Projects</Link>
        <Link to="/contact" onClick={closeMenu} className="block text-white py-3 px-5 rounded-md hover:bg-teal-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
