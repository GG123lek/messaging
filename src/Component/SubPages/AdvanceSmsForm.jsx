import React, { useState } from 'react';

export default function AdvanceSmsForm({ onCancel }) {
  const [formData, setFormData] = useState({
    smppName: 'SMS Configuration 1',
    providerName: 'Walexy Global',
    smppHost: '123yhwsyashsytf',
    smppPort: '20',
    smppUserName: '30',
    smppPassword: '',
    txSessions: '30',
    rxSessions: '30',
    trxSessions: '30',
    systemType: '',
    serviceType: '',
    enquireLinkInterval: '30',
    reconnectDelay: '10',
    sourceAddrTon: '0',
    sourceAddrNpi: '1',
    destAddrTon: '0',
    destAddrNpi: '1'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
    if (onCancel) onCancel();
  };

  const handleAddConfiguration = () => {
    console.log('Configuration data:', formData);
    // Submit logic here
  };

  return (
    <div className="max-w-none mx-auto p-6 bg-white shadow-md rounded-md">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-900 mb-2">New SMS Configuration</h1>
        <p className="text-sm text-gray-600">Enter all information to create a new SMS configuration</p>
      </div>

      <div className="space-y-6">
        {[
          ['SMPP Name', 'smppName'],
          ['Provider Name', 'providerName'],
          ['SMPP Host', 'smppHost'],
          ['SMPP Port', 'smppPort'],
          ['SMPP User Name', 'smppUserName'],
          ['SMPP Password', 'smppPassword', 'password'],
          ['TX Sessions', 'txSessions'],
          ['RX Sessions', 'rxSessions'],
          ['TRx Sessions', 'trxSessions'],
          ['System Type', 'systemType'],
          ['Service Type', 'serviceType'],
          ['Enquire link interval', 'enquireLinkInterval'],
          ['Reconnect delay', 'reconnectDelay'],
          ['Source ADDR TON', 'sourceAddrTon'],
          ['Source ADDR NPI', 'sourceAddrNpi'],
          ['Dest ADDR TON', 'destAddrTon'],
          ['Dest ADDR NPI', 'destAddrNpi'],
        ].map(([label, name, type = 'text']) => (
          <div key={name}>
            <div className="flex items-center space-x-4">
              <label htmlFor={name} className="w-48 text-sm font-medium text-gray-700">
                {label}
              </label>
              <input
                type={type}
                id={name}
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                placeholder={type === 'password' ? '••••••••' : undefined}
                className="w-96 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              />
            </div>
            <div className="mt-4 border-t border-gray-200"></div>
          </div>
        ))}
      </div>

      <div className="flex justify-end space-x-3 pt-6">
        <button
          type="button"
          onClick={handleCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleAddConfiguration}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add Configuration
        </button>
      </div>
    </div>
  );
}
