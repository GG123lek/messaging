import React from 'react';

function DashboardCharts() {
  return (
    <div className="flex flex-col space-y-6">
      <div className="w-full h-[250px] border border-[#EAECF0] rounded-lg p-4 bg-white">
        <h2 className="font-semibold text-gray-800 mb-2">Chart A (Top)</h2>
        {/* ApexChart component goes here */}
      </div>

      <div className="w-full h-[250px] border border-[#EAECF0] rounded-lg p-4 bg-white">
        <h2 className="font-semibold text-gray-800 mb-2">Chart B (Second)</h2>
        {/* ApexChart component goes here */}
      </div>

      <div className="w-full h-[250px] border border-[#EAECF0] rounded-lg p-4 bg-white">
        <h2 className="font-semibold text-gray-800 mb-2">Chart C (Third)</h2>
        {/* ApexChart component goes here */}
      </div>

      <div className="w-full h-[250px] border border-[#EAECF0] rounded-lg p-4 bg-white">
        <h2 className="font-semibold text-gray-800 mb-2">Chart D (Bottom)</h2>
        {/* ApexChart component goes here */}
      </div>
    </div>
  );
}

export default DashboardCharts;
