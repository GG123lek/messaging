import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import ubaLogo from '../../assets/images/uba.png';
import mastercardLogo from '../../assets/images/switch.png';
import { Link } from 'react-router-dom';

const FirstClientDetailsCard = ({ activeTab }) => {
  return (
    <div className="w-full max-w-[1152px] mx-auto space-y-4">
      {/* Top Section: UBA Info and Status */}
      <div className="flex items-start justify-between">
        {/* Left Side: Logo + Info */}
        <div className="flex items-start gap-4">
          <img src={ubaLogo} alt="UBA Logo" className="w-14 h-14 object-contain" />

          <div>
            <h2 className="text-base font-semibold text-gray-900">
              {activeTab === 'Configure Channel' ? <div>CHANNEL TEXT</div> : activeTab === 'SMPP Profile' ? <div>PROFILE TEXT</div> : "United Bank for Africa"}
            </h2>
            <span className="inline-block mt-1 bg-[#3388B1] text-white text-xs font-medium px-2 py-1 rounded">
              ID: HB74939300
            </span>
          </div>
        </div>

        {/* Right Side: Status */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#909090] font-medium">System Status:</span>
          <img
            src={mastercardLogo}
            alt="MasterCard"
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
          Edit Core Banking
          <ArrowUpRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default FirstClientDetailsCard;
