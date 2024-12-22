import { useState } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import { BsFillMenuButtonWideFill } from "react-icons/bs";

const Dashboard = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMenuItemClick = (path) => {
    setMobileMenuOpen(false);
    navigate(path);
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

  return (
    <div className="lg:flex h-screen">
      {/* Sidebar for LG screens */}
      <div className="hidden lg:block lg:w-64 lg:flex-shrink-0 bg-slate-200 h-screen">
        <ul className="menu p-4 text-gray-700 font-bold text-lg">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile navigation */}
      <div className="lg:hidden fixed top-0 w-full bg-[#18294B] text-white p-4 z-50">
        {/* Dashboard header Section */}
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-white text-3xl font-bold">Interval</span>
          </Link>
          <h1 className="text-xl font-bold">Dashboard</h1>
          <button onClick={toggleMobileMenu} className="text-xl">
            <BsFillMenuButtonWideFill />
          </button>
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
                onClick={toggleMobileMenu}
                className="text-2xl text-gray-700"
              >
                <IoMdClose />
              </button>
            </div>
            <ul className="menu text-gray-700 font-bold text-xl">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <button onClick={() => handleMenuItemClick(item.path)} className="border-b-2 border-gray-300">
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </Transition>
      </div>

      {/* Content area */}
      <div className="lg:flex-grow mt-16 lg:mt-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
