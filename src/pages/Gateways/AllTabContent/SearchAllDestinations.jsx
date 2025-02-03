import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { AuthContext } from '../../../providers/AuthProvider';

const SearchAllDestinations = () => {
  const { allResortData } = useContext(AuthContext);
  const navigate = useNavigate(); // Hook for navigation
  const [destinationInput, setDestinationInput] = useState(''); // State to manage destination input

  // Handle destination input change
  const handleDestinationInputChange = (e) => {
    setDestinationInput(e.target.value);
  };

  // Handle search functionality
  const handleSearch = () => {
    console.log('Destination Input:', destinationInput);
    console.log('All Resort Data:', allResortData);

    // Check if destination input is empty
    if (!destinationInput.trim()) {
      alert('Please enter a destination.');
      return;
    }

    // Filter resorts based on the destination input (matches location or resort name)
    const filteredResorts = allResortData.filter(
      (resort) =>
        resort.location.toLowerCase().includes(destinationInput.toLowerCase()) ||
        resort.resortName.toLowerCase().includes(destinationInput.toLowerCase())
    );

    console.log('Filtered Resorts:', filteredResorts);

    // Navigate to the SearchPage with the filtered results
    if (filteredResorts.length === 0) {
      alert('No matching destinations found.');
    } else {
      navigate('/search', { state: { results: filteredResorts } });
    }
  };

  return (
    <div className="mt-8">
      {/* Destination Input */}
      <label htmlFor="destination" className="block text-gray-700 font-medium mb-2">
        Destination
      </label>
      <input
        id="destination"
        type="text"
        placeholder="Enter city, resort name, or a point of interest"
        className="input input-bordered w-full"
        value={destinationInput}
        onChange={handleDestinationInputChange}
      />

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

export default SearchAllDestinations;