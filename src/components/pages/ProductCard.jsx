import React from "react";

const ProductCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img className="w-full mb-4 rounded-md" src="https://source.unsplash.com/random/480x360?" alt="Product" />
      <h3 className="text-xl font-semibold">Product Title</h3>
      <p className="text-gray-600 mb-2">Product Description</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
