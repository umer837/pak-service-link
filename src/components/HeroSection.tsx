
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-connectpro-navy to-connectpro-blue text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find Professional Services in Peshawar
        </h1>
        <p className="text-xl md:max-w-2xl mx-auto mb-8 text-gray-200">
          Connect with photographers, videographers, and event organizers for your next project or special occasion
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/signup">
            <Button className="bg-white text-connectpro-blue hover:bg-connectpro-accent hover:text-white">
              Get Started
            </Button>
          </Link>
          <Link to="/find-services">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-connectpro-blue">
              Browse Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
