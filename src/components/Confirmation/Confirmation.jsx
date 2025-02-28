import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingData } = location.state || {};

  if (!bookingData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-2xl font-bold text-center text-red-600 mb-4">
            Error: No booking data found.
          </h1>
          <button
            className="btn btn-primary w-full mt-4"
            onClick={() => navigate("/")}
          >
            Go to Homepage
          </button>
        </div>
      </div>
    );
  }

  const {
    resort,
    searchParams,
    price,
    email,
    cardNumber,
    expiryDate,
    billingInfo,
  } = bookingData;

  const { firstName, lastName, address1, address2, country, city, state, postalCode, phoneNumber } =
    billingInfo || {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
          Booking Confirmed!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Billing Information</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>First Name:</strong> {firstName}
              </p>
              <p className="text-gray-700">
                <strong>Last Name:</strong> {lastName}
              </p>
              <p className="text-gray-700">
                <strong>Address Line 1:</strong> {address1}
              </p>
              <p className="text-gray-700">
                <strong>Address Line 2:</strong> {address2 || "N/A"}
              </p>
              <p className="text-gray-700">
                <strong>Country:</strong> {country}
              </p>
              <p className="text-gray-700">
                <strong>City:</strong> {city}
              </p>
              <p className="text-gray-700">
                <strong>State:</strong> {state}
              </p>
              <p className="text-gray-700">
                <strong>Postal Code:</strong> {postalCode}
              </p>
              <p className="text-gray-700">
                <strong>Phone Number:</strong> {phoneNumber}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Card Number:</strong> **** **** **** {cardNumber?.slice(-4)}
              </p>
              <p className="text-gray-700">
                <strong>Expiry Date:</strong> {expiryDate}
              </p>
              <p className="text-gray-700">
                <strong>CVV:</strong> ***
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-700">
              <strong>Resort:</strong> {resort.resortName}
            </p>
            <p className="text-gray-700">
              <strong>Dates:</strong> {searchParams.earliestDate} - {searchParams.latestDate}
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> {email}
            </p>
            <p className="text-gray-700">
              <strong>Total Price:</strong> USD {price}
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            className="btn btn-primary w-full"
            onClick={() => navigate("/")}
          >
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;