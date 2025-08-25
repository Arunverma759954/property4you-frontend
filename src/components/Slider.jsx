// src/components/Slider.jsx
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = ({ images = [], autoSlide = true, slideInterval = 2000 }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

//   if (length === 0) return <div>No images to display</div>;

  // Next slide function (infinite)
  const nextSlide = () => setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));

  // Auto slide effect
  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(nextSlide, slideInterval);
    return () => clearInterval(interval);
  }, [current, autoSlide, slideInterval]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {index === current && (
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-full object-cover rounded-lg"
            />
          )}
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-orange-500 text-2xl bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
      >
        <FaChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2  text-orange-500 text-2xl  bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
      >
        <FaChevronRight />
      </button>
    </div>
    
  );
};

export default Slider;
