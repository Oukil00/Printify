import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import test1 from '../assets/man1.jpg'; 
import test2 from '../assets/woman1.jpg'; 
import test3 from '../assets/man2.jpg'; 

import { Navigation, Pagination } from 'swiper/modules';

const testimonials = [
  {
    name: 'Robert A. Voltaire',
    title: 'Store link',
    image: test1, 
    rating: 5,
    feedback: 'Printify has been an incredible service for us musicians unable to keep large amounts of inventory.'
  },
  {
    name: 'Quinten Barney',
    title: 'Etsy Merchant',
    image: test2, 
    rating: 5,
    feedback: 'We chose Printify because of their offerings as well as their incredibly low prices.'
  },
  {
    name: 'Nikki Michaels',
    title: 'Store link',
    image: test2, 
    rating: 5,
    feedback: 'Printify has been amazing as we grow our business, from the products we can make for our customers.'
  },
  {
    name: 'Alex Doe',
    title: 'Shopify Seller',
    image: test3, 
    rating: 5,
    feedback: 'The best decision I made for my online store was choosing Printify!'
  },
  {
    name: 'Jane Smith',
    title: 'Etsy Merchant',
    image: test2, 
    rating: 5,
    feedback: 'Amazing product selection, and super easy to integrate with my store!'
  },
];

const Testimonial = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Trusted by over 8M sellers around the world</h2>
        <div className="flex justify-center mb-6">
          <p className="max-w-xl text-gray-500">
            Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.
          </p>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation
          modules={[Navigation, Pagination]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 3 },
          }}
          style={{ height: 'auto' }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md text-left">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-green-500">{testimonial.title}</p>
                    <div className="flex">
                      {Array(testimonial.rating)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-4 h-4 text-yellow-500"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.562 4.804a1 1 0 00.95.69h5.03c.96 0 1.358 1.23.588 1.81l-4.065 2.947a1 1 0 00-.363 1.118l1.562 4.804c.3.921-.755 1.688-1.538 1.118l-4.065-2.947a1 1 0 00-1.175 0l-4.065 2.947c-.783.57-1.838-.197-1.538-1.118l1.562-4.804a1 1 0 00-.363-1.118L2.43 10.43c-.77-.58-.372-1.81.588-1.81h5.03a1 1 0 00.95-.69l1.562-4.804z" />
                          </svg>
                        ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.feedback}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
