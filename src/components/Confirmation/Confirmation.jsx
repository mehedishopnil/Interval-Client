import React from "react";
import { useLocation } from "react-router-dom";

const Confirmation = () => {
  const location = useLocation();
  const { bookingData } = location.state || {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center text-green-600 mb-4">Booking Confirmed!</h1>
        {bookingData && (
          <div>
            <p className="text-gray-700">Resort: {bookingData.resort.resortName}</p>
            <p className="text-gray-700">Dates: {bookingData.searchParams.earliestDate} - {bookingData.searchParams.latestDate}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Confirmation;
