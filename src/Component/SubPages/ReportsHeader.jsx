import React from "react";
import { FiDownload } from "react-icons/fi";

function ReportsHeader() {
  return (
    <div className="py-1"> {/* Reduced vertical padding */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-1"> {/* Tight gap */}
        <div>
          <h1 className="text-lg font-semibold text-gray-800 leading-tight">Reports</h1>
          <p className="text-xs text-gray-500 leading-none">Reports on message delivery, usage, and system metrics.</p>
        </div>
        <button className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-xs">
          <FiDownload className="text-xs" />
          <span>Export Report</span>
        </button>
      </div>
    </div>
  );
}

export default ReportsHeader;