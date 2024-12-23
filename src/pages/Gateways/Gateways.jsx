import React, { useState } from 'react';
import bannerPhoto from '../../assets/images/home-slider-1.jpg'

const Gateways = () => {
  const [activeMenu, setActiveMenu] = useState('Single Destination');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="p-4">
      {/* Hero Section */}
      <div
        className="relative w-full "
      >
          <img src={bannerPhoto} alt="" />
      </div>

      {/* Title and Paragraph */}
      <div className="mt-6">
        <h1 className="text-left text-2xl font-bold sm:text-3xl">Search Getaways</h1>
        <p className="text-left text-gray-600 mt-2">
          Take More Vacations At Irresistibly Low Prices
        </p>
      </div>

      {/* Buttons Section */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <button className="btn btn-primary w-full">Getaways</button>
        <button className="btn btn-secondary w-full">ShortStay Getaways</button>
      </div>

      {/* Submenu Section */}
      <div className="mt-6 border-b border-gray-300 pb-2">
        <div className="grid grid-cols-2 sm:flex sm:justify-between">
          {['Single Destination', 'Search All Destinations', 'Resort Name or Code', 'Area List'].map((menu) => (
            <button
              key={menu}
              className={`py-2 px-4 font-medium text-sm rounded-md text-center ${
                activeMenu === menu ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-blue-100'
              }`}
              onClick={() => handleMenuClick(menu)}
            >
              {menu}
            </button>
          ))}
        </div>
      </div>

      {/* Input Fields Section */}
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
        />

        {/* Travel Dates */}
        <div className=" flex gap-4 mt-6">
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
      </div>
    </div>
  );
};

export default Gateways;