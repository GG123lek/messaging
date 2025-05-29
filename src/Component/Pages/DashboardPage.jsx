import React, { useState } from 'react';
import PageHeader from '../PageHeader/PageHeader';
import goop from '../../assets/images/fine.png';
import bells from '../../assets/images/bell rang.png';
import chevrons from '../../assets/images/down.png';
import avas from '../../assets/images/picet.png'; 
import calest from "../../assets/images/date.png";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

function DashboardPage() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date("2023-01-06"),
      endDate: new Date("2023-01-12"),
      key: "selection",
    },
  ]);

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
          <div className="w-6 h-6 cursor-pointer">
            <img src={bells} alt="Notifications" className="w-full h-full object-contain" />
          </div>

          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
            <img src={avas} alt="Albert Afolabi" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-gray-900 leading-tight">Albert Afolabi</h3>
            <p className="text-xs text-gray-500">System Admin</p>
          </div>

          <div className="ml-1">
            <img src={chevrons} alt="Dropdown" className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </PageHeader>

      <div className="p-1">
        {/* Header row with text and date picker */}
        <div className="flex justify-between items-start px-6 py-2 relative">
          {/* Left Text */}
          <div className="flex flex-col space-y-1">
            <h1 className="text-black font-bold text-xl">Welcome Admin</h1>
            <p className="text-[#667085]">All general informations appear in the field</p>
          </div>

          {/* Date Picker Button */}
          <div className="relative h-12 w-[300px] bg-white shadow-sm rounded-lg border-0 px-3">
            <div className="flex items-center justify-center h-full gap-2 text-sm text-black whitespace-nowrap">
              <span className="text-[#344054] font-medium">Showing for:</span>
              <button
                onClick={() => setShowCalendar(!showCalendar)}
                className="flex items-center gap-2 focus:outline-none"
              >
                <img src={calest} alt="" className="w-4 h-4 text-gray-500" />
                <span className="text-black">
                  {format(range[0].startDate, "MMM d, yyyy")} – {format(range[0].endDate, "MMM d, yyyy")}
                </span>
              </button>
            </div>

            {showCalendar && (
              <div className="absolute z-10 right-0 mt-2 bg-white rounded-md shadow-lg">
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

        {/* Outer wrapper aligns horizontally with header text and date picker */}
        <div className="px-6 mt-6">
          {/* White rounded container with shadow, no horizontal padding */}
          <div className="flex bg-white rounded-lg shadow-sm">
            {[1, 2, 3, 4].map((card, idx) => (
              <div
                key={idx}
                className={`w-[348.47px] h-[153.13px] p-5 flex-shrink-0 ${
                  idx !== 3 ? "border-r border-[#EAECF0]" : ""
                }`}
              >
                <div>Card {card} content</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
