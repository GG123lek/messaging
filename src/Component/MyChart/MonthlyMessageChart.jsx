import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Apr", bar1: 360, bar2: 350, bar3: 180, bar4: 190 },
  { month: "May", bar1: 260, bar2: 250, bar3: 120, bar4: 125 },
  { month: "Jun", bar1: 70, bar2: 370, bar3: 240, bar4: 250 },
  { month: "Jul", bar1: 330, bar2: 360, bar3: 370, bar4: 120 },
  { month: "Aug", bar1: 140, bar2: 300, bar3: 140, bar4: 260 },
  { month: "Sept", bar1: 340, bar2: 360, bar3: 80, bar4: 70 },
];

export default function MonthlyMessageChart() {
  return (
    <div className="w-full h-full pl-0">
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          barCategoryGap="20%"
          barSize={10}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            horizontal={true}
            vertical={false}
            stroke="#e0e0e0"
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#464F60' }}
          />
          <YAxis
            domain={[0, 400]}
            ticks={[0, 100, 200, 300, 400]}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#464F60' }}
            width={30} // reduce Y axis label width
          />
          <Bar dataKey="bar1" fill="#0EA5E9" radius={[2, 2, 0, 0]} />
          <Bar dataKey="bar2" fill="#86EFAC" radius={[2, 2, 0, 0]} />
          <Bar dataKey="bar3" fill="#20C997" radius={[2, 2, 0, 0]} />
          <Bar dataKey="bar4" fill="#F472B6" radius={[2, 2, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}