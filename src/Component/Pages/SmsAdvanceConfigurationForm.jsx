import { useState } from 'react';
import React from 'react';

export default function SmsAdvanceConfigurationForm() {
  const [formData, setFormData] = useState({
    smppName: 'SMS Configuration 1',
    providerName: 'Walsey Global',
    smppHost: '123yhwsyashsytf',
    smppPort: '20',
    smppUsername: '30',
    smppPassword: '',
    txSessions: '30',
    rxSessions: '30',
    trxSessions: '30',
    systemType: '',
    serviceType: '',
    enquireLinkInterval: '30',
    reconnectDelay: '10',
    sourceAddrTON: '0',
    sourceAddrNPI: '1',
    destAddrTON: '0',
    destAddrNPI: '1'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white">
      <div className="w-[1155px] mx-auto bg-white rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">New SMS Configuration</h1>
        <p className="text-[#667085] mb-6">Enter all information to create a new SMS configuration</p>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* SMPP Name */}
            <div className="flex items-center border-b border-gray-200 pb-4">
              <label className="w-[200px] text-sm font-medium text-gray-700">SMPP Name</label>
              <div className="w-[512px]">
                <input
                  type="text"
                  name="smppName"
                  value={formData.smppName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Provider Name */}
            <div className="flex items-center border-b border-gray-200 pb-4">
              <label className="w-[200px] text-sm font-medium text-gray-700">Provider Name</label>
              <div className="w-[512px]">
                <input
                  type="text"
                  name="providerName"
                  value={formData.providerName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* SMPP Host - Adjusted to maintain vertical alignment */}
            <div className="flex items-center border-b border-gray-200 pb-4">
              <label className="w-[200px] text-sm font-medium text-gray-700">SMPP Host</label>
              <div className="w-[850px]">
                <input
                  type="text"
                  name="smppHost"
                  value={formData.smppHost}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* SMPP Port */}
            <div className="flex items-center border-b border-gray-200 pb-4">
              <label className="w-[200px] text-sm font-medium text-gray-700">SMPP Port</label>
              <div className="w-[512px]">
                <input
                  type="text"
                  name="smppPort"
                  value={formData.smppPort}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* SMPP User Name */}
            <div className="flex items-center border-b border-gray-200 pb-4">
              <label className="w-[200px] text-sm font-medium text-gray-700">SMPP User Name</label>
              <div className="w-[512px]">
                <input
                  type="text"
                  name="smppUsername"
                  value={formData.smppUsername}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* SMPP Password */}
            <div className="flex items-center border-b border-gray-200 pb-4">
              <label className="w-[200px] text-sm font-medium text-gray-700">SMPP Password</label>
              <div className="w-[512px]">
                <input
                  type="password"
                  name="smppPassword"
                  value={formData.smppPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* TX Sessions */}
            <div className="flex items-center border-b border-gray-200 pb-4">
              <label className="w-[200px] text-sm font-medium text-gray-700">TX Sessions</label>
              <div className="w-[512px]">
                <input
                  type="text"
                  name="txSessions"
                  value={formData.txSessions}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* RX Sessions */}
            <div className="flex items-center border-b border-gray-200 pb-4">
              <label className="w-[200px] text-sm font-medium text-gray-700">RX Sessions</label>
              <div className="w-[512px]">
                <input
                  type="text"
                  name="rxSessions"
                  value={formData.rxSessions}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* TRx Sessions */}
            <div className="flex items-center border-b border-gray-200 pb-4">
              <label className="w-[200px] text-sm font-medium text-gray-700">TRx Sessions</label>
              <div className="w-[512px]">
                <input
                  type="text"
                  name="trxSessions"
                  value={formData.trxSessions}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* System Type */}
            <div className="flex items-center border-b border-gray-200 pb-4">
              <label className="w-[200px] text-sm font-medium text-gray-700">System Type</label>
              <div className="w-[512px]">
                <input
                  type="text"
                  name="systemType"
                  value={formData.systemType}
                  onChange={handleChange}
                  placeholder="Enter system type specified by vendor"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Service Type */}
            <div className="flex items-center border-b border-gray-200 pb-4">
              <label className="w-[200px] text-sm font-medium text-gray-700">Service Type</label>
              <div className="w-[512px]">
                <input
                  type="text"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  placeholder="Enter service type specified by vendor"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Enquire link interval */}
            <div className="flex items-center border-b border-gray-200 pb-4">
              <label className="w-[200px] text-sm font-medium text-gray-700">Enquire link interval</label>
              <div className="w-[512px]">
                <input
                  type="text"
                  name="enquireLinkInterval"
                  value={formData.enquireLinkInterval}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Reconnect delay */}
            <div className="flex items-center border-b border-gray-200 pb-4">
              <label className="w-[200px] text-sm font-medium text-gray-700">Reconnect delay</label>
              <div className="w-[512px]">
                <input
                  type="text"
                  name="reconnectDelay"
                  value={formData.reconnectDelay}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Source ADDR TON */}
            <div className="flex items-center border-b border-gray-200 pb-4">
              <label className="w-[200px] text-sm font-medium text-gray-700">Source ADDR TON</label>
              <div className="w-[512px]">
                <input
                  type="text"
                  name="sourceAddrTON"
                  value={formData.sourceAddrTON}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Source ADDR NPI */}
            <div className="flex items-center border-b border-gray-200 pb-4">
              <label className="w-[200px] text-sm font-medium text-gray-700">Source ADDR NPI</label>
              <div className="w-[512px]">
                <input
                  type="text"
                  name="sourceAddrNPI"
                  value={formData.sourceAddrNPI}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Dest ADDR TON */}
            <div className="flex items-center border-b border-gray-200 pb-4">
              <label className="w-[200px] text-sm font-medium text-gray-700">Dest ADDR TON</label>
              <div className="w-[512px]">
                <input
                  type="text"
                  name="destAddrTON"
                  value={formData.destAddrTON}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Dest ADDR NPI */}
            <div className="flex items-center border-b border-gray-200 pb-4">
              <label className="w-[200px] text-sm font-medium text-gray-700">Dest ADDR NPI</label>
              <div className="w-[512px]">
                <input
                  type="text"
                  name="destAddrNPI"
                  value={formData.destAddrNPI}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 cursor-pointer rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white cursor-pointer rounded-md hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}