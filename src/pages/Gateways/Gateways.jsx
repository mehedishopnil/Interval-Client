import { useState } from "react";
import bannerPhoto from "../../assets/images/getaways-banner.jpg";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import SingleDestination from "../../components/GatewayTabContent/SingleDestination";
import SearchAllDestinations from "../../components/GatewayTabContent/SearchAllDestinations";
import ResortNameOrCode from "../../components/GatewayTabContent/ResortNameOrCode";
// Removed unused import of ResortDirectory since "Area List" now redirects

const Gateways = () => {
  const [activeTab, setActiveTab] = useState("Getaways");
  const [activeMenu, setActiveMenu] = useState("Single Destination");
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "ShortStay Getaways") {
      setActiveMenu(null);
    }
  };

  const handleMenuClick = (menu) => {
    if (menu === "Area List") {
      navigate("/resort-directory");
    } else {
      setActiveMenu(menu);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <div>
        <img src={bannerPhoto} alt="Banner" className="w-full" />
      </div>

      <div className="p-4 w-10/12">
        {/* Title and Subtitle */}
        <div className="mt-6">
          <h1 className="text-left text-2xl font-bold text-blue-700 sm:text-3xl">
            Search Getaways
          </h1>
          <p className="text-left text-gray-600 font-bold mt-1">
            Take More Vacations At Irresistibly Low Prices
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 items-center justify-center mt-6">
          {["Getaways", "ShortStay Getaways"].map((tab) => (
            <button
              key={tab}
              className={`w-full text-xs border-2 py-3 ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-500 hover:text-white"
              } ${tab === "Getaways" ? "rounded-s-md" : "rounded-e-md"}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Submenu Section */}
        {activeTab === "Getaways" && (
          <div className="w-full flex justify-center items-center mt-6 border-b border-gray-300 pb-2">
            <div className="w-full grid grid-cols-4 border-2">
              {[
                "Single Destination",
                "Search All Destinations",
                "Resort Name or Code",
                "Area List",
              ].map((menu) => (
                <button
                  key={menu}
                  className={`py-2 px-4 font-medium text-xs border-r-2 text-center ${
                    activeMenu === menu
                      ? "bg-blue-500 text-white"
                      : "text-gray-600 hover:bg-blue-100"
                  }`}
                  onClick={() => handleMenuClick(menu)}
                >
                  {menu}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content */}
        {activeTab === "Getaways" && (
          <div className="mt-8">
            {activeMenu === "Single Destination" && <SingleDestination />}
            {activeMenu === "Search All Destinations" && <SearchAllDestinations />}
            {activeMenu === "Resort Name or Code" && <ResortNameOrCode />}
          </div>
        )}

        {/* Additional Links */}
        <div className="w-full mt-10">
          {["Top Getaway Deals", "Best Price Guarantee"].map((item) => (
            <Link
              key={item}
              className="flex border-t-2 p-3 font-semibold text-gray-600 hover:bg-blue-100 items-center justify-between"
            >
              <h1>{item}</h1>
              <IoIosArrowForward className="text-yellow-600 font-bold text-xl" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gateways;
