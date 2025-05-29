import React from 'react';
import { FiArrowUp } from 'react-icons/fi';

function StatCard({ title, value, diff, percent, showBorder = true, className = '' }) {
  return (
    <div
      className={`w-full h-[153.13px] p-5 flex-shrink-0 ${
        showBorder ? 'border-b border-[#EAECF0]' : ''
      } flex flex-col justify-between bg-white ${className}`}
    >
      <div>
        <p className="text-[#333] font-semibold text-sm">{title}</p>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-black font-bold text-2xl leading-none">{value}</span>
        <div className="flex items-center space-x-2">
          <span className="font-medium" style={{ color: '#7A7A9D' }}>{diff}</span>
          <div className="flex items-center bg-[#E7F6EC] rounded px-2 py-0.5 space-x-1">
            <FiArrowUp className="w-4 h-4 text-red-600" />
            <span className="text-red-600 font-medium">{percent}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatCard;
