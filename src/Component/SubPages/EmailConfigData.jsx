import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backArrowBlue from '../../assets/images/leftin.png';

const EmailConfigData = () => {
  const [formData, setFormData] = useState({
    smtpHost: '',
    smtpPort: '587',
    username: '',
    password: '',
    fromEmail: ''
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    setShowSuccessModal(true); // Show modal on click
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  // Modified to only close modal without navigation
  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const EmailSuccessIcon = () => (
    <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const formFields = [
    { name: 'smtpHost', label: 'SMTP Host', type: 'text', placeholder: 'e.g. smtp.gmail.com' },
    { name: 'smtpPort', label: 'SMTP Port', type: 'text', placeholder: 'e.g. 587' },
    { name: 'username', label: 'Username', type: 'email', placeholder: 'your_email@example.com' },
    { name: 'password', label: 'Password', type: 'password', placeholder: 'your_app_password' },
    { name: 'fromEmail', label: 'From Email', type: 'email', placeholder: 'noreply@example.com' }
  ];

  return (
    <div className="w-full px-6 py-4">
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-[400px] text-center shadow-lg">
            <div className="mb-6 mx-auto w-[120px] h-[120px] bg-green-100 rounded-full flex items-center justify-center">
              <EmailSuccessIcon />
            </div>
            <h2 className="text-2xl font-bold mb-2">Configuration Saved!</h2>
            <p className="text-gray-700 mb-8">
              Your email configuration has been successfully saved.
            </p>
            <button
              onClick={handleCloseSuccessModal}
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
          Add new Email Configuration
        </div>
      </div>

      {/* Form */}
      <div className="border border-gray-300 rounded-lg bg-white">
        <div className="p-6 space-y-4">
          {formFields.map((field) => (
            <div key={field.name} className="flex items-center border-b border-gray-200 pb-4">
              <label className="w-48 text-sm font-medium text-gray-700">
                {field.label}
              </label>
              <div className="w-96">
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
              type="button"
              onClick={handleSaveClick}
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

export default EmailConfigData;