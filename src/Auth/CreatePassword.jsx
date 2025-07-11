 import React from 'react';
 import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const backgroundStyle = {
  background: 'linear-gradient(179.34deg, #C8EBFC 3%, #C8EBFC 5.29%, #F7F5F2 30.97%, #F7F5F2 99.64%)'
};

export default function CreatePassword() {
  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm();
  const password = watch("password");

  return (
    <div className="min-h-screen flex items-center justify-center" style={backgroundStyle}>
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <button onClick={() => navigate(-1)} className="text-blue-600">Back</button>
        <h1 className="text-3xl font-bold text-gray-800">Messaging Platform</h1>
        <h2 className="text-xl font-semibold text-gray-700">Create your Password</h2>
        <p>Must be at least 8 characters.</p>
        
        <form onSubmit={handleSubmit(() => navigate('/password-success'))} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Password *</label>
            <input
              type="password"
              {...register('password', { required: true, minLength: 8 })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            {password?.length >= 8 && <span className="text-green-500">✔️</span>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password *</label>
            <input
              type="password"
              {...register('confirmPassword', { validate: value => value === password })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            {watch('confirmPassword') === password && <span className="text-green-500">✔️</span>}
          </div>
          
          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Set your new Password
          </button>
        </form>
      </div>
    </div>
  );
}