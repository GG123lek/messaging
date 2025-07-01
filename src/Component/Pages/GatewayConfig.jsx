import React from 'react';
import plus from '../../assets/images/whiteadd.png'; // Import your plus icon

function GatewayConfig({ navigate }) {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-[#101828] mb-1">SMS Gateway Configuration</h1>
          <p className="text-sm text-[#667085]">
            This page allows you to manage SMS gateway configurations
          </p>
        </div>
        
        <button
          onClick={() => navigate('sms-config-data')}
          className="flex items-center gap-2 bg-[#2292FC] text-white text-sm font-medium px-4 py-2
          rounded-md shadow-sm hover:bg-[#1b7ed1] transition cursor-pointer"
        >
          <img src={plus} alt="Add" className="w-4 h-4" />
          New SMS Configuration
        </button>
      </div>
      
      {/* Rest of your GatewayConfig content */}
    </div>
  );
}

export default GatewayConfig;