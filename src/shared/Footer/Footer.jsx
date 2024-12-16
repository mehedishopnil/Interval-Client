import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-white text-gray-700 py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-3xl hover:text-blue-600" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl hover:text-pink-500" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-3xl hover:text-red-600" />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
            <FaPinterest className="text-3xl hover:text-red-500" />
          </a>
        </div>

        {/* Footer Links */}
        <div className="text-center mb-6">
          <ul className="grid grid-cols-2 gap-y-4 gap-x-6 md:flex md:justify-center md:space-x-6 text-sm">
            <li>
              <a href="/about-us" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-gray-400">
                Privacy & Cookie Policies
              </a>
            </li>
            <li>
              <a href="/cookie-settings" className="hover:text-gray-400">
                Cookie Settings
              </a>
            </li>
            <li>
              <a href="/do-not-sell" className="hover:text-gray-400">
                Do Not Sell/Share
              </a>
            </li>
            <li>
              <a href="/legal" className="hover:text-gray-400">
                Legal
              </a>
            </li>
            <li>
              <a href="/support" className="hover:text-gray-400">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500">
          <p>&copy; 2024 Interval. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
