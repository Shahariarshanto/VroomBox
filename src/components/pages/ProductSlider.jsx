import React, { useEffect, useState } from "react";
import Slider from "react-slick";


import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import ProductCard from "./ProductCard";

const ProductSlider = () => {
  // const slides = [
  //   {
  //     img: "https://dummyimage.com/600x400/000/7CFC00"
  //   },
  //   {
  //     img: "https://dummyimage.com/600x400/000/ccccc"
  //   },
  //   {
  //     img: "https://dummyimage.com/600x400/000/dddddd"
  //   },
  //   {
  //     img: "https://dummyimage.com/600x400/000/fff"
  //   },
  //   {
  //     img: "https://dummyimage.com/600x400/000/B22222"
  //   },
  //   {
  //     img: "https://dummyimage.com/600x400/000/7CFC00"
  //   },
  //   {
  //     img: "https://dummyimage.com/600x400/000/ccccc"
  //   },
  //   {
  //     img: "https://dummyimage.com/600x400/000/dddddd"
  //   },
  //   {
  //     img: "https://dummyimage.com/600x400/000/B22222"
  //   },
  //   {
  //     img: "https://dummyimage.com/600x400/000/7CFC00"
  //   }
  // ];

  // fetch 
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/all-toys")
      .then((res) => res.json())
      .then((data) => setSlides(data));
  }
      , []);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <div>
      <h2 className="text-center text-2xl text-[#ff385c] font-semibold my-4">
        Feature Products
      </h2>
      <Slider {...settings}>
        {slides.map((slide) => {
          return (
            <div key={slide._id}>
              <ProductCard slide={slide} />
              {/* <img src={slide.img} alt={`slide${index}`} /> */}
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ProductSlider;
