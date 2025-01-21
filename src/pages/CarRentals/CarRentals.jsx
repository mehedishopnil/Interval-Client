import React, { useState } from "react";
import { FaSearch, FaCalendarAlt, FaClock, FaRedo } from "react-icons/fa";

const CarRentals = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [dropoffTime, setDropoffTime] = useState("");
  const [rentalCompany, setRentalCompany] = useState("");

  const handleReset = () => {
    setPickupLocation("");
    setPickupDate("");
    setPickupTime("");
    setDropoffLocation("");
    setDropoffDate("");
    setDropoffTime("");
    setRentalCompany("");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded shadow-md">
      {/* Title */}
      <h1 className="text-2xl font-bold text-blue-600 mb-6">Car Search</h1>

      {/* Search Bar */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Pickup Location
        </label>
        <div className="flex items-center border border-gray-300 rounded p-2">
          <input
            type="text"
            placeholder="Enter Airport"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="flex-grow outline-none text-gray-700"
          />
          <FaSearch className="text-gray-500" />
        </div>
      </div>

      {/* Form */}
      <form>
        {/* Pick-Up Section */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Pick-Up Date
          </label>
          <div className="flex items-center border border-gray-300 rounded p-2">
            <input
              type="date"
              placeholder={new Date().toISOString().split("T")[0]}
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="flex-grow outline-none text-gray-700"
            />
            <FaCalendarAlt className="text-gray-500" />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Pick-Up Time
          </label>
          <div className="flex items-center border border-gray-300 rounded p-2">
            <input
              type="time"
              placeholder="10:00 AM"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="flex-grow outline-none text-gray-700"
            />
            <FaClock className="text-gray-500" />
          </div>
        </div>

        {/* Drop-Off Section */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Dropoff Location
          </label>
          <div className="flex items-center border border-gray-300 rounded p-2">
            <input
              type="text"
              placeholder="Same as Pick-Up"
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
              className="flex-grow outline-none text-gray-700"
            />
            <FaSearch className="text-gray-500" />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Drop-Off Date
          </label>
          <div className="flex items-center border border-gray-300 rounded p-2">
            <input
              type="date"
              placeholder={new Date().toISOString().split("T")[0]}
              value={dropoffDate}
              onChange={(e) => setDropoffDate(e.target.value)}
              className="flex-grow outline-none text-gray-700"
            />
            <FaCalendarAlt className="text-gray-500" />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Drop-Off Time
          </label>
          <div className="flex items-center border border-gray-300 rounded p-2">
            <input
              type="time"
              placeholder="10:00 AM"
              value={dropoffTime}
              onChange={(e) => setDropoffTime(e.target.value)}
              className="flex-grow outline-none text-gray-700"
            />
            <FaClock className="text-gray-500" />
          </div>
        </div>

        {/* Car Rental Company */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Select Car Rental Company
          </label>
          <select
            value={rentalCompany}
            onChange={(e) => setRentalCompany(e.target.value)}
            className="w-full border border-gray-300 rounded p-2 text-gray-700"
          >
            <option value="">Any</option>
            <option value="Hertz">Hertz</option>
            <option value="Enterprise">Enterprise</option>
            <option value="Avis">Avis</option>
            <option value="Budget">Budget</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-2 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
          >
            <FaRedo />
            Reset
          </button>
          <button
            type="submit"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            <FaSearch />
            Search Cars
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarRentals;
