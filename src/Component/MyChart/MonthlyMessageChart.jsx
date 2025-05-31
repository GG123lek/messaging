import React from 'react';
import Chart from 'react-apexcharts';

const MonthlyMessageChart = () => {
  const series = [
    {
      name: 'New Messages',
      data: [180, 270, 80, 320, 140, 310],
    },
    {
      name: 'Replies',
      data: [340, 240, 380, 300, 300, 390],
    },
    {
      name: 'Forwards',
      data: [170, 120, 250, 110, 250, 80],
    },
  ];

  const options = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
        borderRadius: 4,
      },
    },
    colors: ['#4EC9F0', '#FCD34D', '#F87171'], // Optional: match your visual style
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept'],
      labels: {
        style: {
          colors: '#CBD5E1', // light gray text
        },
      },
    },
    yaxis: {
      min: 0,
      max: 400,
      tickAmount: 4,
      labels: {
        style: {
          colors: '#CBD5E1',
        },
      },
    },
    grid: {
      borderColor: '#E5E7EB', // subtle grid lines
      strokeDashArray: 4,
    },
    legend: {
      show: false,
    },
    tooltip: {
      theme: 'dark',
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default MonthlyMessageChart;
