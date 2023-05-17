import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {

    const images = [
        'https://images.unsplash.com/photo-1511377537649-c17e440ef4b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1534325206648-bb8fa5dba108?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80',
        'https://plus.unsplash.com/premium_photo-1680179631301-67b460032acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
        

    ];
    const [currentImage, setCurrentImage] = useState(0);

    const goToPreviousImage = () => {
        setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
    };

    const goToNextImage = () => {
        setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    };

    return (
        <div  className="max-w-screen-xl mx-auto px-2 relative w-full" data-carousel="slide">
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
                    <h1 className=" text-sm  md:text-4xl font-bold">Welcome to Our Website</h1>
                    <p className="mt-2 text-xs pr-11 sm:pr-0 sm:text-lg">Explore the amazing features we offer</p>
                </div>
            </div>
            {/* Slider indicators */}
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                {/* Indicators */}
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${currentImage === index ? 'bg-white' : 'bg-gray-400'}`}
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
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5 text-white sm:w-6 sm:h-6" />
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={goToNextImage}
            >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60        group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5 text-white sm:w-6 sm:h-6" />
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default Banner;
