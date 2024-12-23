import React, { useContext, useState } from "react";
import { Transition } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";

const DashboardNav = ({ activeItem, setActiveItem }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // Handle logout functionality
  const handleLogout = async () => {
    try {
      await signOut();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const menuItems = [
    { name: "Gateways", path: "/dashboard/gateways" },
    { name: "Exchange", path: "/dashboard/exchange" },
    { name: "Membership", path: "/dashboard/membership" },
    { name: "Cruises", path: "/dashboard/cruises" },
    { name: "Air Travel", path: "/dashboard/air-travel" },
    { name: "Car Rentals", path: "/dashboard/car-rentals" },
    { name: "My Account", path: "/dashboard/my-account" },
  ];

  const handleItemClick = (item) => {
    setActiveItem(item);  // Update active item
    navigate(item.path);  // Navigate to the clicked path
    setMobileMenuOpen(false);  // Close mobile menu
  };

  return (
    <div className="overflow-hidden lg:w-64 bg-slate-200 flex-shrink-0 mt-10">
      {/* Sidebar for LG screens */}
      <div className="hidden lg:block h-full">
        <ul className="menu p-4 text-gray-700 font-bold text-lg">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className="hover:text-blue-500">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile navigation */}
      <div className="lg:hidden fixed top-0 w-full bg-[#18294B] text-white p-4 z-50">
        <div className="flex items-center justify-between">
          <Link to="/">
            <span className="text-3xl font-bold">Interval</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link to="/dashboard/my-account">
              <FaUser className="text-white text-xl" />
            </Link>

            <button
              onClick={handleLogout}
              className="text-white text-lg hover:text-red-500"
            >
              Logout
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-xl"
            >
              <BsFillMenuButtonWideFill />
            </button>
          </div>
        </div>

        <Transition
          show={mobileMenuOpen}
          enter="transition-transform duration-300"
          enterFrom="-translate-y-full"
          enterTo="translate-y-0"
          leave="transition-transform duration-300"
          leaveFrom="translate-y-0"
          leaveTo="-translate-y-full"
        >
          <div className="bg-gray-200 p-4 absolute top-0 left-0 right-0 mt-12 z-50">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl text-gray-700"
              >
                <IoMdClose />
              </button>
            </div>
            <ul className="menu text-gray-700 font-bold text-xl">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`border-b-2 border-gray-300 block hover:text-blue-500 ${
                      activeItem.name === item.name
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : ""
                    }`}
                    onClick={() => handleItemClick(item)} // Update active item on click
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={handleLogout}
                  className="text-left w-full text-red-500 hover:text-red-700"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default DashboardNav;
