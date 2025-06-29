import React from 'react';

const GatewayConfig = () => {
  return (
    <div className="p-6 ">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="min-w-[200px]">
          <h1 className="text-2xl font-semibold text-[#0F172A]">Gateway Configuration</h1>
          <p className="text-sm text-[#475569] mt-1">
            This page allows you to Gateway Configuration
          </p>
        </div>

        <button className="bg-white border border-[#CBD5E1] text-[#0F172A] px-4 py-2 cursor-pointer rounded-lg text-sm font-medium shadow-sm hover:bg-gray-50 flex items-center space-x-2 whitespace-nowrap">
          <span className="text-xl leading-none">＋</span>
          <span>New SMS Configuration</span>
        </button>
      </div>
    </div>
  );
};

export default GatewayConfig;
