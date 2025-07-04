import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import Logo from '../assets/images/Vector.png';
import homa from '../assets/images/another.png';
import server from '../assets/images/switch-horizontal.png';
import repot from '../assets/images/bar-chart-2.png';
import act from '../assets/images/mua.png';
import acti from '../assets/images/settings.png';
import logoutIcon from '../assets/images/log icon.png';
import userIcon from '../assets/images/gafuse.png';
import { FiPlus, FiMinus } from 'react-icons/fi';

function Sidebar({ onLinkClick }) {
  const location = useLocation();
  const [gatewayOpen, setGatewayOpen] = useState(true);

  const activeDashboardStyle = {
    backgroundColor: 'white',
    color: '#2292FC',
    fontWeight: 'semibold',
    border: '1px solid #E5E7EB',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
  };

  const activeClientStyle = {
    color: '#2292FC',
    fontWeight: 'semibold'
  };

  const inactiveStyle = {
    color: '#565869'
  };

  const getIconStyle = (isActive) => ({
    filter: isActive ? 'brightness(0) saturate(100%) invert(52%) sepia(98%) saturate(748%) hue-rotate(173deg) brightness(96%) contrast(94%)' : 'none'
  });

  const gatewayLinks = [
    { to: '/gateway-configuration/sms', label: 'SMS', dotColor: '#FFAB00' },
    { to: '/gateway-configuration/email', label: 'Email', dotColor: '#80CDF2' },
  ];

  return (
    <div className="h-full flex flex-col bg-[#F0F0F0]">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-4 px-4 pt-4 whitespace-nowrap">
        <img src={Logo} alt="Logo" className="w-6 h-6" />
        <span className="text-lg font-semibold">Messaging Platform</span>
      </div>

      <hr className="w-full border-t border-gray-300 mb-4" />

      <div className="text-xs text-gray-500 uppercase tracking-widest mb-2 px-4">
        Main Menu
      </div>

      <nav className="flex flex-col gap-2 px-2 flex-1">
        {/* Dashboard - with white background when active */}
        <NavLink
          to="/"
          onClick={onLinkClick}
          end
          className={({ isActive }) => 
            `flex items-center gap-3 px-4 py-2 rounded transition-colors duration-200 ${
              isActive ? 'bg-white text-[#2292FC] font-semibold border border-gray-200 shadow-sm' : 'text-[#565869]'
            }`
          }
        >
          <img 
            src={homa} 
            alt="Dashboard Icon" 
            className="w-5 h-5" 
            style={getIconStyle(location.pathname === '/')} 
          />
          <span>Dashboard</span>
        </NavLink>

        {/* Client - only blue text when active (no white background) */}
        <NavLink
          to="/client-page"
          onClick={onLinkClick}
          className={({ isActive }) => 
            `flex items-center gap-3 px-4 py-2 rounded transition-colors duration-200 ${
              isActive ? 'text-[#2292FC] font-semibold' : 'text-[#565869]'
            }`
          }
        >
          <img 
            src={userIcon} 
            alt="Client Icon" 
            className="w-5 h-5" 
            style={getIconStyle(location.pathname === '/client-page')} 
          />
          <span>Client</span>
        </NavLink>

        {/* Gateway Configuration */}
        <div className="relative">
          <div
            onClick={() => setGatewayOpen(!gatewayOpen)}
            className="flex items-center gap-3 px-4 py-2 rounded text-[#565869] text-[0.95rem] cursor-pointer w-full"
          >
            <span className="w-4 flex justify-center">
              {gatewayOpen ? <FiMinus size={16} /> : <FiPlus size={16} />}
            </span>

            <span className="w-6 flex justify-center">
              <img src={server} alt="Gateway Icon" className="w-5 h-5" />
            </span>

            <span className="flex-1">Gateway Configuration</span>
          </div>

          {gatewayOpen && (
            <div className="relative">
              <div className="absolute left-[65px] top-0 w-px bg-[#818181] h-full" />
              <div className="ml-[70px] flex flex-col gap-1 mb-2">
                {gatewayLinks.map(({ to, label, dotColor }) => (
                  <NavLink
                    key={label}
                    to={to}
                    onClick={onLinkClick}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-4 py-1 rounded text-[0.85rem] transition-colors duration-200 ${
                        isActive ? 'bg-white text-[#2292FC] font-semibold border border-gray-200 shadow-sm' : 'text-[#565869]'
                      }`
                    }
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: dotColor }}
                    />
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Other Pages */}
        {[
          { to: '/report', label: 'Reports', icon: repot },
          { to: '/smpp-system-monitor', label: 'SMPP System Monitor', icon: server },
          { to: '/settings', label: 'Settings', icon: acti },
          { to: '/activity-log', label: 'Activity Logs', icon: act },
        ].map(({ to, label, icon }) => (
          <NavLink
            key={label}
            to={to}
            onClick={onLinkClick}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded transition-colors duration-200 ${
                isActive ? 'bg-white text-[#2292FC] font-semibold border border-gray-200 shadow-sm' : 'text-[#565869]'
              }`
            }
          >
            <img 
              src={icon} 
              alt={`${label} Icon`} 
              className="w-5 h-5" 
              style={getIconStyle(location.pathname === to)} 
            />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="mt-auto mb-4 px-6 flex items-center justify-between gap-4 select-none cursor-default">
        <span className="text-sm font-semibold text-[#2292FC]">Log Out</span>
        <div className="w-8 h-8 bg-[#2292FC] rounded flex items-center justify-center">
          <img src={logoutIcon} alt="Logout Icon" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;