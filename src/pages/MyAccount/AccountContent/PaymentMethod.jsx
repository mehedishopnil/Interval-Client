import React from 'react';

const PaymentMethod = () => {
     return (
          <div>
               {/* Add a Card Button */}
      <div className="mt-6">
        <button
          className="px-4 py-2 bg-[#0077BE] text-white rounded-lg shadow hover:bg-[#005f9e] transition w-full sm:w-auto"
          onClick={() => console.log("Edit Phone Numbers")}
        >
          Add a Card
        </button>
      </div>
          </div>
     );
};

export default PaymentMethod;