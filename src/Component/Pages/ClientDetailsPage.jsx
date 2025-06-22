import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ChevronDown, Calendar, Phone, Filter } from 'lucide-react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

import calest from '../../assets/images/date.png';
import mastercardLogo from '../../assets/images/switch.png';
import wale from '../../assets/images/butty.png'
import dayo from '../../assets/images/icas.png'
import futty from '../../assets/images/butty.png'

import FirstClientDetailsCard from '../Pages/FirstClientDetailsCard';
import MonthlyMessageDetailsChart from '../../Component/MyChart/MonthlyMessageDetailsChart';
import TabNavigation from '../Pages/TabNavigation';
import NotificationHeaderSection from '../../Component/OtherPage/NotificationHeaderSection'
import NotificationLegend from '../../Component/OtherPage/NotificationLegend'

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import DeliveryTrendChart from '../MyChart/DeliveryTrendChart';
import SMSFilterForm from '../SubPages/SmsFilterForm';
import SMSStatsCards from '../SubPages/SmsStatCards';
import SmsTableOne from '../SubPages/SmsTableOne';

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

  const [activeChannel, setActiveChannel] = useState('SMS');

  const channels = ['SMS', 'Email', 'Whatsapp', 'USSD'];

  return (
    <div className="max-w-[1152px] w-full mx-auto">
      {/* First Container - Always visible (FirstClientDetailsCard) */}
      <div className="bg-white shadow rounded-lg border-none p-6">
        <FirstClientDetailsCard />
      </div>

      {/* Conditional Rendering Based on Active Tab */}
      {activeTab === 'Reports' && (
        <div className="space-y-6 mt-6">
          {/* Render the entire page content for Reports */}
          <div className="space-y-2">
            <div className="space-y-6 mt-6">
              <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className="bg-white shadow rounded-lg border border-none p-6">
              <NotificationHeaderSection />
              <NotificationLegend />
              <div className="w-full">
                <MonthlyMessageDetailsChart
                  data={janToDecData}
                  yAxisDomain={[0, 400]}
                  containerHeight="100%"
                />
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg border border-none p-6">
            <DeliveryTrendChart />
          </div>

          <div className="bg-white shadow rounded-lg border border-none p-6">
            <SMSFilterForm />
            <br />
            <div className="flex flex-col">
              <label className="text-sm font-medium text-[#344054] mb-2">
                SMS Text
              </label>
              <textarea
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-24"
                placeholder="Enter phrase text to match"
              />
            </div>
            <br />
            <div>
              <SMSStatsCards />
            </div>
            <br />
            <div className="-mx-6 overflow-x-auto pb-6">
              <SmsTableOne />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Configure Channel' && (
        <div className="space-y-6 mt-6">
          <div className="space-y-6 mt-6">
            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          {/* Content area for Configure Channel - Only first container is retained above */}
          <div className="bg-white shadow rounded-lg border-none p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Configure Channel Settings
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Configure your messaging channel settings and preferences.
            </p>
            
            {/* Add your Configure Channel content here */}
            <div className="space-y-4">
              {/* Placeholder content - replace with actual Configure Channel components */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">
                  Add your Configure Channel components and forms here...
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'SMPP Profile' && (
        <div className="space-y-6 mt-6">
          <div className="space-y-6 mt-6">
            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          {/* Content area for SMPP Profile - Only first container is retained above */}
          <div className="bg-white shadow rounded-lg border-none p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              SMPP Profile Configuration
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Manage your SMPP (Short Message Peer-to-Peer) profile settings.
            </p>
            
            {/* Add your SMPP Profile content here */}
            <div className="space-y-4">
              {/* Placeholder content - replace with actual SMPP Profile components */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">
                  Add your SMPP Profile components and configurations here...
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientDetailPage;