import React, { useState } from "react";
import { FaSearch, FaCalendarAlt, FaClock, FaRedo } from "react-icons/fa";
import RentalCompany from "./RentalCompany";
import CarTypeList from "./CarTypeList";

const CarRentals = () => {
     const [pickupLocation, setPickupLocation] = useState("");
     const [pickupDate, setPickupDate] = useState("");
     const [pickupTime, setPickupTime] = useState("");
     const [dropoffLocation, setDropoffLocation] = useState("");
     const [dropoffDate, setDropoffDate] = useState("");
     const [dropoffTime, setDropoffTime] = useState("");
     const [rentalCompany, setRentalCompany] = useState("");
     const [carType, setCarType] = useState("");

     const handleReset = () => {
          setPickupLocation("");
          setPickupDate("");
          setPickupTime("");
          setDropoffLocation("");
          setDropoffDate("");
          setDropoffTime("");
          setRentalCompany("");
          setCarType("");
     };

     return (
          <div className="p-6 max-w-3xl mx-auto bg-white rounded shadow-md">
               {/* Title */}
               <h1 className="text-2xl font-bold text-blue-600 mb-6 text-center">
                    Car Search
               </h1>

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
                    <div className="grid gap-4 md:grid-cols-2">
                         <div>
                              <label className="block text-gray-700 font-semibold mb-2">
                                   Pick-Up Date
                              </label>
                              <div className="flex items-center border border-gray-300 rounded p-2">
                                   <input
                                        type="date"
                                        value={pickupDate}
                                        onChange={(e) => setPickupDate(e.target.value)}
                                        className="flex-grow outline-none text-gray-700"
                                   />
                              </div>
                         </div>

                         <div>
                              <label className="block text-gray-700 font-semibold mb-2">
                                   Pick-Up Time
                              </label>
                              <div className="flex items-center border border-gray-300 rounded p-2">
                                   <input
                                        type="time"
                                        value={pickupTime}
                                        onChange={(e) => setPickupTime(e.target.value)}
                                        className="flex-grow outline-none text-gray-700"
                                   />
                              </div>
                         </div>
                    </div>

                    {/* Drop-Off Section */}
                    <div className="grid gap-4 md:grid-cols-2 mt-4">
                         <div>
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
                         <div>
                              <label className="block text-gray-700 font-semibold mb-2">
                                   Drop-Off Date
                              </label>
                              <div className="flex items-center border border-gray-300 rounded p-2">
                                   <input
                                        type="date"
                                        value={dropoffDate}
                                        onChange={(e) => setDropoffDate(e.target.value)}
                                        className="flex-grow outline-none text-gray-700"
                                   />
                              </div>
                         </div>
                    </div>

                    <div className="mt-4">
                         <label className="block text-gray-700 font-semibold mb-2">
                              Drop-Off Time
                         </label>
                         <div className="flex items-center border border-gray-300 rounded p-2">
                              <input
                                   type="time"
                                   value={dropoffTime}
                                   onChange={(e) => setDropoffTime(e.target.value)}
                                   className="flex-grow outline-none text-gray-700"
                              />
                         </div>
                    </div>

                    {/* Car Rental Company */}
                    <div className="mt-4">
                         <label className="block text-gray-700 font-semibold mb-2">
                              Select Car Rental Company
                         </label>
                         <select
                              value={rentalCompany}
                              onChange={(e) => setRentalCompany(e.target.value)}
                              className="w-full border border-gray-300 rounded p-2 text-gray-700"
                         >
                              <RentalCompany />
                         </select>
                    </div>

                    {/* Car Type */}
                    <div className="mt-4">
                         <label className="block text-gray-700 font-semibold mb-2">
                              Car Type
                         </label>
                         <select
                              value={carType}
                              onChange={(e) => setCarType(e.target.value)}
                              className="w-full border border-gray-300 rounded p-2 text-gray-700"
                         >
                              <CarTypeList />
                         </select>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                         <button
                              type="button"
                              onClick={handleReset}
                              className="flex items-center justify-between gap-2 bg-[#0077be] font-semibold text-white px-4 py-2 rounded hover:bg-gray-400"
                         >
                              Reset
                              <FaRedo />
                         </button>
                         <button
                              type="button"
                              className="gap-2 bg-[#0077be] text-white px-4 py-2 rounded hover:bg-blue-500"
                         >
                              <div className="flex items-center justify-between font-semibold">
                                   <h1>Search Cars</h1>
                                   <FaSearch />
                              </div>
                         </button>
                    </div>
               </form>
          </div>
     );
};

export default CarRentals;
