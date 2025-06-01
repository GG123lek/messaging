import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import nige from '../../assets/images/flagis.png';

const CustomSelect = ({ value, onChange, options, placeholder }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (val) => {
    onChange(val);
    setOpen(false);
  };

  return (
    <div className="relative w-full">
      <div
        className="w-full px-4 py-3 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between text-gray-900 bg-white"
        onClick={() => setOpen(!open)}
        tabIndex={0}
        onBlur={() => setOpen(false)}
      >
        <span className={value ? "" : "text-gray-500"}>
          {options.find((opt) => opt.value === value)?.label || placeholder}
        </span>
        <ChevronDown className="w-5 h-5 text-gray-400" />
      </div>

      {open && (
        <ul className="absolute left-0 right-0 z-20 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-y-auto">
          {options.map((option) => (
            <li
              key={option.value}
              className="px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer"
              onMouseDown={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCustomSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
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
                  <img src={nige} alt='' className="w-4 h-4 rounded-full bg-green-500 mr-2"/>
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
              <CustomSelect
                value={formData.contactSystemType}
                onChange={(val) => handleCustomSelectChange('contactSystemType', val)}
                placeholder="Select Contact System Type"
                options={[
                  { label: 'Email', value: 'email' },
                  { label: 'SMS', value: 'sms' },
                  { label: 'Phone', value: 'phone' },
                  { label: 'WhatsApp', value: 'whatsapp' }
                ]}
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Intended Notification Channel
            </label>
            <CustomSelect
              value={formData.notificationChannel}
              onChange={(val) => handleCustomSelectChange('notificationChannel', val)}
              placeholder="Select Notification Channel"
              options={[
                { label: 'Email', value: 'email' },
                { label: 'SMS', value: 'sms' },
                { label: 'Push Notification', value: 'push' },
                { label: 'WhatsApp', value: 'whatsapp' },
                { label: 'Slack', value: 'slack' }
              ]}
            />
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
