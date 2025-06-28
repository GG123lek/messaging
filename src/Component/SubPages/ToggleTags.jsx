import React from "react";
import { useState } from "react";
import SMSFilterBar from '../../Component/SubPages/SmsFilterBar';
import SMSFilterForm from '../../Component/SubPages/SmsFilterForm';
import SMSStatsCards from '../../Component/SubPages/SmsStatCards';
import SmsTableOne from '../../Component/SubPages/SmsTableOne';
import EmailSMSDashboard from "../../Component/SubPages/EmailSmsDashboard";

export default function ToggleTags() {
  const [activeTab, setActiveTab] = useState('SMS');

  return (
    <div>
      {/* Toggle Buttons */}
      <div className="flex border border-gray-300 rounded-lg overflow-hidden w-fit bg-[#F0F2F5]">
        <button
          className={`px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer border-r border-gray-300 ${
            activeTab === 'SMS'
              ? 'bg-[#E4E7EC] text-[#1D2739]'
              : 'bg-white text-[#98A2B3] hover:bg-gray-50'
          }`}
          onClick={() => setActiveTab('SMS')}
        >
          SMS
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
            activeTab === 'Email'
              ? 'bg-[#E4E7EC] text-[#1D2739]'
              : 'bg-white text-[#98A2B3] hover:bg-gray-50'
          }`}
          onClick={() => setActiveTab('Email')}
        >
          Email
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'SMS' && (
        <div>
          <div className="my-4">
            <div className="border-t border-gray-300 w-full" />
          </div>
          
          <SMSFilterBar />
          <SMSFilterForm />

          <div className="flex flex-col mt-4">
            <label className="text-sm font-medium text-[#344054] mb-2">
              SMS Text
            </label>
            <textarea
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-24"
              placeholder="Enter phrase text to match"
            />
          </div>

          <div className="mt-4">
            <SMSStatsCards />
          </div>

          <div className="-mx-6 overflow-x-auto pb-6 mt-4">
            <SmsTableOne />
          </div>
        </div>
      )}

      {activeTab === 'Email' && (
        <div>
          {/* Empty container - you can add your email content here */}
          <div className="my-4">
            <div className="border-t border-gray-300 w-full" />
          </div>
          
          <div className="-mx-6 overflow-x-auto pb-6 mt-4">
          <EmailSMSDashboard/>
         </div>
        </div>
      )}
    </div>
  );
}