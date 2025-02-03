import React, { useContext, useState } from 'react';
import bannerPhoto from '../../assets/images/getaways-banner.jpg';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { IoIosArrowForward } from 'react-icons/io';
import { AuthContext } from '../../providers/AuthProvider';

const Gateways = () => {
  const [activeTab, setActiveTab] = useState('Getaways');
  const [activeMenu, setActiveMenu] = useState('Single Destination');
  const [destinationInput, setDestinationInput] = useState(''); // State to manage destination input
  const navigate = useNavigate(); // Hook for navigation

  const { allResortData } = useContext(AuthContext);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === 'ShortStay Getaways') {
      setActiveMenu(null);
    }
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const handleDestinationInputChange = (e) => {
    setDestinationInput(e.target.value); // Update destination input state
  };

  const handleSearch = () => {
    // Filter resorts based on the destination input
    const filteredResorts = allResortData.filter(resort =>
      resort.location.toLowerCase().includes(destinationInput.toLowerCase())
    );

    // Navigate to the SearchPage with the filtered results
    navigate('/search', { state: { results: filteredResorts } });
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <div>
        <img src={bannerPhoto} alt="Banner" className="" />
      </div>

      <div className="p-4 w-10/12">
        {/* Title and Paragraph */}
        <div className="mt-6">
          <h1 className="text-left text-2xl font-bold text-blue-700 sm:text-3xl">Search Getaways</h1>
          <p className="text-left text-gray-600 font-bold mt-1">
            Take More Vacations At Irresistibly Low Prices
          </p>
        </div>

        {/* Tab Buttons Section */}
        <div className="grid grid-cols-2 items-center justify-center mt-6">
          <button
            className={`w-full text-xs border-2 rounded-s-md py-3 ${
              activeTab === 'Getaways' ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'
            }`}
            onClick={() => handleTabClick('Getaways')}
          >
            Getaways
          </button>
          <button
            className={`w-full border-2 text-xs rounded-e-md py-3 ${
              activeTab === 'ShortStay Getaways' ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'
            }`}
            onClick={() => handleTabClick('ShortStay Getaways')}
          >
            ShortStay Getaways
          </button>
        </div>

        {/* Submenu Section */}
        {activeTab === 'Getaways' && (
          <div className="w-full flex justify-center items-center mt-6 border-b border-gray-300 pb-2">
            <div className="w-full grid grid-cols-4 border-2">
              {['Single Destination', 'Search All Destinations', 'Resort Name or Code', 'Area List'].map((menu) => (
                <button
                  key={menu}
                  className={`py-2 px-4 font-medium text-xs border-r-2 text-center ${
                    activeMenu === menu ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-blue-100'
                  }`}
                  onClick={() => handleMenuClick(menu)}
                >
                  {menu}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Fields Section for "Single Destination" */}
        {activeTab === 'Getaways' && activeMenu === 'Single Destination' && (
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
        )}

        {/* Other Options */}
        <div className="w-full mt-10">
          <Link className="flex border-t-2 p-3 font-semibold text-gray-600 hover:bg-blue-100 items-center justify-between">
            <h1>Top Getaway Deals</h1>
            <IoIosArrowForward className="text-yellow-600 font-bold text-xl" />
          </Link>

          <Link className="flex border-y-2 p-3 font-semibold text-gray-600 hover:bg-blue-100 items-center justify-between">
            <h1>Best Price Guarantee</h1>
            <IoIosArrowForward className="text-yellow-600 font-bold text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gateways;