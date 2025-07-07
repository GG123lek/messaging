import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import PageHeader from '../PageHeader/PageHeader';
import gooper from '../../assets/images/imagechart.png';
import bells from '../../assets/images/bell rang.png';
import avas from '../../assets/images/picet.png';
import chevrons from '../../assets/images/down.png';
import butg from '../../assets/images/butty.png';
import casd from '../../assets/images/icas.png';
import ganaa from '../../assets/images/gamma.png';

import NotificationHeaderSection from '../OtherPage/NotificationHeaderSection';
import NotificationLegend from '../OtherPage/NotificationLegend';
import MonthlyMessageDetailsChart from '../MyChart/MonthlyMessageDetailsChart';
import DeliveryTrendChart from '../MyChart/DeliveryTrendChart';
import ToggleTags from '../SubPages/ToggleTags';

function ReportsPage() {
  const [activeTab, setActiveTab] = useState('SMS');

  const summaryData = [
    { title: 'Total Messages', value: '30,000' },
    { title: 'Delivered Message', value: '25,000' },
    { title: 'Failed Messages', value: '20,000' },
    { title: 'Delivery Rate (%)', value: '80%' },
  ];

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

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <PageHeader
        title={
          <div className="flex items-center gap-2 text-xl font-semibold text-gray-800">
            <img src={gooper} alt="Home Icon" className="w-4 h-4" />
            <span className="text-gray-400">/</span>
            <span className="text-[#2292FC]">Reports</span>
          </div>
        }
      >
        <div className="flex items-center">
          <div className="w-6 h-6 cursor-pointer">
            <img src={bells} alt="Notifications" className="w-full h-full object-contain" />
          </div>
          <div className="h-10 border-l border-gray-300 mx-4" />
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
            <img src={avas} alt="Albert Afolabi" className="w-full h-full object-cover" />
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

      {/* Page Content */}
      <div className="p-6 space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
            <p className="text-sm text-gray-500">Reports on message delivery, usage, and system metrics.</p>
          </div>
          <button className="flex items-center gap-2 border border-gray-300 bg-white 
          rounded-md px-4 py-2 text-sm font-semibold cursor-pointer text-gray-700 hover:bg-gray-50">
            <img src={ganaa} alt="Export" />
            Export Report
          </button>
        </div>

        {/* Message Notification Summary */}
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-xl font-semibold">Message Notification Summary</h2>
              <p className="text-sm text-gray-500">Show delivery performance for each notification messages</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <button className="flex items-center gap-2 px-4 py-2 cursor-pointer border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 w-full sm:w-auto">
                <img src={butg} alt="" /> Filter
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border cursor-pointer border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 w-full sm:w-auto">
                <img src={casd} alt="" /> Monthly
              </button>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {summaryData.map((item, index) => (
              <div key={index} className="bg-white rounded-md border border-gray-200 p-4">
                <p className="text-sm text-[#667085] font-semibold mb-1">{item.title}</p>
                <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Notification Chart */}
        <div className="bg-white shadow rounded-lg border border-none p-6 space-y-6">
          <NotificationHeaderSection />
          <NotificationLegend />
          <MonthlyMessageDetailsChart data={janToDecData} yAxisDomain={[0, 400]} containerHeight="100%" />
        </div>

        {/* Delivery Trend Chart Section */}
        <div className="bg-white shadow rounded-lg border border-none p-6 space-y-6">
          {/* Tabs */}
          <div className="inline-flex rounded-md border border-gray-200">
            <button
              onClick={() => setActiveTab('SMS')}
              className={`px-4 py-2 text-sm font-medium rounded-l-md focus:outline-none ${
                activeTab === 'SMS' ? 'text-white bg-[#E6E6E6]' : 'text-gray-500 bg-white hover:bg-gray-50'
              }`}
            >
              SMS
            </button>
            <button
              onClick={() => setActiveTab('Email')}
              className={`px-4 py-2 text-sm font-medium rounded-r-md focus:outline-none ${
                activeTab === 'Email' ? 'text-white bg-[#E6E6E6]' : 'text-gray-500 bg-white hover:bg-gray-50'
              }`}
            >
              Email
            </button>
          </div>

          {/* Header + Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Delivery Trend Graph</h2>
              <p className="text-sm text-gray-500">Visualize delivery status trends over time (Success, Failed, Pending)</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300  rounded-md 
              text-sm text-gray-700 hover:bg-gray-50 w-full sm:w-auto">
                <img src={butg} alt="" /> Filter
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300
               rounded-md text-sm  text-gray-700 hover:bg-gray-50 w-full sm:w-auto">
                <img src={casd} alt="" /> Monthly
              </button>
            </div>
          </div>

          <DeliveryTrendChart type={activeTab.toLowerCase()} />
        </div>

        {/* ToggleTags in its own card */}
        <div className="bg-white shadow rounded-lg border border-none p-6">
          <ToggleTags />
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default ReportsPage;
