import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bannerPhoto from "../../assets/images/exchange-banner.jpg";
import SingleDestination from "../../components/GatewayTabContent/SingleDestination";
import SearchAllDestinations from "../../components/GatewayTabContent/SearchAllDestinations";
import ResortNameOrCode from "../../components/GatewayTabContent/ResortNameOrCode";

const Exchange = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Vacation Exchange");
  const [activeSubTab, setActiveSubTab] = useState("Single Destination");

  const tabs = [
    "Vacation Exchange",
    "Cruise Exchange",
    "ShortStay Exchange",
    "Hotel Exchange",
    "My Units",
  ];

  const subTabs = [
    { name: "Single Destination", component: <SingleDestination /> },
    {
      name: "Search All <br/> Destinations",
      component: <SearchAllDestinations />,
    },
    { name: "Resort Name <br/> or Code", component: <ResortNameOrCode /> },
    {
      name: "Area List",
      action: () => navigate("/resort-directory"),
    },
  ];

  return (
    <div>
      {/* Title */}
      <div className="py-5 text-left px-6">
        <h1 className="text-2xl text-left font-bold text-blue-500">Exchange</h1>
      </div>

      <div className="w-full flex flex-col items-center">
        {/* Banner */}
        <div className="w-full">
          <img src={bannerPhoto} alt="Exchange Banner" className="w-full" />
        </div>

        {/* Tabs Section */}
        <div className="mt-6 w-full">
          {/* Horizontal Scrollable Tabs */}
          <div className="overflow-x-auto whitespace-nowrap scrollbar-hide border-b border-gray-300">
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`py-3 px-4 text-sm font-medium text-center flex-shrink-0 ${
                    activeTab === tab
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.split(" ").map((word, index) => (
                    <span key={index} className="block">
                      {word}
                    </span>
                  ))}
                </button>
              ))}
            </div>
          </div>

          {/* Sub Tabs for "Vacation Exchange" */}
          {activeTab === "Vacation Exchange" && (
            <div className="mt-6">
              <div className="flex justify-center border-b border-gray-300 pb-2">
                {subTabs.map(({ name, action }) => (
                  <button
                    key={name}
                    className={`py-2 px-4 text-sm font-medium text-center flex-shrink-0 ${
                      activeSubTab === name
                        ? "bg-blue-500 text-white rounded"
                        : "text-gray-700 hover:bg-blue-100"
                    }`}
                    onClick={() => {
                      if (action) {
                        action();
                      } else {
                        setActiveSubTab(name);
                      }
                    }}
                    dangerouslySetInnerHTML={{ __html: name }}
                  />
                ))}
              </div>

              {/* Sub Tab Content */}
              <div className="mt-6">
                {subTabs.find(({ name }) => name === activeSubTab)?.component}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Exchange;