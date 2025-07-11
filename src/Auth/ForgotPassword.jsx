import React from 'react';
import { useNavigate } from 'react-router-dom';

const backgroundStyle = {
  background: 'linear-gradient(179.34deg, #C8EBFC 3%, #C8EBFC 5.29%, #F7F5F2 30.97%, #F7F5F2 99.64%)'
};

export default function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center" style={backgroundStyle}>
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <button onClick={() => navigate(-1)} className="text-blue-600">Back</button>
        <h1 className="text-3xl font-bold text-gray-800">Messaging Platform</h1>
        <h2 className="text-xl font-semibold text-gray-700">Reset Password</h2>
        <p className="text-gray-600">Reset your password to securely access your dashboard</p>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email address</label>
            <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          
          <button onClick={() => navigate('/email-verification')} className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}