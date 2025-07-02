import React, { useState } from 'react';
import mast from '../../assets/images/mask.png'

const SmppFormPopup = ({ onClose, mode = 'configure', title = '', successMessage = '' }) => {
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [ipTags, setIpTags] = useState([
    '90.9.0.98',
    '102.0.0.67',
    '90.9.0.98',
    '102.0.0.67',
    '90.9.0.98',
  ]);
  const [ipInput, setIpInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormOpen(false);
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    if (onClose) onClose();
  };

  const handleCancel = () => {
    setIsFormOpen(false);
    if (onClose) onClose();
  };

  const removeIpTag = (indexToRemove) => {
    setIpTags(ipTags.filter((_, index) => index !== indexToRemove));
  };

  const addIpTag = (ip) => {
    if (ip.trim() && !ipTags.includes(ip.trim())) {
      setIpTags([...ipTags, ip.trim()]);
      setIpInput('');
    }
  };

  const handleIpKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addIpTag(ipInput);
    }
  };

  return (
    <div>
      {/* Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
          <div className="bg-white w-[600px] p-6 rounded-lg shadow-lg">
            {/* Header */}
            <div className="mb-4 pb-4 border-b border-gray-200">
              <h2 className="text-base font-medium text-gray-900 mb-1">
                {mode === 'edit' ? 'Edit SMPP' : 'New SMPP'}
              </h2>
              <p className="text-xs text-gray-500">
                {mode === 'edit' ? 'Edit UBA core banking SMPP' : 'Configure SMPP Profile'}
              </p>
            </div>

            <div className="space-y-4">
              {/* SMPP Host */}
              <div>
                <div className="flex items-center">
                  <label className="w-24 text-xs text-gray-700 flex-shrink-0">SMPP Host</label>
                  <input
                    type="text"
                    defaultValue="127.0.0.1"
                    className="flex-1 w-full px-3 py-2 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="h-px bg-gray-300 mt-2" />
              </div>

              {/* SMPP Port */}
              <div>
                <div className="flex items-center">
                  <label className="w-24 text-xs text-gray-700 flex-shrink-0">SMPP Port</label>
                  <input
                    type="text"
                    defaultValue="20"
                    className="flex-1 w-full px-3 py-2 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="h-px bg-gray-300 mt-2" />
              </div>

              {/* User Name */}
              <div>
                <div className="flex items-center">
                  <label className="w-24 text-xs text-gray-700 flex-shrink-0">User Name:</label>
                  <input
                    type="text"
                    defaultValue="Walexy Global"
                    className="flex-1 w-full px-3 py-2 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="h-px bg-gray-300 mt-2" />
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center">
                  <label className="w-24 text-xs text-gray-700 flex-shrink-0">Password</label>
                  <input
                    type="password"
                    defaultValue="password123"
                    className="flex-1 w-full px-3 py-2 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="h-px bg-gray-300 mt-2" />
              </div>

              {/* Maximum Rx */}
              <div>
                <div className="flex items-center">
                  <label className="w-24 text-xs text-gray-700 flex-shrink-0">Maximum Rx</label>
                  <input
                    type="text"
                    defaultValue="30"
                    className="flex-1 w-full px-3 py-2 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="h-px bg-gray-300 mt-2" />
              </div>

              {/* Maximum TRx */}
              <div>
                <div className="flex items-center">
                  <label className="w-24 text-xs text-gray-700 flex-shrink-0">Maximum TRx</label>
                  <input
                    type="text"
                    defaultValue="50"
                    className="flex-1 w-full px-3 py-2 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="h-px bg-gray-300 mt-2" />
              </div>

              {/* Allowed IP list */}
              <div>
                <div className="flex items-start">
                  <label className="w-24 text-xs text-gray-700 flex-shrink-0 pt-2">Allowed IP list</label>
                  <div className="flex-1">
                    <textarea
                      value={ipInput}
                      onChange={(e) => setIpInput(e.target.value)}
                      onKeyPress={handleIpKeyPress}
                      onBlur={() => addIpTag(ipInput)}
                      placeholder="Enter IP Separated by Comma. Press Enter to allow all IP addresses e.g 127.0.0.1"
                      className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                      rows={2}
                    />
                    <div className="flex flex-wrap gap-1 mt-1">
                      {ipTags.map((ip, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-gray-100 text-gray-700 rounded border-none text-[10px] border"
                        >
                          {ip}
                          <button
                          onClick={() => removeIpTag(index)}
                          className="ml-1 px-1 py-0 text-xs text-gray-600 bg-white border border-gray-300 shadow-sm 
                          rounded-sm"
                        >
                          ×
                        </button>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="h-px bg-gray-300 mt-2" />
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="px-4 py-1.5 text-xs font-medium text-white bg-blue-600 rounded hover:bg-blue-700 cursor-pointer"
              >
                {mode === 'edit' ? 'Save Changes' : 'Add SMPP Profile'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
          <div className="w-[320px] p-6 bg-white shadow-lg rounded-lg text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center">
                 <img
                  src={mast}
                  alt="Success"
                  className="mb-6 mx-auto w-[120px] h-auto"
                 />
              </div>
            </div>
            <h2 className="text-base font-medium text-gray-900 mb-1">Successful !!</h2>
            <p className="text-xs text-gray-600 mb-6">{successMessage}</p>
            <button
              onClick={handleSuccessClose}
              className="px-6 py-1.5 text-xs font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmppFormPopup;
