import React from 'react';
import { useState } from 'react';

// Modal Component
function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {title && (
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-xl font-bold"
            >
              ×
            </button>
          )}
        </div>
        <div className="mb-6">
          {children}
        </div>
        {title && (
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Channel Configuration Component
function ChannelConfiguration() {
  const [channels, setChannels] = useState({
    sms: false,
    email: false,
    ussd: false
  });
  
  const [showSmsModal, setShowSmsModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleToggle = (channel) => {
    setChannels(prev => ({
      ...prev,
      [channel]: !prev[channel]
    }));
    
    // Show modal when SMS is toggled on
    if (channel === 'sms') {
      setShowSmsModal(true);
    }
  };

  const handleSave = () => {
    console.log('Saving channel configuration:', channels);
    setShowSuccessModal(true);
  };

  const handleCancel = () => {
    setChannels({
      sms: false,
      email: false,
      ussd: false
    });
  };

  return (
    <>
      {/* Header and Toggles Row */}
      <div className="flex items-start gap-8 mb-6">
        {/* Left side - Header */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Configure Channel</h2>
          <p className="text-sm text-gray-600">Manage and Configure Channels</p>
        </div>

        {/* Right side - Channel toggles */}
        <div className="space-y-1">
          {/* SMS Toggle */}
          <div className="flex flex-row-reverse items-center justify-start space-x-reverse space-x-3">
            <span className="text-gray-700 w-12">SMS</span>
            <button
              onClick={() => handleToggle('sms')}
              className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                channels.sms ? 'bg-orange-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                  channels.sms ? 'translate-x-5' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Email Toggle */}
          <div className="flex flex-row-reverse items-center justify-start space-x-reverse space-x-3">
            <span className="text-gray-700 w-12">Email</span>
            <button
              onClick={() => handleToggle('email')}
              className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                channels.email ? 'bg-orange-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                  channels.email ? 'translate-x-5' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* USSD Toggle */}
          <div className="flex flex-row-reverse items-center justify-start space-x-reverse space-x-3">
            <span className="text-gray-700 w-12">USSD</span>
            <button
              onClick={() => handleToggle('ussd')}
              className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                channels.ussd ? 'bg-orange-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                  channels.ussd ? 'translate-x-5' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <hr className="border-gray-200 mb-6" />

      {/* Action Buttons */}
      <div className="flex justify-end space-x-3">
        <button
          onClick={handleCancel}
          className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 text-white bg-[#2292FC] rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors"
        >
          Save Changes
        </button>
      </div>

      {/* SMS Modal */}
      <Modal
        isOpen={showSmsModal}
        onClose={() => setShowSmsModal(false)}
        title="Assign SMS Gateways"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Primary
            </label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Select Primary</option>
              <option>Gateway 1</option>
              <option>Gateway 2</option>
              <option>Gateway 3</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Fall Back 1
            </label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Select Fall Back 1</option>
              <option>Gateway 1</option>
              <option>Gateway 2</option>
              <option>Gateway 3</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Fall Back 2
            </label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Select Fall Back 2</option>
              <option>Gateway 1</option>
              <option>Gateway 2</option>
              <option>Gateway 3</option>
            </select>
          </div>
          
          <div className="pt-4">
            <button
              onClick={() => setShowSmsModal(false)}
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Assign Gateway
            </button>
          </div>
        </div>
      </Modal>

      {/* Success Modal */}
      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title=""
      >
        <div className="text-center space-y-4">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white">
              <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Successful !!</h3>
            <p className="text-gray-500 text-sm">
              You have successfully change<br />
              configuration to this system
            </p>
          </div>
          
          <div className="pt-4">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

// Main Container Component
export default function ChannelConfigContainer() {
  return (
    <div className="">
      <ChannelConfiguration />
    </div>
  );
}