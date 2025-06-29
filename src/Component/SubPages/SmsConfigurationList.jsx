import React from 'react';

const SmsConfigurationList = () => {
  return (
    <div className="w-full px-6">
      <div className="border border-[#E5E7EB] rounded-lg p-6 bg-white">
        <div className="space-y-6">
          {/* SMS Configuration 1 */}
          <div className="h-[44px] bg-white border border-[#E5E7EB] rounded-md flex justify-between items-center px-4">
            <span className="text-sm text-[#374151]">SMS Configuration 1</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-[#6B7280] cursor-pointer">Primary Configuration</span>
              <svg className="w-4 h-4 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* SMS Configuration 2 */}
          <div className="h-[44px] bg-white border border-[#E5E7EB] rounded-md flex justify-between items-center px-4">
            <span className="text-sm text-[#374151]">SMS Configuration 2</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-[#6B7280] cursor-pointer">Fall Back 1</span>
              <svg className="w-4 h-4 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* SMS Configuration 3 */}
          <div className="h-[44px] bg-white border border-[#E5E7EB] rounded-md flex justify-between items-center px-4">
            <span className="text-sm text-[#374151]">SMS Configuration 3</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-[#6B7280] cursor-pointer">Fall Back 2</span>
              <svg className="w-4 h-4 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* SMS Configuration 4 */}
          <div className="h-[44px] bg-white border border-[#E5E7EB] rounded-md flex justify-between items-center px-4">
            <span className="text-sm text-[#374151]">SMS Configuration 4</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-[#6B7280] cursor-pointer">Fall Back 3</span>
              <svg className="w-4 h-4 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmsConfigurationList;