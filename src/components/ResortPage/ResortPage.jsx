import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import ResortCard from "../ResortCard";
import Loading from "../Loading";

const ResortPage = () => {
  const { id } = useParams(); // `id` will be the country name
  const [filteredResorts, setFilteredResorts] = useState([]);
  const { allResortData, loading } = useContext(AuthContext); // Accessing resort data from AuthContext

  useEffect(() => {
    if (allResortData?.length) {
      // Filter resorts by country
      const filtered = allResortData.filter((resort) => resort.country === id);
      setFilteredResorts(filtered);
    }
  }, [id, allResortData]);

  if (loading) {
    return <Loading />; // Display the loading spinner while data is being fetched
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-5">{id} Resorts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredResorts.map((resort) => (
          <Link to={`/single-resort-page/${resort._id}`} key={resort._id}>
            <ResortCard resort={resort} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResortPage;
