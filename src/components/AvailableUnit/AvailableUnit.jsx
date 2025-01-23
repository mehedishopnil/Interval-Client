import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AvailableUnit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { resort } = location.state || {};
  const [isUsageVisible, setIsUsageVisible] = useState(false);

  const randomUnits = ["2BED", "1BEDA", "1BEDB"];
  const randomYears = ["2025", "2026"];
  const generateCards = () =>
    Array.from({ length: Math.floor(Math.random() * 4) + 3 }, () => ({
      usage: randomYears.join(", "),
      status: "Available",
      unit: randomUnits[Math.floor(Math.random() * randomUnits.length)],
      size: "1 Bedroom | Full Kitchen | Sleeps 4 total | 4 private",
    }));

  const cardsData = generateCards();

  const handleVacationExchange = (card) => {
    navigate("/checkout", {
      state: {
        resort,
        card, // Pass the selected card's data
      },
    });
  };

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4">My Units</h1>
      <p className="text-gray-700 mb-4">
        To view availability, please select the unit you would like to redeem.
      </p>

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
