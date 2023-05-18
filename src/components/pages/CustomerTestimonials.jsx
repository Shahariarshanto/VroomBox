import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CustomerTestimonials = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const testimonials = [
    {
      id: 1,
      message: "My son absolutely loves the toy cars we purchased from your store. The quality is excellent, and the attention to detail is impressive. Highly recommended!",
      name: "Sarah Johnson",
      location: "Los Angeles, CA",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      message: "The toy cars we bought for our grandson exceeded our expectations. He spends hours playing with them, and the durability is outstanding. Thank you for providing such great products!",
      name: "Michael Thompson",
      location: "New York, NY",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      message: "I'm amazed by the variety of toy cars available in your store. The shipping was fast, and the customer service was excellent. Will definitely be a returning customer!",
      name: "Emily Davis",
      location: "Chicago, IL",
      avatar: "https://via.placeholder.com/150",
    },
    // Add more testimonials here...
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-screen-xl px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">WHAT OUR CUSTOMERS SAY</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow p-6"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="flex items-center mb-4">
                <img src={testimonial.avatar} alt="Avatar" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="text-gray-700 font-bold">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
