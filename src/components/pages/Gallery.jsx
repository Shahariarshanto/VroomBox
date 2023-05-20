import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Free Public Api Key
    const apiKey = "36588208-138f6fcbc03717ed8541e525d";
    const url = `https://pixabay.com/api/?key=${apiKey}&q=toy+car&per_page=18&image_height=192`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setImages(data.hits);
      });
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl text-center font-bold text-[#ff385c] mb-8">
        Image Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {images.map((image) => (
          <div key={image.id} className="bg-white rounded-lg shadow-md">
            <img
              className="object-cover h-48 w-full rounded-t-lg"
              src={image.largeImageURL}
              alt={image.user}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
