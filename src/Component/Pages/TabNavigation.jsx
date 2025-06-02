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

        const baseStyle = `px-4 py-2 text-sm font-medium transition-colors duration-200 ${
          index < tabs.length - 1 ? 'border-r border-gray-300' : ''
        }`;

        let tabStyle = '';

        if (tab.id === 'Reports') {
          tabStyle = isActive
            ? 'bg-[#E4E7EC] text-[#1D2739]'
            : 'bg-white text-[#98A2B3] hover:bg-gray-50';
        } else {
          tabStyle = isActive
            ? 'bg-white text-[#1D2739]'
            : 'bg-white text-[#98A2B3] hover:bg-gray-50';
        }

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
