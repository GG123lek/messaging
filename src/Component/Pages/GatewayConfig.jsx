import React from 'react';
import pluss from '../../assets/images/plustoday.png';

function GatewayConfig({ 
  navigate, 
  gatewayType = 'sms', // Default to SMS if not specified
  title = 'SMS Gateway Configuration', 
  description = 'This page allows you to manage SMS gateway configurations',
  buttonText = 'New SMS Configuration'
}) {
  const configRoute = `${gatewayType}-config-data`;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-[#101828] mb-1">{title}</h1>
          <p className="text-sm text-[#667085]">
            {description}
          </p>
        </div>
        
        <button
          onClick={() => navigate(configRoute)}
          className="flex items-center gap-2 bg-[#FFFFFF] text-[#464F60] text-sm font-medium px-4 py-2
          rounded-md cursor-pointer"
        >
          <img src={pluss} alt="Add" className="w-3 h-3" />
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default GatewayConfig;