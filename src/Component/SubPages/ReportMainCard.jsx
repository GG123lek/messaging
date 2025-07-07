import React from "react";
import { FiFilter, FiCalendar } from "react-icons/fi";

function ReportMainCard() {
  const data = {
    totalMessages: 30000,
    deliveredMessages: 25000,
    failedMessages: 20000,
    deliveryRate: "80%",
  };

  return (
    <div className="bg-white rounded-lg shadow-sm"> {/* Removed padding */}
      <div className="flex justify-between items-center p-2"> {/* Tight padding */}
        <div>
          <h1 className="text-sm font-semibold text-gray-800 leading-tight">Message Notification Summary</h1>
          <p className="text-xs text-gray-500 leading-none">Show delivery performance for each notification messages</p>
        </div>
        <div className="flex gap-1">
          <button className="flex items-center gap-1 border rounded px-2 py-1 text-xs text-gray-700">
            <FiFilter className="text-xs" />
            <span>Filter</span>
          </button>
          <button className="flex items-center gap-1 border rounded px-2 py-1 text-xs text-gray-700">
            <FiCalendar className="text-xs" />
            <span>Monthly</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 p-1"> {/* Tight grid */}
        <SummaryCard title="Total Messages" value={data.totalMessages.toLocaleString()} />
        <SummaryCard title="Delivered" value={data.deliveredMessages.toLocaleString()} />
        <SummaryCard title="Failed" value={data.failedMessages.toLocaleString()} />
        <SummaryCard title="Delivery Rate" value={data.deliveryRate} />
      </div>
    </div>
  );
}

const SummaryCard = ({ title, value }) => (
  <div className="bg-gray-50 p-2 rounded border border-gray-100">
    <p className="text-[10px] text-gray-500">{title}</p>
    <p className="text-sm font-bold text-gray-900">{value}</p>
  </div>
);

export default ReportMainCard;