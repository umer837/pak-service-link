
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Login = () => {
  const [role, setRole] = useState<string>("client");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (value: string) => {
    setRole(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted:", { ...formData, role });
    // Here you would typically make an API call to your backend
    // Then redirect to dashboard
    window.location.href = '/dashboard';
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-connectpro-light py-12">
        <div className="container mx-auto px-4">
          <Header 
            title="Welcome Back" 
            subtitle="Log in to your ConnectPro account"
          />
          
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Log In</CardTitle>
              <CardDescription className="text-center">Enter your credentials to access your account</CardDescription>
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
                        <RadioGroupItem value="client" id="client-login" />
                        <Label htmlFor="client-login">Client</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="provider" id="provider-login" />
                        <Label htmlFor="provider-login">Service Provider</Label>
                      </div>
                    </RadioGroup>
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
                  
                  <div className="flex justify-end">
                    <Link to="/forgot-password" className="text-sm text-connectpro-blue hover:underline">
                      Forgot Password?
                    </Link>
                  </div>
                </div>
                
                <Button type="submit" className="w-full mt-6 bg-connectpro-blue hover:bg-connectpro-navy">
                  Log In
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-sm text-gray-500">
                Don't have an account?{" "}
                <Link to="/signup" className="text-connectpro-blue hover:underline">
                  Sign up
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

export default Login;
