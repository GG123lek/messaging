import React, { useState } from 'react';
import mossag from '../../assets/images/deltas.png';
import masted from '../../assets/images/mask.png';

const DefaultRoutingTemplatesForm = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="space-y-0">
        {/* Header */}
        <h2 className="text-sm font-semibold text-[#667085] mb-2">
          Manage and edit default routing logic templates
        </h2>
        <div className="border-t border-gray-200 pt-3"></div>

        {/* Primary Routing Section */}
        <div className="py-3 border-b border-gray-200">
          <div className="flex items-center pb-2">
            <div className="w-48">
              <p className="text-sm font-medium text-gray-900">Primary Channel</p>
              <p className="text-[10px] text-[#667085] mt-1">First channel to try</p>
            </div>
            <div className="relative w-80">
              <input 
                type="text" 
                defaultValue="SMS"
                className="w-full text-xs font-medium border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 pr-6"
              />
              <img src={mossag} className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Fallback Routing Section */}
        <div className="py-3 border-b border-gray-200">
          <div className="flex items-center pb-2">
            <div className="w-48">
              <p className="text-sm font-medium text-gray-900">First Fallback</p>
              <p className="text-[10px] text-[#667085] mt-1">Backup channel if primary fails.</p>
            </div>
            <div className="relative w-80">
              <input 
                type="text" 
                defaultValue="Whatsapp"
                className="w-full text-xs font-medium border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 pr-6"
              />
              <img src={mossag} className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* High Priority Section */}
        <div className="py-3 border-b border-gray-200">
          <div className="flex items-center pb-2">
            <div className="w-48">
              <p className="text-sm font-medium text-gray-900">Second Fallback</p>
              <p className="text-[10px] text-[#667085] mt-1">Additional fallback</p>
            </div>
            <div className="relative w-80">
              <input 
                type="text" 
                defaultValue="Email"
                className="w-full text-xs font-medium border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 pr-6"
              />
              <img src={mossag} className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-3 pt-4">
          <button className="px-3 py-1.5 text-xs font-medium text-gray-700 cursor-pointer bg-white border border-gray-300 rounded hover:bg-gray-50">
            Cancel
          </button>
          <button 
            className="px-3 py-1.5 text-xs font-medium text-white cursor-pointer bg-blue-600 rounded hover:bg-blue-700"
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
              <img src={masted} alt='Success' className="w-16 h-16 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Routing Templates Updated!</h2>
            <p className="text-gray-600 mb-8">
              Your routing templates have been successfully saved.
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

export default DefaultRoutingTemplatesForm;