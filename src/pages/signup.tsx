
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Signup = () => {
  const [role, setRole] = useState<string>("client");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    serviceType: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (value: string) => {
    setRole(value);
  };

  const handleServiceTypeChange = (value: string) => {
    setFormData(prev => ({ ...prev, serviceType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, role });
    // Here you would typically make an API call to your backend
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-connectpro-light py-12">
        <div className="container mx-auto px-4">
          <Header 
            title="Create an Account" 
            subtitle="Join ConnectPro and start connecting with service providers or clients"
          />
          
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Sign Up</CardTitle>
              <CardDescription className="text-center">Choose your role and fill in your details</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>I am a</Label>
                    <RadioGroup 
                      value={role} 
                      onValueChange={handleRoleChange}
                      className="flex space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="client" id="client" />
                        <Label htmlFor="client">Client</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="provider" id="provider" />
                        <Label htmlFor="provider">Service Provider</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  {role === "provider" && (
                    <div className="space-y-2">
                      <Label htmlFor="serviceType">Service Type</Label>
                      <Select value={formData.serviceType} onValueChange={handleServiceTypeChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="photographer">Photographer</SelectItem>
                          <SelectItem value="videographer">Videographer</SelectItem>
                          <SelectItem value="event-organizer">Event Organizer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input 
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input 
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <Button type="submit" className="w-full mt-6 bg-connectpro-blue hover:bg-connectpro-navy">
                  Create Account
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-sm text-gray-500">
                Already have an account?{" "}
                <Link to="/login" className="text-connectpro-blue hover:underline">
                  Log in
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
