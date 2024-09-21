import React from 'react';
import Header from './components/Header';

import Hero from './components/Hero';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import ProductSection from './components/ProductSection'; 
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

const HomePage = () => {
  return (
    <div>
      
      <Header />
      <Hero />
      <Features />
      <ProductSection /> 
      <FeaturesSection />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default HomePage;
