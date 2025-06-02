import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const data = [
  { month: 'Jan', Success: 20, Failed: 80, Pending: 230 },
  { month: 'Feb', Success: 200, Failed: 85, Pending: 340 },
  { month: 'Mar', Success: 310, Failed: 95, Pending: 390 },
  { month: 'Apr', Success: 180, Failed: 180, Pending: 200 },
  { month: 'May', Success: 120, Failed: 280, Pending: 40 },
  { month: 'Jun', Success: 220, Failed: 200, Pending: 180 },
  { month: 'Jul', Success: 380, Failed: 180, Pending: 380 },
  { month: 'Aug', Success: 340, Failed: 300, Pending: 340 },
  { month: 'Sept', Success: 250, Failed: 400, Pending: 120 },
  { month: 'Oct', Success: 320, Failed: 380, Pending: 280 },
  { month: 'Nov', Success: 390, Failed: 260, Pending: 410 },
  { month: 'Dec', Success: 10, Failed: 390, Pending: 240 },
];

export default function DeliveryTrendChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6B7280' }}
          />
          <YAxis
            domain={[0, 400]}
            ticks={[0, 100, 200, 300, 400]}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6B7280' }}
          />
          <Line
            type="basis"
            dataKey="Success"
            stroke="#10B981"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 4, fill: '#10B981' }}
          />
          <Line
            type="basis"
            dataKey="Failed"
            stroke="#EF4444"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 4, fill: '#EF4444' }}
          />
          <Line
            type="basis"
            dataKey="Pending"
            stroke="#F59E0B"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 4, fill: '#F59E0B' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
