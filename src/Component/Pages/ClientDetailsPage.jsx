import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

import calest from '../../assets/images/date.png';
import mastercardLogo from '../../assets/images/switch.png';

import FirstClientDetailsCard from '../Pages/FirstClientDetailsCard';
import MonthlyMessageDetailsChart from '../../Component/MyChart/MonthlyMessageDetailsChart';
import TabNavigation from '../Pages/TabNavigation';
import NotificationHeaderSection from '../../Component/OtherPage/NotificationHeaderSection'
import NotificationLegend from '../../Component/OtherPage/NotificationLegend'
import ConfigureChannel from '../SubPages/ConfigureChannel';

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
  const [activeTab, setActiveTab] = useState('Reports');

  const [showCalendar, setShowCalendar] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const janToDecData = [
    { month: "Jan", bar1: 180, bar2: 150, bar3: 120, bar4: 100 },
    { month: "Feb", bar1: 200, bar2: 170, bar3: 130, bar4: 110 },
    { month: "Mar", bar1: 210, bar2: 160, bar3: 140, bar4: 120 },
    { month: "Apr", bar1: 190, bar2: 180, bar3: 150, bar4: 130 },
    { month: "May", bar1: 220, bar2: 190, bar3: 170, bar4: 140 },
    { month: "Jun", bar1: 230, bar2: 200, bar3: 180, bar4: 160 },
    { month: "Jul", bar1: 240, bar2: 210, bar3: 190, bar4: 170 },
    { month: "Aug", bar1: 250, bar2: 220, bar3: 200, bar4: 180 },
    { month: "Sep", bar1: 260, bar2: 230, bar3: 210, bar4: 190 },
    { month: "Oct", bar1: 270, bar2: 240, bar3: 220, bar4: 200 },
    { month: "Nov", bar1: 280, bar2: 250, bar3: 230, bar4: 210 },
    { month: "Dec", bar1: 290, bar2: 260, bar3: 240, bar4: 220 },
  ];

  return (
    <div className="max-w-[1152px] w-full mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-6">
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

        <div
          className="relative shadow rounded-lg border-none px-3 inline-flex items-center"
          style={{ height: '36px', borderRadius: '8px' }}
        >
          <button
            onClick={() => setShowCalendar(!showCalendar)}
            className="flex items-center gap-2 text-xs text-[#101828] font-bold justify-center h-full w-full"
          >
            <span className="font-bold text-[#344054]">Showing:</span>
            <img src={calest} alt="Calendar" className="w-3 h-3" />
            <span>
              {format(range[0].startDate, 'MMM d, yyyy')} –{' '}
              {format(range[0].endDate, 'MMM d, yyyy')}
            </span>
          </button>

          {showCalendar && (
            <div className="absolute z-20 right-0 mt-2 bg-white rounded-md shadow-lg">
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setRange([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={range}
                rangeColors={['#4F46E5']}
              />
            </div>
          )}
        </div>
      </div>

      {/* Content Boxes */}
      <div className="space-y-6">
        {/* First Box */}
        <div className="bg-white shadow rounded-lg border-none p-6">
          <FirstClientDetailsCard />
        </div>

        {/* Second Box with TabNavigation inside */}
        {/* <div className="bg-white shadow rounded-lg border p-6">
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="mt-4">
            {activeTab === 'Reports' && (
              <div className="w-full h-[400px]">
                <MonthlyMessageChart data={janToDecData} yAxisDomain={[0, 400]} />
              </div>
            )}
            {activeTab === 'Configure Channel' && (
              <div className="text-sm text-gray-600">Configure Channel Content</div>
            )}
            {activeTab === 'SMPP Profile' && (
              <div className="text-sm text-gray-600">SMPP Profile Content</div>
            )}
          </div>
        </div> */}

            {/* TabNavigation + Second Container */}
            <div className="space-y-2">
            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
            
            <div className="bg-white shadow rounded-lg border border-none p-6">
                {/* {activeTab === 'Reports' && (
                <div className="w-full h-[400px]">
                    <MonthlyMessageChart data={janToDecData} yAxisDomain={[0, 400]} />
                </div>
                )} */}
                                {activeTab === 'Reports' && (
                <>
                    <NotificationHeaderSection />
                    <NotificationLegend />
                    <div className="w-full ">
                    {/* <MonthlyMessageChart data={janToDecData} yAxisDomain={[0, 400]} /> */}
                    <MonthlyMessageDetailsChart data={janToDecData} yAxisDomain={[0, 400]} containerHeight="100%" />

                    </div>
                </>
                )}
                {/* {activeTab === 'Configure Channel' && (
                <div className="text-sm text-gray-600">Configure Channel Content</div>
                )} */}
                {activeTab === 'Configure Channel' && <ConfigureChannel />}
                {activeTab === 'SMPP Profile' && (
                <div className="text-sm text-gray-600">SMPP Profile Content</div>
                )}
            </div>
            </div>


        {/* Third Box */}
        <div className="bg-white shadow rounded-lg border p-6">
          <p className="text-sm text-gray-600">Third content section...</p>
        </div>
      </div>
    </div>
  );
};

export default ClientDetailPage;
