import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

function SmsConfigData() {
  const [formData, setFormData] = useState({
    providerName: '',
    apiUrl: '',
    apiKey: '',
    senderName: '',
    isActive: true
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('SMS Config Data:', formData);
    
    // Navigate back to SMS page after submission
    alert('Configuration saved successfully!');
  };

  const handleGoBack = () => {
    alert('Going back to SMS configuration list');
  };

  return (
    <div className='p-6 max-w-4xl'>
      {/* Back arrow and header */}
      <div className=" gap-4 mb-6">
        <button
          onClick={handleGoBack}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-[#101828] mb-1">New SMS Configuration</h1>
          <p className="text-sm text-[#667085]">
            Configure a new SMS gateway provider
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="providerName" className="block text-sm font-medium text-gray-700 mb-2">
                Provider Name *
              </label>
              <input
                type="text"
                id="providerName"
                name="providerName"
                value={formData.providerName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Twilio, AWS SNS"
              />
            </div>

            <div>
              <label htmlFor="senderName" className="block text-sm font-medium text-gray-700 mb-2">
                Sender Name *
              </label>
              <input
                type="text"
                id="senderName"
                name="senderName"
                value={formData.senderName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., YourCompany"
              />
            </div>
          </div>

          <div>
            <label htmlFor="apiUrl" className="block text-sm font-medium text-gray-700 mb-2">
              API URL *
            </label>
            <input
              type="url"
              id="apiUrl"
              name="apiUrl"
              value={formData.apiUrl}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="https://api.provider.com/sms"
            />
          </div>

          <div>
            <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-2">
              API Key *
            </label>
            <input
              type="password"
              id="apiKey"
              name="apiKey"
              value={formData.apiKey}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your API key"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="isActive"
              name="isActive"
              checked={formData.isActive}
              onChange={handleInputChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="isActive" className="ml-2 block text-sm text-gray-700">
              Set as active configuration
            </label>
          </div>

          <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-200">
            <button
              onClick={handleSubmit}
              className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Save Configuration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmsConfigData;