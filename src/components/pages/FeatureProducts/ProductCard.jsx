import React from "react";

const ProductCard = ({ slide }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img
        className="w-full object-cover h-72 mb-4 rounded-md"
        src={slide.pictureUrl}
        alt="Product"
      />

      <h3 className="text-xl font-semibold">{slide.toyName}</h3>
      <p className="text-gray-600 mb-2">{slide.subCategory}</p>
      <p className="text-gray-900 font-semibold mb-2">${slide.price}</p>
      <button className="bg-[#ff4d6d] hover:bg-[#e6002a] text-white font-bold py-2 px-4 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
