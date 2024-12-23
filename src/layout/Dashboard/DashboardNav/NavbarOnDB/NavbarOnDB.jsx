import React from "react";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { name: "Gateways", path: "/dashboard/gateways" },
  { name: "Exchange", path: "/dashboard/exchange" },
  { name: "Membership", path: "/dashboard/membership" },
  { name: "Cruises", path: "/dashboard/cruises" },
  { name: "Air Travel", path: "/dashboard/air-travel" },
  { name: "Car Rentals", path: "/dashboard/car-rentals" },
  { name: "My Account", path: "/dashboard/my-account" },
];

const NavbarOnDB = ({ activeItem, setActiveItem }) => {
  const navigate = useNavigate();

  const handleNavClick = (item) => {
    setActiveItem(item);
    navigate(item.path);
  };

  return (
    <div className="bg-white text-black w-full sticky top-0 z-10 shadow-md">
      <div className="container mx-auto">
        {/* DaisyUI Carousel */}
        <div className="carousel max-w-full">
          {menuItems.map((item) => (
            <div key={item.name} className="carousel-item">
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  activeItem.name === item.name
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => handleNavClick(item)}
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavbarOnDB;
