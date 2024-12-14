import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; // Importing icon from react-icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the dropdown menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <header className="bg-[#18294B] shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="text-xl font-bold text-primary">
          <a href="/" className="flex items-center space-x-2">
            
            <span className="text-white text-3xl">interval</span>
          </a>
        </div>

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-neutral hover:text-primary">
            Home
          </a>
          <a href="#about" className="text-neutral hover:text-primary">
            About
          </a>
          <a href="#services" className="text-neutral hover:text-primary">
            Services
          </a>
          <a href="#contact" className="text-neutral hover:text-primary">
            Contact
          </a>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden relative">
          <button
            onClick={toggleMenu}
            className="btn btn-ghost btn-circle "
            aria-label="Toggle Menu"
          >
            <FaBars className="h-6 w-6 text-white" />
          </button>

          {isMenuOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-base-100 shadow-lg rounded-md z-50">
              <li>
                <a
                  href="#home"
                  className="block px-4 py-2 hover:bg-primary hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block px-4 py-2 hover:bg-primary hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block px-4 py-2 hover:bg-primary hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block px-4 py-2 hover:bg-primary hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
