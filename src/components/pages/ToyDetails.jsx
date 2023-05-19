import React from "react";
import Rating from "react-rating";
import { FaStar, FaStarHalfAlt} from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";


const ToyDetails = ({product ,isOpen,setIsOpen}) => {
     
  return (<>
    {isOpen && (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
        <button className="absolute top-0 right-0 mt-4 mr-4" onClick={()=>setIsOpen(false)}> <AiFillCloseCircle className="w-8 h-8 text-red-500" /></button>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="toy"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={product.picture}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product.sellerName}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.toyName}
            </h1>
            <p className="text-gray-600 mb-4">{product.sellerEmail}</p>
            <div className="flex mb-4">
              <span className="flex items-center">
                <Rating
                  emptySymbol={<FaStar className="w-4 h-4 text-gray-300" />}
                  fullSymbol={<FaStar className="w-4 h-4 text-red-500" />}
                  fractions={2}
                  initialRating={product.rating}
                  readonly
                />
                <span className="text-gray-600 ml-3">
                  {product.rating} Reviews
                </span>
              </span>
            </div>
            <p className="leading-relaxed">{product.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex">
                <span className="mr-3">Price</span>
                <span className="title-font font-medium text-2xl text-gray-900">
                  {product.price}
                </span>
              </div>
              <div className="flex ml-auto items-center">
                <span className="mr-3">Quantity</span>
                <span className="text-gray-600">
                  {product.quantityAvailable}
                </span>
              </div>
            </div>
            <div className="flex">
              <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
      )}
    </>
  );
};

export default ToyDetails;



;





