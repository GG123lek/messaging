import React, { useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import PageHeader from "../PageHeader/PageHeader";
import goop from "../../assets/images/fine.png";
import bells from "../../assets/images/bell rang.png";
import chevrons from "../../assets/images/down.png";
import avas from "../../assets/images/picet.png";
import calest from "../../assets/images/date.png";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import MonthlyMessageChart from "../MyChart/MonthlyMessageChart";
import RecentNotificationsContainer from "../NotificationContainer/RecentNotificationContainer";

export default function DashboardPage() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date("2023-01-06"),
      endDate: new Date("2023-01-12"),
      key: "selection",
    },
  ]);

  const cards = [
    {
      title: "Total Client System",
      value: "15",
      change: "+2",
      rate: "10%",
    },
    {
      title: "Total Configured Gateway",
      value: "12",
      change: "+5",
      rate: "10%",
    },
    {
      title: "Total Delivery Rate",
      value: "98%",
      change: "+10%",
      rate: "10%",
    },
    {
      title: "Total Notifications Sent",
      value: "2,000",
      change: "+3",
      rate: "10%",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title={
          <div className="flex items-center gap-2 text-xl font-semibold text-gray-800">
            <img src={goop} alt="Home Icon" className="w-4 h-4" />
            <span className="text-gray-400">/</span>
            <span className="text-[#2292FC]">Dashboard</span>
          </div>
        }
      >
        <div className="flex items-center space-x-4">
          <div className="w-6 h-6 cursor-pointer">
            <img
              src={bells}
              alt="Notifications"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
            <img
              src={avas}
              alt="Albert Afolabi"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-semibold text-gray-900 leading-tight">
              Albert Afolabi
            </h3>
            <p className="text-xs text-gray-500">System Admin</p>
          </div>

          <div>
            <img
              src={chevrons}
              alt="Dropdown"
              className="w-4 h-4 text-gray-400"
            />
          </div>
        </div>
      </PageHeader>

      <div className="px-4 sm:px-6 max-w-7xl mx-auto">
        {/* Header text + date selector */}
        <div className="flex flex-col sm:flex-row justify-between  items-start sm:items-center mt-6 gap-4">
          <div>
            <h1 className="text-black font-bold text-xl">Welcome Admin</h1>
            <p className="text-[#667085]">All general informations appear in the field</p>
          </div>

                  <div
          className="relative bg-white shadow rounded-lg border border-none px-3 inline-flex items-center"
          style={{ height: "36px", borderRadius: "8px" }}
        >
          <button
            onClick={() => setShowCalendar(!showCalendar)}
            className="flex items-center gap-2 text-xs text-black whitespace-nowrap text-[#101828] font-bold justify-center h-full w-full"
          >
            <span className="font-bold text-[#344054] ">Showing:</span>
            <img src={calest} alt="Calendar" className="w-3 h-3 text-gray-500" />
            <span>
              {format(range[0].startDate, "MMM d, yyyy")} –{" "}
              {format(range[0].endDate, "MMM d, yyyy")}
            </span>
          </button>

          {showCalendar && (
            <div className="absolute z-20 right-0 mt-2 bg-white rounded-md shadow-lg">
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setRange([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={range}
                rangeColors={["#4F46E5"]}
                className="rounded-md"
              />
            </div>
          )}
        </div>


        </div>

        {/* Top 4 cards - touching with vertical borders */}
       {/* Top 4 cards - touching with vertical borders on desktop */}
            <div className="mt-6 bg-white rounded-lg shadow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            {cards.map((card, idx) => (
                <div
                key={idx}
            className="p-5 flex flex-col justify-between gap-3 h-[153px] min-w-0"
            >
            <p className="text-[#667085] text-sm font-semibold">{card.title}</p>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2">
                <span className="text-black font-bold text-2xl leading-tight break-words">{card.value}</span>
                <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[#7A7A9D] font-medium">{card.change}</span>
                <div className="flex items-center bg-[#E7F6EC] rounded px-2 py-0.5 space-x-1">
                    <FiArrowUp className="w-4 h-4 text-red-600" />
                    <span className="text-red-600 font-medium">{card.rate}</span>
                </div>
                </div>
            </div>
            </div>
        ))}
        </div>


                {/* Bottom chart containers */}
                <div className="mt-8 flex flex-col lg:flex-row gap-6">
                  {/* Left side bigger charts */}
                  <div className="flex flex-col gap-6 flex-1">
                  

                  <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-[769px] h-[465px] max-h-[509px] min-h-[400px]">
  {/* Top: Text + Date Picker */}
  <div className="flex justify-between items-start mb-4">
    <div className="space-y-1">
      <h4 className="font-semibold text-[#101828] text-sm leading-tight">
        Channel Delivery Analysis
      </h4>
      <p className="text-xs text-[#667085] leading-snug">
        Shows total messages pushed from various channels
      </p>
    </div>

    {/* Date container */}
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

              <div className="flex items-center gap-6 mb-4">
                {[
                  { name: "SMS", color: "#58A8F3" },
                  { name: "Email", color: "#F5CA91" },
                  { name: "Whatsapp", color: "#91D5BA" },
                  { name: "USSD", color: "#F99BAB" },
                ].map(({ name, color }) => (
                  <div key={name} className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: color }}
                    ></span>
                    <span className="text-xs text-[#464F60] font-bold">{name}</span>
                  </div>
                ))}
              </div>

           <div className="w-full h-[400px]">
            <MonthlyMessageChart />
          </div>

            </div>
            <div className="">
              <div>
                <RecentNotificationsContainer/>
              </div>
            </div>
          </div>

          {/* Right side smaller charts */}
          <div className="flex flex-col gap-6 w-full lg:w-[35%]">
            <div className="bg-white rounded-lg shadow-md p-6 min-h-[250px]">
              <h3 className="font-semibold mb-2 text-gray-700">Chart 3 (Small)</h3>
              {/* Apex Chart placeholder */}
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 min-h-[250px]">
              <h3 className="font-semibold mb-2 text-gray-700">Chart 4 (Small)</h3>
              {/* Apex Chart placeholder */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
