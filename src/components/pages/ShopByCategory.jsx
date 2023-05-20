import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function ShopByCategory() {
  const [emergencyVehicles, setEmergencyVehicles] = useState([]);
  const [constructionVehicles, setConstructionVehicles] = useState([]);
  const [superCars, setSuperCars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/toys-category/EmergencyVehicles")
      .then((res) => res.json())
      .then((data) => setEmergencyVehicles(data.slice(0, 4)));
    fetch("http://localhost:9000/toys-category/ConstructionVehicles")
      .then((res) => res.json())
      .then((data) => setConstructionVehicles(data.slice(0, 4)));
    fetch("http://localhost:9000/toys-category/SuperCars")
      .then((res) => res.json())
      .then((data) => setSuperCars(data.slice(0, 4)));
  }, []);
  return (
    <div className="bg-gray-50">
      <div className="max-w-screen-xl px-6 py-10 mx-auto">
        <h1 className="text-3xl text-center font-bold my-6 text-[#ff385c]">
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
            <h2 className="text-2xl font-bold mb-4">
              Race to new adventures with Sports Toy Cars!
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
                  <button className="mt-4 px-4 py-2 text-sm text-white bg-[#ff385c] rounded-md shadow-md hover:bg-[#e6002a]">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <h2 className="text-2xl font-bold mb-4">
              Revive the Joy of Childhood with Classic Toy Cars!
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
                  <button className="mt-4 px-4 py-2 text-sm text-white bg-[#ff385c] rounded-md shadow-md hover:bg-[#e6002a]">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <h2 className="text-2xl font-bold mb-4">
              Build, Play, and Imagine with Construction Vehicles!
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
                  <button className="mt-4 px-4 py-2 text-sm text-white bg-[#ff385c] rounded-md shadow-md hover:bg-[#e6002a]">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
