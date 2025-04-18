import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { resort, card } = location.state || {};
  const { user, role } = useContext(AuthContext);

  // Retrieve and parse the data from local storage
  const storedData = localStorage.getItem("searchParams");
  const searchParams = storedData ? JSON.parse(storedData) : null;

  const handleContinue = () => {
    if (role === "admin") {
      alert("Admin could not book resort");
      navigate("/admin-panel/admin-overview");
      return;
    }

    if (user) {
      navigate("/payment", {
        state: {
          resort,
          card,
          searchParams,
        },
      });
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4">Select Master or Lock-off Portion</h1>
      <img
        src="https://www.intervalworld.com/images/iw/progress_booking.gif"
        alt="Progress"
        className="mb-6"
      />
      <p className="text-gray-700 mb-4">
        Your unit is designed to be divided into 2 or more private areas. Please select which portion
        you would like to trade.
      </p>

      {resort && (
        <div className="flex flex-col items-center sm:flex-row mb-6">
          <img
            src={resort.img}
            alt={resort.resortName}
            className="rounded object-cover w-full sm:w-1/3 h-32 mb-4 sm:mb-0 sm:mr-4"
          />
          <div className="sm:text-left">
            <h3 className="text-lg font-bold text-center text-[#006eae] pb-4">{resort.resortName}</h3>

            {searchParams ? (
              <>
                <p className="text-gray-600 font-bold">Earliest Date: {searchParams.earliestDate}</p>
                <p className="text-gray-600 font-bold">Latest Date: {searchParams.latestDate}</p>
              </>
            ) : (
              <p className="text-gray-600">No travel dates found in local storage.</p>
            )}

            {card && (
              <>
                <p className="text-gray-600 font-bold">Usage: {card.usage}</p>
                <p className="text-gray-600">Unit: {card.unit}</p>
                <p>(Lock-off capable)</p>
              </>
            )}
          </div>
        </div>
      )}

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-center mb-2">Select master or lock-off portion</h2>
        {card && (
          <p className="text-gray-700 text-center border py-1 rounded">
            1 Bedroom {card.unit} Full Kitchen
          </p>
        )}
      </div>
      
      <div className="bg-gray-100 p-4 rounded shadow-sm mb-6">
      <div className="flex justify-between py-2 gap-10">
        <h1 className="font-semibold">Booking Charges</h1>
        <h1><span className="font-semibold">${card.price}</span>USD + TAX</h1>
      </div>

      <button
        className="w-full bg-[#0077be] text-white py-2 px-4 rounded hover:bg-[#006eae]"
        onClick={handleContinue}
      >
        Continue
      </button>
      </div>
    </div>
  );
};

export default CheckoutPage;