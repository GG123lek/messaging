import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import PageHeader from '../PageHeader/PageHeader';
import settingsIcon from '../../assets/images/seth.png';
import bells from '../../assets/images/bell rang.png';
import avas from '../../assets/images/picet.png';
import chevrons from '../../assets/images/down.png';
import calest from '../../assets/images/date.png';
import NotificationMultiSettingsBar from '../SubPages/NotificationMultiSettingsBar';

function SettingsPage() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header - Original untouched */}
      <PageHeader
        title={
          <div className="flex items-center gap-2 text-xl font-semibold text-gray-800">
            <img src={settingsIcon} alt="Settings Icon" className="w-5 h-5" />
            <span className="text-gray-400">/</span>
            <span className="text-[#2292FC]">Settings</span>
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

      {/* Main Content Area - Only NotificationMultiSettingsBar modified */}
      <div className="px-6 pt-4">
        {/* Page Title Section - Original untouched */}
        <div className="flex justify-between items-start mb-2">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
            <p className="text-sm text-gray-500 mt-1">
              System-wide configuration area for global platform preferences.
            </p>
          </div>
          
          {/* Date Range Selector - Original untouched */}
          <div className="relative bg-white shadow rounded-lg border border-none px-3 inline-flex items-center"
            style={{ height: "36px", borderRadius: "8px" }}>
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className="flex items-center gap-2 text-xs text-black whitespace-nowrap text-[#101828] font-bold justify-center h-full w-full"
            >
              <span className="font-bold text-[#344054]">Showing:</span>
              <img src={calest} alt="Calendar" className="w-3 h-3 text-gray-500" />
              <span>
                {format(range[0].startDate, "MMM d, yyyy")} –{" "}
                {format(range[0].endDate, "MMM d, yyyy")}
              </span>
            </button>

            {showCalendar && (
              <div className="absolute z-20 right-0 mt-2 bg-white rounded-md shadow-lg">
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setRange([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={range}
                  rangeColors={["#4F46E5"]}
                  className="rounded-md"
                />
              </div>
            )}
          </div>
        </div>

        {/* Modified NotificationMultiSettingsBar */}
        <div className="mt-4 w-full max-w-5xl"> {/* Constrained width */}
          <NotificationMultiSettingsBar 
            className="text-xs" /* Reduced font size */
            style={{ minHeight: '40px' }} /* Compact height */
          />
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;