import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center lg:flex justify-between">
        <div className="lg:w-1/3 px-4">
          <img src="https://printify.com/pfh/assets/legacy/custom-products.png" alt="Create products" className="mx-auto mb-4 w-24" />
          <h3 className="text-green-600 font-bold text-xl">CREATE</h3>
          <h4 className="text-2xl font-semibold mb-2">custom products</h4>
          <p className="text-gray-500">Easily add your designs to a wide range of products using our free tools.</p>
        </div>

        <div className="lg:w-1/3 px-4 mt-8 lg:mt-0">
          <img src="https://printify.com/pfh/assets/legacy/your-products.png" alt="Sell on your terms" className="mx-auto mb-4 w-24" />
          <h3 className="text-green-600 font-bold text-xl">SELL</h3>
          <h4 className="text-2xl font-semibold mb-2">on your terms</h4>
          <p className="text-gray-500">You choose the products, sale price, and where to sell.</p>
        </div>

        <div className="lg:w-1/3 px-4 mt-8 lg:mt-0">
          <img src="https://printify.com/pfh/assets/legacy/fullfillment.png" alt="We handle fulfillment" className="mx-auto mb-4 w-24" />
          <h3 className="text-green-600 font-bold text-xl">WE HANDLE</h3>
          <h4 className="text-2xl font-semibold mb-2">fulfillment</h4>
          <p className="text-gray-500">Once an order is placed, we automatically handle all the printing and delivery logistics.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
