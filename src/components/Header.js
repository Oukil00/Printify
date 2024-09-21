import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-5 bg-white shadow-md">
      <div className="flex items-center">
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? (
            <MdClose className="text-green-500" />
          ) : (
            <FaBars className="text-green-500" />
          )}
        </div>
        <img
          src={logo} 
          alt="Logo"
          className="h-8 w-auto md:block hidden"
        />
        <h1 className="text-2xl font-bold text-green-500 ml-2 md:block hidden">Printify</h1>
      </div>
      
      <nav className="hidden md:block">
        <ul className="flex space-x-6 text-gray-600">
          <li>Catalog</li>
          <li>How it works</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>Services</li>
          <li>Use-cases</li>
          <li>Need help?</li>
        </ul>
      </nav>

      <div className="flex items-center">
        <button className="px-4 py-2 bg-green-500 text-white rounded-md">My store</button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white transition-transform transform translate-x-0 md:hidden">
          <div className="p-5">
            <nav>
              <ul className="space-y-4 text-gray-600">
                <li onClick={toggleMenu}>Catalog</li>
                <li onClick={toggleMenu}>How it works</li>
                <li onClick={toggleMenu}>Pricing</li>
                <li onClick={toggleMenu}>Blog</li>
                <li onClick={toggleMenu}>Services</li>
                <li onClick={toggleMenu}>Use-cases</li>
                <li onClick={toggleMenu}>Need help?</li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
