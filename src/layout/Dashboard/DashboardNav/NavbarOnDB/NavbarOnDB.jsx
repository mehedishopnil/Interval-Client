import React from "react";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { name: "Gateways", path: "/dashboard/gateways" },
  { name: "Exchange", path: "/dashboard/exchange" },
  { name: "Membership", path: "/dashboard/membership" },
  { name: "Resort Directory", path: "/resort-directory" },
];

const NavbarOnDB = ({ activeItem, setActiveItem }) => {
  const navigate = useNavigate();

  const handleNavClick = (item) => {
    setActiveItem(item);
    navigate(item.path);
  };

  return (
    <div className="bg-white text-black w-full sticky top-0 z-10 shadow-md">
      <div className="flex items-center justify-center  py-2">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`text-xs font-medium px-4 py-2 rounded-lg ${
              activeItem?.name === item.name
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-700 hover:text-blue-600 transition-colors"
            }`}
            onClick={() => handleNavClick(item)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavbarOnDB;
