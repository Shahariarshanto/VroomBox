import { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Modal from "react-modal";
import Rating from "react-rating";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ToastContainer, toast } from "react-toastify";
import { TypeAnimation } from "react-type-animation";
import PrivateRoute from "../Routes/PrivateRoute";
import { AuthContext } from "../providers/AuthPrvider";
import ToyDetails from "./ToyDetails";

export default function ShopByCategory() {
  const [emergencyVehicles, setEmergencyVehicles] = useState([]);
  const [constructionVehicles, setConstructionVehicles] = useState([]);
  const [superCars, setSuperCars] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState({});
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://vroombox-server.vercel.app/toys-category/EmergencyVehicles")
      .then((res) => res.json())
      .then((data) => setEmergencyVehicles(data.slice(0, 4)));
    fetch("https://vroombox-server.vercel.app/toys-category/ConstructionVehicles")
      .then((res) => res.json())
      .then((data) => setConstructionVehicles(data.slice(0, 4)));
    fetch("https://vroombox-server.vercel.app/toys-category/SuperCars")
      .then((res) => res.json())
      .then((data) => setSuperCars(data.slice(0, 4)));
  }, []);

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
  const toggleModal = (toyId, tab) => {
    user ? setIsOpen(!isOpen) : toast.error("Please Login to View Details");
    setProduct(tab.find((toy) => toy._id == toyId));
  };
  return (
    <>
      {/* Modal Content */}
      <Modal isOpen={isOpen} style={customStyles} contentLabel="Example Modal">
        <PrivateRoute>
          <ToyDetails product={product} isOpen={isOpen} setIsOpen={setIsOpen} />
        </PrivateRoute>
      </Modal>
      <ToastContainer />
      <div className="bg-gray-50">
        <div className="max-w-screen-xl px-6 py-10 mx-auto">
          <h1 className="text-2xl text-center font-bold my-6 text-[#ff385c]">
            Shop by Category
          </h1>
          <Tabs>
            <TabList className="flex justify-center mb-6">
              <Tab className="text-lg font-semibold  px-4 py-2 rounded-md bg-white shadow-md mr-2 hover:bg-gray-200">
                Super Cars
              </Tab>
              <Tab className="text-lg font-semibold  px-4 py-2 rounded-md bg-white shadow-md mr-2 hover:bg-gray-200">
                Emergency Vehicles
              </Tab>
              <Tab className="text-lg font-semibold  px-4 py-2 rounded-md bg-white shadow-md mr-2 hover:bg-gray-200">
                Construction Vehicles
              </Tab>
            </TabList>

            <TabPanel>
              <h2 className="text-xl font-bold mb-4">
                <TypeAnimation
                  sequence={[
                    "Race to new adventures with Sports Toy Cars!",
                    1000,
                  ]}
                  speed={5}
                  style={{ fontSize: "1em" }}
                  repeat={Infinity}
                />
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {superCars.map((toy) => (
                  <div
                    key={toy._id}
                    className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center"
                  >
                    <img
                      src={toy.pictureUrl}
                      alt={toy.toyName}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-lg font-semibold text-[#9c001d] mb-2">
                      {toy.toyName}
                    </h3>
                    <p className="text-gray-500">${toy.price}</p>
                    <div className="flex items-center mt-2">
                      <Rating
                        emptySymbol={<FaStar className="text-gray-300" />}
                        fullSymbol={<FaStar className="text-yellow-500" />}
                        initialRating={toy.rating}
                        readonly
                      />
                      <span className="ml-2">
                        {" "}
                        {parseInt(toy.rating).toFixed(1)}
                      </span>
                    </div>
                    <button
                      onClick={() => toggleModal(toy._id, superCars)}
                      className="mt-4 px-4 py-2 text-sm text-white bg-[#ff385c] rounded-md shadow-md hover:bg-[#e6002a]"
                    >
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </TabPanel>

            <TabPanel>
              <h2 className="text-xl font-bold mb-4">
                <TypeAnimation
                  sequence={[
                    "Immerse Yourself in Action-Packed Adventures with Toy Emergency Vehicles!",
                    1000,
                  ]}
                  speed={5}
                  style={{ fontSize: "1em" }}
                  repeat={Infinity}
                />
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {emergencyVehicles.map((toy) => (
                  <div
                    key={toy._id}
                    className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center"
                  >
                    <img
                      src={toy.pictureUrl}
                      alt={toy.toyName}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-lg font-semibold text-[#9c001d] mb-2">
                      {toy.toyName}
                    </h3>
                    <p className="text-gray-500">${toy.price}</p>
                    <div className="flex items-center mt-2">
                      <Rating
                        emptySymbol={<FaStar className="text-gray-300" />}
                        fullSymbol={<FaStar className="text-yellow-500" />}
                        initialRating={toy.rating}
                        readonly
                      />
                      <span className="ml-2">
                        {" "}
                        {parseInt(toy.rating).toFixed(1)}
                      </span>
                    </div>
                    <button
                      className="mt-4 px-4 py-2 text-sm text-white bg-[#ff385c] rounded-md shadow-md hover:bg-[#e6002a]"
                      onClick={() => toggleModal(toy._id, emergencyVehicles)}
                    >
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </TabPanel>

            <TabPanel>
              <h2 className="text-xl font-bold mb-4">
                <TypeAnimation
                  sequence={[
                    "Build, Play, and Imagine with Construction Vehicles!",
                    1000,
                  ]}
                  speed={5}
                  style={{ fontSize: "1em" }}
                  repeat={Infinity}
                />
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {constructionVehicles.map((toy) => (
                  <div
                    key={toy._id}
                    className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center"
                  >
                    <img
                      src={toy.pictureUrl}
                      alt={toy.toyName}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-lg font-semibold text-[#9c001d] mb-2">
                      {toy.toyName}
                    </h3>
                    <p className="text-gray-500">${toy.price}</p>
                    <div className="flex items-center mt-2">
                      <Rating
                        emptySymbol={<FaStar className="text-gray-300" />}
                        fullSymbol={<FaStar className="text-yellow-500" />}
                        initialRating={toy.rating}
                        readonly
                      />
                      <span className="ml-2">
                        {parseInt(toy.rating).toFixed(1)}
                      </span>
                    </div>
                    <button
                      className="mt-4 px-4 py-2 text-sm text-white bg-[#ff385c] rounded-md shadow-md hover:bg-[#e6002a]"
                      onClick={() => toggleModal(toy._id, constructionVehicles)}
                    >
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
}
