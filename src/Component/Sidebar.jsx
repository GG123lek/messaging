import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import pop from '../assets/images/activity.png';
import Logo from '../assets/images/vector.png';
import homa from "../assets/images/another.png"; // blue home icon
import server from "../assets/images/switch-horizontal.png";
import repot from "../assets/images/bar-chart-2.png";
import act from "../assets/images/mua.png";
import acti from "../assets/images/settings.png";

function Sidebar({ onLinkClick }) {
  const location = useLocation();

  return (
    <div className="h-full flex flex-col p-4">
      {/* Logo and Title */}
      <div className="flex items-center space-x-2 mb-4">
        <img src={Logo} alt="Logo" className="w-6 h-6" />
        <span className="text-lg font-semibold">Messaging Platform</span>
      </div>

      {/* Divider line */}
      <hr className="-mx-4 border-t border-gray-300 mb-4" />

      {/* Section Title */}
      <div className="text-xs text-gray-500 uppercase tracking-widest mb-2 px-1">
        Main Menu
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col gap-4">
        {/* Dashboard (special style) */}
        <NavLink
          to="/dashboard"
          onClick={onLinkClick}
          className={({ isActive }) =>
            `flex items-center gap-3 pl-6 pr-3 py-2 rounded ${
              isActive ? 'bg-white font-semibold' : 'hover:bg-blue-50'
            }`
          }
        >
          <img src={homa} alt="Dashboard Icon" className="w-5 h-5" />
          <span className="text-blue-700">Dashboard</span>
        </NavLink>

        {/* All others - no white active background */}
        {[
          { to: "/client-systems", label: "Client Systems", icon: pop },
          { to: "/gateway-configuration", label: "Gateway Configuration", icon: server },
          { to: "/report-setting", label: "Report and Setting", icon: repot },
          { to: "/activity-log", label: "Settings", icon: acti },
          { to: "/activity-log", label: "Activity Log", icon: act },
        ].map(({ to, label, icon }) => (
          <NavLink
            key={label}
            to={to}
            onClick={onLinkClick}
            className="flex items-center gap-3 pl-6 pr-3 py-2 rounded hover:bg-blue-50"
            // NOTE: no conditional styling for active state
          >
            <img src={icon} alt={`${label} Icon`} className="w-5 h-5" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
