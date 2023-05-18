import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const toysData = [
  {
    id: 1,
    name: "Toy Car 1",
    price: 19.99,
    rating: 4.5,
    imageSrc: "https://source.unsplash.com/random/480x360?3",
  },
  {
    id: 2,
    name: "Toy Car 2",
    price: 24.99,
    rating: 3.8,
    imageSrc: "https://source.unsplash.com/random/480x360?3",
  },
  {
    id: 3,
    name: "Toy Car 2",
    price: 24.99,
    rating: 3.8,
    imageSrc: "https://source.unsplash.com/random/480x360?3",
  },
  {
    id: 4,
    name: "Toy Car 2",
    price: 24.99,
    rating: 3.8,
    imageSrc: "https://source.unsplash.com/random/480x360?3",
  },
];

export default function ShopByCategory() {
  return (
    <div className="max-w-screen-xl px-6 my-10 mx-auto ">
      <h1 className="text-2xl text-center font-bold my-6 text-[#ff385c]">
        Shop by category
      </h1>
      <Tabs>
        <TabList className="text-[#9c001d] font-semibold">
          <Tab>Classic Cars</Tab>
          <Tab>Sports Cars</Tab>
          <Tab>Construction Vehicles</Tab>
        </TabList>

        <TabPanel>
          <h2>Car Sub-Categories</h2>
          {/* Add car sub-category content here */}
        </TabPanel>

        <TabPanel>
          <h2>Toy Sub-Categories</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {toysData.map((toy) => (
              <div key={toy.id} className="p-4 border rounded">
                <img src={toy.imageSrc} alt={toy.name} className="w-full" />
                <h3 className="mt-2">{toy.name}</h3>
                <p className="text-gray-500">${toy.price}</p>
                <div className="flex items-center mt-2">
                  <Rating
                    emptySymbol={<FaStar className="text-gray-300" />}
                    fullSymbol={<FaStar className="text-yellow-500" />}
                    initialRating={toy.rating}
                    readonly
                  />
                  <span className="ml-2">{toy.rating.toFixed(1)}</span>
                </div>
                <button className="mt-4 px-3 py-1.5 text-sm text-white bg-[#ff385c] rounded-lg hover:bg-[#e6002a]">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <h2>More Car Sub-Categories</h2>
          {/* Add more car sub-category content here */}
        </TabPanel>
      </Tabs>
    </div>
  );
}
