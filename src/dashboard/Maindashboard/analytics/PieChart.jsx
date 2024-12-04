import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register Chart.js components and plugins
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
          '#9966FF', '#FF9F40', '#D4E157', '#90A4AE'
        ],
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw} donations`;
          }
        }
      },
      datalabels: {
        color: '#ffff', // Label color
        font: {
          weight: 400,
          size: 12
        },
        formatter: (value, context) => {
          const total = context.chart._metasets[context.datasetIndex].total;
          const percentage = ((value / total) * 100).toFixed(2);
          return `${percentage}%`; // Display percentage
        },
        anchor: 'center',
        align: 'center',
        
      }
    }
  };

  return <Pie data={chartData} options={options} />;
};

export default PieChart;
