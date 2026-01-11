'use client';
import React, { useState, useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import dummyData from '../data/dummyData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Sustainability = () => {
  const [selectedMonths, setSelectedMonths] = useState(dummyData.fuelEfficiency.map(d => d.month));

  const months = dummyData.fuelEfficiency.map(d => d.month);
  const filteredFuelData = dummyData.fuelEfficiency.filter(d => selectedMonths.includes(d.month));
  const filteredCongestionData = dummyData.congestionLevels.filter(d => selectedMonths.includes(d.month));

  // Fuel efficiency line chart
  const fuelChartData = {
    labels: filteredFuelData.map(d => d.month),
    datasets: [
      {
        label: 'Average MPG',
        data: filteredFuelData.map(d => d.averageMPG),
        borderColor: 'rgba(16, 185, 129, 1)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Congestion bar chart
  const congestionChartData = {
    labels: filteredCongestionData.map(d => d.month),
    datasets: [
      {
        label: 'Average Delay (minutes)',
        data: filteredCongestionData.map(d => d.averageDelayMinutes),
        backgroundColor: 'rgba(239, 68, 68, 0.6)',
        borderColor: 'rgba(239, 68, 68, 1)',
        borderWidth: 1,
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
    const avgMPG = filteredFuelData.reduce((sum, d) => sum + d.averageMPG, 0) / filteredFuelData.length;
    const avgDelay = filteredCongestionData.reduce((sum, d) => sum + d.averageDelayMinutes, 0) / filteredCongestionData.length;
    const bestMPG = Math.max(...filteredFuelData.map(d => d.averageMPG));
    const worstDelay = Math.max(...filteredCongestionData.map(d => d.averageDelayMinutes));

    return {
      avgMPG: avgMPG.toFixed(1),
      avgDelay: avgDelay.toFixed(1),
      bestMPG: bestMPG.toFixed(1),
      worstDelay: worstDelay.toFixed(1),
    };
  }, [filteredFuelData, filteredCongestionData]);

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
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg. Fuel Efficiency</h3>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-2">{stats.avgMPG} MPG</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Best MPG</h3>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-2">{stats.bestMPG} MPG</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg. Congestion Delay</h3>
          <p className="text-3xl font-bold text-red-600 dark:text-red-400 mt-2">{stats.avgDelay} min</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Worst Delay</h3>
          <p className="text-3xl font-bold text-red-600 dark:text-red-400 mt-2">{stats.worstDelay} min</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Fuel Efficiency Trends</h2>
          <div className="h-80">
            <Line data={fuelChartData} options={currentChartOptions} />
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Congestion Levels</h2>
          <div className="h-80">
            <Bar data={congestionChartData} options={currentChartOptions} />
          </div>
        </div>
      </div>

      {/* Data Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Fuel Efficiency Data</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Month</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Avg. MPG</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {filteredFuelData.map((row) => (
                  <tr key={row.month} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{row.month}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400 font-semibold">
                      {row.averageMPG} MPG
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Congestion Data</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Month</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Avg. Delay</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {filteredCongestionData.map((row) => (
                  <tr key={row.month} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{row.month}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 dark:text-red-400 font-semibold">
                      {row.averageDelayMinutes} min
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;

