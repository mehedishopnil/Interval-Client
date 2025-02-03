import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation to access passed state
import ResortCard from '../ResortCard';

const SearchPage = () => {
  const location = useLocation();
  const searchResults = location.state?.results || []; // Access the filtered results passed from Gateways

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center text-[#18294B] mb-6">Search Results</h1>

      {/* Display message if no results are found */}
      {searchResults.length === 0 ? (
        <p className="text-gray-600">No matching destinations found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Map through the search results and display each resort in a card */}
          {searchResults.map((resort, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">

               <Link to={`/single-resort-page/${resort._id}`} key={resort._id}>
               <ResortCard resort={resort} />
               </Link>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;