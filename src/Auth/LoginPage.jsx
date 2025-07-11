import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const backgroundStyle = {
  background: 'linear-gradient(179.34deg, #C8EBFC 3%, #C8EBFC 5.29%, #F7F5F2 30.97%, #F7F5F2 99.64%)'
};

export default function LoginPage() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = () => navigate('/dashboard');

  return (
    <div className="min-h-screen flex items-center justify-center" style={backgroundStyle}>
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800">Messaging Platform</h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-4">Welcome, Unified Payment</h2>
        <p className="text-gray-600 mt-2">Unifiedpayment@gmail.com</p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Password *</label>
            <input
              type="password"
              {...register('password', { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Sign in
          </button>
        </form>
        
        <button onClick={() => navigate('/forgot-password')} className="text-blue-600 text-sm">
          Forgot password?
        </button>
      </div>
    </div>
  );
}