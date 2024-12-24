import React, { useState } from "react";

const TabContent = ({ resort }) => {
  const {
    description,
    onSiteItems,
    nearbyItems,
    checkInDays,
    bedroom,
    sleepingCapacity,
    maximumOccupancy,
    nearestAirport,
    contactInfo,
  } = resort;

  const [activeTab, setActiveTab] = useState("description"); // Default to Description Tab

  return (
    <div className="w-full">
      {/* Tabs Header */}
      <div className="tabs tabs-boxed flex justify-center md:justify-start">
        <button
          className={`tab ${
            activeTab === "description" ? "tab-active" : ""
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`tab ${activeTab === "amenities" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("amenities")}
        >
          Amenities
        </button>
        <button
          className={`tab ${activeTab === "map" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("map")}
        >
          Map
        </button>
      </div>

      {/* Tabs Content */}
      <div className="mt-5 p-4 bg-base-200 rounded-box">
        {/* Description Tab Content */}
        {activeTab === "description" && (
          <div>
            <h3 className="text-lg font-bold mb-3">Description</h3>
            <p>{description || "Description not available."}</p>
          </div>
        )}

        {/* Amenities Tab Content */}
        {activeTab === "amenities" && (
          <div>
            <h3 className="text-lg font-bold mb-3">On-Site</h3>
            <ul className="list-disc list-inside">
              {onSiteItems?.length > 0 ? (
                onSiteItems.map((item, index) => <li key={index}>{item}</li>)
              ) : (
                <li>No on-site items available.</li>
              )}
            </ul>
            <h3 className="text-lg font-bold mt-4">Nearby</h3>
            <ul className="list-disc list-inside">
              {nearbyItems?.length > 0 ? (
                nearbyItems.map((item, index) => <li key={index}>{item}</li>)
              ) : (
                <li>No nearby items available.</li>
              )}
            </ul>
            <div className="mt-5">
              <h3 className="font-bold">Check-In Days</h3>
              <p>{checkInDays?.join(", ") || "Not available."}</p>
              <h3 className="font-bold mt-3">Sleeping Capacity</h3>
              <p>
                Room Type: {bedroom || "N/A"}, Sleeping Capacity:{" "}
                {sleepingCapacity || "N/A"}, Maximum Occupancy:{" "}
                {maximumOccupancy || "N/A"}
              </p>
              <h3 className="font-bold mt-3">Nearest Airport</h3>
              <p>{nearestAirport || "Not available."}</p>
              <h3 className="font-bold mt-3">Contact Information</h3>
              <p>{contactInfo || "Not available."}</p>
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
