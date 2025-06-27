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
    // ...other clients
  };

  const currentClient = clientData[slug];
  const clientLogo = getImage(slug);

  const janToDecData = [
    { month: "Jan", bar1: 180, bar2: 150, bar3: 120, bar4: 100 },
    { month: "Feb", bar1: 200, bar2: 170, bar3: 130, bar4: 110 },
    // ...months continued
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
            <div className="my-4">
              <div className="border-t border-gray-300 w-full" />
            </div>
            <SMSFilterBar />
            <SMSFilterForm />

            <div className="flex flex-col mt-4">
              <label className="text-sm font-medium text-[#344054] mb-2">
                SMS Text
              </label>
              <textarea
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-24"
                placeholder="Enter phrase text to match"
              />
            </div>

            <div className="mt-4">
              <SMSStatsCards />
            </div>

            <div className="-mx-6 overflow-x-auto pb-6 mt-4">
              <SmsTableOne />
            </div>
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
