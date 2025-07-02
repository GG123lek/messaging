import React from 'react';
import pluss from '../../assets/images/plustoday.png'; // Import your plus icon

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
          className="flex items-center gap-2 bg-[#FFFFFF] text-[#464F60] text-sm font-medium px-4 py-2
          rounded-md  cursor-pointer"
        >
          <img src={pluss} alt="Add" className="w-4 h-4" />
          New SMS Configuration
        </button>
      </div>
      
      {/* Rest of your GatewayConfig content */}
    </div>
  );
}

export default GatewayConfig;