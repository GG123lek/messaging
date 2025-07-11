import React from 'react';
import { useNavigate } from 'react-router-dom';

const backgroundStyle = {
  background: 'linear-gradient(179.34deg, #C8EBFC 3%, #C8EBFC 5.29%, #F7F5F2 30.97%, #F7F5F2 99.64%)'
};

export default function ResetPasswordEmail() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center" style={backgroundStyle}>
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <button 
          onClick={() => navigate(-1)} 
          className="text-blue-600 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back
        </button>
        
        <h1 className="text-3xl font-bold text-gray-800">Messaging Platform</h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-2">Reset Password</h2>
        <p className="text-gray-600">
          Reset your password to securely access your Fraud Analyzer dashboard
        </p>
        
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="font-medium text-gray-800">HopeBank@gmail.com</p>
        </div>
        
        <button
          onClick={() => navigate('/verify-email')}
          className="w-full py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Continue
        </button>
        
        <p className="text-center text-sm text-gray-500">
          Not your email? <button 
            onClick={() => navigate('/reset-password')}
            className="text-blue-600 hover:underline"
          >
            Change email address
          </button>
        </p>
      </div>
    </div>
  );
}