import React, { useState, useEffect } from "react";

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  // Automatically switch slides every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 4 ? 1 : prev + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Function to handle dot click
  const goToSlide = (slide) => {
    setActiveSlide(slide);
  };

  return (
    <div>
      {/* Mobile Carousel */}
      <div className="md:hidden">
        <div className="carousel w-full relative">
          {/* Slider 1 */}
          <div
            className={`carousel-item relative w-full ${
              activeSlide === 1 ? "block" : "hidden"
            }`}
          >
            <img
              src="https://via.placeholder.com/600x400?text=Slider+1"
              alt="Slider 1"
              className="w-full"
            />
            <a
              href="#"
              onClick={() => goToSlide(4)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 btn btn-circle btn-primary"
            >
              ❮
            </a>
            <a
              href="#"
              onClick={() => goToSlide(2)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 btn btn-circle btn-primary"
            >
              ❯
            </a>
          </div>

          {/* Slider 2 */}
          <div
            className={`carousel-item relative w-full ${
              activeSlide === 2 ? "block" : "hidden"
            }`}
          >
            <img
              src="https://via.placeholder.com/600x400?text=Slider+2"
              alt="Slider 2"
              className="w-full"
            />
            <a
              href="#"
              onClick={() => goToSlide(1)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 btn btn-circle btn-primary"
            >
              ❮
            </a>
            <a
              href="#"
              onClick={() => goToSlide(3)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 btn btn-circle btn-primary"
            >
              ❯
            </a>
          </div>

          {/* Slider 3 */}
          <div
            className={`carousel-item relative w-full ${
              activeSlide === 3 ? "block" : "hidden"
            }`}
          >
            <img
              src="https://via.placeholder.com/600x400?text=Slider+3"
              alt="Slider 3"
              className="w-full"
            />
            <a
              href="#"
              onClick={() => goToSlide(2)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 btn btn-circle btn-primary"
            >
              ❮
            </a>
            <a
              href="#"
              onClick={() => goToSlide(4)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 btn btn-circle btn-primary"
            >
              ❯
            </a>
          </div>

          {/* Slider 4 */}
          <div
            className={`carousel-item relative w-full ${
              activeSlide === 4 ? "block" : "hidden"
            }`}
          >
            <img
              src="https://via.placeholder.com/600x400?text=Slider+4"
              alt="Slider 4"
              className="w-full"
            />
            <a
              href="#"
              onClick={() => goToSlide(3)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 btn btn-circle btn-primary"
            >
              ❮
            </a>
            <a
              href="#"
              onClick={() => goToSlide(1)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 btn btn-circle btn-primary"
            >
              ❯
            </a>
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center space-x-2 mt-4">
          {[1, 2, 3, 4].map((slide) => (
            <button
              key={slide}
              onClick={() => goToSlide(slide)}
              className={`btn btn-xs ${
                activeSlide === slide ? "btn-primary" : "btn-neutral"
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

export default Home;
