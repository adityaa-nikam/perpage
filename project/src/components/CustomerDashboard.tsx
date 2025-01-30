import React from 'react';
import { Star, Clock, BookOpen, Filter } from 'lucide-react';

const CustomerDashboard = () => {
  const writers = [
    {
      id: 1,
      name: "Dr. Sharma",
      specialization: "Computer Science, Engineering",
      rating: 4.9,
      completedOrders: 156,
      startingPrice: "₹800",
      availability: "Available",
      responseTime: "1 hour",
      description: "PhD in Computer Science with 8+ years of academic writing experience."
    },
    {
      id: 2,
      name: "Prof. Gupta",
      specialization: "Business Management, Economics",
      rating: 4.8,
      completedOrders: 203,
      startingPrice: "₹850",
      availability: "Available",
      responseTime: "2 hours",
      description: "MBA from IIM with expertise in case studies and research papers."
    },
    {
      id: 3,
      name: "Dr. Patel",
      specialization: "Medicine, Life Sciences",
      rating: 4.9,
      completedOrders: 178,
      startingPrice: "₹900",
      availability: "Available",
      responseTime: "1 hour",
      description: "Medical professional with extensive research publication experience."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Find Your Perfect Writer</h1>
          <p className="mt-2 text-gray-600">Browse through our top-rated academic writers</p>
        </div>
        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
          <Filter className="h-5 w-5 mr-2" />
          Filter Writers
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {writers.map((writer) => (
          <div key={writer.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h2 className="text-xl font-semibold text-gray-900 mr-4">{writer.name}</h2>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    {writer.availability}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{writer.specialization}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span>{writer.rating} ({writer.completedOrders} orders)</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Response time: {writer.responseTime}</span>
                  </div>
                </div>
                <p className="text-gray-700">{writer.description}</p>
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-center md:items-end">
                <p className="text-gray-600 mb-2">Starting from {writer.startingPrice}/page</p>
                <button className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Hire Writer
                </button>
                <button className="w-full md:w-auto mt-2 px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerDashboard