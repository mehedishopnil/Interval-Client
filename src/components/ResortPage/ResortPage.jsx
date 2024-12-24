import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const ResortPage = () => {
  const { id } = useParams(); // `id` will be the country name
  const [filteredResorts, setFilteredResorts] = useState([]);
  const { allResortData } = useContext(AuthContext); // Accessing resort data from AuthContext

  useEffect(() => {
    if (allResortData?.length) {
      // Filter resorts by country
      const filtered = allResortData.filter((resort) => resort.country === id);
      setFilteredResorts(filtered);
    }
  }, [id, allResortData]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-5">{id} Resorts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredResorts.map((resort) => (
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
        ))}
      </div>
    </div>
  );
};

export default ResortPage;
