import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; // Importing icon from react-icons
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import ResortDirectory from "../../pages/ResortDirectory/ResortDirectory";

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
            <ul className="absolute right-0 mt-2 w-64 bg-base-100 shadow-lg rounded-md z-50">

               <div className="bg-[#18294B] border-t"> 
                    <p className="text-white py-2">Menu</p>
               </div> 

              <Link to="/">
               <div className='border-t py-2 px-3 hover:bg-slate-300 flex justify-between'> <p>Home</p>
               <IoIosArrowForward className='font-bold text-xl text-orange-500' />
               </div>
               </Link>

              <Link to="login">
               <div className='border-t py-2 px-3 hover:bg-slate-300 flex justify-between'> <p>Login</p>
               <IoIosArrowForward className='font-bold text-xl text-orange-500' />
               </div>
               </Link>

               <Link to="resort-directory">
               <div className='border-t py-2 px-3 hover:bg-slate-300 flex justify-between'> <p>Resort Directory</p>
               <IoIosArrowForward className='font-bold text-xl text-orange-500' />
               </div>
               </Link>

               <Link>
               <div className='border-t py-2 px-3 hover:bg-slate-300 flex justify-between'> <p>Interval HD</p>
               <IoIosArrowForward className='font-bold text-xl text-orange-500' />
               </div>
               </Link>

               <Link to="create-profile">
               <div className='border-t py-2 px-3 hover:bg-slate-300 flex justify-between'> <p>Create a Profile</p>
               <IoIosArrowForward className='font-bold text-xl text-orange-500' />
               </div>
               </Link>

               <Link>
               <div className='border-y py-2 px-3 hover:bg-slate-300 flex justify-between'> <p>Join Today</p>
               <IoIosArrowForward className='font-bold text-xl text-orange-500' />
               </div>
               </Link>

               <Link>
               <div className='border-y py-2 px-3 hover:bg-slate-300 flex justify-between'> <p>Change Language</p>
               <IoIosArrowForward className='font-bold text-xl text-orange-500' />
               </div>
               </Link>


            </ul>
          )}
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
