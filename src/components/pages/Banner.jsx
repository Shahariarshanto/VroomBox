import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/banner-images")
      .then((res) => res.json())
      .then((data) => setImages(data[0].img));
  }, []);

  const goToPreviousImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  return (
    <div
      className="max-w-screen-xl mx-auto px-2 relative w-full"
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Image */}

        <img
          src={images[currentImage]}
          className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="Banner Image"
        />
        {/* Content */}
        <div className="absolute sm:text-center top-1/2 left-1/4 transform -translate-y-1/2 text-white">
          <h1 className=" text-sm  md:text-4xl font-bold">
            Welcome to Our Website
          </h1>
          <p className="mt-2 text-xs pr-11 sm:pr-0 sm:text-lg">
            Explore the amazing features we offer
          </p>
        </div>
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {/* Indicators */}
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-2 h-2 rounded-full ${
              currentImage === index ? "bg-white" : "bg-gray-400"
            }`}
            aria-current={currentImage === index}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
          />
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToPreviousImage}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 ">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="w-5 h-5 text-white sm:w-6 sm:h-6"
          />
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToNextImage}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 ">
          <FontAwesomeIcon
            icon={faChevronRight}
            className="w-5 h-5 text-white sm:w-6 sm:h-6"
          />
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Banner;
