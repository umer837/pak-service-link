
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import { Camera, Video, Calendar } from 'lucide-react';

const Index = () => {
  const services = [
    {
      title: 'Photographer',
      description: 'Professional photographers for your events, portraits, and commercial projects.',
      icon: <Camera />
    },
    {
      title: 'Videographer',
      description: 'Skilled videographers to capture and edit your memorable moments.',
      icon: <Video />
    },
    {
      title: 'Event Organizer',
      description: 'Experienced event planners to make your occasion perfect and stress-free.',
      icon: <Calendar />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        <section className="py-16 bg-connectpro-light">
          <div className="container mx-auto px-4">
            <Header 
              title="Our Services" 
              subtitle="Connect with trusted professionals in Peshawar for your specific needs"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <Header 
              title="How It Works" 
              subtitle="Simple process to connect clients with service providers"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="text-center p-6">
                <div className="bg-connectpro-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-connectpro-blue text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Create Account</h3>
                <p className="text-gray-600">Register as a client or service provider</p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-connectpro-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-connectpro-blue text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Find Services</h3>
                <p className="text-gray-600">Search and connect with the right professional</p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-connectpro-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-connectpro-blue text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Book & Connect</h3>
                <p className="text-gray-600">Finalize details and enjoy professional services</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
