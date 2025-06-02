import React from 'react';
import { useNavigate ,} from 'react-router-dom';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

import calest from '../../assets/images/date.png';
import backArrowBlue from '../../assets/images/leftin.png';
import ClientDetailForm from '../Pages/ClientDetailsForm';
import HayzedDetailForm from '../../Component/Pages/HayzedDetailForm';


const EditCoreBankingPage = () => {

     const navigate = useNavigate();

     const handleGoBack = () => {
        navigate('/client-page/details/uba'); // 👈 navigate to parent uba path
      };
    
      const [showCalendar, setShowCalendar] = useState(false);
      const [range, setRange] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection',
        },
      ]);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-start justify-between mb-6 ">
              {/* Go Back + Title */}
              <div>
                <button
                //   onClick={() => navigate('/client-page')}
                onClick={handleGoBack}
                  className="flex items-center gap-2 text-[#2292FC] text-sm font-medium mb-1 cursor-pointer"
                >
                  <img src={backArrowBlue} alt="Go Back" className="w-4 h-4" />
                  Go Back
                </button>
      
                <h1 className="text-2xl font-semibold text-[#101828]">
                  Edit Hayzhed Global
                </h1>
              </div>
      
              {/* Date Picker */}
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
            <HayzedDetailForm/>
    </div>
  );
};

export default EditCoreBankingPage;
