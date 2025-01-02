import React, { useState } from 'react';
import bannerPhoto from '../../assets/images/exchange-banner.jpg';

const Exchange = () => {
  const [activeTab, setActiveTab] = useState('Vacation Exchange');
  const [activeSubTab, setActiveSubTab] = useState('Single Destination');

  const tabs = [
    'Vacation Exchange',
    'Cruise Exchange',
    'ShortStay Exchange',
    'Hotel Exchange',
    'My Units',
  ];

  const subTabs = [
    'Single Destination',
    'Search All <br/> Destinations',
    'Resort Name <br/> or Code',
    'Area List',
  ];

  return (
    <div>
      {/* Title */}
      <div className="py-5 text-left px-6">
        <h1 className="text-2xl text-left font-bold text-blue-500">Exchange</h1>
      </div>

      <div className="w-full flex flex-col items-center">
        {/* Banner */}
        <div className="w-full">
          <img src={bannerPhoto} alt="Exchange Banner" className="w-full" />
        </div>

        {/* Tabs Section */}
        <div className="w-10/12 mt-6">
          <div className="flex justify-around border-b border-gray-300">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`py-3 px-4 text-sm font-medium text-center ${
                  activeTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.split(' ').map((word, index) => (
                  <span key={index} className="block">
                    {word}
                  </span>
                ))}
              </button>
            ))}
          </div>

          {/* Sub Tabs for "Vacation Exchange" */}
          {activeTab === 'Vacation Exchange' && (
            <div className="mt-6">
              <div className="flex justify-center border-b border-gray-300 pb-2">
                {subTabs.map((subTab, index) => (
                  <button
                    key={index}
                    className={`py-2 px-4 text-sm font-medium text-center ${
                      activeSubTab === subTab
                        ? 'bg-blue-500 text-white rounded'
                        : 'text-gray-700 hover:bg-blue-100'
                    }`}
                    onClick={() => setActiveSubTab(subTab)}
                    dangerouslySetInnerHTML={{ __html: subTab }}
                  />
                ))}
              </div>

              {/* Content for Sub Tabs */}
              <div className="mt-6">
                {activeSubTab === 'Single Destination' && (
                  <div>
                    <label
                      htmlFor="destination"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Destination
                    </label>
                    <input
                      id="destination"
                      type="text"
                      placeholder="Enter city or point of interest"
                      className="input input-bordered w-full"
                    />
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                      <div className="w-full">
                        <label
                          htmlFor="earliest-date"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Earliest Travel Date
                        </label>
                        <input
                          id="earliest-date"
                          type="date"
                          className="input input-bordered w-full"
                        />
                      </div>
                      <div className="w-full">
                        <label
                          htmlFor="latest-date"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Latest Travel Date
                        </label>
                        <input
                          id="latest-date"
                          type="date"
                          className="input input-bordered w-full"
                        />
                      </div>
                    </div>
                    <button className="w-full bg-blue-500 rounded text-white font-medium py-3 mt-6 hover:bg-blue-600">
                      Find Exchange
                    </button>
                  </div>
                )}
                {activeSubTab === 'Search All <br/> Destinations' && (
                  <div>
                    <p className="text-gray-700 font-medium">
                      Feature coming soon!
                    </p>
                  </div>
                )}
                {activeSubTab === 'Resort Name <br/> or Code' && (
                  <div>
                    <label
                      htmlFor="resort-code"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Resort Name or Code
                    </label>
                    <input
                      id="resort-code"
                      type="text"
                      placeholder="Enter resort name or code"
                      className="input input-bordered w-full"
                    />
                    <button className="w-full bg-blue-500 rounded text-white font-medium py-3 mt-6 hover:bg-blue-600">
                      Search Resort
                    </button>
                  </div>
                )}
                {activeSubTab === 'Area List' && (
                  <div>
                    <p className="text-gray-700 font-medium">
                      Area List content here.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Exchange;
