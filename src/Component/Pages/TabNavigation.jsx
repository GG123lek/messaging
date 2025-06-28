import React from 'react';

export default function TabNavigation({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'Reports', label: 'Reports' },
    { id: 'Configure Channel', label: 'Configure Channel' },
    { id: 'System', label: 'System' },
  ];

  return (
    <div className="flex border border-gray-300 rounded-lg overflow-hidden w-fit bg-[#F0F2F5]">
      {tabs.map((tab, index) => {
        const isActive = activeTab === tab.id;

        const baseStyle = `px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
          index < tabs.length - 1 ? 'border-r border-gray-300' : ''
        }`;

        const tabStyle = isActive
          ? 'bg-[#E4E7EC] text-[#1D2739]'
          : 'bg-white text-[#98A2B3] hover:bg-gray-50';

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${baseStyle} ${tabStyle}`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
