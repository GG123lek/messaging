import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Users,
  Server,
  FileText,
  Activity,
  Home, // Dashboard icon
} from 'lucide-react';
import Logo from '../assets/images/vector.png';

function Sidebar({ onLinkClick }) {
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
        <NavLink
          to="/dashboard"
          onClick={onLinkClick}
          className={({ isActive }) =>
            `flex items-center gap-3 pl-6 pr-3 py-2 rounded ${
              isActive
                ? 'bg-white text-blue-700 font-semibold'
                : 'text-blue-700 hover:bg-blue-50'
            }`
          }
        >
          <Home className="w-5 h-5" />
          Dashboard
        </NavLink>

        <NavLink
          to="/client-systems"
          onClick={onLinkClick}
          className={({ isActive }) =>
            `flex items-center gap-3 pl-6 pr-3 py-2 rounded ${
              isActive
                ? 'bg-white text-blue-700 font-semibold'
                : 'text-blue-700 hover:bg-blue-50'
            }`
          }
        >
          <Users className="w-5 h-5" />
          Client Systems
        </NavLink>

        <NavLink
          to="/gateway-configuration"
          onClick={onLinkClick}
          className={({ isActive }) =>
            `flex items-center gap-3 pl-6 pr-3 py-2 rounded ${
              isActive
                ? 'bg-white text-blue-700 font-semibold'
                : 'text-blue-700 hover:bg-blue-50'
            }`
          }
        >
          <Server className="w-5 h-5" />
          Gateway Configuration
        </NavLink>

        <NavLink
          to="/report-setting"
          onClick={onLinkClick}
          className={({ isActive }) =>
            `flex items-center gap-3 pl-6 pr-3 py-2 rounded ${
              isActive
                ? 'bg-white text-blue-700 font-semibold'
                : 'text-blue-700 hover:bg-blue-50'
            }`
          }
        >
          <FileText className="w-5 h-5" />
          Report and Setting
        </NavLink>

        <NavLink
          to="/activity-log"
          onClick={onLinkClick}
          className={({ isActive }) =>
            `flex items-center gap-3 pl-6 pr-3 py-2 rounded ${
              isActive
                ? 'bg-white text-blue-700 font-semibold'
                : 'text-blue-700 hover:bg-blue-50'
            }`
          }
        >
          <Activity className="w-5 h-5" />
          Activity Log
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
