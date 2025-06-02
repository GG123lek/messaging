import React from "react";
const NotificationLegend = () => {
    const legends = [
      { label: 'SMS', color: '#58A8F3' },
      { label: 'Email', color: '#F5CA91' },
      { label: 'WhatsApp', color: '#91D5BA' },
      { label: 'USSD', color: '#91D5BA' },
    ];
  
    return (
      <div className="flex gap-6 mb-4">
        {legends.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-sm text-[#101828]">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></span>
            {item.label}
          </div>
        ))}
      </div>
    );
  };

  export default NotificationLegend