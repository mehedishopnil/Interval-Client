import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation to access passed state
import ResortCard from '../ResortCard';

const SearchPage = () => {
  const location = useLocation();
  const searchResults = location.state?.results || []; // Access the filtered results passed from Gateways
  const [currentPage, setCurrentPage] = useState(1); // State to manage the current page
  const resortsPerPage = 10; // Number of resorts to display per page

  // Calculate the total number of pages
  const totalPages = Math.ceil(searchResults.length / resortsPerPage);

  // Get the resorts for the current page
  const indexOfLastResort = currentPage * resortsPerPage;
  const indexOfFirstResort = indexOfLastResort - resortsPerPage;
  const currentResorts = searchResults.slice(indexOfFirstResort, indexOfLastResort);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center text-[#18294B] mb-6">Search Results</h1>

      {/* Display message if no results are found */}
      {searchResults.length === 0 ? (
        <p className="text-gray-600">No matching destinations found.</p>
      ) : (
        <>
          {/* Resort Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentResorts.map((resort) => (
              <div key={resort._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Link to={`/single-resort-page/${resort._id}`}>
                  <ResortCard resort={resort} />
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8">
              <nav className="flex gap-2">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === 1
                      ? 'bg-gray-300 cursor-not-allowed'
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  Previous
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-4 py-2 rounded-md ${
                      currentPage === index + 1
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === totalPages
                      ? 'bg-gray-300 cursor-not-allowed'
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  Next
                </button>
              </nav>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchPage;