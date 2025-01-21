import React from "react";

const AddressInfo = () => {
  return (
    <div className="p-4">
      {/* Section Header */}
      <h1 className="text-2xl font-bold text-[#0077BE]">Address Information</h1>
      <p className="text-gray-600 mt-2">
        Below is your saved address information. You can edit this at any time.
      </p>

      {/* Address Details */}
      <div className="mt-6 space-y-4 border border-gray-200 p-4 rounded-lg shadow-sm bg-white">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <span className="font-medium text-gray-800">Country:</span>
          <span className="text-gray-600">United States Of America</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <span className="font-medium text-gray-800">Address:</span>
          <span className="text-gray-600">5879 MANCHESTER RD</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <span className="font-medium text-gray-800">Address 2:</span>
          <span className="text-gray-600">-</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <span className="font-medium text-gray-800">City:</span>
          <span className="text-gray-600">FRANKLIN</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <span className="font-medium text-gray-800">State:</span>
          <span className="text-gray-600">OH</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <span className="font-medium text-gray-800">Zip Code:</span>
          <span className="text-gray-600">45005-4368</span>
        </div>
      </div>

      {/* Edit Address Button */}
      <div className="mt-6">
        <button
          className="px-4 py-2 bg-[#0077BE] text-white rounded-lg shadow hover:bg-[#005f9e] transition w-full sm:w-auto"
          onClick={() => console.log("Edit Address")}
        >
          Edit Address
        </button>
      </div>
    </div>
  );
};

export default AddressInfo;
