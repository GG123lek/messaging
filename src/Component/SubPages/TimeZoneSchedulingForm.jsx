import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import mastik from '../../assets/images/mask.png';

const TimezoneSchedulingForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [showTimezoneDropdown, setShowTimezoneDropdown] = useState(false);
  const [selectedTimezone, setSelectedTimezone] = useState('UTC+00:00 (London)');
  
  const timezones = [
    'UTC-12:00 (International Date Line West)',
    'UTC-11:00 (Midway Island, Samoa)',
    'UTC-10:00 (Hawaii)',
    'UTC-09:00 (Alaska)',
    'UTC-08:00 (Pacific Time)',
    'UTC-07:00 (Mountain Time)',
    'UTC-06:00 (Central Time)',
    'UTC-05:00 (Eastern Time)',
    'UTC-04:00 (Atlantic Time)',
    'UTC-03:00 (Buenos Aires)',
    'UTC+00:00 (London)',
    'UTC+01:00 (Berlin)',
    'UTC+02:00 (Cairo)',
    'UTC+03:00 (Moscow)',
    'UTC+04:00 (Dubai)',
    'UTC+05:00 (Karachi)',
    'UTC+05:30 (Mumbai)',
    'UTC+06:00 (Dhaka)',
    'UTC+07:00 (Bangkok)',
    'UTC+08:00 (Beijing)',
    'UTC+09:00 (Tokyo)',
    'UTC+10:00 (Sydney)',
    'UTC+12:00 (Auckland)'
  ];

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleTimezoneSelect = (timezone) => {
    setSelectedTimezone(timezone);
    setShowTimezoneDropdown(false);
  };

  return (
    <>
      <div className="space-y-0">
        {/* Header */}
        <h2 className="text-sm font-semibold text-[#667085] mb-2">
          Configure timezone and scheduling preferences
        </h2>
        <div className="border-t border-gray-200 pt-3"></div>

        {/* Timezone Section */}
        <div className="py-3 border-b border-gray-200">
          <div className="flex items-center pb-2">
            <div className="w-48">
              <p className="text-sm font-medium text-gray-900">Default Timezone</p>
              <p className="text-[10px] text-[#667085] mt-1">Select your primary timezone</p>
            </div>
            <div className="relative w-80">
              <input 
                type="text" 
                value={selectedTimezone}
                readOnly
                className="w-full text-xs font-medium border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 pr-8 cursor-pointer"
                onClick={() => setShowTimezoneDropdown(!showTimezoneDropdown)}
              />
              <ChevronDownIcon 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none"
              />
              
              {showTimezoneDropdown && (
                <div className="absolute z-10 mt-1 w-full max-h-60 overflow-auto bg-white border border-gray-300 rounded shadow-lg">
                  {timezones.map((timezone) => (
                    <div
                      key={timezone}
                      className="px-3 py-2 text-xs hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleTimezoneSelect(timezone)}
                    >
                      {timezone}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-3 pt-4">
          <button className="px-3 py-1.5 text-xs font-medium cursor-pointer text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50">
            Cancel
          </button>
          <button 
            className="px-3 py-1.5 text-xs font-medium cursor-pointer text-white bg-blue-600 rounded hover:bg-blue-700"
            onClick={() => setShowModal(true)}
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-[400px] text-center shadow-xl">
            <div className="mb-6 mx-auto w-[120px] h-[120px] bg-green-50 rounded-full flex items-center justify-center">
              <img src={mastik} className="w-16 h-16 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Timezone Updated!</h2>
            <p className="text-gray-600 mb-8">
              Your timezone preferences have been successfully saved.
            </p>
            <button
              onClick={handleCloseModal}
              className="px-6 py-3 bg-blue-600 text-white cursor-pointer rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TimezoneSchedulingForm;