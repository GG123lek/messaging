import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import mastercardLogo from '../../assets/images/switch.png';
import { Link } from 'react-router-dom';

const FirstClientDetailsCard = ({ clientData, clientLogo, activeTab }) => {
  // Fallback data if no clientData is provided (for backward compatibility)
  const defaultClient = {
    name: "United Bank for Africa",
    id: "HB74939300"
  };

  const client = clientData || defaultClient;

  return (
    <div className="w-full max-w-[1152px] mx-auto space-y-4">
      {/* Top Section: Client Info and Status */}
      <div className="flex items-start justify-between">
        {/* Left Side: Logo + Info */}
        <div className="flex items-start gap-4">
          {clientLogo ? (
            <img 
              src={clientLogo} 
              alt={`${client.name} Logo`} 
              className="w-14 h-14 object-contain" 
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center text-white text-lg font-bold">
              {client.name.charAt(0)}
            </div>
          )}
           
          <div>
            <h2 className="text-base font-semibold text-gray-900">
              {activeTab === 'Configure Channel' ? (
                <div>CHANNEL TEXT</div>
              ) : activeTab === 'SMPP Profile' ? (
                <div>PROFILE TEXT</div>
              ) : (
                client.name
              )}
            </h2>
            <span className="inline-block mt-1 bg-[#3388B1] text-white text-xs font-medium px-2 py-1 rounded">
              ID: {client.id}
            </span>
          </div>
        </div>

        {/* Right Side: Status */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#909090] font-medium">System Status:</span>
          <img
            src={mastercardLogo}
            alt="System Status"
            className="w-10 h-10 object-contain self-center"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Centered Edit Core Banking Link */}
      <div className="flex justify-center">
        <Link
          to="editcorebanking"  // relative path from current URL
          className="flex items-center text-[#3388B1] text-sm font-medium"
        >
          Edit Client
          <ArrowUpRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default FirstClientDetailsCard;