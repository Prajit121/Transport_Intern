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

const Maintenance = () => {
  const [selectedMonths, setSelectedMonths] = useState(dummyData.roadMaintenance.map(d => d.month));

  const months = dummyData.roadMaintenance.map(d => d.month);
  const filteredData = dummyData.roadMaintenance.filter(d => selectedMonths.includes(d.month));

  // Completion rate line chart
  const completionChartData = {
    labels: filteredData.map(d => d.month),
    datasets: [
      {
        label: 'Completion Rate (%)',
        data: filteredData.map(d => d.completionRate),
        borderColor: 'rgba(16, 185, 129, 1)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Projects bar chart
  const projectsChartData = {
    labels: filteredData.map(d => d.month),
    datasets: [
      {
        label: 'Scheduled Projects',
        data: filteredData.map(d => d.scheduledProjects),
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
      {
        label: 'Completed Projects',
        data: filteredData.map(d => d.completedProjects),
        backgroundColor: 'rgba(16, 185, 129, 0.6)',
        borderColor: 'rgba(16, 185, 129, 1)',
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
    const avgCompletion = filteredData.reduce((sum, d) => sum + d.completionRate, 0) / filteredData.length;
    const totalScheduled = filteredData.reduce((sum, d) => sum + d.scheduledProjects, 0);
    const totalCompleted = filteredData.reduce((sum, d) => sum + d.completedProjects, 0);
    const bestCompletion = Math.max(...filteredData.map(d => d.completionRate));

    return {
      avgCompletion: avgCompletion.toFixed(1),
      totalScheduled,
      totalCompleted,
      bestCompletion: bestCompletion.toFixed(1),
      completionRate: totalScheduled > 0 ? ((totalCompleted / totalScheduled) * 100).toFixed(1) : 0,
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
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg. Completion Rate</h3>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-2">{stats.avgCompletion}%</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Scheduled</h3>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2">{stats.totalScheduled}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Completed</h3>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-2">{stats.totalCompleted}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Best Month</h3>
          <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mt-2">{stats.bestCompletion}%</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Completion Rate Trend</h2>
          <div className="h-80">
            <Line data={completionChartData} options={{
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
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Projects Status</h2>
          <div className="h-80">
            <Bar data={projectsChartData} options={currentChartOptions} />
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Monthly Maintenance Data</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Month</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Completion Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Scheduled</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Completed</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredData.map((row) => (
                <tr key={row.month} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{row.month}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`font-semibold ${row.completionRate >= 90 ? 'text-green-600 dark:text-green-400' :
                        row.completionRate >= 75 ? 'text-yellow-600 dark:text-yellow-400' :
                          'text-red-600 dark:text-red-400'
                      }`}>
                      {row.completionRate}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{row.scheduledProjects}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400 font-semibold">
                    {row.completedProjects}
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

export default Maintenance;

