import React from 'react';
import { NavLink } from 'react-router-dom';
import pop from '../assets/images/activity.png';
import Logo from '../assets/images/vector.png';
import homa from '../assets/images/another.png';
import server from '../assets/images/switch-horizontal.png';
import repot from '../assets/images/bar-chart-2.png';
import act from '../assets/images/mua.png';
import acti from '../assets/images/settings.png';
import logoutIcon from '../assets/images/log icon.png'

function Sidebar({ onLinkClick }) {
  return (
    <div className="h-full flex flex-col bg-[#F0F0F0]">
      {/* Logo and Title */}
      <div className="flex items-center gap-2 mb-4 px-4 pt-4">
        <img src={Logo} alt="Logo" className="w-6 h-6" />
        <span className="text-lg font-semibold">Messaging Platform</span>
      </div>

      {/* Full-width Divider line */}
      <hr className="w-full border-t border-gray-300 mb-4" />

      {/* Section Title */}
      <div className="text-xs text-gray-500 uppercase tracking-widest mb-2 px-4">
        Main Menu
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-2 px-2">
        {/* Dashboard - active with white background and blue text */}
        <NavLink
          to="/"
          onClick={onLinkClick}
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded ${
              isActive
                ? 'bg-white text-[#2292FC] font-semibold border border-gray-200 shadow-sm'
                : 'text-[#565869]'
            }`
          }
        >
          <img src={homa} alt="Dashboard Icon" className="w-5 h-5" />
          <span>Dashboard</span>
        </NavLink>

        {/* Other nav links */}
        {[
          { to: '/client-system', label: 'Client Systems', icon: pop },
          { to: '/gateway-configuration', label: 'Gateway Configuration', icon: server },
          { to: '/report', label: 'Report and Setting', icon: repot },
          { to: '/settings', label: 'Settings', icon: acti },
          { to: '/activity-log', label: 'Activity Log', icon: act },
        ].map(({ to, label, icon }) => (
          <NavLink
            key={label}
            to={to}
            onClick={onLinkClick}
            className="flex items-center gap-3 px-4 py-2 rounded text-[#565869]"
          >
            <img src={icon} alt={`${label} Icon`} className="w-5 h-5" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="mt-15 px-6 flex items-center gap-30 select-none cursor-default">
      <span className="text-sm font-semibold text-[#2292FC]">Log Out</span>
      <div className="bg-[#2292FC] p-1 rounded-sm flex items-center justify-center w-6 h-6">
        <img src={logoutIcon} alt="Logout Icon" className="w-4 h-4" />
      </div>
    </div>
    </div>
  );
}

export default Sidebar;
