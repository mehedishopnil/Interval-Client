import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState(null);

  const tabs = [
    { id: "Profile", label: "Profile", content: "Your personal profile details go here." },
    { id: "Address", label: "Address", content: "Your address details go here." },
    { id: "Phone Numbers", label: "Phone Numbers", content: "Your phone number details go here." },
    {
      id: "Payment Method Information",
      label: "Payment Method Information",
      content: "Your payment method details go here.",
    },
    { id: "My History", label: "My History", content: "Your activity history goes here." },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab((prevTab) => (prevTab === tabId ? null : tabId));
  };

  return (
    <div className="p-4">
      <div>
        <h1 className="text-xl font-bold text-[#0077BE]">My Profile</h1>
        <p className="pt-5">
          Welcome Sheraton, You may review all of your personal details and make
          changes to update your profile information.
        </p>
      </div>

      {/* Vertical Tabs Section */}
      <div className="flex flex-col md:flex-row pt-8">
        {/* Tab List */}
        <div className="w-full md:w-1/4">
          {tabs.map((tab) => (
            <div key={tab.id} className="border-b border-gray-300">
              <button
                onClick={() => handleTabClick(tab.id)}
                className="flex items-center justify-between w-full p-3 text-left hover:bg-gray-100"
              >
                <span className={`text-sm ${activeTab === tab.id ? "text-[#0077BE]" : "text-gray-700"}`}>
                  {tab.label}
                </span>
                {activeTab === tab.id ? (
                  <FaChevronDown className="text-[#0077BE]" />
                ) : (
                  <FaChevronRight className="text-gray-500" />
                )}
              </button>
              {activeTab === tab.id && (
                <div className="p-3 text-sm text-gray-600">{tab.content}</div>
              )}
            </div>
          ))}
        </div>

        {/* Content Area */}
        <div className="w-full md:w-3/4 md:pl-6 mt-4 md:mt-0">
          {/* If no tab is expanded on mobile, show a message */}
          {!activeTab && (
            <p className="text-gray-500 text-sm md:hidden">
              Tap on a tab to view its content.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
