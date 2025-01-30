import React from 'react';
import { Shield, FileText, AlertCircle } from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Terms and Conditions</h2>
          <p className="mt-2 text-gray-600">Please read these terms carefully before using our services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="font-semibold text-gray-900">Privacy & Security</h3>
            </div>
            <p className="text-gray-600 text-sm">
              We ensure complete confidentiality of your personal information and academic work. All transactions are secured and encrypted.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="font-semibold text-gray-900">Content Usage</h3>
            </div>
            <p className="text-gray-600 text-sm">
              All content delivered is for reference purposes only. We promote academic integrity and discourage any form of plagiarism.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <AlertCircle className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="font-semibold text-gray-900">Refund Policy</h3>
            </div>
            <p className="text-gray-600 text-sm">
              We offer a fair refund policy if the delivered work doesn't meet the specified requirements or quality standards.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            By using our services, you agree to these terms and conditions. For detailed information, please read our{' '}
            <a href="#" className="text-blue-600 hover:text-blue-500">full terms of service</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TermsAndConditions