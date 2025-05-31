import React from 'react';
import clocky from '../../assets/images/watchone.png';
import slock from '../../assets/images/watchgage.png';

function SystemMonitor() {
  return (
    <div className="pt-2 space-y-4">
      {/* CPU Container */}
      <div className="w-[350px] h-[169px] bg-white rounded-lg shadow-md border border-none flex items-center p-4">
        <div className="flex items-center space-x-6">
          <div className="flex-shrink-0">
            <img src={slock} alt="CPU Usage" className="w-[120px] h-[120px]" />
          </div>
          <div className="flex-1">
            <div className="text-base font-bold text-[#101828]">CPU</div>
            <div className="text-sm text-[#667085]">5.11 GB of 7.59 GB Used</div>
          </div>
        </div>
      </div>

      {/* Memory Container */}
      <div className="w-[350px] h-[169px] bg-white rounded-lg shadow-md border border-none flex items-center p-4">
        <div className="flex items-center space-x-6">
          <div className="flex-shrink-0">
            <img src={clocky} alt="Memory Usage" className="w-[120px] h-[120px]" />
          </div>
          <div className="flex-1">
            <div className="text-base font-bold text-[#101828]">Monitor</div>
            <div className="text-sm text-[#667085]">5.11 GB of 11.59 GB Used</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SystemMonitor;
