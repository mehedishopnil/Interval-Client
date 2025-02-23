import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { AuthContext } from "../../providers/AuthProvider";

const SingleDestination = () => {
  const { allResortData } = useContext(AuthContext);
  const navigate = useNavigate(); // Hook for navigation

  const [destinationInput, setDestinationInput] = useState(""); // Manage input state

  // Handle input change
  const handleDestinationInputChange = (e) => {
    setDestinationInput(e.target.value);
  };

  // Search function
  const handleSearch = () => {
    if (!destinationInput.trim()) {
      return; // Prevent search on empty input
    }

    const filteredResorts =
      allResortData?.filter((resort) =>
        resort.location.toLowerCase().includes(destinationInput.toLowerCase())
      ) || [];

    navigate("/search", { state: { results: filteredResorts } });
  };

  return (
    <div className="mt-8 px-4"> {/* Added padding to prevent overflow */}
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
      <div className="flex flex-col md:flex-row gap-4 mt-6"> {/* Stack vertically on mobile */}
        <div className="w-full"> {/* Full width on mobile */}
          <label htmlFor="earliest-date" className="block text-gray-700 font-medium mb-2">
            Earliest Travel Date
          </label>
          <input id="earliest-date" type="date" className="input input-bordered w-full" />
        </div>
        <div className="w-full"> {/* Full width on mobile */}
          <label htmlFor="latest-date" className="block text-gray-700 font-medium mb-2">
            Latest Travel Date
          </label>
          <input id="latest-date" type="date" className="input input-bordered w-full" />
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