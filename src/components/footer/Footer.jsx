import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold text-cyan-400">REDUX-CRUD</h1>
          <p className="text-sm text-gray-500 mt-1">People are everything for us.</p>
        </div>

        <div className="flex space-x-6">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xl hover:text-cyan-300 transition duration-300"
          >
            <FaGithub />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xl hover:text-cyan-300 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xl hover:text-cyan-300 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="text-sm text-gray-500 mt-4 md:mt-0">
          © 2025 REDUX-CRUD. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
