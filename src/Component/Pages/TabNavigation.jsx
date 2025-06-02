import React from 'react';

export default function TabNavigation({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'Reports', label: 'Reports' },
    { id: 'Configure Channel', label: 'Configure Channel' },
    { id: 'SMPP Profile', label: 'SMPP Profile' },
  ];

  return (
    <div className="flex border border-gray-300 rounded-lg overflow-hidden w-fit">
      {tabs.map((tab, index) => {
        const isActive = activeTab === tab.id;

        const baseStyle = `px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
          index < tabs.length - 1 ? 'border-r border-gray-300' : ''
        }`;

        // Active tab has bg #E4E7EC, inactive white
        const bgColor = isActive ? 'bg-[#E4E7EC]' : 'bg-white';

        // Text color: dark for active, gray for inactive
        const textColor = isActive ? 'text-[#1D2739]' : 'text-[#98A2B3]';

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${baseStyle} ${bgColor} ${textColor}`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
