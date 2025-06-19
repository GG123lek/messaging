import React from 'react';

const SMSStatsCards = () => {
  const StatCard = ({ title, value }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col">
      <div className="text-sm text-[#667085] font-semibold mb-2">{title}</div>
      <div className="text-2xl font-semibold text-gray-900">{value}</div>
    </div>
  );

  return (
    <div className="grid grid-cols-4 gap-4">
      <StatCard title="Total Message Sent" value="200" />
      <StatCard title="Average SMS Per Day" value="90" />
      <StatCard title="Delivered Success Rate" value="80%" />
      <StatCard title="Failure Rate" value="20%" />
    </div>
  );
};

export default SMSStatsCards;