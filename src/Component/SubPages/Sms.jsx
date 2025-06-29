import React from 'react';
import PageHeader from '../PageHeader/PageHeader';

import goop from "../../assets/images/fine.png";
import bells from "../../assets/images/bell rang.png";
import chevrons from "../../assets/images/down.png";
import avas from "../../assets/images/picet.png";

import GatewayConfig from '../Pages/GatewayConfig';
import SmsConfigurationList from '../../Component/SubPages/SmsConfigurationList';

function Sms() {
  return (
    <div className='max-w-7xl mx-auto'>
      <PageHeader
        title={
          <div className="flex items-center gap-2 text-xl font-semibold text-gray-800">
            <img src={goop} alt="Home Icon" className="w-4 h-4" />
            <span className="text-gray-400">/</span>
            <span className="text-[#2292FC]">Dashboard</span>
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

      <GatewayConfig />

      <div className=''>
        <SmsConfigurationList />
      </div>
    </div>
  );
}

export default Sms;
