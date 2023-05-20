import 'aos/dist/aos.css';
import React from 'react';

const Subscription = () => {
  return (
    <div className="flex items-center justify-center py-12 bg-gray-100 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div
          className="md:w-1/2 "
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <img
            className="w-full h-auto md:max-w-lg mx-auto rounded-lg"
          
            src="https://i.ibb.co/tDNY1VW/vr.jpg"
            alt="Subscription"
          />
        </div>
        <div
          className="md:w-1/2 mt-8 mx-4 md:mt-0"
          data-aos="fade-left"
          data-aos-duration="3000"
         
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Be the first to know</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter and be the first to know about new car releases, special
            offers, and exclusive discounts.
          </p>
          <form className="flex">
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-l-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="email"
              placeholder="Enter your email"
            />
            <button
              className="bg-[#ff385c] hover:bg-[#e6002a] text-white font-bold py-2 px-4 rounded-r-lg"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
