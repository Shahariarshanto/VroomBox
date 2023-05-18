import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const AllToys = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredToys, setFilteredToys] = useState([]);

  // Sample toy data
  const toys = [
    {
      id: 1,
      seller: "John Doe",
      toyName: "Sports Car",
      subCategory: "Sports Cars",
      price: 29.99,
      quantity: 5,
    },
    {
      id: 2,
      seller: "Jane Smith",
      toyName: "Classic Car",
      subCategory: "Classic Cars",
      price: 19.99,
      quantity: 3,
    },
    {
      id: 3,
      seller: "Mike Johnson",
      toyName: "Robot Toy",
      subCategory: "Robots",
      price: 12.99,
      quantity: 10,
    },
    {
      id: 4,
      seller: "Sarah Thompson",
      toyName: "Puzzle Set",
      subCategory: "Puzzles",
      price: 9.99,
      quantity: 8,
    },
    // Add more toy objects here...
  ];


  // Handle search input change
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    // Filter toys based on search term
    const filteredToys = toys.filter((toy) =>
      toy.toyName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredToys(filteredToys);
  };

  // Determine the array to display based on whether there is a search term or not
  const toysToDisplay = searchTerm ? filteredToys : toys;

  return (
    <div className="relative max-w-screen-lg min-h-screen mx-auto overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex justify-center mt-6">
        <div className="pb-4  bg-white">
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
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Available Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              View Details
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
                <button className="text-[#ff385c] underline">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
