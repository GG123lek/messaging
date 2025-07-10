import React, { useState } from 'react';
import masgin from '../../assets/images/mask.png';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const MessageRetentionForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [archiveYes, setArchiveYes] = useState(false);
  const [archiveNo, setArchiveNo] = useState(false);
  const [retentionYes, setRetentionYes] = useState(false);
  const [retentionNo, setRetentionNo] = useState(false);
  const [additionalField1, setAdditionalField1] = useState('');
  const [additionalField2, setAdditionalField2] = useState('');

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="space-y-0">
        {/* Header */}
        <h2 className="text-sm font-semibold text-[#667085] mb-2">
          Manage and edit the Message Retention settings
        </h2>
        <div className="border-t border-gray-200 pt-3"></div>

        {/* Retention Period Section */}
        <div className="py-3">
          <div className="flex items-center">
            <div className="w-[200px] min-w-[200px]"> {/* Increased width */}
              <p className="text-sm font-medium text-gray-900">Retention Period</p>
              <p className="text-[10px] text-[#667085] mt-1">Duration to keep logs before purging</p>
            </div>
            <div className="relative w-80 ml-2"> {/* Adjusted ml */}
              <input 
                type="text" 
                defaultValue="30 days"
                className="w-full text-xs font-medium border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 pr-8"
              />
            </div>
          </div>
        </div>

        {/* Archive Before Deletion Toggle */}
        <div className="py-3">
          <div className="flex items-start">
            <div className="w-[200px] min-w-[200px]"> {/* Increased width */}
              <p className="text-sm font-medium text-gray-900">Archive Before Deletion</p>
              <p className="text-[10px] text-[#667085] mt-1">Save logs to archive before purge</p>
            </div>
            <div className="flex flex-col w-80 gap-2 ml-2"> {/* Adjusted ml */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setArchiveYes(!archiveYes)}
                  className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 focus:outline-none flex items-center ${archiveYes ? 'bg-[#039817] justify-end' : 'bg-gray-200 justify-start'}`}
                >
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setArchiveNo(!archiveNo)}
                  className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 focus:outline-none flex items-center ${archiveNo ? 'bg-[#039817] justify-end' : 'bg-gray-200 justify-start'}`}
                >
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Apply Different Retention Toggle - Now Perfect */}
        <div className="py-3">
          <div className="flex items-start">
            <div className="w-[200px] min-w-[200px]"> {/* Increased width */}
              <p className="text-[11px] font-medium text-gray-900 leading-tight tracking-tight">
                Apply Different Retention per Channel
              </p>
              <p className="text-[10px] text-[#667085] mt-1">If enabled, show options like below</p>
            </div>
            <div className="flex flex-col w-80 gap-2 ml-2"> {/* Adjusted ml */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setRetentionYes(!retentionYes)}
                  className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 focus:outline-none flex items-center ${retentionYes ? 'bg-[#039817] justify-end' : 'bg-gray-200 justify-start'}`}
                >
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setRetentionNo(!retentionNo)}
                  className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 focus:outline-none flex items-center ${retentionNo ? 'bg-[#039817] justify-end' : 'bg-gray-200 justify-start'}`}
                >
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SMS Retention Field */}
        <div className="py-3">
          <div className="flex items-center">
            <div className="w-[200px] min-w-[200px]"> {/* Increased width */}
              <p className="text-sm font-medium text-gray-900">SMS Retention</p>
              <p className="text-[10px] text-[#667085] mt-1">Applies only if above is enabled</p>
            </div>
            <div className="relative w-80 ml-2"> {/* Adjusted ml */}
              <input 
                type="text" 
                defaultValue="30 days"
                className="w-full text-xs font-medium border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 pr-8"
              />
            </div>
          </div>
        </div>

        {/* Email Retention Field */}
        <div className="py-3 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-[200px] min-w-[200px]"> {/* Increased width */}
              <p className="text-sm font-medium text-gray-900">Email Retention</p>
              <p className="text-[10px] text-[#667085] mt-1">Applies only if above is enabled</p>
            </div>
            <div className="relative w-80 ml-2"> {/* Adjusted ml */}
              <input 
                type="text" 
                defaultValue="60 days"
                className="w-full text-xs font-medium border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 pr-8"
              />
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
              <img src={masgin} alt="Success" className="w-16 h-16" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Settings Updated!</h2>
            <p className="text-gray-600 mb-8">
              Your message retention settings have been successfully saved.
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

export default MessageRetentionForm;