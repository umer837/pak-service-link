
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-connectpro-navy text-white py-10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">
              <span className="text-connectpro-accent">Connect</span>Pro
            </h3>
            <p className="text-gray-300">
              Connecting clients with trusted service providers in Peshawar.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-connectpro-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-gray-300 hover:text-connectpro-accent transition-colors">
                  Join as Provider
                </Link>
              </li>
              <li>
                <Link to="/find-services" className="text-gray-300 hover:text-connectpro-accent transition-colors">
                  Find Services
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <p className="text-gray-300">Peshawar, Pakistan</p>
            <p className="text-gray-300">contact@connectpro.com</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ConnectPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
