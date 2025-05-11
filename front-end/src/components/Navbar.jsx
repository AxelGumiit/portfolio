import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext"; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`p-4 shadow-xl backdrop-blur-lg transition-all duration-500 
      ${darkMode 
        ? "bg-gray-900 text-white" 
        : "bg-gradient-to-r from-red-500 to-gray-600 text-white"}`}>
      
      <div className="flex items-center justify-between">
   
        <div className="text-3xl font-extrabold tracking-wider uppercase transition-transform transform hover:scale-110">
          <Link
            to="/"
            onClick={closeMenu}
            className="hover:text-teal-400 transition-all duration-300 ease-in-out"
          >
            Axel Gumiit
          </Link>
        </div>


        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-teal-400 transition-all duration-300 ease-in-out transform hover:scale-110">Home</Link>
          <Link to="/projects" className="hover:text-teal-400 transition-all duration-300 ease-in-out transform hover:scale-110">Projects</Link>
          <Link to="/contact" className="hover:text-teal-400 transition-all duration-300 ease-in-out transform hover:scale-110">Contact</Link>
   
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="hover:text-yellow-400 transition-transform transform hover:scale-125"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </div>

     
        <button
          className="md:hidden hover:text-teal-400 transition-all duration-300 ease-in-out focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className={`md:hidden mt-4 transition-all duration-500 ease-in-out ${isOpen ? "block" : "hidden"}`}>
        <Link to="/" onClick={closeMenu} className="block py-3 px-5 rounded-md hover:bg-teal-500 transition-all duration-300 transform hover:scale-110">About</Link>
        <Link to="/projects" onClick={closeMenu} className="block py-3 px-5 rounded-md hover:bg-teal-500 transition-all duration-300 transform hover:scale-110">Projects</Link>
        <Link to="/contact" onClick={closeMenu} className="block py-3 px-5 rounded-md hover:bg-teal-500 transition-all duration-300 transform hover:scale-110">Contact</Link>
        <button
          onClick={() => {
            setDarkMode(!darkMode);
            closeMenu();
          }}
          className="flex items-center gap-2 py-3 px-5 rounded-md hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
