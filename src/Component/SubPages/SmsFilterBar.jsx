import React from 'react';
import phonic from '../../assets/images/phtek.png';
import vermin from '../../assets/images/butty.png'
import merll from '../../assets/images/mercs.svg';

export default function SMSFilterBar() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      <h2 className="text-lg font-semibold text-gray-900">SMS Logs</h2>

      <div className="flex flex-wrap gap-3 items-center">
        {/* Users Dropdown */}
        <select className="border border-gray-300 rounded-md px-3 text-sm text-gray-700 h-[48px]">
          <option>All Users Accounts</option>
        </select>

        {/* Date Range Picker */}
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden h-[48px]">
          <span className="bg-green-600 px-3 flex items-center justify-center h-full">
            <img src={merll} alt="calendar" className="h-5 w-auto object-contain" />
          </span>
          <input
            type="text"
            placeholder="Select Date Range"
            className="px-3 text-sm text-gray-700 focus:outline-none h-full"
          />
        </div>

        {/* Phone Input */}
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden h-[48px]">
          <span className="bg-blue-600 px-3 flex items-center justify-center h-full">
            <img src={phonic} alt="phone" className="h-5 w-auto object-contain" />
          </span>
          <input
            type="text"
            placeholder="Enter mobile Number"
            className="px-3 text-sm text-gray-700 focus:outline-none h-full"
          />
        </div>

        {/* Filter Button */}
        <button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 text-sm font-semibold text-gray-700 hover:bg-gray-100 h-[48px]">
          <img src={vermin} alt='' size={16} />
          Filter
        </button>
      </div>
    </div>
  );
}
