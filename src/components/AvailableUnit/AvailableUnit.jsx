import React from "react";
import { useLocation } from "react-router-dom";

const AvailableUnit = () => {
  const location = useLocation();
  const { adults, children, earliestDate, latestDate, resort } =
    location.state || {};

  console.log(resort);

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4">My Units</h1>
      <p className="text-gray-700 mb-4">
        To view availability, please select the unit you would like to redeem.
      </p>

      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">My Certificates</h2>
        <div className="flex flex-col sm:flex-row items-center border p-4 rounded shadow-sm">
          <div className="text-blue-500 text-2xl mb-2 sm:mb-0 sm:mr-4">📜</div>
          <div className="text-center sm:text-left">
            <p className="font-medium">
              Available: {Math.floor(Math.random() * 4) + 1}
            </p>
            <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
              View Certificates
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-lg sm:text-xl font-semibold mb-4">Select Unit for Exchange:</h2>

      {/* Display Selected Resort Card */}
      {resort && (
        <div className="w-full grid grid-cols-6 sm:flex-row items-center border rounded mb-6 ">
          {/* Resort Image */}
          <div className="w-full col-span-2 sm:w-1/3  sm:mb-0">
            <img
              src={resort.img}
              alt={resort.resortName}
              className="rounded object-cover w-full h-32"
            />
          </div>
          {/* Resort Details */}
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
      
      <div className="divider"></div>
      
    </div>
  );
};

export default AvailableUnit;
