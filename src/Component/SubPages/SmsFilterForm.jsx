import React from 'react';
import { ChevronDown } from 'lucide-react';

const SMSFilterForm = () => {
  const SelectField = ({ label, placeholder = "Any" }) => (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div className="relative">
        <select className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 pr-10 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
          <option>{placeholder}</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      {/* Top row - 5 fields */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        <SelectField label="Gateway" />
        <SelectField label="Country" />
        <SelectField label="Operator" />
        <SelectField label="SMS ID" />
        <SelectField label="Sender ID" />
      </div>
      
      {/* Bottom row - 5 fields */}
      <div className="grid grid-cols-5 gap-4">
        <SelectField label="Number of SMS" />
        <SelectField label="SMS Type" />
        <SelectField label="Operator DLR" />
        <SelectField label="Channel" />
        <SelectField label="SMPP System" />
      </div>
    </div>
  );
};

export default SMSFilterForm;