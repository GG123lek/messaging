import React from 'react';
import { Calendar, Phone, ChevronDown } from 'lucide-react';
import futty from '../../assets/images/butty.png'; 

const FilterInput = () => {
  return (
    <div className="w-full flex items-center justify-between flex-wrap gap-4 mb-4">
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-900">SMS Logs</h2>

      {/* Filters Row */}
      <div className="flex items-center gap-3 flex-wrap">
        {/* All Users Dropdown */}
        <div className="relative h-10">
          <select className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 pr-10 text-sm text-[#667085] focus:outline-none min-w-[150px] h-full">
            <option>All Users Accounts</option>
            <option>Waarith265</option>
            <option>Onodore165</option>
            <option>Duchess876</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Date Picker Input */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden h-10">
        <div className="bg-green-600 px-3 flex items-center justify-center h-full">
          <Calendar className="w-4 h-4 text-white" />
        </div>
        <input
          type="text"
          placeholder="Select Date Range"
          className="px-3 py-2 text-sm text-gray-600 focus:outline-none bg-white min-w-[160px]"
          readOnly
        />
      </div>

        {/* Phone Input */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden h-10">
        <div className="bg-blue-600 px-3 flex items-center justify-center h-full">
          <Phone className="w-4 h-4 text-white" />
        </div>
        <input
          type="text"
          placeholder="Enter mobile number"
          className="px-3 py-2 text-sm text-gray-600 focus:outline-none bg-white min-w-[180px]"
        />
      </div>

        {/* Filter Button */}
        <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 h-10">
          <img src={futty} alt="Filter" className="w-4 h-4" />
          <span>Filter</span>
        </button>
      </div>
    </div>
  );
};

export default FilterInput;
