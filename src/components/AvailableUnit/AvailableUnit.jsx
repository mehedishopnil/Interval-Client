import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AvailableUnit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { resort, earliestDate, latestDate, adults, children } = location.state || {};
  const [isUsageVisible, setIsUsageVisible] = useState(false);

  const randomUnits = ["2BED", "1BEDA", "1BEDB"];
  const randomYears = ["2025", "2026"];
  
  // Modified to select a single random year and add a price property
  const generateCards = () =>
    Array.from({ length: Math.floor(Math.random() * 4) + 3 }, () => ({
      usage: randomYears[Math.floor(Math.random() * randomYears.length)], // Single year
      status: "Available",
      unit: randomUnits[Math.floor(Math.random() * randomUnits.length)],
      size: "1 Bedroom | Full Kitchen | Sleeps 4 total | 4 private",
      price: 379, // Set the price to $379
    }));

  const cardsData = generateCards();

  const handleVacationExchange = (card) => {
    navigate("/checkout", {
      state: {
        resort,
        card, 
        price: card.price, 
      },
    });
  };

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4">My Units</h1>
      <p className="text-gray-700 mb-4">
        To view availability, please select the unit you would like to redeem.
      </p>

      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">My Certificates</h2>
        <div className="grid grid-cols-6 sm:flex-row items-center bg-gray-100 p-4 rounded shadow-sm">
          <div className="col-span-2 text-blue-500 text-2xl mb-2 sm:mb-0 sm:mr-4">
            <img src="https://www.intervalworld.com/images/ac/accommodation-certificate-logo.png" alt="" />
          </div>
          <div className="col-span-4 text-center sm:text-left">
            <p className="font-medium">
              {Math.floor(Math.random() * 4) + 1} Available
            </p>
            <button className="mt-2 text-blue-900 border font-semibold border-[#0077be] py-1 px-3 rounded hover:bg-blue-600">
              View Certificates
            </button>
          </div>
        </div>
      </div>

      {resort && (
        <div className="w-full grid grid-cols-6 items-center border rounded mb-6">
          <div className="w-full col-span-2 sm:w-1/3">
            <img
              src={resort.img}
              alt={resort.resortName}
              className="rounded object-cover w-full h-32"
            />
          </div>
          <div className="col-span-3 ml-4 sm:ml-4 flex-1 sm:text-left">
            <h3 className="text-lg font-semibold text-[#0077be]">
              {resort.resortName}
            </h3>
            <p className="text-gray-600">{resort.location}</p>
            <p className="font-bold uppercase mt-2 inline-block border px-2 py-1">
              {resort.symbol}
            </p>
          </div>
        </div>
      )}

      <div className="flex justify-center mb-6">
        <button
          className="text-gray-700 border py-2 px-4 rounded"
          onClick={() => setIsUsageVisible(!isUsageVisible)}
        >
          {isUsageVisible ? "Hide Usage & Units" : "Show Usage & Units"}
        </button>
      </div>

      {isUsageVisible && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cardsData.map((card, index) => (
            <div key={index} className="border p-4 rounded shadow-sm bg-gray-50">
              <p className="font-semibold">Usage: {card.usage}</p>
              <p className="text-gray-600">Status: {card.status}</p>
              <p className="text-gray-600">Unit: {card.unit}</p>
              <p className="text-gray-600">Size: {card.size}</p>
              <p className="text-gray-600">Price: ${card.price}</p> {/* Display the price */}
              <button
                className="mt-4 bg-[#0077be] text-white py-2 px-4 rounded hover:bg-[#006eae]"
                onClick={() => handleVacationExchange(card)}
              >
                Vacation Exchange
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AvailableUnit;