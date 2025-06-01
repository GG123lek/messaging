import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ClientDetailForm = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    officialEmail: '',
    phoneNumber: '',
    contactSystemType: '',
    notificationChannel: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const handleGoBack = () => {
    console.log('Go back clicked');
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-lg p-8 shadow-sm mt-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-xl font-semibold text-[#101828] mb-1">
            Client System Details
          </h1>
          <p className="text-sm text-gray-600">
            Enter the correct information for this client system
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          {/* Row 1 */}
          <div className="flex flex-wrap gap-6">
            {/* Business Name */}
            <div className="flex-1 min-w-[280px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="businessName"
                  placeholder="Enter Business Name"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 placeholder-gray-500"
                />
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Official Email */}
            <div className="flex-1 min-w-[280px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Official Email Address
              </label>
              <input
                type="email"
                name="officialEmail"
                placeholder="example@gmail.com"
                value={formData.officialEmail}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap gap-6">
            {/* Phone Number */}
            <div className="flex-1 min-w-[280px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="flex">
                <div className="flex items-center px-3 py-3 border border-r-0 border-gray-300 bg-gray-50 rounded-l-lg">
                  <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-gray-700 text-sm">+234</span>
                  <ChevronDown className="w-4 h-4 text-gray-400 ml-1" />
                </div>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Enter phone number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 placeholder-gray-500"
                />
              </div>
            </div>

            {/* Contact System Type */}
            <div className="flex-1 min-w-[280px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact System Type
              </label>
              <div className="relative">
                <select
                  name="contactSystemType"
                  value={formData.contactSystemType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-500 bg-white cursor-pointer"
                >
                  <option value="">Select Contact System Type</option>
                  <option value="email">Email</option>
                  <option value="sms">SMS</option>
                  <option value="phone">Phone</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Intended Notification Channel
            </label>
            <div className="relative">
              <select
                name="notificationChannel"
                value={formData.notificationChannel}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-500 bg-white cursor-pointer"
              >
                <option value="">Select Notification Channel</option>
                <option value="email">Email</option>
                <option value="sms">SMS</option>
                <option value="push">Push Notification</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="slack">Slack</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 mt-8">
          <button
            onClick={handleGoBack}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium cursor-pointer"
          >
            Go Back
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientDetailForm;
