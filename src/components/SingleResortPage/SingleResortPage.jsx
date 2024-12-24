import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import TabContent from "./TabContent/TabContent";

const SingleResortPage = () => {
  const { id } = useParams(); // Resort ID from the URL
  const { allResortData } = useContext(AuthContext); // Fetch resort data from context
  const navigate = useNavigate();

  const [resort, setResort] = useState(null);
  const [currentImage, setCurrentImage] = useState(0); // For image carousel
  const [activeTab, setActiveTab] = useState("description"); // For tab navigation

  useEffect(() => {
    if (allResortData?.length) {
      // Find the resort with the matching ID
      const foundResort = allResortData.find((r) => r._id === id);
      setResort(foundResort);
    }
  }, [id, allResortData]);

  if (!resort) {
    return <p className="text-center my-10">Loading...</p>; // Show a loading message while data is being fetched
  }

  const {
    resortName,
    location,
    symbol,
    description,
    img,
    img2,
    img3,
  } = resort;

  const images = [img, img2, img3];

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-2">{resortName}</h1>
      <p className="text-gray-600 mb-2">{location}</p>
      <p className="font-bold uppercase border p-2 inline-block mb-4">
        {symbol}
      </p>

      {/* Image Carousel */}
      <div className="my-5">
        <div className="relative">
          <img
            src={images[currentImage]}
            alt="Resort"
            className="w-full h-64 object-cover mb-2 rounded"
          />
          <div className="flex justify-center gap-2 mt-2">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-16 object-cover cursor-pointer rounded border ${
                  index === currentImage ? "border-blue-500" : "border-gray-300"
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <TabContent
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        resort={resort}
      />

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mt-5 bg-blue-500 text-white px-5 py-2 rounded"
      >
        Back
      </button>
    </div>
  );
};

export default SingleResortPage;
