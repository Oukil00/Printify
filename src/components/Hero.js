import React from 'react'; 
import productImage from '../assets/image4.png';

const Hero = () => (
  <section className="bg-gray-100 py-16 px-4">
    <div className="container mx-auto flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 text-center lg:text-left lg:pr-10">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          Create and sell <br /> custom products
        </h1>
        <ul className="mb-6">
          <li className="flex items-center mb-2">
            <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            100% Free to use
          </li>
          <li className="flex items-center mb-2">
            <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            900+ High-Quality Products
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Largest global print network
          </li>
        </ul>
        <div className="flex justify-center lg:justify-start">
          <button className="bg-green-500 text-white px-6 py-3 rounded-md mr-4">Start for free</button>
          <button className="bg-white border-2 border-gray-300 px-6 py-3 rounded-md flex items-center">
            <img className="mr-6" width="48" height="48" src="https://img.icons8.com/doodle/48/circled-play.png" alt="circled-play" />
            How it works?
          </button>
        </div>
        <p className="text-green-500 mt-4">Trusted by over 8M sellers around the world</p>
      </div>

      <div className="lg:w-1/2">
        <img src={productImage} alt="Product showcase" className="w-full" />
      </div>
    </div>
  </section>
);

export default Hero;
