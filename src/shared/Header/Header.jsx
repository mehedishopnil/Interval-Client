import React, { useContext, useState } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, role, signOut } = useContext(AuthContext);
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await signOut();
      alert("Logged out successfully!");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Menu items for regular users
  const userMenuItems = [
    
    { name: "Resort Directory", path: "/resort-directory" },
    { name: "Gateways", path: "/dashboard/gateways" },
    { name: "Exchange", path: "/dashboard/exchange" },
    { name: "Membership", path: "/dashboard/membership" },
    { name: "Cruises", path: "/dashboard/cruises" },
    { name: "Air Travel", path: "/dashboard/air-travel" },
    { name: "Car Rentals", path: "/dashboard/car-rentals" },
    { name: "My Account", path: "/dashboard/my-account" },
  ];

  // Menu items for admin users
  const adminMenuItems = [
    { name: "Admin Panel", path: "/admin-panel" },
    { name: "Resort Directory", path: "/resort-directory" },
    { name: "Profile", path: "/profile" },
    { name: "Logout", path: "/logout" },
  ];

  // Default menu items for non-logged-in users
  const defaultMenuItems = [
    { name: "Home", path: "/" },
    { name: "Login", path: "/login" },
    { name: "Create a Profile", path: "/create-profile" },
    { name: "Resort Directory", path: "/resort-directory" }
  ];

  // Determine which menu items to display based on user and role
  const menuItems = user
    ? role === "admin"
      ? adminMenuItems
      : userMenuItems
    : defaultMenuItems;

  return (
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
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-neutral hover:text-primary"
            >
              {item.name}
            </Link>
          ))}

          {/* User Actions */}
          {user ? (
            <div className="flex items-end space-x-4">
              <FaUserCircle className="text-white text-3xl" />
              <button
                onClick={handleLogout}
                className="text-white bg-primary px-4 py-2 rounded-md hover:bg-primary-dark"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-end ">
              <Link
              to="/login"
              className="text-white bg-primary px-4 py-2 rounded-md hover:bg-primary-dark"
            >
              Login
            </Link>
            </div>
          )}
        </nav>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2">
          {user ? (
            <div className="flex items-center gap-2">
              <h1 className="text-white text-2xl">
                <FaUserCircle />
              </h1>
              <button
                onClick={handleLogout}
                className="text-white px-4 py-2 rounded-md hover:bg-primary-dark"
              >
                Log out
              </button>
            </div>
          ) : (
            
            <div className="flex items-end gap-2">
              <Link to="/login">
              <button className="btn btn-ghost btn-circle text-white">
                <h1>login</h1>
              </button>
            </Link>
              
            </div>
            
          )}

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

                {menuItems.map((item) => (
                  <Link to={item.path} key={item.name} onClick={closeMenu}>
                    <div className="border-t py-2 px-3 hover:bg-slate-300 flex justify-between">
                      <p>{item.name}</p>
                      <IoIosArrowForward className="font-bold text-xl text-orange-500" />
                    </div>
                  </Link>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;