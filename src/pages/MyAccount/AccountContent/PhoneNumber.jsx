import React from "react";

const PhoneNumber = () => {
  return (
    <div className="p-4">
      {/* Section Header */}
      <h1 className="text-2xl font-bold text-[#0077BE]">Phone Number</h1>
      <p className="text-gray-600 mt-2">
        Below is your registered phone number. You can edit it if needed.
      </p>

      {/* Phone Number Details */}
      <div className="mt-6 space-y-4 border border-gray-200 p-4 rounded-lg shadow-sm bg-white">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <span className="font-medium text-gray-800">Primary Phone:</span>
          <span className="text-gray-600">+1 234-567-8901</span>
        </div>
      </div>

      {/* Edit Phone Numbers Button */}
      <div className="mt-6">
        <button
          className="px-4 py-2 bg-[#0077BE] text-white rounded-lg shadow hover:bg-[#005f9e] transition w-full sm:w-auto"
          onClick={() => console.log("Edit Phone Numbers")}
        >
          Edit Phone Numbers
        </button>
      </div>
    </div>
  );
};

export default PhoneNumber;
