import React from 'react';

const ResortCard = ({resort}) => {
     return (
          <div>
               <div
            key={resort.id}
            className="border p-3 shadow-lg rounded-md overflow-hidden"
          >
            {/* Image */}
            <img
              src={resort.img}
              alt={resort.name}
              className="w-full h-48 object-cover mb-3"
            />
            {/* Resort Name */}
            <h2 className="text-lg font-bold">{resort.resortName}</h2>
            {/* Location */}
            <p className="text-gray-600">{resort.location}</p>
            {/* Symbol */}
            <p className="font-bold uppercase border p-2 mt-3 inline-block">
              {resort.symbol}
            </p>
          </div>
          </div>
     );
};

export default ResortCard;