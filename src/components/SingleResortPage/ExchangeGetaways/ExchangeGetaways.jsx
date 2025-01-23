import React, { useState } from 'react';

const ExchangeGetaways = () => {
  const [activeTab, setActiveTab] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  return (
    <div className="p-6">
      {/* Tab Navigation */}
      <div className="flex justify-center mb-6">
        <button
          className={`px-4 py-2 font-semibold ${
            activeTab === 'Exchange' ? 'bg-blue-500 text-white' : 'border-2 border-gray-200 text-gray-700'
          } rounded-l-md`}
          onClick={() => setActiveTab('Exchange')}
        >
          Exchange
        </button>
        <button
          className={`px-4 py-2 font-semibold ${
            activeTab === 'Getaways' ? 'bg-blue-500 text-white' : 'border-2 border-gray-200 text-gray-700'
          } rounded-r-md`}
          onClick={() => setActiveTab('Getaways')}
        >
          Getaways
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-white p-6 rounded">
        {activeTab === 'Exchange' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Vacation Exchange</h2>

            {/* Date Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="earliest-date" className="block text-gray-700 font-medium mb-2">
                  Earliest Travel Date:
                </label>
                <input
                  type="date"
                  id="earliest-date"
                  className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label htmlFor="latest-date" className="block text-gray-700 font-medium mb-2">
                  Latest Travel Date:
                </label>
                <input
                  type="date"
                  id="latest-date"
                  className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
                />
              </div>
            </div>

            {/* Divider */}
            <hr className="my-6 border-gray-300" />

            {/* Adults and Children */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="adults" className="block text-gray-700 font-medium mb-2">
                  Adults:
                </label>
                <select
                  id="adults"
                  className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
                  value={adults}
                  onChange={(e) => setAdults(parseInt(e.target.value, 10))}
                >
                  {Array.from({ length: 9 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="children" className="block text-gray-700 font-medium mb-2">
                  Children:
                </label>
                <select
                  id="children"
                  className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
                  value={children}
                  onChange={(e) => setChildren(parseInt(e.target.value, 10))}
                >
                  {Array.from({ length: 10 }, (_, i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Begin Search Button */}
            <button
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
            >
              Begin Search
            </button>
          </div>
        )}

        {activeTab === 'Getaways' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Getaways</h2>

            {/* Date Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="getaways-earliest-date" className="block text-gray-700 font-medium mb-2">
                  Earliest Travel Date:
                </label>
                <input
                  type="date"
                  id="getaways-earliest-date"
                  className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label htmlFor="getaways-latest-date" className="block text-gray-700 font-medium mb-2">
                  Latest Travel Date:
                </label>
                <input
                  type="date"
                  id="getaways-latest-date"
                  className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
                />
              </div>
            </div>

            {/* Begin Search Button */}
            <button
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
            >
              Begin Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExchangeGetaways;
