import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function MonthlyMessageChart({ data, yAxisDomain = [0, 400], containerHeight = '85%' }) {
  return (
    <div className="w-full h-full pl-0">
      <ResponsiveContainer width="100%" height={containerHeight}>
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
            tick={{ fontSize: 12, fill: "#464F60" }}
          />
          <YAxis
            domain={yAxisDomain}
            ticks={[0, 100, 200, 300, 400]}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#464F60" }}
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
