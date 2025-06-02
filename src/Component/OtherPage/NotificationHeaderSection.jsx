import { Filter, Calendar } from 'lucide-react';
import breg from '../../assets/images/icas.png'
import goat from '../../assets/images/butty.png'
import React from 'react';

const NotificationHeaderSection = () => {
  return (
    <div className="flex justify-between items-start mb-4">
      {/* Left Texts */}
      <div className='space-y-2'>
        <h2 className="text-lg font-bold text-[#101828]">Notification Reports</h2>
        <p className="text-sm text-[#667085]">Track the volume of notification per channel</p>
      </div>

      {/* Right Buttons */}
      <div className="flex gap-3">
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-[#344054] hover:bg-gray-50">
          <img src={goat} alt='' className="w-4 h-4" />
          Filter
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-[#344054] hover:bg-gray-50">
          <img src={breg} alt='' className="w-4 h-4" />
          Monthly
        </button>
      </div>
    </div>
  );
};

export default NotificationHeaderSection
