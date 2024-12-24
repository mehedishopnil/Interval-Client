import React from "react";

const TabContent = ({ resort, activeTab, setActiveTab }) => {
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

  return (
    <div>
      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab tab-bordered ${
            activeTab === "description" ? "tab-active" : ""
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`tab tab-bordered ${
            activeTab === "amenities" ? "tab-active" : ""
          }`}
          onClick={() => setActiveTab("amenities")}
        >
          Amenities
        </button>
        <button
          className={`tab tab-bordered ${
            activeTab === "map" ? "tab-active" : ""
          }`}
          onClick={() => setActiveTab("map")}
        >
          Map
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content mt-5">
        {activeTab === "description" && <p>{description}</p>}
        {activeTab === "amenities" && (
          <div>
            <h3 className="text-lg font-semibold">On-Site</h3>
            <ul className="list-disc list-inside">
              {onSiteItems?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mt-3">Nearby</h3>
            <ul className="list-disc list-inside">
              {nearbyItems?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === "map" && <div>Map content here</div>}
      </div>

      {/* Resort Details */}
      <div className="mt-5">
        <h3 className="font-bold">Check-In Days</h3>
        <p>{checkInDays?.join(", ")}</p>
        <h3 className="font-bold mt-3">Sleeping Capacity</h3>
        <p>
          Room Type: {bedroom}, Sleeping Capacity: {sleepingCapacity}, Maximum
          Occupancy: {maximumOccupancy}
        </p>
        <h3 className="font-bold mt-3">Nearest Airport</h3>
        <p>{nearestAirport}</p>
        <h3 className="font-bold mt-3">Contact Information</h3>
        <p>{contactInfo}</p>
      </div>
    </div>
  );
};

export default TabContent;
