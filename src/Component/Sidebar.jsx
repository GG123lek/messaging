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

  const isActive = (path) => location.pathname === path;

  const getIconStyle = (isActive) => ({
    filter: isActive
      ? 'brightness(0) saturate(100%) invert(52%) sepia(98%) saturate(748%) hue-rotate(173deg) brightness(96%) contrast(94%)'
      : 'brightness(0) saturate(100%) invert(34%) sepia(8%) saturate(464%) hue-rotate(202deg) brightness(95%) contrast(92%)',
  });

  const gatewayLinks = [
    { to: '/gateway-configuration/sms', label: 'SMS', dotColor: '#FFAB00' },
    { to: '/gateway-configuration/email', label: 'Email', dotColor: '#80CDF2' },
  ];

  return (
    <div className="h-full flex flex-col bg-[#F0F0F0] relative max-w-full overflow-x-hidden">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-4 px-4 pt-4 whitespace-nowrap overflow-hidden">
        <img src={Logo} alt="Logo" className="w-6 h-6 flex-shrink-0" />
        <span className="text-lg font-semibold truncate">Messaging Platform</span>
      </div>

      <hr className="w-full border-t border-gray-300 mb-4" />

      <div className="text-xs text-gray-500 uppercase tracking-widest mb-2 px-4 overflow-hidden">
        Main Menu
      </div>

      <nav className="flex flex-col gap-2 flex-1 relative">
        {/* Dashboard */}
        <div className="relative">
          {isActive('/') && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[4px] h-[74%] bg-[#2292FC] rounded-r-md z-10" />
          )}
          <NavLink
            to="/"
            onClick={onLinkClick}
            className={`flex items-center gap-3 px-4 py-2 rounded transition-colors duration-200 ml-4 mr-2 ${
              isActive('/')
                ? 'bg-white text-[#2292FC] font-semibold border border-gray-200 shadow-sm'
                : 'text-[#565869]'
            }`}
          >
            <img
              src={homa}
              alt="Dashboard Icon"
              className="w-5 h-5 flex-shrink-0"
              style={getIconStyle(isActive('/'))}
            />
            <span className="break-words">Dashboard</span>
          </NavLink>
        </div>

        {/* Client */}
        <div className="relative">
          {isActive('/client-page') && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[4px] h-[74%] bg-[#2292FC] rounded-r-md z-10" />
          )}
          <NavLink
            to="/client-page"
            onClick={onLinkClick}
            className={`flex items-center gap-3 px-4 py-2 rounded transition-colors duration-200 ml-4 mr-2 ${
              isActive('/client-page')
                ? 'bg-white text-[#2292FC] font-semibold border border-gray-200 shadow-sm'
                : 'text-[#565869]'
            }`}
          >
            <img
              src={userIcon}
              alt="Client Icon"
              className="w-5 h-5 flex-shrink-0"
              style={getIconStyle(isActive('/client-page'))}
            />
            <span className="break-words">Client</span>
          </NavLink>
        </div>

        {/* Gateway Configuration (Dropdown under Client) */}
        <div className="relative">
          <div
            onClick={() => setGatewayOpen(!gatewayOpen)}
            className="flex items-center gap-3 px-4 py-2 rounded text-[#565869] text-[0.95rem] cursor-pointer w-full ml-4 mr-2"
          >
            <span className="w-4 flex justify-center flex-shrink-0">
              {gatewayOpen ? <FiMinus size={16} /> : <FiPlus size={16} />}
            </span>
            <img src={server} alt="Gateway Icon" className="w-5 h-5 flex-shrink-0" />
            <span className="flex-1 break-words">Gateway Configuration</span>
          </div>

          {gatewayOpen && (
            <div className="relative">
              <div className="absolute left-[65px] top-0 w-px bg-[#818181] h-full" />
              <div className="ml-[70px] flex flex-col gap-1 mb-2">
                {gatewayLinks.map(({ to, label, dotColor }) => (
                  <div key={label} className="relative">
                    {isActive(to) && (
                      <div className="absolute left-[-70px] top-1/2 -translate-y-1/2 w-[4px] h-[70%] bg-[#2292FC] rounded-r-md z-10" />
                    )}
                    <NavLink
                      to={to}
                      onClick={onLinkClick}
                      className={`flex items-center gap-2 px-4 py-1 rounded text-[0.85rem] transition-colors duration-200 ml-2 mr-4 ${
                        isActive(to)
                          ? 'bg-white text-[#2292FC] font-semibold border border-gray-200 shadow-sm'
                          : 'text-[#565869]'
                      }`}
                    >
                      <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: dotColor }} />
                      <span className="break-words">{label}</span>
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Remaining menu items */}
        {[
          { to: '/reports', label: 'Reports', icon: repot },
          { to: '/smpp-system-monitor', label: 'SMPP System Monitor', icon: server },
          { to: '/settings', label: 'Settings', icon: acti },
          { to: '/activity-log', label: 'Activity Logs', icon: act },
        ].map(({ to, label, icon }) => (
          <div key={label} className="relative">
            {isActive(to) && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[4px] h-[74%] bg-[#2292FC] rounded-r-md z-10" />
            )}
            <NavLink
              to={to}
              onClick={onLinkClick}
              className={`flex items-center gap-3 px-4 py-2 rounded transition-colors duration-200 ml-4 mr-2 ${
                isActive(to)
                  ? 'bg-white text-[#2292FC] font-semibold border border-gray-200 shadow-sm'
                  : 'text-[#565869]'
              }`}
            >
              <img
                src={icon}
                alt={`${label} Icon`}
                className="w-5 h-5 flex-shrink-0"
                style={getIconStyle(isActive(to))}
              />
              <span className="break-words">{label}</span>
            </NavLink>
          </div>
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