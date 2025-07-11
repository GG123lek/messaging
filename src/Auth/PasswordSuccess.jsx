import React from 'react';
import { useNavigate } from 'react-router-dom';

const backgroundStyle = {
  background: 'linear-gradient(179.34deg, #C8EBFC 3%, #C8EBFC 5.29%, #F7F5F2 30.97%, #F7F5F2 99.64%)'
};

export default function PasswordSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center" style={backgroundStyle}>
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800">Messaging Platform</h1>
        <div className="border-t border-gray-300 my-4"></div>
        <h2 className="text-xl font-semibold text-gray-700">Password Reset Successful</h2>
        <p>Hang tight! We're setting up your new password and directing you to sign in</p>
        
        <button onClick={() => navigate('/login-page')} className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Continue
        </button>
      </div>
    </div>
  );
}