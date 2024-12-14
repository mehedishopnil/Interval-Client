import React, { useEffect, useState } from 'react';
import slidImg1 from "../../../assets/images/home-slider-1.jpg";
import slidImg2 from "../../../assets/images/home-slider-2.jpg";
import slidImg3 from "../../../assets/images/home-slider-3.jpg";
import slidImg4 from "../../../assets/images/home-slider-4.jpg";

const Carousel = () => {
     const [activeSlide, setActiveSlide] = useState(1);
     
       // Automatically switch slides every 8 seconds
       useEffect(() => {
         const interval = setInterval(() => {
           setActiveSlide((prev) => (prev === 4 ? 1 : prev + 1));
         }, 8000);
         return () => clearInterval(interval);
       }, []);
     
       // Function to handle navigation
       const goToSlide = (slide) => {
         setActiveSlide(slide);
       };
     
       const goNext = () => {
         setActiveSlide((prev) => (prev === 4 ? 1 : prev + 1));
       };
     
       const goPrev = () => {
         setActiveSlide((prev) => (prev === 1 ? 4 : prev - 1));
       };
     
     return (
          <div>
               {/* Mobile Carousel */}
                     <div className="md:hidden relative">
                       <div className="carousel w-full">
                         {/* Slider Items */}
                         {[slidImg1, slidImg2, slidImg3, slidImg4].map((img, index) => (
                           <div
                             key={index}
                             className={`carousel-item w-full ${
                               activeSlide === index + 1 ? "block" : "hidden"
                             }`}
                           >
                             <img src={img} alt={`Slider ${index + 1}`} className="w-full" />
                           </div>
                         ))}
                       </div>
               
                       {/* Common Navigation Buttons */}
                       <button
                         onClick={goPrev}
                         className="absolute left-4 top-1/2 transform -translate-y-1/2 btn btn-circle bg-[#18294b8e] text-white hover:bg-[#1b365d]"
                       >
                         ❮
                       </button>
                       <button
                         onClick={goNext}
                         className="absolute right-4 top-1/2 transform -translate-y-1/2 btn btn-circle bg-[#18294b8e] text-white hover:bg-[#1b365d]"
                       >
                         ❯
                       </button>
               
                       {/* Dot Navigation */}
                       <div className="flex justify-center space-x-2 mt-4">
                         {[1, 2, 3, 4].map((slide) => (
                           <button
                             key={slide}
                             onClick={() => goToSlide(slide)}
                             className={`w-3 h-3 rounded-full border ${
                               activeSlide === slide
                                 ? "bg-[#18294B] border-[#18294B]"
                                 : "bg-transparent border-gray-400"
                             }`}
                           ></button>
                         ))}
                       </div>
                     </div>
               
                     {/* Desktop Banner */}
                     <div className="hidden md:block">
                       <img
                         src="https://via.placeholder.com/1200x500?text=Desktop+Banner"
                         alt="Desktop Banner"
                         className="w-full"
                       />
                     </div>
          </div>
     );
};

export default Carousel;