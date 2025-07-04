import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backArrowBlue from '../../assets/images/leftin.png';
import mast from '../../assets/images/mask.png';

const SmsConfigData = () => {
  const [formData, setFormData] = useState({
    smppName: '',
    providerName: '',
    smppHost: '',
    smppPort: '',
    smppUsername: '',
    smppPassword: '',
    txSessions: '',
    rxSessions: '',
    trxSessions: '',
    systemType: '',
    serviceType: '',
    enquireLinkInterval: '',
    reconnectDelay: '',
    sourceAddrTON: '',
    sourceAddrNPI: '',
    destAddrTON: '',
    destAddrNPI: ''
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessModal(true);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  const formFields = [
    { name: 'smppName', label: 'SMPP Name', type: 'text', placeholder: 'Enter SMPP name', width: 'w-96' },
    { name: 'providerName', label: 'Provider Name', type: 'text', placeholder: 'Enter provider name', width: 'w-96' },
    { name: 'smppHost', label: 'SMPP Host', type: 'text', placeholder: 'Enter SMPP host', width: 'w-155' }, // Special width for SMPP Host
    { name: 'smppPort', label: 'SMPP Port', type: 'text', placeholder: 'Enter SMPP port', width: 'w-96' },
    { name: 'smppUsername', label: 'SMPP Username', type: 'text', placeholder: 'Enter username', width: 'w-96' },
    { name: 'smppPassword', label: 'SMPP Password', type: 'password', placeholder: 'Enter password', width: 'w-96' },
    { name: 'txSessions', label: 'TX Sessions', type: 'text', placeholder: 'Enter TX sessions', width: 'w-96' },
    { name: 'rxSessions', label: 'RX Sessions', type: 'text', placeholder: 'Enter RX sessions', width: 'w-96' },
    { name: 'trxSessions', label: 'TRx Sessions', type: 'text', placeholder: 'Enter TRx sessions', width: 'w-96' },
    { name: 'systemType', label: 'System Type', type: 'text', placeholder: 'Enter system type', width: 'w-96' },
    { name: 'serviceType', label: 'Service Type', type: 'text', placeholder: 'Enter service type', width: 'w-96' },
    { name: 'enquireLinkInterval', label: 'Enquire Link Interval', type: 'text', placeholder: 'Enter interval', width: 'w-96' },
    { name: 'reconnectDelay', label: 'Reconnect Delay', type: 'text', placeholder: 'Enter delay', width: 'w-96' },
    { name: 'sourceAddrTON', label: 'Source ADDR TON', type: 'text', placeholder: 'Enter source TON', width: 'w-96' },
    { name: 'sourceAddrNPI', label: 'Source ADDR NPI', type: 'text', placeholder: 'Enter source NPI', width: 'w-96' },
    { name: 'destAddrTON', label: 'Dest ADDR TON', type: 'text', placeholder: 'Enter dest TON', width: 'w-96' },
    { name: 'destAddrNPI', label: 'Dest ADDR NPI', type: 'text', placeholder: 'Enter dest NPI', width: 'w-96' }
  ];

  return (
    <div className="w-full px-6 py-4">
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-[400px] text-center shadow-lg">
            <div className="mb-6 mx-auto w-[120px] h-[120px] bg-green-100 rounded-full flex items-center justify-center">
              <img src={mast} alt="Success" className="w-16 h-16" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Configuration Saved!</h2>
            <p className="text-gray-700 mb-8">
              Your SMS configuration has been successfully saved.
            </p>
            <button
              onClick={handleCloseModal}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="gap-4 mb-6">
        <button
          onClick={handleGoBack}
          className="flex items-center gap-2 text-[#2292FC] text-sm font-medium mb-1 cursor-pointer"
        >
          <img src={backArrowBlue} alt='Go Back' className="w-4 h-4" />
          Go Back
        </button>
        <div className='text-2xl font-semibold text-[#101828]'>
          Add new SMS Configuration
        </div>
        <p className="text-[#667085]">Enter all information to create a new SMS configuration</p>
      </div>

      {/* Form */}
      <div className="border border-gray-300 rounded-lg bg-white">
        <div className="p-6 space-y-4">
          {formFields.map((field) => (
            <div key={field.name} className="flex items-center border-b border-gray-200 pb-4">
              <label className="w-48 text-sm font-medium text-gray-700">
                {field.label}
              </label>
              <div className={field.width}> {/* Using the specific width for each field */}
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
          ))}

          <div className="flex justify-end space-x-3 pt-6">
            <button
              type="button"
              onClick={handleGoBack}
              className="px-4 py-2 border border-gray-300 cursor-pointer rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-600 text-white cursor-pointer rounded-md hover:bg-blue-700"
            >
              Save Configuration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmsConfigData;