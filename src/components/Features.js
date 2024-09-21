import React from 'react';
import featureImage1 from '../assets/featureImage1.png';
import featureImage2 from '../assets/featureImage2.png';
import featureImage3 from '../assets/featureImage3.png';

const Features = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-10">Our Key Features</h2>
      <div className="flex flex-wrap justify-center space-x-4">
        <div className="flex flex-col items-center p-4">
          <img src={featureImage1} alt="Feature 1" className="h-24 w-24" />
          <h3 className="text-xl font-semibold mt-4">Higher Profits</h3>
          <p className="mt-2 text-gray-500">We offer the best profit margins in the industry.</p>
        </div>
        <div className="flex flex-col items-center p-4">
          <img src={featureImage2} alt="Feature 2" className="h-24 w-24" />
          <h3 className="text-xl font-semibold mt-4">Robust Scaling</h3>
          <p className="mt-2 text-gray-500">Easily scale your business with our print network.</p>
        </div>
        <div className="flex flex-col items-center p-4">
          <img src={featureImage3} alt="Feature 3" className="h-24 w-24" />
          <h3 className="text-xl font-semibold mt-4">Best Selection</h3>
          <p className="mt-2 text-gray-500">Choose from a wide range of customizable products.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
