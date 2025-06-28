import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

import FirstClientDetailsCard from '../Pages/FirstClientDetailsCard';
import TabNavigation from '../Pages/TabNavigation';
import NotificationHeaderSection from '../../Component/OtherPage/NotificationHeaderSection';
import NotificationLegend from '../../Component/OtherPage/NotificationLegend';
import MonthlyMessageDetailsChart from '../../Component/MyChart/MonthlyMessageDetailsChart';
import DeliveryTrendChart from '../MyChart/DeliveryTrendChart';
import ToggleTags from '../../Component/SubPages/ToggleTags';
import SMSFilterBar from '../SubPages/SmsFilterBar';
import SMSFilterForm from '../SubPages/SmsFilterForm';
import SMSStatsCards from '../SubPages/SmsStatCards';
import SmsTableOne from '../SubPages/SmsTableOne';
import ChannelConfigure from '../Pages/ChannelConfigure';
import SystemDashboardOne from '../Pages/SystemDashboardOne';

import backArrowBlue from '../../assets/images/leftin.png';

const ClientDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState('Reports');

  // Handle restoring tab state from navigation
  useEffect(() => {
    const fromTab = location.state?.fromTab;
    if (fromTab) setActiveTab(fromTab);
  }, [location.state]);

  const handleGoBack = () => {
    navigate('/client-page');
  };

  const images = import.meta.glob('/src/assets/images/*.{png,jpg,jpeg}', { eager: true });

  const getImage = (slug) => {
    const match = Object.entries(images).find(([path]) =>
      path.toLowerCase().includes(`${slug.toLowerCase()}.`)
    );
    return match ? match[1].default : null;
  };

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
    }
  };
  
  const currentClient = clientData[slug];
  const clientLogo = getImage(slug);

  const janToDecData = [
    { month: "Jan", bar1: 180, bar2: 150, bar3: 120, bar4: 100 },
    { month: "Feb", bar1: 200, bar2: 170, bar3: 130, bar4: 110 },
    { month: "Mar", bar1: 220, bar2: 190, bar3: 140, bar4: 120 },
    { month: "Apr", bar1: 210, bar2: 180, bar3: 135, bar4: 115 },
    { month: "May", bar1: 250, bar2: 200, bar3: 145, bar4: 125 },
    { month: "Jun", bar1: 230, bar2: 210, bar3: 155, bar4: 130 },
    { month: "Jul", bar1: 260, bar2: 220, bar3: 160, bar4: 140 },
    { month: "Aug", bar1: 240, bar2: 205, bar3: 150, bar4: 125 },
    { month: "Sep", bar1: 270, bar2: 230, bar3: 165, bar4: 145 },
    { month: "Oct", bar1: 280, bar2: 240, bar3: 175, bar4: 150 },
    { month: "Nov", bar1: 300, bar2: 250, bar3: 180, bar4: 160 },
    { month: "Dec", bar1: 320, bar2: 270, bar3: 190, bar4: 170 }
  ];
  

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
      <br />

      <div className="bg-white shadow rounded-lg border-none p-6">
        <FirstClientDetailsCard
          clientData={currentClient}
          clientLogo={clientLogo}
          activeTab={activeTab}
        />
      </div>

      <div className="mt-6 relative">
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {activeTab === 'Reports' && (
        <div className="space-y-6 mt-2">
          <div className="bg-white shadow rounded-lg border border-none p-6">
            <NotificationHeaderSection />
            <NotificationLegend />
            <MonthlyMessageDetailsChart
              data={janToDecData}
              yAxisDomain={[0, 400]}
              containerHeight="100%"
            />
          </div>

          <div className="bg-white shadow rounded-lg border border-none p-6">
            <DeliveryTrendChart />
          </div>

          <div className="bg-white shadow rounded-lg border border-none p-6">
            <ToggleTags />
          </div>
        </div>
      )}

      {activeTab === 'Configure Channel' && (
        <div className="bg-white shadow rounded-lg border-none p-6 mt-2 h-[788px]">
          <ChannelConfigure />
        </div>
      )}

      {activeTab === 'System' && (
        <div className="bg-white shadow rounded-lg border-none p-6 mt-2 h-[788px]">
          <SystemDashboardOne />
        </div>
      )}
    </div>
  );
};

export default ClientDetailPage;