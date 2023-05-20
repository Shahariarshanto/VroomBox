import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { MagnifyingGlass } from "react-loader-spinner";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import PrivateRoute from "../Routes/PrivateRoute";
import { AuthContext } from "../providers/AuthPrvider";
import ToyDetails from "./ToyDetails";
//  app element (root element) for react-modal
Modal.setAppElement("#root");

const AllToys = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredToys, setFilteredToys] = useState([]);
  const [product, setProduct] = useState({});
  const [toys, setToys] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
  const {user} = useContext(AuthContext);

  // Styles for View Details Modal
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      maxWidth: "1280px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      overflowY: "auto", // Enable scrolling within the modal
      maxHeight: "80vh", // Set maximum height for the modal content
      zIndex: 9999, // Set a high z-index to keep the modal on top
    },
  };

  useEffect(() => {
    fetch("http://localhost:9000/all-toys")
      .then((res) => res.json())
      .then((data) => {setToys(data); setIsLoading(false)});
  }, []);

  // Modal for View Details
  const toggleModal = (toyId) => {
    user ? setIsOpen(!isOpen) : toast.error("Please Login to View Details");
    setProduct(toys.find((toy) => toy._id == toyId));
  }

  // Handle Filter toys based on search term
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
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
      <Modal isOpen={isOpen} style={customStyles} contentLabel="Example Modal">
        <PrivateRoute>
          <ToyDetails product={product} isOpen={isOpen} setIsOpen={setIsOpen} />
        </PrivateRoute>
      </Modal>
      <ToastContainer />
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
            {isLoading && (
              <div className="flex justify-center mt-2">
                <MagnifyingGlass
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="MagnifyingGlass-loading"
                  wrapperStyle={{}}
                  wrapperClass="MagnifyingGlass-wrapper"
                  glassColor="#c0efff"
                  color="#e15b64"
                />
              </div>
            )}
          </div>
        </div>
        {toys.length === 0 && (
          <p className="text-center text-lg mb-2">No Toys Available</p>
        )}
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
                <td className="px-6 py-4 whitespace-nowrap">
                  {toy.sellerName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {toy.subCategory}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">${toy.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {toy.quantity} pcs
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => toggleModal(toy._id)}
                    className="text-[#ff385c] underline"
                  >
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
