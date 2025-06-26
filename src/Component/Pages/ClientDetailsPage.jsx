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

import ToggleTags from '../../Component/SubPages/ToggleTags'
import SMSFilterBar from '../SubPages/SmsFilterBar';

import FirstClientDetailsCard from '../Pages/FirstClientDetailsCard';
import MonthlyMessageDetailsChart from '../../Component/MyChart/MonthlyMessageDetailsChart';
import TabNavigation from '../Pages/TabNavigation';
import NotificationHeaderSection from '../../Component/OtherPage/NotificationHeaderSection'
import NotificationLegend from '../../Component/OtherPage/NotificationLegend'
import ChannelConfigure from '../Pages/ChannelConfigure'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import DeliveryTrendChart from '../MyChart/DeliveryTrendChart';
import SMSFilterForm from '../SubPages/SmsFilterForm';
import SMSStatsCards from '../SubPages/SmsStatCards';
import SmsTableOne from '../SubPages/SmsTableOne';
import backArrowBlue from '../../assets/images/leftin.png';

const ClientDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Reports');

  // Import all images from assets
  const images = import.meta.glob('/src/assets/images/*.{png,jpg,jpeg}', { eager: true });

  const getImage = (slug) => {
    const match = Object.entries(images).find(([path]) =>
      path.toLowerCase().includes(`${slug.toLowerCase()}.`)
    );
    return match ? match[1].default : null;
  };

  // Client data mapping
  const clientData = {
    uba: {
      name: 'United Bank for Africa',
      slug: 'uba',
      id: 'HB74939300',
      email: 'help@ubaafrica.net',
      phone: '0-1988910892'
    },
    firstbank: {
      name: 'First Bank',
      slug: 'firstbank',
      id: 'HB74939301',
      email: 'firstbank@gmail.com',
      phone: '0-1988910892'
    },
    wema: {
      name: 'Wema Bank',
      slug: 'wema',
      id: 'HB74939302',
      email: 'wemabank@gmail.com',
      phone: '0-1988910892'
    },
    ecobank: {
      name: 'Eco Bank',
      slug: 'ecobank',
      id: 'HB74939303',
      email: 'help@ecobank.net',
      phone: '0-1988910892'
    },
    unionbank: {
      name: 'Union Bank',
      slug: 'unionbank',
      id: 'HB74939304',
      email: 'help@unionbank.net',
      phone: '0-1988910892'
    },
    stanbic: {
      name: 'Stanbic IBTC Bank',
      slug: 'stanbic',
      id: 'HB74939305',
      email: 'help@ibtc.net',
      phone: '0-1988910892'
    },
    fidelity: {
      name: 'Fidelity Bank',
      slug: 'fidelity',
      id: 'HB74939306',
      email: 'help@fidelitybank.net',
      phone: '0-1988910892'
    },
    standard: {
      name: 'Standard Chartered',
      slug: 'standard',
      id: 'HB74939307',
      email: 'help@standardchartered.net',
      phone: '0-1988910892'
    },
    guaranty: {
      name: 'Guarantee Trust Bank',
      slug: 'guaranty',
      id: 'HB74939308',
      email: 'help@gtb.net',
      phone: '0-1988910892'
    },
  };

  // Get current client data
  const currentClient = clientData[slug];
  const clientLogo = getImage(slug);

  const handleGoBack = () => {
    navigate('/client-page');
  };

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

  // If client not found, show error
  if (!currentClient) {
    return (
      <div className="max-w-[1152px] w-full mx-auto p-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-red-600 mb-4">Client Not Found</h1>
          <button
            onClick={handleGoBack}
            className="flex items-center gap-2 text-[#2292FC] text-sm font-medium cursor-pointer mx-auto"
          >
            <img src={backArrowBlue} alt="Go Back" className="w-4 h-4" />
            Go Back to Client List
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1152px] w-full mx-auto">
      {/* Header with Go Back and Client Name */}
      <div>
        <button
          onClick={handleGoBack}
          className="flex items-center gap-2 text-[#2292FC] text-sm font-medium mb-1 cursor-pointer"
        >
          <img src={backArrowBlue} alt="Go Back" className="w-4 h-4" />
          Go Back
        </button>

        <h1 className="text-2xl font-semibold text-[#101828]">
          {currentClient.name}
        </h1>
      </div>
      <br/>

      {/* First Container - Always visible (FirstClientDetailsCard) */}
      <div className="bg-white shadow rounded-lg border-none p-6">
        <FirstClientDetailsCard 
          clientData={currentClient}
          clientLogo={clientLogo}
          activeTab={activeTab}
        />
      </div>

      {/* Tab Navigation - Always visible */}
      <div className="mt-6 relative">
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Conditional Rendering Based on Active Tab */}
      {activeTab === 'Reports' && (
        <div className="space-y-6 mt-2">
          {/* Render the entire page content for Reports */}
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

          <div className="bg-white shadow rounded-lg border border-none p-6">
            <DeliveryTrendChart />
          </div>

          <div className="bg-white shadow rounded-lg border border-none p-6">
            <div>
              <ToggleTags/>
            </div>

            <div className="my-4">
            <div className="border-t border-gray-300 w-full" />
            </div>

            <SMSFilterBar />

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
        <div className="bg-white shadow rounded-lg border-none p-6 mt-2 h-[788px]">
          <ChannelConfigure/>
          {/* Add your Configure Channel content here */}
          <div className="space-y-4">
            {/* Placeholder content - replace with actual Configure Channel components */}
            <div className="p-4">
             
            </div>
          </div>
        </div>
      )}

      {activeTab === 'System' && (
        <div className="bg-white shadow rounded-lg border-none p-6 mt-2">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            SMPP Profile Configuration
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Manage your SMPP (Short Message Peer-to-Peer) profile settings for {currentClient.name}.
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
      )}
    </div>
  );
};

export default ClientDetailPage;