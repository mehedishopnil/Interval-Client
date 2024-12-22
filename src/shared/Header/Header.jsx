import React, { useContext, useState } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa"; // Importing icons from react-icons
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the dropdown menu
  const { user, signOut } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu when an item is clicked
  };

  const handleLogout = async () => {
    try {
      await signOut();
      alert("Logged out successfully!"); // Replace with SweetAlert or another toast if desired
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <>
      <header className="bg-[#18294B] shadow-md">
        <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
          {/* Logo */}
          <div className="text-xl font-bold text-primary">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-white text-3xl">interval</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
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

            {/* User Actions */}
            {user ? (
              <div className="flex items-center space-x-4">
                <FaUserCircle className="text-white text-3xl" />
                <button
                  onClick={handleLogout}
                  className="text-white bg-primary px-4 py-2 rounded-md hover:bg-primary-dark"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-white bg-primary px-4 py-2 rounded-md hover:bg-primary-dark"
              >
                Login
              </Link>
            )}
          </nav>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2">
          {user?
          (
            <div className="flex items-center gap-2">
            <h1 className="text-white text-2xl"><FaUserCircle /></h1>
            <button
              onClick={handleLogout}
              className="text-white px-4 py-2 rounded-md hover:bg-primary-dark"
            >Log out</button>
          </div>
          ) : (
            <Link to="/login">
            <button
              onClick={toggleMenu}
              className="btn btn-ghost btn-circle text-white"
              aria-label="Toggle Menu"
            >
              <h1>Login</h1>
            </button>
            </Link>
          )
        }


          <div className="md:hidden relative">
            <button
              onClick={toggleMenu}
              className="btn btn-ghost btn-circle"
              aria-label="Toggle Menu"
            >
              <FaBars className="h-6 w-6 text-white" />
            </button>

            {isMenuOpen && (
              <ul className="absolute right-0 mt-2 w-64 bg-base-100 shadow-lg rounded-md z-50">
                <div className="bg-[#18294B] border-t">
                  <p className="text-white text-center font-semibold py-2">
                    Menu
                  </p>
                </div>

                <Link to="/" onClick={closeMenu}>
                  <div className="border-t py-2 px-3 hover:bg-slate-300 flex justify-between">
                    <p>Home</p>
                    <IoIosArrowForward className="font-bold text-xl text-orange-500" />
                  </div>
                </Link>

                {!user ? (
                  <Link to="/login" onClick={closeMenu}>
                    <div className="border-t py-2 px-3 hover:bg-slate-300 flex justify-between">
                      <p>Login</p>
                      <IoIosArrowForward className="font-bold text-xl text-orange-500" />
                    </div>
                  </Link>
                ) : (
                  <div
                    onClick={() => {
                      handleLogout();
                      closeMenu();
                    }}
                    className="border-t py-2 px-3 hover:bg-slate-300 flex justify-between cursor-pointer"
                  >
                    <p>Logout</p>
                    <IoIosArrowForward className="font-bold text-xl text-orange-500" />
                  </div>
                )}

                <Link to="/resort-directory" onClick={closeMenu}>
                  <div className="border-t py-2 px-3 hover:bg-slate-300 flex justify-between">
                    <p>Resort Directory</p>
                    <IoIosArrowForward className="font-bold text-xl text-orange-500" />
                  </div>
                </Link>

                <Link to="/create-profile" onClick={closeMenu}>
                  <div className="border-t py-2 px-3 hover:bg-slate-300 flex justify-between">
                    <p>Create a Profile</p>
                    <IoIosArrowForward className="font-bold text-xl text-orange-500" />
                  </div>
                </Link>

                <Link to="/join-today" onClick={closeMenu}>
                  <div className="border-t py-2 px-3 hover:bg-slate-300 flex justify-between">
                    <p>Join Today</p>
                    <IoIosArrowForward className="font-bold text-xl text-orange-500" />
                  </div>
                </Link>

                <Link to="/change-language" onClick={closeMenu}>
                  <div className="border-y py-2 px-3 hover:bg-slate-300 flex justify-between">
                    <p>Change Language</p>
                    <IoIosArrowForward className="font-bold text-xl text-orange-500" />
                  </div>
                </Link>
              </ul>
            )}
          </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
