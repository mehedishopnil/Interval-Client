import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Cruises = () => {
  // Carousel state
  const [currentImage, setCurrentImage] = useState(0);

  // Tab state
  const [activeTab, setActiveTab] = useState(null);

  // Carousel images
  const carouselImages = [
    "https://www.intervalworld.com/iimedia/images/slider/Cruise_Landing_Slider1.jpg",
    "https://www.intervalworld.com/iimedia/images/slider/Cruise_Landing_Slider2.jpg",
    "https://www.intervalworld.com/iimedia/images/slider/Cruise_Landing_Slider4.jpg",
    "https://www.intervalworld.com/iimedia/images/slider/Cruise_Landing_Slider5.jpg"
  ];

  // Tabs and their content
  const tabs = [
    { id: "Destination", label: "Destination", content: "Explore cruises to exotic destinations." },
    { id: "Cruise Line", label: "Cruise Line", content: "Choose from top cruise lines like Royal Caribbean and Carnival." },
    { id: "Cruise Length", label: "Cruise Length", content: "Select cruises based on their duration." },
    { id: "Feb-2025", label: "Feb - 2025", content: "Discover cruises available in February 2025." },
    { id: "More Options", label: "More Options", content: "Find cruises with customizable options." },
  ];

  // Handle tab click
  const handleTabClick = (tabId) => {
    setActiveTab((prevTab) => (prevTab === tabId ? null : tabId));
  };

  // Carousel auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className="p-4">
      {/* Carousel Section */}
      <div className="relative">
        <img
          src={carouselImages[currentImage]}
          alt={`Cruise ${currentImage + 1}`}
          className=" md:h-80 object-cover rounded-md shadow-md"
        />
        {/* Navigation Dots */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentImage === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Find a Cruise Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-blue-600  md:text-left">
          Find a Cruise
        </h2>

        {/* Tabs Section */}
        <div className="flex flex-col mt-4">
          {tabs.map((tab) => (
            <div key={tab.id} className="border-b border-gray-300">
              <button
                onClick={() => handleTabClick(tab.id)}
                className="flex items-center gap-2 w-full p-3 text-left hover:bg-gray-100"
              >
                {activeTab === tab.id ? (
                  <FaChevronUp className="text-blue-600" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
                <span
                  className={`text-sm ${
                    activeTab === tab.id ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  {tab.label}
                </span>
              </button>
              {activeTab === tab.id && (
                <div className="p-3 text-sm text-gray-600">{tab.content}</div>
              )}
            </div>
          ))}
        </div>

        {/* Search Button */}
        <div className="mt-6">
          <button className="btn btn-primary w-full">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Cruises;
