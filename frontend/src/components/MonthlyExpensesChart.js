// src/components/MonthlyExpensesChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MonthlyExpensesChart = ({ data }) => {
  const chartData = {
    labels: data.map(entry => entry.month),
    datasets: [
      {
        label: 'Total Gasto',
        data: data.map(entry => entry.totalSpent),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Total Gasto por Mês',
        font: {
          size: 18,
        },
      },
      legend: {
        position: 'top',
      },
    },
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default MonthlyExpensesChart;
