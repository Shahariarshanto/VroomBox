import React from 'react';

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1511377537649-c17e440ef4b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      alt: 'Featured Image',
    },
    {
      id: 2,
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
      alt: 'Image 1',
    },
    {
      id: 3,
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
      alt: 'Image 2',
    },
    {
      id: 4,
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
      alt: 'Image 3',
    },
    {
      id: 5,
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
      alt: 'Image 4',
    },
    {
      id: 6,
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
      alt: 'Image 5',
    },
    {
      id: 7,
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
      alt: 'Image 6',
    },
    {
      id: 8,
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
      alt: 'Image 7',
    },
    {
      id: 9,
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
      alt: 'Image 8',
    },
    {
      id: 10,
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
      alt: 'Image 9',
    },
    {
      id: 11,
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
      alt: 'Image 10',
    },
    {
      id: 12,
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',
      alt: 'Image 11',
    },
  ];


  return (
    <div className="max-w-screen-xl px-4 mx-auto my-4 overflow-x-auto">
      <h1 className='text-2xl text-center font-bold my-6 text-[#ff385c]'>Toys Gallery</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 space-x-4">
        {images.map((image) => (
          <div key={image.id}>
            <img className="h-auto max-w-full rounded-lg" src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
