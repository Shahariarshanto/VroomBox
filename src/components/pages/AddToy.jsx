import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../providers/AuthPrvider";

const AddToy = () => {
  const {user} = useContext(AuthContext)

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const toyName = form.name.value;
    const pictureUrl = form.pictureUrl.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const newToy = {
      toyName,
      pictureUrl,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      quantity,
      description,
    }
    console.log(newToy);

  

    fetch('https://vroombox-server.vercel.app/add-toy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
      ,
      body: JSON.stringify(newToy)
    }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        form.reset();
      }
      )
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
            name="pictureUrl"
            required
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="text-lg font-medium">
            Toys Name
          </label>
          <input
            type="text"
            name="name"
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
            name="sellerName"
            defaultValue={user.displayName}
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sellerEmail" className="text-lg font-medium">
            Seller Email
          </label>
          <input
            type="email"
            name="sellerEmail"
            defaultValue={user.email}
            contentEditable="false"
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subCategory" className="text-lg font-medium">
            Sub-category
          </label>
          <input
            type="text"
            name="subCategory"
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
            name="price"
            pattern="^[0-9]+$"
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
            name="rating"
            pattern="^[1-5]$"
            required
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="text-lg font-medium">
            Available Quantity
          </label>
          <input
            type="number"
            name="quantity"
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
            name="description"
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
