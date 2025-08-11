import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaSkype,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2C2C2C] text-white px-10 py-12">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Menu */}
        <div>
          <h4 className="mb-4 font-semibold">Menu</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">New arrivals</a></li>
            <li><a href="#">Best sellers</a></li>
            <li><a href="#">Recently viewed</a></li>
            <li><a href="#">Popular this week</a></li>
            <li><a href="#">All products</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="mb-4 font-semibold">Categories</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Crockery</a></li>
            <li><a href="#">Furniture</a></li>
            <li><a href="#">Homeware</a></li>
            <li><a href="#">Plant pots</a></li>
            <li><a href="#">Chairs</a></li>
          </ul>
        </div>

    
        <div>
          <h4 className="mb-4 font-semibold">Our company</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">About us</a></li>
            <li><a href="#">Vacancies</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Returns policy</a></li>
          </ul>
        </div>

        
        <div className="md:col-span-2">
          <h4 className="mb-4 font-semibold">Join our mailing list</h4>
          <form className="flex">
            <input
              type="email"
              placeholder="your@email.com"
              className="px-4 py-2 flex-1 bg-[#3A3A3A] text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 font-semibold"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-600 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-xs text-gray-400 mb-4 md:mb-0">Copyright 2022 Avion LTD</p>
        <div className="flex gap-4 text-white text-xl">
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaSkype /></a>
          <a href="#"><FaPinterestP /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
