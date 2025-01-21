import React, { useState } from "react";
import { FaChevronDown, FaChevronRight, FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ProfileInfo from "./AccountContent/ProfileInfo";
import AddressInfo from "./AccountContent/AddressInfo";
import PhoneNumber from "./AccountContent/PhoneNumber";
import PaymentMethod from "./AccountContent/PaymentMethod";

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState(null);
  const navigate = useNavigate();

  const tabs = [
    { id: "Profile", label: "Profile", content: <ProfileInfo /> },
    { id: "Address", label: "Address", content: <AddressInfo /> },
    { id: "Phone Numbers", label: "Phone Numbers", content: <PhoneNumber /> },
    {
      id: "Payment Method Information",
      label: "Payment Method Information",
      content: <PaymentMethod />,
    },
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
                className="flex items-center gap-2 w-full p-3 text-left hover:bg-gray-100"
              >
                {activeTab === tab.id ? (
                  <FaChevronUp className="text-[#0077BE]" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
                <span
                  className={`text-sm ${
                    activeTab === tab.id ? "text-[#0077BE]" : "text-gray-700"
                  }`}
                >
                  {tab.label}
                </span>
              </button>
              {activeTab === tab.id && (
                <div className="p-3 text-sm text-gray-600">{tab.content}</div>
              )}
            </div>
          ))}

          {/* My History Button */}
          <div className="border-b border-gray-300">
            <button
              onClick={() => navigate("/dashboard/my-history")}
              className="flex items-center gap-2 w-full p-3 text-left hover:bg-gray-100"
            >
              <FaChevronRight className="text-gray-500" />
              <span className="text-sm text-gray-700">My History</span>
            </button>
          </div>
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
