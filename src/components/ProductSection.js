import React from 'react';
import productImage from '../assets/image1.png'; 

const ProductSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <img
            src={productImage}
            alt="Product showcase"
            className="w-full rounded-lg"
          />
        </div>

        <div className="lg:w-1/2 text-center lg:text-left lg:pl-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Easily add your design to a wide range of products
          </h2>
          <p className="mb-6 text-gray-600">
            With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.
          </p>
          <a href="#" className="text-green-500 font-semibold hover:underline">
            All products →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
