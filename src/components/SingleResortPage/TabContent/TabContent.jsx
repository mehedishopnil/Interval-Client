import React, { useState } from "react";

const TabContent = ({ resort }) => {
  const {
    img,
    img2,
    img3,
    resortName,
    location,
    description,
    onSite,
    nearby,
    contactInfo,
    nearestAirport,
    checkInDays,
  } = resort;

  const [activeTab, setActiveTab] = useState("description"); // Default to Description Tab
  const [isResortInfoOpen, setIsResortInfoOpen] = useState(false); // Default state for Resort Information tab

  // Function to split content into a list
  const splitContent = (content) => {
    if (!content) return [];
    return content
      .split(/[,·.]/) // Split on , or · or .
      .map((item) => item.trim()) // Trim whitespace
      .filter((item) => item.length > 0); // Remove empty items
  };

  return (
    <div className="w-full">
      {/* Tabs Header */}
      <div className="tabs bg-transparent flex justify-center md:justify-start">
        <button
          className={`tab ${
            activeTab === "description" ? "tab-active bg-blue-500 text-white" : "border-gray-200"
          } border-2 border-gray-200`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`tab ${
            activeTab === "amenities" ? "tab-active bg-blue-500 text-white" : ""
          } border-2 border-gray-200`}
          onClick={() => setActiveTab("amenities")}
        >
          Amenities
        </button>
        <button
          className={`tab ${
            activeTab === "map" ? "tab-active bg-blue-500 text-white" : ""
          } border-2 border-gray-200`}
          onClick={() => setActiveTab("map")}
        >
          Map
        </button>
      </div>

      {/* Tabs Content */}
      <div className="mt-5 p-4 bg-gray-100 rounded-box">
        {/* Description Tab Content */}
        {activeTab === "description" && (
          <div>
            <p>{description || "Description not available."}</p>
          </div>
        )}

        {/* Amenities Tab Content */}
        {activeTab === "amenities" && (
          <div>
            <h3 className="text-lg font-bold mb-3">On-Site Amenities</h3>
            <ul className="list-disc ml-5">
              {splitContent(onSite).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3 className="text-lg font-bold mt-4">Nearby Amenities</h3>
            <ul className="list-disc ml-5">
              {splitContent(nearby).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            {/* Resort Information */}
            <div className="mt-5 border-y-2 py-2 hover:bg-blue-100 hover:p-2">
              <button
                className="w-full text-xl text-center text-left font-bold text-gray-500"
                onClick={() => setIsResortInfoOpen(!isResortInfoOpen)}
              >
                {isResortInfoOpen ? "Hide Resort Information" : "Resort Information"}
              </button>
              {isResortInfoOpen && (
                <div className="mt-3">
                  <h3 className="font-bold">Check-In Days</h3>
                  <p>{checkInDays?.length > 0 ? checkInDays.join(", ") : "Not available."}</p>
                  <h3 className="font-bold mt-3">Nearest Airport</h3>
                  <p>{nearestAirport || "Not available."}</p>
                  <h3 className="font-bold mt-3">Contact Information</h3>
                  <p>{contactInfo || "Not available."}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Map Tab Content */}
        {activeTab === "map" && (
          <div>
            <h3 className="text-lg font-bold mb-3">Map</h3>
            <div>Map content here</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabContent;
