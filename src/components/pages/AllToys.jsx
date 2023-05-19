import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Modal from 'react-modal';
import ToyDetails from "./ToyDetails";
import PrivateRoute from "../Routes/PrivateRoute";
//  app element (root element) for react-modal
Modal.setAppElement("#root");


const AllToys = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredToys, setFilteredToys] = useState([]);
  const [toys, setToys] = useState([])
  const [isOpen, setIsOpen] = useState(false);

  // Styles for View Details Modal
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      maxWidth: "1280px",
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      overflowY: 'auto', // Enable scrolling within the modal
      maxHeight: '80vh', // Set maximum height for the modal content
      zIndex: 9999, // Set a high z-index to keep the modal on top
    },
  };

  const product = {
    picture: "https://source.unsplash.com/random/480x360?1",
    toyName: "Example Toy",
    sellerName: "John Doe",
    sellerEmail: "johndoe@example.com",
    price: "$58.00",
    rating: 4.5,
    quantityAvailable: 10,
    description:
      "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan."
  };

  useEffect(() => {
    fetch("https://vroombox-server.vercel.app/all-toys")
      .then(res => res.json())
      .then(data => setToys(data))
  }, [])
  console.log(toys);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

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
    <>
      <Helmet>
        <title>VroomBox | All Toys</title>
      </Helmet>
      {/* Modal Content */}
      <Modal
        isOpen={isOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <PrivateRoute>

          <ToyDetails product={product} isOpen={isOpen} setIsOpen={setIsOpen} />
        </PrivateRoute>
      </Modal>

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
        {
          toys.length === 0 && (
            <p className="text-center text-lg mb-2">No Toys Available</p>)
        }
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
              <tr key={toy._id}>
                <td className="px-6 py-4 whitespace-nowrap">{toy.toyName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{toy.sellerName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{toy.subCategory}</td>
                <td className="px-6 py-4 whitespace-nowrap">${toy.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {toy.quantity} pcs
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick={toggleModal} className="text-[#ff385c] underline">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </>
  );
};

export default AllToys;
