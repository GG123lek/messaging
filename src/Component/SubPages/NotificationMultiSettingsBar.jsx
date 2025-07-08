import React, { useState } from 'react';

const NotificationMultiSettingsBar = () => {
  const [activeTab, setActiveTab] = useState('Notification Retry & Throttling Settings');

  const tabs = [
    'Notification Retry & Throttling Settings',
    'Default Routing Logic Templates',
    'Timezone & Scheduling Configurations',
    'Message Retention Settings'
  ];

  return (
    <div className="w-full">
      {/* Tab Navigation - 90% width with strict width control */}
      <div className="w-[90%]">
        <div className="flex border border-gray-300 rounded-lg bg-[#F0F2F5]">
          {tabs.map((tab, index) => {
            const isActive = activeTab === tab;
            const isLastTab = index === tabs.length - 1;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  px-3 py-1.5 text-xs font-medium transition-colors duration-200
                  whitespace-nowrap overflow-hidden text-ellipsis
                  ${!isLastTab ? 'border-r border-gray-300' : ''}
                  ${isActive 
                    ? 'bg-[#E4E7EC] text-[#1D2739]' 
                    : 'bg-white text-[#98A2B3] hover:bg-gray-50'
                  }
                  ${isLastTab ? 'rounded-r-lg' : ''}
                `}
                style={{ flex: '1 0 auto' }} // Strict width control
              >
                {tab}
              </button>
            );
            })}
        </div>
      </div>

      {/* Full-width content area */}
      <div className="mt-3 bg-white rounded-lg shadow-sm px-6 py-4 w-full">
        <h2 className="text-sm font-semibold text-gray-900 mb-2">
          {activeTab}
        </h2>
        <div className="border-t border-gray-200 pt-3">
          <p className="text-xs text-gray-600">
            Configuration options for {activeTab.toLowerCase()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotificationMultiSettingsBar;