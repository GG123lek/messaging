import React from 'react';

const WaterfallChart = () => {
  const data = [
    { name: 'UBA', value: 10, cumulative: 10 },
    { name: 'Eco Bank', value: 10, cumulative: 20 },
    { name: 'GTB', value: 10, cumulative: 30 },
    { name: 'First Bank', value: 10, cumulative: 40 },
    { name: 'Hope Bank', value: 10, cumulative: 50 }
  ];

  // Responsive dimensions
  const chartWidth = 278;  // ← Increased from 607 to better fit the container
  const chartHeight = 355; // ← Your specified height
  const margin = { top: 20, right: 15, bottom: 35, left: 25 };
  const innerWidth = chartWidth - margin.left - margin.right;
  const innerHeight = chartHeight - margin.top - margin.bottom;
  
  const maxValue = 50;
  const barWidth = innerWidth / data.length * 0.6;
  const barSpacing = innerWidth / data.length;

  // Y-axis scale
  const yScale = (value) => innerHeight - (value / maxValue) * innerHeight;
  
  // Generate Y-axis ticks
  const yTicks = [0, 10, 20, 30, 40, 50];

  return (
    <div className="w-full h-full">
      <svg 
        width="100%" 
        height={chartHeight} 
        viewBox={`0 0 ${chartWidth} ${chartHeight}`}
        className="max-w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Chart background */}
        <rect 
          x={margin.left} 
          y={margin.top} 
          width={innerWidth} 
          height={innerHeight} 
          fill="white" 
          stroke="none"
        />
        
        {/* Y-axis grid lines */}
        {yTicks.map((tick) => (
          <line
            key={tick}
            x1={margin.left}
            y1={margin.top + yScale(tick)}
            x2={margin.left + innerWidth}
            y2={margin.top + yScale(tick)}
            stroke="#f0f0f0"
            strokeWidth={1}
          />
        ))}
        
        {/* Y-axis */}
        <line
          x1={margin.left}
          y1={margin.top}
          x2={margin.left}
          y2={margin.top + innerHeight}
          stroke="#333"
          strokeWidth={1}
        />
        
        {/* X-axis */}
        <line
          x1={margin.left}
          y1={margin.top + innerHeight}
          x2={margin.left + innerWidth}
          y2={margin.top + innerHeight}
          stroke="#333"
          strokeWidth={1}
        />
        
        {/* Y-axis labels */}
        {yTicks.map((tick) => (
          <text
            key={tick}
            x={margin.left - 8}
            y={margin.top + yScale(tick) + 4}
            textAnchor="end"
            fontSize="10"
            fill="#666"
          >
            {tick}
          </text>
        ))}
        
        {/* Bars and connecting lines */}
        {data.map((item, index) => {
          const x = margin.left + index * barSpacing + (barSpacing - barWidth) / 2;
          const barHeight = (item.value / maxValue) * innerHeight;
          const barY = margin.top + yScale(item.cumulative);
          const prevCumulative = index > 0 ? data[index - 1].cumulative : 0;
          
          return (
            <g key={item.name}>
              {/* Connecting line from previous bar */}
              {index > 0 && (
                <line
                  x1={margin.left + (index - 1) * barSpacing + (barSpacing - barWidth) / 2 + barWidth}
                  y1={margin.top + yScale(prevCumulative)}
                  x2={x}
                  y2={margin.top + yScale(prevCumulative)}
                  stroke="#333"
                  strokeWidth={1}
                  strokeDasharray="2,2"
                />
              )}
              
              {/* Bar */}
              <rect
                x={x}
                y={barY}
                width={barWidth}
                height={barHeight}
                fill="#9bb5ff"
                stroke="#7ba3ff"
                strokeWidth={1}
              />
              
              {/* X-axis label */}
              <text
                x={x + barWidth / 2}
                y={margin.top + innerHeight + 15}
                textAnchor="middle"
                fontSize="8"
                fill="#666"
              >
                {item.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default WaterfallChart;