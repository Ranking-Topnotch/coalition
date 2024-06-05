// SinusoidalChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import Dropdown from './assest/expand_more_FILL0_wght300_GRAD0_opsz24.svg'
import style from './home.module.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SinusoidalChart = () => {
  // Data for the chart
  const data = {
    labels: ['Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024', 'Feb 2024', 'Mar 2024'],
    datasets: [
      {
        label: 'Curve 1',
        data: [120, 115, 160, 110, 150, 155],
        borderColor: 'magenta',
        fill: false,
        tension: 0.4,
      },
      {
        label: 'Curve 2',
        data: [110, 65, 110, 90, 70, 80],
        borderColor: 'purple',
        fill: false,
        tension: 0.4,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value',
        },
        min: 60,
        max: 180,
      },
    },
  };

  return (
    <div>
      <div className={style.chart_section}>
        <p>Blood Pressure</p>
        <p>Last 6 month<span><img src={Dropdown} alt='dropdown' /></span></p>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default SinusoidalChart;
