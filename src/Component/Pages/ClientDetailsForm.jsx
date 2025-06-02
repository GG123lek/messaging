import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import nige from '../../assets/images/flagis.png';
import mast from '../../assets/images/mask.png';

const ClientDetailForm = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    officialEmail: '',
    phoneNumber: '',
    contactSystemType: '',
    notificationChannel: ''
  });

  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    setShowModal(true);
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-lg p-8 shadow-sm mt-8">
        {/* Header */}
        <div className="mb-8 border-b border-gray-300 pb-4">
          <h1 className="text-xl font-semibold text-[#101828] mb-1">
            Client System Details
          </h1>
          <p className="text-sm text-gray-600">
            Enter the correct information for this client system
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[280px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Name
              </label>
              <input
                type="text"
                name="businessName"
                placeholder="Enter Business Name"
                value={formData.businessName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 placeholder-gray-500"
              />
            </div>

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

          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[280px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="flex">
                <div className="flex items-center px-3 py-3 border border-r-0 border-gray-300 bg-gray-50 rounded-l-lg">
                  <img src={nige} alt="" className="w-4 h-4 rounded-full mr-2" />
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

            <div className="flex-1 min-w-[280px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact System Type
              </label>
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
            </div>
          </div>

          <div className="flex-1 min-w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Intended Notification Channel
            </label>
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
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="border-t border-gray-300 mt-8 pt-6 flex justify-end space-x-4">
          <button
            onClick={handleGoBack}
            className="flex items-center px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium cursor-pointer"
          >
            Go Back
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium cursor-pointer"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-[400px] text-center shadow-lg">
            <img
              src={mast}
              alt="Success"
              className="mb-6 mx-auto w-[120px] h-auto"
            />
            <h2 className="text-2xl font-bold mb-2">Successful !!</h2>
            <p className="text-gray-700 mb-8">
              You have successfully added a new client system
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientDetailForm;
