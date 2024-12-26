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
  const [activeItem, setActiveItem] = useState(menuItems[0]); // Default active menu

  return (
    <div className="flex flex-col h-screen text-black"> {/* Make all content black */}
      {/* Header */}
      <header className="overflow-hidden fixed top-0 w-full bg-[#18294B] text-white py-3 px-4 z-50">
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
      <div className=" flex pt-16">
        {/* Sidebar Navigation */}
        <DashboardNav activeItem={activeItem} setActiveItem={setActiveItem} />

        {/* Main Content Area */}
        <div className="w-[400px] pt-4 flex flex-col flex-grow">
          {/* Dashboard Navbar (Scrollable Carousel) */}
          <div className="overflow-hidden">
            <NavbarOnDB activeItem={activeItem} setActiveItem={setActiveItem} /> {/* Use NavbarOnDB component here */}
          </div>

          {/* Content Area */}
          <div className="w-full flex-grow ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
