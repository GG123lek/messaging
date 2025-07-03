import React from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import PageHeader from '../PageHeader/PageHeader';

import goop from "../../assets/images/fine.png";
import bells from "../../assets/images/bell rang.png";
import chevrons from "../../assets/images/down.png";
import avas from "../../assets/images/picet.png";

import GatewayConfig from '../Pages/GatewayConfig';
import EmailConfigurationDetailList from './EmailConfigurationDetailList';

function Email() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isConfigDataRoute = location.pathname.includes('email-config-data');

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
        {/* Header content remains the same */}
      </PageHeader>

      {!isConfigDataRoute && (
        <>
          <GatewayConfig navigate={navigate} />
          <EmailConfigurationDetailList />
        </>
      )}

      <Outlet />
    </div>
  );
}

export default Email;