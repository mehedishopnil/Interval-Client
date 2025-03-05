import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const MyBookings = () => {
  const { user, bookingsData } = useContext(AuthContext);

  return (
    <div className="p-6">
      {/* User Info Section */}
      <div className="flex items-center mb-8">
        <img
          src={user?.photoURL} // User photo
          alt="User"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h2 className="text-xl font-bold">{user?.displayName}</h2> {/* User name */}
          <p className="text-gray-600">{user?.email}</p> {/* User email */}
        </div>
      </div>

      {/* Bookings Section */}
      <h1 className="text-2xl font-bold mb-6">My Bookings</h1>
      <div className="space-y-6">
        {bookingsData?.map((booking, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            {/* Resort Info */}
            <div className="flex flex-col sm:flex-row items-center mb-6">
              <img
                src={booking.resort.img} // Resort image
                alt={booking.resort.resortName}
                className="w-full sm:w-48 h-48 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-6"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-[#006eae]">{booking.resort.resortName}</h3> {/* Resort name */}
                <p className="text-gray-600">{booking.resort.location}</p> {/* Resort location */}
              </div>
            </div>

            {/* Booking Dates */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Booking Dates</h4>
              <p className="text-gray-600">
                <span className="font-bold">Start Date:</span> {booking.startDate}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">End Date:</span> {booking.endDate}
              </p>
            </div>

            {/* Billing Info */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Billing Information</h4>
              <p className="text-gray-600">
                <span className="font-bold">Name:</span> {booking.billingInfo.firstName} {booking.billingInfo.lastName}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Address 1:</span> {booking.billingInfo.address1}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Address 2:</span> {booking.billingInfo.address2}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Country:</span> {booking.billingInfo.country}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">State:</span> {booking.billingInfo.state}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Phone Number:</span> {booking.billingInfo.phoneNumber}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;