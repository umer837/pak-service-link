
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-connectpro-navy text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">
          <span className="text-connectpro-accent">Connect</span>Pro
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-connectpro-accent transition-colors">Home</Link>
          <div className="relative group">
            <button className="hover:text-connectpro-accent transition-colors">
              Client
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-20 hidden group-hover:block">
              <Link to="/find-services" className="block px-4 py-2 text-gray-800 hover:bg-connectpro-light hover:text-connectpro-blue">
                Find Services
              </Link>
              <Link to="/bookings" className="block px-4 py-2 text-gray-800 hover:bg-connectpro-light hover:text-connectpro-blue">
                My Bookings
              </Link>
            </div>
          </div>
          
          <div className="relative group">
            <button className="hover:text-connectpro-accent transition-colors">
              Service Provider
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-20 hidden group-hover:block">
              <Link to="/manage-services" className="block px-4 py-2 text-gray-800 hover:bg-connectpro-light hover:text-connectpro-blue">
                Manage Services
              </Link>
              <Link to="/service-requests" className="block px-4 py-2 text-gray-800 hover:bg-connectpro-light hover:text-connectpro-blue">
                Service Requests
              </Link>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Link to="/login">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-connectpro-navy">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-connectpro-accent text-white hover:bg-blue-500">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
