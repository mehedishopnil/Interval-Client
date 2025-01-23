import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import TabContent from "./TabContent/TabContent";
import ExchangeGetaways from "./ExchangeGetaways/ExchangeGetaways";
import Loading from "../Loading";

const SingleResortPage = () => {
  const { id } = useParams(); // Resort ID from the URL
  const { allResortData, loading } = useContext(AuthContext); // Fetch resort data from context
  const navigate = useNavigate();

  const [resort, setResort] = useState(null);
  const [currentImage, setCurrentImage] = useState(0); // For image carousel
  const [activeTab, setActiveTab] = useState("description"); // For tab navigation

  // Declare images before useEffect
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (allResortData?.length) {
        // Find the resort with the matching ID
        const foundResort = allResortData.find((r) => r._id === id);
        setResort(foundResort);

        if (foundResort) {
            // Conditionally include images
            const images = [foundResort.img, foundResort.img2, foundResort.img3];
            if (foundResort.img4) {
                images.push(foundResort.img4);
            }
            setImages(images);
        }
    }
}, [id, allResortData]);

  // Carousel Auto-Change Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup
  }, [images]);

  if (loading || !resort) {
    return <Loading />; // Show the Loading component while data is being fetched
  }

  const { resortName, location, symbol } = resort;

  return (
    <div className="container mx-auto p-5">
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
                className={`w-10 h-10 object-cover cursor-pointer rounded border-2 ${
                  index === currentImage ? "border-blue-500" : "border-gray-300"
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Resort Info */}
      <div>
        <h1 className="text-xl text-[#0077be] font-semibold mb-2">{resortName}</h1>
        <p className="text-gray-600 mb-2">{location}</p>
        <p className="font-bold uppercase border p-2 inline-block mb-4">
          {symbol}
        </p>
      </div>

      {/* Exchange and Getaways */}
      <ExchangeGetaways resort={resort} />

      {/* Tab Content */}
      <TabContent
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        resort={resort}
      />

      {/* Back Button */}
      <div className="flex items-center justify-center">
        <button
          onClick={() => navigate(-1)}
          className="mt-5 bg-blue-500 text-white px-5 py-2 rounded"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default SingleResortPage;
