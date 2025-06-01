import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import calest from '../../assets/images/date.png'; // Make sure this path is correct

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const ClientDetailPage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const clientMap = {
    uba: 'UNITED BANK FOR AFRICA',
    firstbank: 'FIRST BANK',
    wema: 'WEMA BANK',
    ecobank: 'ECO BANK',
    unionbank: 'UNION BANK',
    stanbic: 'STANBIC IBTC BANK',
    fidelity: 'FIDELITY BANK',
    standard: 'STANDARD CHARTERED',
    guaranty: 'GUARANTEE TRUST BANK',
  };

  const clientName = clientMap[slug];

  const [showCalendar, setShowCalendar] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  return (
    <div className="max-w-[1152px] w-full mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-6">
        {/* Left: Back + Title */}
        <div>
          <button
            onClick={() => navigate('/client-page')}
            className="flex items-center text-[#2292FC] hover:text-[#1b7ed1] text-sm font-medium mb-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </button>
          <h1 className="text-xl font-semibold text-[#101828]">
            {clientName || 'Client Not Found'}
          </h1>
        </div>

        {/* Right: Date Picker */}
        <div
          className="relative bg-white shadow rounded-lg border border-none px-3 inline-flex items-center"
          style={{ height: "36px", borderRadius: "8px" }}
        >
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

      {/* Content Boxes */}
      <div className="space-y-6">
        <div className="bg-white shadow rounded-lg border p-6">
          {/* First Box Content Goes Here */}
          <p className="text-sm text-gray-600">First content section...</p>
        </div>

        <div className="bg-white shadow rounded-lg border p-6">
          {/* Second Box Content Goes Here */}
          <p className="text-sm text-gray-600">Second content section...</p>
        </div>

        <div className="bg-white shadow rounded-lg border p-6">
          {/* Third Box Content Goes Here */}
          <p className="text-sm text-gray-600">Third content section...</p>
        </div>
      </div>
    </div>
  );
};

export default ClientDetailPage;
