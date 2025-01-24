import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { resort, card, searchParams } = location.state || {};

  // State to handle payment information
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePayment = async () => {
    // Validate payment details
    if (
      !paymentDetails.cardNumber ||
      !paymentDetails.expiryDate ||
      !paymentDetails.cvv ||
      !paymentDetails.nameOnCard
    ) {
      Swal.fire({
        icon: "error",
        title: "Incomplete Payment Details",
        text: "Please fill in all the fields to complete your payment.",
      });
      return;
    }

    // Combine booking data
    const bookingData = {
      resort,
      card,
      searchParams,
      paymentDetails,
    };

    try {
      // Send booking data to the backend
      const response = await axios.post(
        "https://your-backend-server-url/bookings", // Replace with your backend endpoint
        bookingData
      );

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Payment Successful",
          text: "Your booking has been confirmed!",
        });
        navigate("/confirmation", { state: { bookingData } }); // Redirect to confirmation page
      } else {
        throw new Error("Payment failed");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Payment Failed",
        text: "There was an error processing your payment. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg w-full max-w-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Payment Page</h1>
        <p className="text-gray-700 mb-4 text-center">
          Complete your payment to confirm your booking.
        </p>
        {resort && (
          <div className="mb-4">
            <p className="text-gray-700 font-semibold">Resort: {resort.resortName}</p>
            <p className="text-gray-700 font-semibold">
              Dates: {searchParams?.earliestDate} - {searchParams?.latestDate}
            </p>
            <p className="text-gray-700 font-semibold">Usage: {card?.usage}</p>
          </div>
        )}

        {/* Payment Form */}
        <div className="space-y-4">
          <input
            type="text"
            name="nameOnCard"
            placeholder="Name on Card"
            value={paymentDetails.nameOnCard}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={paymentDetails.cardNumber}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="flex space-x-4">
            <input
              type="text"
              name="expiryDate"
              placeholder="MM/YY"
              value={paymentDetails.expiryDate}
              onChange={handleInputChange}
              className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={paymentDetails.cvv}
              onChange={handleInputChange}
              className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <button
          onClick={handlePayment}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mt-6 hover:bg-blue-600 transition duration-300"
        >
          Complete Payment
        </button>
      </div>
    </div>
  );
};

export default Payment;
