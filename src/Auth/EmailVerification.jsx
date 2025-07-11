import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const backgroundStyle = {
  background: 'linear-gradient(179.34deg, #C8EBFC 3%, #C8EBFC 5.29%, #F7F5F2 30.97%, #F7F5F2 99.64%)'
};

export default function EmailVerification() {
  const navigate = useNavigate();
  const [code, setCode] = useState(['', '', '', '']);

  const handleChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={backgroundStyle}>
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <button onClick={() => navigate(-1)} className="text-blue-600">Back</button>
        <h1 className="text-3xl font-bold text-gray-800">Messaging Platform</h1>
        <h2 className="text-xl font-semibold text-gray-700">Email Verification</h2>
        <p>We sent a verification code to <strong>Mayowahope@gmail.com</strong></p>
        
        <div className="flex space-x-4 justify-center">
          {[0, 1, 2, 3].map((index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={code[index]}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-16 h-16 text-center text-2xl border rounded-md"
            />
          ))}
        </div>
        
        <button onClick={() => navigate('/create-password')} className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Verify Email
        </button>
        
        <p className="text-center text-sm">
          Didn't get the email? <button className="text-blue-600">Resend code</button>
        </p>
      </div>
    </div>
  );
}