
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// This is a demo dashboard that would be expanded in a real application
const Dashboard = () => {
  const { toast } = useToast();
  const [userRole] = useState("client"); // In reality, this would come from authentication
  
  // Mock data for demonstration
  const recentBookings = [
    { id: 1, service: "Photography Session", provider: "Ahmad Khan", date: "2023-06-15", status: "Confirmed" },
    { id: 2, service: "Wedding Video", provider: "Fatima Ali", date: "2023-07-22", status: "Pending" },
  ];
  
  const notifications = [
    { id: 1, message: "Your booking with Ahmad Khan has been confirmed", date: "2023-05-30" },
    { id: 2, message: "New message from Fatima Ali regarding your booking", date: "2023-05-29" },
    { id: 3, message: "Reminder: Upcoming photography session on June 15", date: "2023-05-28" },
  ];

  // For service providers
  const serviceRequests = [
    { id: 1, service: "Wedding Photography", client: "Sara Ahmed", date: "2023-08-05", status: "New Request" },
    { id: 2, service: "Corporate Event Video", client: "Malik Enterprise", date: "2023-07-12", status: "Awaiting Response" },
  ];

  const handleAction = (action: string, id: number) => {
    toast({
      title: "Action taken",
      description: `${action} action performed on item #${id}`,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-connectpro-light py-8">
        <div className="container mx-auto px-4">
          <Header 
            title="Dashboard" 
            subtitle={`Welcome to your ${userRole === 'client' ? 'client' : 'service provider'} dashboard`}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="bookings">
                  <TabsList className="mb-4">
                    <TabsTrigger value="bookings">
                      {userRole === 'client' ? 'My Bookings' : 'Service Requests'}
                    </TabsTrigger>
                    <TabsTrigger value="notifications">Notifications</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="bookings">
                    {userRole === 'client' ? (
                      <div className="space-y-4">
                        {recentBookings.map(booking => (
                          <div key={booking.id} className="p-4 border rounded-md flex justify-between items-center">
                            <div>
                              <h3 className="font-medium">{booking.service}</h3>
                              <p className="text-sm text-gray-500">Provider: {booking.provider}</p>
                              <p className="text-sm text-gray-500">Date: {booking.date}</p>
                              <span className={`inline-block px-2 py-1 rounded text-xs ${
                                booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {booking.status}
                              </span>
                            </div>
                            <div>
                              <Button 
                                size="sm"
                                onClick={() => handleAction('view', booking.id)}
                              >
                                View Details
                              </Button>
                            </div>
                          </div>
                        ))}
                        
                        {recentBookings.length === 0 && (
                          <p className="text-center text-gray-500 py-4">No bookings found.</p>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {serviceRequests.map(request => (
                          <div key={request.id} className="p-4 border rounded-md flex justify-between items-center">
                            <div>
                              <h3 className="font-medium">{request.service}</h3>
                              <p className="text-sm text-gray-500">Client: {request.client}</p>
                              <p className="text-sm text-gray-500">Date: {request.date}</p>
                              <span className="inline-block px-2 py-1 rounded text-xs bg-blue-100 text-blue-800">
                                {request.status}
                              </span>
                            </div>
                            <div className="flex gap-2">
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => handleAction('accept', request.id)}
                              >
                                Accept
                              </Button>
                              <Button 
                                size="sm"
                                variant="destructive"
                                onClick={() => handleAction('decline', request.id)}
                              >
                                Decline
                              </Button>
                            </div>
                          </div>
                        ))}
                        
                        {serviceRequests.length === 0 && (
                          <p className="text-center text-gray-500 py-4">No service requests found.</p>
                        )}
                      </div>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="notifications">
                    <div className="space-y-2">
                      {notifications.map(notification => (
                        <div key={notification.id} className="p-3 border-b">
                          <p className="text-sm">{notification.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{notification.date}</p>
                        </div>
                      ))}
                      
                      {notifications.length === 0 && (
                        <p className="text-center text-gray-500 py-4">No notifications found.</p>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-center">
                      <div className="w-20 h-20 rounded-full bg-connectpro-blue text-white flex items-center justify-center text-2xl font-bold">
                        {userRole === 'client' ? 'CL' : 'SP'}
                      </div>
                    </div>
                    <h3 className="text-center font-medium">
                      {userRole === 'client' ? 'John Doe' : 'Ahmad Photography'}
                    </h3>
                    <p className="text-center text-sm text-gray-500">
                      {userRole === 'client' ? 'Client' : 'Service Provider - Photographer'}
                    </p>
                    <Button variant="outline" className="w-full mt-2" onClick={() => handleAction('edit-profile', 0)}>
                      Edit Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {userRole === 'client' ? (
                      <>
                        <Button className="w-full bg-connectpro-blue" onClick={() => handleAction('find-services', 0)}>
                          Find Services
                        </Button>
                        <Button variant="outline" className="w-full" onClick={() => handleAction('messages', 0)}>
                          Messages
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button className="w-full bg-connectpro-blue" onClick={() => handleAction('manage-portfolio', 0)}>
                          Manage Portfolio
                        </Button>
                        <Button variant="outline" className="w-full" onClick={() => handleAction('update-availability', 0)}>
                          Update Availability
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
