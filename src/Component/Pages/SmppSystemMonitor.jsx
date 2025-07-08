import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import monitorIcon from '../../assets/images/airplay.png';
import bells from '../../assets/images/bell rang.png';
import avas from '../../assets/images/picet.png';
import chevrons from '../../assets/images/down.png';
import cardBgImage from '../../assets/images/weeg.png';
import nodejsLogo from '../../assets/images/nodals.png'; 
import redisLogo from '../../assets/images/ratin.png'; 
import bogy from '../../assets/images/babylog.png'
import { FiArrowUp } from 'react-icons/fi';

function SmppSystemMonitor() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <PageHeader
        title={
          <div className="flex items-center gap-2 text-xl font-semibold text-gray-800">
            <img src={monitorIcon} alt="Monitor Icon" className="w-4 h-4" />
            <span className="text-gray-400">/</span>
            <span className="text-[#2292FC]">SMPP System Monitor</span>
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
      <div className="px-6 pt-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">SMPP System Monitor</h1>
        <p className="text-sm text-gray-500 mb-6">
          Reports on message delivery, usage, and system metrics.
        </p>

        <div className="flex flex-wrap gap-4">
          {/* Card 1 - Background Image Card (No Borders) */}
          <div 
            className="relative rounded-md p-3 w-[315px] h-[130px] overflow-hidden border-none"
            style={{ 
              backgroundImage: `url(${cardBgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="absolute inset-0 bg-[#EAF0F6]/20 border-none"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-sm font-bold text-gray-800">SMPP Server Monitor</h2>
                <p className="text-[10px] text-[#667085]">
                  Powered by Nodejs and Redis
                </p>
              </div>
              {/* Logo images at bottom */}
              <div className="flex items-center gap-2">
                <img src={nodejsLogo} alt="Node.js" className="h-12" />
                <img src={redisLogo} alt="Redis" className="h-12" />
              </div>
            </div>
          </div>

          {/* Card 2 - Plain White Card (No Borders) */}
          
    <div className="bg-white rounded-md p-3 w-[315px] h-[130px] border-none relative">
      {/* Header (stays at top) */}
      <div className="flex items-center gap-2">
        <img src={bogy} alt="" className="text-sm font-semibold text-gray-800" />
        <p className="text-xs text-[#667085]">Connected Account</p>
      </div>

      {/* Centered Number Block */}
      <div 
        className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full px-3"
        style={{ marginTop: '8px' }}
      >
        <div className="flex items-baseline gap-2">
          <div className="text-2xl font-bold text-[#101828]">25.0</div>
          <div className="flex items-center gap-1">
            <div className="bg-[#F0FFF5] rounded-md px-1.5 py-0.5 flex items-center">
              <FiArrowUp className="text-yellow-500 mr-0.5" />
              <span className="text-xs font-medium text-yellow-500">15%</span>
            </div>
            <div className="text-xs text-[#667085] font-semibold">vs last week</div>
          </div>
        </div>
      </div>

      {/* Additional text line */}
      <div className="absolute bottom-3 left-0 w-full px-3">
        <p className="text-xs text-[#667085] whitespace-nowrap font-semibold overflow-hidden text-ellipsis">
          Total SMPP client accounts connected to our server
        </p>
      </div>
    </div>
            </div>
      </div>
    </div>
  );
}

export default SmppSystemMonitor;