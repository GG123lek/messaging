import React, { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file for date range
import 'react-date-range/dist/theme/default.css'; // theme css file
import calest from '../../assets/images/date.png'

import first from "../../assets/images/firstbank.png"
import second from "../../assets/images/uba.png"
import thirds from "../../assets/images/wema.png"
import fourth from "../../assets/images/ecobank.png"
import fifth from "../../assets/images/unifiedpayment.png"

import checkIcon from '../../assets/images/mark cor.png';
import xIcon from '../../assets/images/xena.png';


const clientsData = [
    { id: 1, name: "First Bank", logoUrl: first, channel: "SMS", date: "23/06/2025", status: "Delivered" },
    { id: 2, name: "United Bank for Africa", logoUrl: second, channel: "Email", date: "23/06/2025", status: "Failed" },
    { id: 3, name: "Wema Bank", logoUrl: thirds, channel: "Whatsapp", date: "23/06/2025", status: "Delivered" },
    { id: 4, name: "Eco Bank", logoUrl: fourth, channel: "USSD", date: "23/06/2025", status: "Failed" },
    { id: 5, name: "Unified Payment", logoUrl: fifth, channel: "SMS", date: "23/06/2025", status: "Delivered" }
  ];
  

export default function RecentNotificationsContainer() {
  const [showCalendar, setShowCalendar] = useState(false);
   const [range, setRange] = useState([
     {
       startDate: new Date("2023-01-06"),
       endDate: new Date("2023-01-12"),
       key: "selection",
     },
   ]);
 

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-[769px] h-[465px] max-h-[509px] min-h-[400px]">
      {/* Top texts and date container */}
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <h4 className="font-semibold text-[#101828] text-sm leading-tight">
            Recent Notification
          </h4>
          <p className="text-xs text-[#667085] leading-snug">
            Client Systems Recent notification
          </p>
        </div>

         <div
                          className="bg-white shadow rounded-lg border border-gray-200 flex items-center px-3"
                          style={{
                            height: "28px",
                            minWidth: "140px",
                            borderRadius: "8px",
                          }}
                        >
                          <button
                            onClick={() => setShowCalendar(!showCalendar)}
                            className="flex items-center gap-1 text-[#667085] text-xs whitespace-nowrap justify-center"
                          >
                            <img src={calest} alt="Calendar" className="w-3 h-3" />
                            <span>
                              {format(range[0].startDate, "MMM d, yyyy")} –{" "}
                              {format(range[0].endDate, "MMM d, yyyy")}
                            </span>
                          </button>
                        </div>
      </div>

      {/* Clients Table */}
      <div className="overflow-x-auto -mx-4" style={{ paddingBottom: 0, marginBottom: 0 }}>
  <table className="w-full border-collapse">
    <thead style={{ backgroundColor: '#EBEBEB' }}>
      <tr className="border-b border-gray-200">
        <th className="text-left py-4 px-6 text-gray-600 font-medium text-sm">Clients Name</th>
        <th className="text-left py-4 text-gray-600 font-medium text-sm">Channels</th>
        <th className="text-left py-4 text-gray-600 font-medium text-sm">Date</th>
        <th className="text-left py-4 text-gray-600 font-medium text-sm">Status</th>
      </tr>
    </thead>
    <tbody>
      {clientsData.map((client, i) => (
        <tr
          key={client.id}
          className={`hover:bg-gray-50 ${
            i === clientsData.length - 1 ? '' : 'border-b border-gray-200'
          }`}
        >
          <td className="py-2 px-6">
            <div className="flex items-center space-x-3">
              <img
                src={client.logoUrl}
                alt={client.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-gray-900 font-medium">{client.name}</span>
            </div>
          </td>
          <td className="py-4 text-gray-600">{client.channel}</td>
          <td className="py-4 text-gray-600">{client.date}</td>
          <td className="py-4">
            <span
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                client.status === 'Delivered'
                  ? 'bg-green-100 text-green-800 border border-green-200'
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}
            >
              <img
                src={client.status === 'Delivered' ? checkIcon : xIcon}
                alt={client.status}
                className="w-4 h-4"
              />
              {client.status}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  );
}