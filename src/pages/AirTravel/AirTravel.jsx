import React from "react";
import { FaPlaneDeparture, FaPlaneArrival, FaExchangeAlt } from "react-icons/fa";

const AirTravel = () => {
  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded shadow-md">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-blue-600 mb-6 text-center">
        Search <span className="relative">
          For
          <span className="absolute w-full h-1 bg-blue-600 -bottom-1 left-0"></span>
        </span>{" "}
        A Flight
      </h1>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button className="flex flex-col items-center bg-blue-100 p-4 rounded shadow hover:bg-blue-200">
          <FaExchangeAlt size={24} className="mb-2 text-blue-600" />
          <span className="text-sm font-semibold text-blue-600">Round-Trip</span>
        </button>
        <button className="flex flex-col items-center bg-blue-100 p-4 rounded shadow hover:bg-blue-200">
          <FaPlaneDeparture size={24} className="mb-2 text-blue-600" />
          <span className="text-sm font-semibold text-blue-600">One-Way</span>
        </button>
        <button className="flex flex-col items-center bg-blue-100 p-4 rounded shadow hover:bg-blue-200">
          <FaPlaneArrival size={24} className="mb-2 text-blue-600" />
          <span className="text-sm font-semibold text-blue-600">Multi-City</span>
        </button>
      </div>

      {/* Search Bar Section */}
      <div className="mb-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Departure Airport
          </label>
          <div className="flex items-center border border-gray-300 rounded p-2">
            <input
              type="text"
              placeholder="Enter Airport"
              className="flex-grow outline-none text-gray-700"
            />
          </div>
          <div className="flex items-center mt-2">
            <input type="checkbox" id="nearbyDeparture" className="mr-2" />
            <label htmlFor="nearbyDeparture" className="text-gray-700">
              Include Nearby Airports
            </label>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Arrival Airport
          </label>
          <div className="flex items-center border border-gray-300 rounded p-2">
            <input
              type="text"
              placeholder="Enter Airport"
              className="flex-grow outline-none text-gray-700"
            />
          </div>
          <div className="flex items-center mt-2">
            <input type="checkbox" id="nearbyArrival" className="mr-2" />
            <label htmlFor="nearbyArrival" className="text-gray-700">
              Include Nearby Airports
            </label>
          </div>
        </div>
      </div>

      {/* Date Section */}
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Departure Date
          </label>
          <div className="flex items-center border border-gray-300 rounded p-2">
            <input
              type="date"
              placeholder={currentDate}
              defaultValue={currentDate}
              className="flex-grow outline-none text-gray-700"
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Return Date
          </label>
          <div className="flex items-center border border-gray-300 rounded p-2">
            <input
              type="date"
              placeholder={currentDate}
              defaultValue={currentDate}
              className="flex-grow outline-none text-gray-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirTravel;
