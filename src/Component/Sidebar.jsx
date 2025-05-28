import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import pop from '../assets/images/activity.png';
import Logo from '../assets/images/vector.png';
import homa from '../assets/images/another.png';
import server from '../assets/images/switch-horizontal.png';
import repot from '../assets/images/bar-chart-2.png';
import act from '../assets/images/mua.png';
import acti from '../assets/images/settings.png';
import logoutIcon from '../assets/images/log icon.png';
import { FiPlus, FiMinus } from 'react-icons/fi';

function Sidebar({ onLinkClick }) {
  const location = useLocation();
  const [clientOpen, setClientOpen] = useState(true);

  const activeStyle =
    'bg-white text-[#2292FC] font-semibold border border-gray-200 shadow-sm';

  const coreLinks = [
    {
      to: '/core-banking',
      label: 'Core Banking',
      dotColor: '#FFAB00',
    },
    { to: '/cms', label: 'CMS', dotColor: '#80CDF2' },
    { to: '/erp', label: 'ERP', dotColor: '#F99BAB' },
  ];

  return (
    <div className="h-full flex flex-col bg-[#F0F0F0]">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-4 px-4 pt-4">
        <img src={Logo} alt="Logo" className="w-6 h-6" />
        <span className="text-lg font-semibold">Messaging Platform</span>
      </div>

      <hr className="w-full border-t border-gray-300 mb-4" />

      {/* Section Title */}
      <div className="text-xs text-gray-500 uppercase tracking-widest mb-2 px-4">
        Main Menu
      </div>

      <nav className="flex flex-col gap-2 px-2">
        {/* Dashboard */}
        <NavLink
          to="/"
          onClick={onLinkClick}
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded ${
              isActive ? activeStyle : 'text-[#565869]'
            }`
          }
        >
          {({ isActive }) => (
            <span className="ml-6 flex items-center gap-3">
              <img
                src={homa}
                alt="Dashboard Icon"
                className="w-5 h-5"
                style={{ filter: isActive ? 'none' : 'grayscale(100%)' }}
              />
              <span>Dashboard</span>
            </span>
          )}
        </NavLink>

        {/* Client System Group */}
        <div className="relative">
          <div
            onClick={() => setClientOpen(!clientOpen)}
            className={`flex items-center gap-3 px-4 py-2 rounded text-[#565869] text-[0.95rem] cursor-pointer`}
          >
            <span className="absolute left-2">
              {clientOpen ? (
                <FiMinus size={16} color="#565869" />
              ) : (
                <FiPlus size={16} color="#565869" />
              )}
            </span>
            <span className="ml-6 flex items-center gap-3">
              <img src={pop} alt="Client Systems Icon" className="w-5 h-5" />
              <span>Client Systems</span>
            </span>
          </div>

          {/* Vertical line from minus to plus */}
          {clientOpen && (
            <div className="absolute left-[12px] top-[38px] bottom-[-6px] w-px bg-[#818181]" />
          )}

          {/* Sub Links */}
          {clientOpen && (
            <div className="ml-8 flex flex-col gap-1">
              {/* New Client System */}
              <NavLink
                to="/new-client-system"
                onClick={onLinkClick}
                className="flex items-center gap-2 text-[#565869] text-[1rem] font-semibold px-2 py-1"
              >
                <div className="border border-[#565869] rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  <FiPlus size={10} color="#565869" />
                </div>
                New Client System
              </NavLink>

              {/* Core Sub Items */}
              {coreLinks.map(({ to, label, dotColor }) => (
                <NavLink
                  key={label}
                  to={to}
                  onClick={onLinkClick}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-1 rounded text-[0.85rem] ${
                      isActive ? activeStyle : 'text-[#565869]'
                    }`
                  }
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: dotColor }}
                  ></span>
                  {label}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        {/* Gateway Configuration */}
        <NavLink
          to="/gateway-configuration"
          onClick={onLinkClick}
          className="flex items-center gap-3 px-4 py-2 rounded relative text-[#565869]"
        >
          <span className="absolute left-2">
            <FiPlus size={16} color="#565869" />
          </span>
          <span className="ml-6 flex items-center gap-3">
            <img src={server} alt="Gateway Icon" className="w-5 h-5" />
            <span>Gateway Configuration</span>
          </span>
        </NavLink>

        {/* Standalone Pages */}
        {[
          { to: '/report', label: 'Report and Setting', icon: repot },
          { to: '/settings', label: 'Settings', icon: acti },
          { to: '/activity-log', label: 'Activity Log', icon: act },
        ].map(({ to, label, icon }) => (
          <NavLink
            key={label}
            to={to}
            onClick={onLinkClick}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded relative ${
                isActive ? activeStyle : 'text-[#565869]'
              }`
            }
          >
            <span className="absolute left-2 w-4" />
            <span className="ml-6 flex items-center gap-3">
              <img src={icon} alt={`${label} Icon`} className="w-5 h-5" />
              <span>{label}</span>
            </span>
          </NavLink>
        ))}
      </nav>

      {/* Log Out */}
      <div className="mt-14 px-6 flex items-center justify-between gap-4 select-none cursor-default">
        <span className="text-sm font-semibold text-[#2292FC]">Log Out</span>
        <div className="bg-[#2292FC] p-1 rounded-sm flex items-center justify-center w-6 h-6">
          <img src={logoutIcon} alt="Logout Icon" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
