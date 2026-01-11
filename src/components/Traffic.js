'use client';
import React, { useState, useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';
import dummyData from '../data/dummyData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Traffic = () => {
  const [selectedMonths, setSelectedMonths] = useState(dummyData.trafficIncidents.map(d => d.month));

  const months = dummyData.trafficIncidents.map(d => d.month);
  const filteredData = dummyData.trafficIncidents.filter(d => selectedMonths.includes(d.month));

  // Bar chart data
  const barChartData = {
    labels: filteredData.map(d => d.month),
    datasets: [
      {
        label: 'Accidents',
        data: filteredData.map(d => d.accidents),
        backgroundColor: 'rgba(239, 68, 68, 0.6)',
        borderColor: 'rgba(239, 68, 68, 1)',
        borderWidth: 1,
      },
      {
        label: 'Violations',
        data: filteredData.map(d => d.violations),
        backgroundColor: 'rgba(245, 158, 11, 0.6)',
        borderColor: 'rgba(245, 158, 11, 1)',
        borderWidth: 1,
      },
      {
        label: 'Breakdowns',
        data: filteredData.map(d => d.breakdowns),
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Pie chart for distribution
  const totals = useMemo(() => {
    return {
      accidents: filteredData.reduce((sum, d) => sum + d.accidents, 0),
      violations: filteredData.reduce((sum, d) => sum + d.violations, 0),
      breakdowns: filteredData.reduce((sum, d) => sum + d.breakdowns, 0),
    };
  }, [filteredData]);

  const pieChartData = {
    labels: ['Accidents', 'Violations', 'Breakdowns'],
    datasets: [
      {
        data: [totals.accidents, totals.violations, totals.breakdowns],
        backgroundColor: [
          'rgba(239, 68, 68, 0.6)',
          'rgba(245, 158, 11, 0.6)',
          'rgba(59, 130, 246, 0.6)',
        ],
        borderColor: [
          'rgba(239, 68, 68, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(59, 130, 246, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Line chart for trends
  const lineChartData = {
    labels: filteredData.map(d => d.month),
    datasets: [
      {
        label: 'Total Incidents',
        data: filteredData.map(d => d.accidents + d.violations + d.breakdowns),
        borderColor: 'rgba(168, 85, 247, 1)',
        backgroundColor: 'rgba(168, 85, 247, 0.1)',
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
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Accidents</h3>
          <p className="text-3xl font-bold text-red-600 dark:text-red-400 mt-2">{totals.accidents.toLocaleString()}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Violations</h3>
          <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mt-2">{totals.violations.toLocaleString()}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Breakdowns</h3>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2">{totals.breakdowns.toLocaleString()}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Incidents</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
            {(totals.accidents + totals.violations + totals.breakdowns).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Incidents by Type</h2>
          <div className="h-80">
            <Bar data={barChartData} options={currentChartOptions} />
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Incident Distribution</h2>
          <div className="h-80">
            <Pie data={pieChartData} options={currentChartOptions} />
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Total Incidents Trend</h2>
          <div className="h-80">
            <Line data={lineChartData} options={currentChartOptions} />
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Monthly Incident Data</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Month</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Accidents</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Violations</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Breakdowns</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Total</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredData.map((row) => (
                <tr key={row.month} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{row.month}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 dark:text-red-400">{row.accidents.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-600 dark:text-yellow-400">{row.violations.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 dark:text-blue-400">{row.breakdowns.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 dark:text-white">
                    {(row.accidents + row.violations + row.breakdowns).toLocaleString()}
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

export default Traffic;

