import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowDownUpAcrossLine, faArrowUp, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FaTrash, FaEdit } from "react-icons/fa";

const MyToys = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [toysToDisplay, setToysToDisplay] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedToy, setSelectedToy] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [updatedToy, setUpdatedToy] = useState({});
  const [updatedQuantity, setUpdatedQuantity] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    const filteredToys = toys.filter((toy) =>
      toy.toyName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setToysToDisplay(filteredToys);
  };

  const toggleModal = (toyId) => {
    const selectedToy = toys.find((toy) => toy.id === toyId);
    setSelectedToy(selectedToy);
    setShowModal(true);
  };

  // Sort Toys by Price

  const handleSort = () => {
    if (sortOrder === "asc") {
      const sortedToys = [...toysToDisplay].sort((a, b) => b.price - a.price);
      setToysToDisplay(sortedToys);
      setSortOrder("desc");
    } else {
      const sortedToys = [...toysToDisplay].sort((a, b) => a.price - b.price);
      setToysToDisplay(sortedToys);
      setSortOrder("asc");
    }
  };

  const handleDelete = (toyId) => {
    // Implement toy deletion logic here
    console.log(`Deleting toy with ID: ${toyId}`);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form  = e.target;
    console.log(form);
    const updatedPrice = form.price.value;
    const updatedToyName = form.toyName.value;
    const updatedCategory = form.category.value;
    const updatedQuantity = form.quantity.value;
    const updatedDescription = form.description.value;
    const updatedProduct = {
      updatedPrice,
      updatedToyName,
      updatedCategory,
      updatedQuantity,
      updatedDescription,
    }

    console.log(updatedProduct);
    setShowModal(false);
  };

  const toys = [
    {
      id: 1,
      toyName: "Toy 1",
      seller: "Seller 1",
      subCategory: "Sub-category 1",
      price: 10.99,
      quantity: 5,
    },
    {
      id: 2,
      toyName: "Toy 2",
      seller: "Seller 2",
      subCategory: "Sub-category 2",
      price: 19.99,
      quantity: 8,
    },
    // Add more toy objects as needed
  ];

  useState(() => {
    setToysToDisplay(toys);
  }, []);

  return (
    <div className="relative max-w-screen-lg min-h-screen mx-auto overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex justify-center mt-6">
        <div className="pb-4 bg-white">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-[#ff385c]" />
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for Toys"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>

      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Toy Name
            </th>
            <th scope="col" className="px-6 py-3">
              Seller
            </th>
            <th scope="col" className="px-6 py-3">
              Sub-category
            </th>
            <th scope="col" className="px-6 py-3 flex">
              Price{" "}
              <button
                onClick={handleSort}
                className="text-xs pl-2 text-[#ff385c] font-medium focus:outline-none"
              >
                {sortOrder === "asc" ? (
                  <span> <FontAwesomeIcon icon={faArrowUp} /></span>
                ) :  (
                  <span> <FontAwesomeIcon icon={faArrowDown} /></span>
                ) }
              </button>
            </th>
            <th scope="col" className="px-6 py-3">
              Available Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {toysToDisplay.map((toy) => (
            <tr key={toy.id}>
              <td className="px-6 py-4 whitespace-nowrap">{toy.toyName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{toy.seller}</td>
              <td className="px-6 py-4 whitespace-nowrap">{toy.subCategory}</td>
              <td className="px-6 py-4 whitespace-nowrap">${toy.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {toy.quantity} pcs
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => toggleModal(toy.id)}
                  className="text-[#ff385c] underline"
                >
                  View Details
                </button>
                <button
                  onClick={() => handleDelete(toy.id)}
                  className="ml-2 text-red-500"
                >
                  <FaTrash />
                </button>
                <button
                  onClick={() => toggleModal(toy.id)}
                  className="ml-2 text-blue-500"
                >
                  <FaEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && selectedToy && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
          <form 
          onSubmit={(e)=> handleUpdate(e)}
           className="bg-white p-6 mx-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Update Toy</h2>
            <div className="flex flex-col mb-4">
              <label htmlFor="updatedPrice" className="mb-2 text-sm">
                Price:
              </label>
              <input
                type="text"
               
                className="border border-gray-300 rounded-md p-2"
                name="price"
                
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="updatedPrice" className="mb-2 text-sm">
              TOY NAME:
              </label>
              <input
                type="text"
                
                className="border border-gray-300 rounded-md p-2"
                name="toyName"
                
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="updatedPrice" className="mb-2 text-sm">
              Category:
              </label>
              <input
                type="text"
                name="category"
                className="border border-gray-300 rounded-md p-2"
                
                
              />
            </div>


            <div className="flex flex-col mb-4">
              <label htmlFor="updatedQuantity" className="mb-2 text-sm">
                Quantity:
              </label>
              <input
                type="text"
                
                className="border border-gray-300 rounded-md p-2"
                name="quantity"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="updatedDescription" className="mb-2 text-sm">
                Description:
              </label>
              <textarea
                id="updatedDescription"
                className="border border-gray-300 rounded-md p-2"
                rows={4}
                name="description"
              />
            </div>
            <div className="flex justify-end">
              <button
                
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                type="submit"
              >
                Update
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 ml-2 bg-gray-300 text-gray-700 rounded-md"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default MyToys;
