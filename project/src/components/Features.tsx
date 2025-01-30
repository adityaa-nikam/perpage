import React from 'react';
import { FileText, Clock, Shield, Star, BookOpen, CreditCard, UserCheck, MessageSquare } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Quality Writing",
      description: "Expert writers deliver high-quality, plagiarism-free academic content tailored to your requirements."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "On-Time Delivery",
      description: "Meet your deadlines with our reliable and punctual delivery system."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "100% Privacy",
      description: "Your personal information is protected with complete anonymity between writers and customers."
    },
    {
      icon: <Star className="h-8 w-8 text-blue-600" />,
      title: "Expert Writers",
      description: "Connect with experienced academic writers who specialize in your subject area."
    }
  ];

  const howItWorks = [
    {
      icon: <UserCheck className="h-8 w-8 text-green-600" />,
      title: "1. Sign Up",
      description: "Create your account as a customer or writer. Complete verification process for writers."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-green-600" />,
      title: "2. Place Order",
      description: "Submit your assignment details, including subject, word count, and deadline."
    },
    {
      icon: <CreditCard className="h-8 w-8 text-green-600" />,
      title: "3. Secure Payment",
      description: "Make payment using our secure payment gateway. Funds are held in escrow until approval."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-green-600" />,
      title: "4. Collaboration",
      description: "Communicate with your writer through our platform while maintaining anonymity."
    }
  ];

  return (
    <section className="py-16 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose PerPage.com?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            India's leading academic writing platform connecting students with expert writers.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className="relative p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing Information</h2>
          <div className="space-y-4">
            <p className="text-gray-600">Our pricing is transparent and competitive, starting from:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Essays and Assignments: ₹800 per page</li>
              <li>Research Papers: ₹1,000 per page</li>
              <li>Technical Writing: ₹1,200 per page</li>
              <li>Thesis and Dissertations: Custom pricing based on requirements</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Final pricing varies based on deadline, complexity, and academic level. Get an instant quote by submitting your requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features