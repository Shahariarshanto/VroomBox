import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const AddToy = () => {
  const [pictureUrl, setPictureUrl] = useState("");
  const [name, setName] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Process the form data, e.g., send it to a server or update state

    // Reset the form fields after submission
    setPictureUrl("");
    setName("");
    setSellerName("");
    setSellerEmail("");
    setSubCategory("");
    setPrice("");
    setRating("");
    setQuantity("");
    setDescription("");
  };

  return (<>
    <Helmet>
      <title>VroomBox | Add a Toy</title>
    </Helmet>
    <div className="container mx-auto px-4">
      <h1 className="text-2xl text-center font-bold my-6 text-[#ff385c]">
        Add a Toy
      </h1>
      <form onSubmit={handleFormSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="pictureUrl" className="text-lg font-medium">
            Picture URL
          </label>
          <input
            type="text"
            id="pictureUrl"
            value={pictureUrl}
            onChange={(e) => setPictureUrl(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="text-lg font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sellerName" className="text-lg font-medium">
            Seller Name
          </label>
          <input
            type="text"
            id="sellerName"
            value={sellerName}
            onChange={(e) => setSellerName(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sellerEmail" className="text-lg font-medium">
            Seller Email
          </label>
          <input
            type="email"
            id="sellerEmail"
            value={sellerEmail}
            onChange={(e) => setSellerEmail(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subCategory" className="text-lg font-medium">
            Sub-category
          </label>
          <input
            type="text"
            id="subCategory"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="text-lg font-medium">
            Price
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="text-lg font-medium">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="text-lg font-medium">
            Available Quantity
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="text-lg font-medium">
            Detail Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#ff385c] text-white rounded-md px-4 py-2 mt-4 flex items-center"
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Add Toy
        </button>
      </form>
    </div>
  </>
  );
};

export default AddToy;
