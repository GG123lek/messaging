import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/vector.png'; // Update path to your logo

const backgroundStyle = {
  background: 'linear-gradient(179.34deg, #C8EBFC 3%, #C8EBFC 5.29%, #F7F5F2 30.97%, #F7F5F2 99.64%)'
};

export default function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col" style={backgroundStyle}>
      {/* Header - Same as Login Page */}
      <header className="flex justify-between items-start p-4">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-10" />
          <span className="text-xl font-semibold text-gray-800">Messaging Platform</span>
        </div>
        <div className="flex items-center space-x-6">
          <span className="text-gray-600">Forgot Password</span>
          <button 
            onClick={() => navigate('/forgot-password')}
            className="flex items-center space-x-1 text-blue-600 hover:text-blue-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            <span>Reset Password</span>
          </button>
        </div>
      </header>

      {/* Form Content - No White Background Container */}
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          <button onClick={() => navigate(-1)} className="text-blue-600 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back
          </button>
          
          <h1 className="text-3xl font-bold text-gray-800">Messaging Platform</h1>
          <h2 className="text-xl font-semibold text-gray-700">Reset Password</h2>
          <p className="text-gray-600">Reset your password to securely access your dashboard</p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email address</label>
              <input 
                type="email" 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <button 
              onClick={() => navigate('/email-verification')} 
              className="w-full py-2 px-4 text-blue-600 font-medium hover:bg-blue-600 hover:text-white rounded-md transition-all duration-300"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}