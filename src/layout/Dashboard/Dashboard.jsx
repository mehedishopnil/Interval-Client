import React, { useState } from "react";
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
          {/* Mobile Menu Trigger or User Icon */}
          <div>
            <DashboardNav
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              isMobile
            />
          </div>
        </div>
      </header>

      {/* Dashboard Layout */}
      <div className="flex pt-16">
        {/* Sidebar Navigation */}
        <DashboardNav activeItem={activeItem} setActiveItem={setActiveItem} />

        {/* Main Content Area */}
        <div className="w-[450px] pt-4 flex flex-col flex-grow">
          {/* Dashboard Navbar (Scrollable Carousel) */}
          {!excludedItems.includes(activeItem.name) && ( 
            <div>
              <NavbarOnDB activeItem={activeItem} setActiveItem={setActiveItem} />
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
