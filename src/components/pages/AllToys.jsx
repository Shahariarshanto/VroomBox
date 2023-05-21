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

import ReactPaginate from "react-paginate";
import "react-paginate/theme/basic/react-paginate.css";

// app element (root element) for react-modal
Modal.setAppElement("#root");

const AllToys = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredToys, setFilteredToys] = useState([]);
  const [product, setProduct] = useState({});
  const [toys, setToys] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthContext);

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

  // Modal for View Details
  const toggleModal = (toyId) => {
    if (user) {
      setIsOpen(!isOpen);
      setProduct(toys.find((toy) => toy._id === toyId));
    } else {
      toast.error("Please Login to View Details");
    }
  };

  // Handle Filter toys based on search term
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    const filteredToys = toys.filter((toy) =>
      toy.toyName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredToys(filteredToys);
  };

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = currentPage * itemsPerPage;
  const [totalPages, setTotalPages] = useState(0);

  // Handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
    console.log(selected);
  };

  useEffect(() => {
    fetch(
      `https://vroombox-server.vercel.app/all-toys?page=${currentPage}&limit=${itemsPerPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        const { toys, totalPages } = data;
        setToys(toys);
        setTotalPages(totalPages);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching toys:", error);
      });
  }, [currentPage]);
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
      <div className="relative max-w-screen-lg min-h-screen mx-auto overflow-x-auto shadow-md sm:rounded-lg flex flex-col justify-between">
        <div>
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
                    height={80}
                    width={80}
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
        {/* Pagination  */}
        <div className="text-center my-6 ">
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageChange}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            pageCount={totalPages}
            previousLabel="< previous"
            pageClassName="inline-block mx-1 font-bold rounded-full px-8 py-2 bg-gray-300 text-gray-700 cursor-pointer"
            previousClassName="inline-block font-bold mx-1 rounded-full px-4 py-2 bg-gray-300 text-gray-700 cursor-pointer"
            nextClassName="inline-block font-bold mx-1 rounded-full px-5 py-2 bg-gray-300 text-gray-700 cursor-pointer"
            breakLabel="..."
            breakClassName="inline-block mx-1 px-3 py-2"
            containerClassName="flex items-center text-md justify-center"
            activeClassName="bg-[#ff8097]"
            disabledClassName="opacity-50 cursor-not-allowed"
          />
        </div>
      </div>
    </>
  );
};

export default AllToys;
