
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <Card className="h-full transition-all hover:shadow-lg">
      <CardHeader className="text-center pb-2">
        <div className="mx-auto text-connectpro-blue mb-4 text-4xl">
          {icon}
        </div>
        <CardTitle className="text-xl text-connectpro-navy">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-center pt-2">
        <Link to="/find-services">
          <Button variant="outline" className="border-connectpro-blue text-connectpro-blue hover:bg-connectpro-blue hover:text-white">
            Find {title}s
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
