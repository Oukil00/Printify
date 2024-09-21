import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-500 text-white p-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="footer-logo mb-4 md:mb-0">
            <h1 className="text-xl font-bold">MyBrand</h1>
          </div>
          <ul className="space-y-2 mb-4 md:mb-0">
            <li><a href="#about" className="hover:text-orange-500">About</a></li>
            <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
            <li><a href="#privacy" className="hover:text-orange-500">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-orange-500">Terms of Service</a></li>
          </ul>
          <div className="social-icons flex space-x-4 mb-4 md:mb-0">
            <a href="https://www.instagram.com/zako_o.o/" aria-label="Instagram">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/018/930/413/small/instagram-logo-instagram-icon-transparent-free-png.png" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/zakaryaoukil/" aria-label="LinkedIn">
              <img src="https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-png.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="https://github.com/Oukil00" aria-label="Github">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" className="w-6 h-6" />
            </a>            
            <a href="https://www.facebook.com/zakarya.oukil.1/" aria-label="Facebook">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="Facebook" className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="newsletter mt-6">
          <h3 className="text-lg">Subscribe to our Newsletter</h3>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-green-400 text-white w-full"
            />
            <button type="submit" className="ml-2 p-2 rounded bg-green-700 text-white">
              Subscribe
            </button>
          </form>
        </div>
        <div className="text-center mt-6">
          <p>&copy; 2024 Plantify. All Rights Reserved.</p>
          <p>Baraki, Algiers, Algeria</p>
          <p>Email: zakaryaoukil2003@gmail.com | Phone: +213 668 71 8784</p>
        </div>
      </div>
      <div className="text-center mt-4">
        <a href="#top" className="text-white hover:text-white">Back to top</a>
      </div>
    </footer>
  );
};

export default Footer;
