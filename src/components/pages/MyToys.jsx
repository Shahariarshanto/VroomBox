import {
  faArrowDown,
  faArrowUp,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Helmet } from "react-helmet-async";
import { FaEdit, FaTrash } from "react-icons/fa";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import PrivateRoute from "../Routes/PrivateRoute";
import { AuthContext } from "../providers/AuthPrvider";
import ToyDetails from "./ToyDetails";

import { MagnifyingGlass } from "react-loader-spinner";

const MyToys = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredToys, setFilteredToys] = useState([]);
  const [toys, setToys] = useState([]);
  const [product, setProduct] = useState({});
  const [sortOrder, setSortOrder] = useState(false);
  const [selectedToy, setSelectedToy] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthContext);

  // fetch data from server
  useEffect(() => {
    fetch(`https://vroombox-server.vercel.app/toys?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setIsLoading(false);
      });
  }, []);
  // Styles for view Details Modal
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
  // Toggle For Modal
  const toggleViewDetailsModal = (toyId) => {
    setIsOpen(!isOpen);
    setProduct(toysToDisplay.find((toy) => toy._id == toyId));
  };
  // Search
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    const filteredToys = toys.filter((toy) =>
      toy.toyName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredToys(filteredToys);
  };
  // Determine the array to display based on whether there is a search term or not
  const toysToDisplay = searchTerm ? filteredToys : toys;

  // Modal for Update
  const toggleModal = (toyId) => {
    const selectedToy = toysToDisplay.find((toy) => toy._id == toyId);
    setSelectedToy(selectedToy);
    setShowModal(true);
  };

  // Sort Toys by Price
  const handleSort = () => {
    setSortOrder(!sortOrder);
    if (sortOrder) {
      fetch(`https://vroombox-server.vercel.app/toys-ascending?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setToys(data));
    } else {
      fetch(`https://vroombox-server.vercel.app/toys-descending?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setToys(data));
    }
  };

  // Delete a Toy
  const handleDelete = (toyId) => {
    confirmAlert({
      title: "Confirmation",
      message: "Are you sure you want to delete?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            fetch(`https://vroombox-server.vercel.app/delete-toy/${toyId}`, {
              method: "DELETE",
            }).then((response) => {
              if (response.ok) {
                const remaining = toysToDisplay.filter(
                  (toy) => toy._id !== toyId
                );
                setToys(remaining);
                toast("Toy deleted successfully");
              } else {
                toast("Failed to delete toy");
              }
            });
          },
        },
        {
          label: "No",
          onClick: () => {
            // Do nothing
          },
        },
      ],
    });
  };

  // Update a toy
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
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
    };

    fetch(`https://vroombox-server.vercel.app/update-toy/${selectedToy._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          // updating state
          const remaining = toysToDisplay.filter(
            (toy) => toy._id !== selectedToy._id
          );
          const updated = toysToDisplay.find(
            (toy) => toy._id == selectedToy._id
          );
          updated.quantity = updatedQuantity;
          updated.price = updatedPrice;
          updated.description = updatedDescription;
          updated.toyName = updatedToyName;
          updated.category = updatedCategory;
          const newToys = [updated, ...remaining];
          setToys(newToys);
          toast(`${updatedToyName} Updated Successfully`);
        }
      });
    setShowModal(false);
  };

  return (
    <>
      <Helmet>
        <title>VroomBox | My Toys</title>
      </Helmet>
      {/*  View Details Modal Content */}
      <Modal isOpen={isOpen} style={customStyles} contentLabel="Example Modal">
        <PrivateRoute>
          <ToyDetails product={product} isOpen={isOpen} setIsOpen={setIsOpen} />
        </PrivateRoute>
      </Modal>

      <ToastContainer />

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
        {toysToDisplay.length === 0 && (
          <p className="text-center text-lg mb-2">
            You haven't added any toys yet.
          </p>
        )}
        {/* Table For My Toys  */}
        <div className="overflow-x-auto">
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
                    {sortOrder ? (
                      <span>
                        <FontAwesomeIcon icon={faArrowUp} />
                      </span>
                    ) : (
                      <span>
                        <FontAwesomeIcon icon={faArrowDown} />
                      </span>
                    )}
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
                    <div className="flex items-center gap-6">
                      <button
                        onClick={() => toggleViewDetailsModal(toy._id)}
                        className="text-[#ff385c] underline"
                      >
                        View Details
                      </button>
                      <div className="space-x-4">
                        <button
                          onClick={() => toggleModal(toy._id)}
                          className="text-blue-500"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(toy._id)}
                          className="text-red-500"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showModal && selectedToy && (
          <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
            <form
              onSubmit={(e) => handleUpdate(e)}
              className="bg-white p-6 mx-4 rounded-lg"
            >
              <h2 className="text-xl font-bold mb-4">Update Toy</h2>
              <div className="flex flex-col mb-4">
                <label htmlFor="updatedPrice" className="mb-2 text-sm">
                  Price:
                </label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2"
                  name="price"
                  defaultValue={selectedToy.price}
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
                  defaultValue={selectedToy.toyName}
                />
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="updatedPrice" className="mb-2 text-sm">
                  Category:
                </label>
                <input
                  type="text"
                  name="category"
                  defaultValue={selectedToy.subCategory}
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
                  defaultValue={selectedToy.quantity}
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
                  defaultValue={selectedToy.description}
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
    </>
  );
};

export default MyToys;
