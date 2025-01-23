import React from 'react';
import { useLocation } from 'react-router-dom';

const AvailableUnit = () => {
  const location = useLocation();
  const { adults, children, earliestDate, latestDate } = location.state || {};

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Units</h1>
      <p className="text-gray-700 mb-4">
        To view availability, please select the unit you would like to redeem.
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">My Certificates</h2>
        <div className="flex items-center border p-4 rounded shadow-sm">
          <div className="text-blue-500 text-2xl mr-4">📜</div>
          <div>
            <p className="font-medium">Available: {Math.floor(Math.random() * 4) + 1}</p>
            <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
              View Certificates
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">Select Unit for Exchange:</h2>
      <p>Adults: {adults}</p>
      <p>Children: {children}</p>
      <p>Earliest Travel Date: {earliestDate}</p>
      <p>Latest Travel Date: {latestDate}</p>
    </div>
  );
};

export default AvailableUnit;
