import React from 'react';

const SingleDestination = ({ destinationInput, handleDestinationInputChange, handleSearch }) => {
  return (
    <div className="mt-8">
      {/* Destination Input */}
      <label htmlFor="destination" className="block text-gray-700 font-medium mb-2">
        Destination
      </label>
      <input
        id="destination"
        type="text"
        placeholder="Enter city or a point of interest"
        className="input input-bordered w-full"
        value={destinationInput}
        onChange={handleDestinationInputChange}
      />

      {/* Travel Dates */}
      <div className="flex gap-4 mt-6">
        <div>
          <label htmlFor="earliest-date" className="block text-gray-700 font-medium mb-2">
            Earliest Travel Date
          </label>
          <input
            id="earliest-date"
            type="date"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label htmlFor="latest-date" className="block text-gray-700 font-medium mb-2">
            Latest Travel Date
          </label>
          <input
            id="latest-date"
            type="date"
            className="input input-bordered w-full"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        className="w-full bg-blue-500 rounded text-white font-medium py-3 mt-6 hover:bg-blue-600"
        onClick={handleSearch}
      >
        Find Getaway
      </button>
    </div>
  );
};

export default SingleDestination;