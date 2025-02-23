import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardNav from "./DashboardNav/DashboardNav";
import NavbarOnDB from "./DashboardNav/NavbarOnDB/NavbarOnDB";

const menuItems = [
  { name: "Gateways", path: "/dashboard/gateways" },
  { name: "Exchange", path: "/dashboard/exchange" },
  { name: "Membership", path: "/dashboard/membership" },
  { name: "Cruises", path: "/dashboard/cruises" },
  { name: "Air Travel", path: "/dashboard/air-travel" },
  { name: "Car Rentals", path: "/dashboard/car-rentals" },
  { name: "My Account", path: "/dashboard/my-account" },
];

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState(menuItems[0]);

  // Items where NavbarOnDB should not be shown
  const excludedItems = ["Cruises", "Air Travel", "Car Rentals"];

  return (
    <div className="flex flex-col h-screen text-black">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#18294B] text-white py-3 px-4 z-50">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Interval</span>
          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <DashboardNav
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              isMobile
            />
          </div>
        </div>
        {/* Desktop Horizontal Menu */}
        <div className="hidden md:flex justify-center space-x-8 mt-2">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveItem(item)}
              className={`text-lg font-medium ${
                activeItem.name === item.name
                  ? "border-b-2 border-white"
                  : "hover:border-b-2 hover:border-gray-300"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </header>

      {/* Dashboard Layout */}
      <div className="flex pt-20">
        {/* Sidebar Navigation for Mobile Only */}
        <div className="md:hidden">
          <DashboardNav activeItem={activeItem} setActiveItem={setActiveItem} />
        </div>

        {/* Main Content Area */}
        <div className="w-full pt-4 flex flex-col flex-grow">
          {/* Dashboard Navbar (Scrollable Carousel) */}
          {!excludedItems.includes(activeItem.name) && ( 
            <div>
              <NavbarOnDB
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
            </div>
          )}

          {/* Content Area */}
          <div className="w-full flex-grow">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
