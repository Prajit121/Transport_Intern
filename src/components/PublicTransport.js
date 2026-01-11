'use client';
import React, { useState, useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import dummyData from '../data/dummyData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const PublicTransport = () => {
  const [selectedMonths, setSelectedMonths] = useState(dummyData.publicTransportRidership.map(d => d.month));

  const months = dummyData.publicTransportRidership.map(d => d.month);
  const filteredData = dummyData.publicTransportRidership.filter(d => selectedMonths.includes(d.month));

  // Passenger count bar chart
  const passengerChartData = {
    labels: filteredData.map(d => d.month),
    datasets: [
      {
        label: 'Passenger Count',
        data: filteredData.map(d => d.passengerCount),
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
    ],
  };

  // On-time performance line chart
  const onTimeChartData = {
    labels: filteredData.map(d => d.month),
    datasets: [
      {
        label: 'On-Time Percentage',
        data: filteredData.map(d => d.onTimePercentage),
        borderColor: 'rgba(16, 185, 129, 1)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'rgba(0, 0, 0, 0.7)',
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: 'rgba(0, 0, 0, 0.7)',
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
      x: {
        ticks: {
          color: 'rgba(0, 0, 0, 0.7)',
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
    },
  };

  const darkChartOptions = {
    ...chartOptions,
    plugins: {
      ...chartOptions.plugins,
      legend: {
        ...chartOptions.plugins.legend,
        labels: {
          color: 'rgba(255, 255, 255, 0.7)',
        },
      },
    },
    scales: {
      y: {
        ...chartOptions.scales.y,
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
      },
      x: {
        ...chartOptions.scales.x,
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
      },
    },
  };

  const isDarkMode = document.documentElement.classList.contains('dark');
  const currentChartOptions = isDarkMode ? darkChartOptions : chartOptions;

  const stats = useMemo(() => {
    const totalPassengers = filteredData.reduce((sum, d) => sum + d.passengerCount, 0);
    const avgOnTime = filteredData.reduce((sum, d) => sum + d.onTimePercentage, 0) / filteredData.length;
    const maxPassengers = Math.max(...filteredData.map(d => d.passengerCount));
    const minPassengers = Math.min(...filteredData.map(d => d.passengerCount));

    return {
      totalPassengers,
      avgOnTime: avgOnTime.toFixed(1),
      maxPassengers,
      minPassengers,
    };
  }, [filteredData]);

  const handleMonthToggle = (month) => {
    setSelectedMonths(prev =>
      prev.includes(month)
        ? prev.filter(m => m !== month)
        : [...prev, month]
    );
  };

  return (
    <div className="space-y-6">
      {/* Month Filter */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Filter by Month</h3>
        <div className="flex flex-wrap gap-2">
          {months.map(month => (
            <button
              key={month}
              onClick={() => handleMonthToggle(month)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${selectedMonths.includes(month)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
            >
              {month}
            </button>
          ))}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Passengers</h3>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2">
            {(stats.totalPassengers / 1000000).toFixed(2)}M
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg. On-Time Performance</h3>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-2">{stats.avgOnTime}%</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Peak Month</h3>
          <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mt-2">
            {(stats.maxPassengers / 1000).toFixed(0)}K
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Lowest Month</h3>
          <p className="text-3xl font-bold text-gray-600 dark:text-gray-400 mt-2">
            {(stats.minPassengers / 1000).toFixed(0)}K
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Passenger Count</h2>
          <div className="h-80">
            <Bar data={passengerChartData} options={currentChartOptions} />
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">On-Time Performance</h2>
          <div className="h-80">
            <Line data={onTimeChartData} options={{
              ...currentChartOptions,
              scales: {
                ...currentChartOptions.scales,
                y: {
                  ...currentChartOptions.scales.y,
                  min: 0,
                  max: 100,
                },
              },
            }} />
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Monthly Ridership Data</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Month</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Passenger Count</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">On-Time %</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredData.map((row) => (
                <tr key={row.month} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{row.month}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {row.passengerCount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`font-semibold ${row.onTimePercentage >= 90 ? 'text-green-600 dark:text-green-400' :
                        row.onTimePercentage >= 80 ? 'text-yellow-600 dark:text-yellow-400' :
                          'text-red-600 dark:text-red-400'
                      }`}>
                      {row.onTimePercentage.toFixed(1)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PublicTransport;

