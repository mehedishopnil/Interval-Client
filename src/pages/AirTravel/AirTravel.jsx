import React, { useState } from "react";
import { FaPlaneDeparture, FaPlaneArrival, FaExchangeAlt, FaRedo, FaSearch } from "react-icons/fa";

const AirTravel = () => {
  const currentDate = new Date().toISOString().split("T")[0];
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infantsSeat, setInfantsSeat] = useState(0);
  const [infantsLap, setInfantsLap] = useState(0);

  const handleIncrement = (setter, value) => setter(value + 1);
  const handleDecrement = (setter, value) => value > 0 && setter(value - 1);

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded shadow-md">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-[#006AA7] mb-6 text-center">
        Search{" "}
        <span className="relative">
          For
          <span className="absolute w-full h-1 bg-[#006AA7] -bottom-1 left-0"></span>
        </span>{" "}
        A Flight
      </h1>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button className="flex flex-col items-center bg-blue-100 p-4 rounded shadow hover:bg-blue-200">
          <FaExchangeAlt size={24} className="mb-2 text-[#006AA7]" />
          <span className="text-sm font-semibold text-[#006AA7]">Round-Trip</span>
        </button>
        <button className="flex flex-col items-center bg-blue-100 p-4 rounded shadow hover:bg-blue-200">
          <FaPlaneDeparture size={24} className="mb-2 text-[#006AA7]" />
          <span className="text-sm font-semibold text-[#006AA7]">One-Way</span>
        </button>
        <button className="flex flex-col items-center bg-blue-100 p-4 rounded shadow hover:bg-blue-200">
          <FaPlaneArrival size={24} className="mb-2 text-[#006AA7]" />
          <span className="text-sm font-semibold text-[#006AA7]">Multi-City</span>
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
      <div className="grid gap-4 md:grid-cols-2 mb-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Departure Date
          </label>
          <input
            type="date"
            placeholder={currentDate}
            defaultValue={currentDate}
            className="w-full border border-gray-300 rounded p-2 outline-none text-gray-700"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Return Date
          </label>
          <input
            type="date"
            placeholder={currentDate}
            defaultValue={currentDate}
            className="w-full border border-gray-300 rounded p-2 outline-none text-gray-700"
          />
        </div>
      </div>

      {/* Passenger Section */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          Number of Passengers
        </label>
        {[
          { title: "Adults (12+)", value: adults, setter: setAdults },
          { title: "Children (2-11)", value: children, setter: setChildren },
          { title: "Infant in Seat (0-1)", value: infantsSeat, setter: setInfantsSeat },
          { title: "Infant on Lap (0-1)", value: infantsLap, setter: setInfantsLap },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center justify-between mb-2">
            <span className="text-gray-700">{item.title}</span>
            <div className="flex items-center">
              <button
                onClick={() => handleDecrement(item.setter, item.value)}
                className="px-2 py-1 bg-blue-100 rounded-l text-[#006AA7]"
              >
                -
              </button>
              <input
                type="text"
                value={item.value}
                readOnly
                className="w-12 text-center border-t border-b border-gray-300"
              />
              <button
                onClick={() => handleIncrement(item.setter, item.value)}
                className="px-2 py-1 bg-blue-100 rounded-r text-[#006AA7]"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Other Options */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Class of Service</label>
        <input
          type="text"
          placeholder="Economy, Business, etc."
          className="w-full border border-gray-300 rounded p-2 outline-none text-gray-700 mb-4"
        />

        <label className="block text-gray-700 font-semibold mb-2">
          Preferred Airline (Max 3)
        </label>
        <input
          type="text"
          placeholder="None"
          className="w-full border border-gray-300 rounded p-2 outline-none text-gray-700 mb-4"
        />

        <label className="block text-gray-700 font-semibold mb-2">
          Exclude Airline (Max 3)
        </label>
        <input
          type="text"
          placeholder="None"
          className="w-full border border-gray-300 rounded p-2 outline-none text-gray-700 mb-4"
        />

        <div className="flex items-center">
          <input type="checkbox" id="limitConnections" className="mr-2" />
          <label htmlFor="limitConnections" className="text-gray-700">
            Limit Number of Connections
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input type="checkbox" id="excludeFares" className="mr-2" />
          <label htmlFor="excludeFares" className="text-gray-700">
            Exclude Restricted Fares
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className="space-y-4 w-full">
        <button className=" w-full flex items-center justify-between px-4 py-2 text-white bg-[#006AA7] rounded shadow hover:bg-gray-300">
          
          <span>Reset</span>
          <FaRedo className="mr-2" />
        </button> 
        <button className="w-full flex items-center justify-between px-4 py-2 bg-[#006AA7] text-white rounded shadow hover:bg-blue-700">
          
          <span>Search</span>
          <FaSearch className="mr-2" />
        </button>
      </div>
    </div>
  );
};

export default AirTravel;
