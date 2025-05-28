import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import goop from '../../assets/images/fine.png';
import bells from '../../assets/images/bell rang.png';
import chevrons from '../../assets/images/down.png';
import avas from '../../assets/images/picet.png'; 

function DashboardPage() {
  return (
    <div>
      <PageHeader
        title={
          <div className="flex items-center gap-3 text-xl font-semibold text-gray-800">
            <img src={goop} alt="Home Icon" className="w-6 h-6 text-blue-600" />
            <span className="text-gray-400 text-lg">/</span>
            <span className="text-[#2292FC]">Dashboard</span>
          </div>
        }
      >
        <div className="flex items-center space-x-4">
          {/* Notification Bell with Dot */}
          <div className="w-6 h-6 cursor-pointer">
        <img
            src={bells}
            alt="Notifications"
            className="w-full h-full object-contain"
        />
        </div>

          {/* Profile Image */}
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
            <img
              src={avas}
              alt="Albert Afolabi"
              className="w-full h-full object-cover"
            />
          </div>

          {/* User Info */}
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-gray-900 leading-tight">
              Albert Afolabi
            </h3>
            <p className="text-xs text-gray-500">System Admin</p>
          </div>

          {/* Dropdown Icon */}
          <div className="ml-1">
            <img src={chevrons} alt="Dropdown" className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </PageHeader>

      <div className="p-4">
        my Dashboard is great
      </div>
    </div>
  );
}

export default DashboardPage;
