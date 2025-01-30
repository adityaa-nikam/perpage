import React from 'react';
import { Clock, CheckCircle, AlertCircle, DollarSign, Star, FileText, Users, TrendingUp } from 'lucide-react';

const WriterDashboard = () => {
  const stats = [
    { icon: <DollarSign className="h-6 w-6 text-green-500" />, label: 'Total Earnings', value: '₹92,500' },
    { icon: <Star className="h-6 w-6 text-yellow-500" />, label: 'Rating', value: '4.8/5' },
    { icon: <FileText className="h-6 w-6 text-blue-500" />, label: 'Completed Orders', value: '24' },
    { icon: <Users className="h-6 w-6 text-purple-500" />, label: 'Happy Clients', value: '18' }
  ];

  const pendingOrders = [
    { id: 1, title: 'Research Paper on Climate Change', deadline: '2024-03-20', budget: '₹9,800', subject: 'Environmental Science', wordCount: 2000 },
    { id: 2, title: 'Literature Review', deadline: '2024-03-22', budget: '₹6,500', subject: 'English Literature', wordCount: 1500 },
  ];

  const deliveredOrders = [
    { id: 3, title: 'Case Study Analysis', date: '2024-03-15', rating: 5, subject: 'Business Management', wordCount: 1800, amount: '₹8,200' },
    { id: 4, title: 'Essay on Modern Art', date: '2024-03-10', rating: 4, subject: 'Art History', wordCount: 1200, amount: '₹5,500' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Writer Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome back! Here's your writing performance overview.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-gray-50">{stat.icon}</div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <Clock className="h-6 w-6 text-yellow-500 mr-2" />
            <h2 className="text-xl font-semibold">Pending Orders</h2>
          </div>
          
          <div className="space-y-4">
            {pendingOrders.map(order => (
              <div key={order.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-medium text-gray-900">{order.title}</h3>
                <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div>Subject: {order.subject}</div>
                  <div>Words: {order.wordCount}</div>
                  <div>Deadline: {order.deadline}</div>
                  <div>Budget: {order.budget}</div>
                </div>
                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                    Accept Order
                  </button>
                  <button className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
            <h2 className="text-xl font-semibold">Delivered Orders</h2>
          </div>
          
          <div className="space-y-4">
            {deliveredOrders.map(order => (
              <div key={order.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-medium text-gray-900">{order.title}</h3>
                <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div>Subject: {order.subject}</div>
                  <div>Words: {order.wordCount}</div>
                  <div>Delivered: {order.date}</div>
                  <div>Amount: {order.amount}</div>
                  <div className="flex items-center col-span-2">
                    Rating: 
                    {[...Array(order.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriterDashboard