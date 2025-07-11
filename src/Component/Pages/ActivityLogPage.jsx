import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import activityIcon from '../../assets/images/activefile.png';
import bells from '../../assets/images/bell rang.png';
import avas from '../../assets/images/picet.png';
import chevrons from '../../assets/images/down.png';
import pdfIcon from '../../assets/images/gafpdf.png'; // Add your PDF icon
import ActivityLogTable from '../SubPages/ActivityLogTable';

function ActivityLogPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader
        title={
          <div className="flex items-center gap-2 text-xl font-semibold text-gray-800">
            <img src={activityIcon} alt="Activity Icon" className="w-4 h-4" />
            <span className="text-gray-400">/</span>
            <span className="text-[#2292FC]">Activity Logs</span>
          </div>
        }
      >
        <div className="flex items-center">
          <div className="w-6 h-6 cursor-pointer">
            <img src={bells} alt="Notifications" className="w-full h-full object-contain" />
          </div>
          <div className="h-10 border-l border-gray-300 mx-4" />
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
            <img src={avas} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-1 ml-4">
            <h3 className="text-sm font-semibold text-gray-900 leading-tight">Albert Afolabi</h3>
            <p className="text-xs text-gray-500">System Admin</p>
          </div>
          <div className="ml-4">
            <img src={chevrons} alt="Dropdown" className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </PageHeader>

      <div className="px-6 pt-4">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Activity Logs</h1>
            <p className="text-sm text-gray-500 mt-1">
              Displays audit trails and user/system activities across the platform.
            </p>
          </div>
          
          <button className="flex items-center gap-2 bg-white text-[#344054] 
          text-xs font-semibold py-2 px-3 rounded-lg border border-gray-200 
          shadow-sm hover:bg-gray-50 cursor-pointer transition-colors">
            <img src={pdfIcon} alt="PDF Icon" className="w-3 h-3" />
            Export PDF
          </button>
        </div>

        <ActivityLogTable />
      </div>
    </div>
  );
}

export default ActivityLogPage;
