'use client';
import React, { useState, useEffect, useMemo } from 'react';
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

const Overview = () => {
  const [selectedMonths, setSelectedMonths] = useState(dummyData.vehicleRegistrations.map(d => d.month));

  const months = dummyData.vehicleRegistrations.map(d => d.month);

  // Calculate aggregated statistics
  const stats = useMemo(() => {
    const filteredData = dummyData.vehicleRegistrations.filter(d => selectedMonths.includes(d.month));

    const totalVehicles = filteredData.reduce((sum, d) => sum + d.cars + d.bikes + d.trucks, 0);
    const totalIncidents = dummyData.trafficIncidents
      .filter(d => selectedMonths.includes(d.month))
      .reduce((sum, d) => sum + d.accidents + d.violations + d.breakdowns, 0);
    const avgOnTime = dummyData.publicTransportRidership
      .filter(d => selectedMonths.includes(d.month))
      .reduce((sum, d) => sum + d.onTimePercentage, 0) / selectedMonths.length;
    const avgDelay = dummyData.congestionLevels
      .filter(d => selectedMonths.includes(d.month))
      .reduce((sum, d) => sum + d.averageDelayMinutes, 0) / selectedMonths.length;
    const avgMPG = dummyData.fuelEfficiency
      .filter(d => selectedMonths.includes(d.month))
      .reduce((sum, d) => sum + d.averageMPG, 0) / selectedMonths.length;
    const avgMaintenance = dummyData.roadMaintenance
      .filter(d => selectedMonths.includes(d.month))
      .reduce((sum, d) => sum + d.completionRate, 0) / selectedMonths.length;

    return {
      totalVehicles,
      totalIncidents,
      avgOnTime: avgOnTime.toFixed(1),
      avgDelay: avgDelay.toFixed(1),
      avgMPG: avgMPG.toFixed(1),
      avgMaintenance: avgMaintenance.toFixed(1),
    };
  }, [selectedMonths]);

  // Vehicle registrations chart data
  const vehicleChartData = {
    labels: months.filter(m => selectedMonths.includes(m)),
    datasets: [
      {
        label: 'Cars',
        data: dummyData.vehicleRegistrations
          .filter(d => selectedMonths.includes(d.month))
          .map(d => d.cars),
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
      {
        label: 'Bikes',
        data: dummyData.vehicleRegistrations
          .filter(d => selectedMonths.includes(d.month))
          .map(d => d.bikes),
        backgroundColor: 'rgba(16, 185, 129, 0.6)',
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 1,
      },
      {
        label: 'Trucks',
        data: dummyData.vehicleRegistrations
          .filter(d => selectedMonths.includes(d.month))
          .map(d => d.trucks),
        backgroundColor: 'rgba(245, 158, 11, 0.6)',
        borderColor: 'rgba(245, 158, 11, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Traffic incidents pie chart data
  const incidentTotals = useMemo(() => {
    const filtered = dummyData.trafficIncidents.filter(d => selectedMonths.includes(d.month));
    return {
      accidents: filtered.reduce((sum, d) => sum + d.accidents, 0),
      violations: filtered.reduce((sum, d) => sum + d.violations, 0),
      breakdowns: filtered.reduce((sum, d) => sum + d.breakdowns, 0),
    };
  }, [selectedMonths]);

  const incidentChartData = {
    labels: ['Accidents', 'Violations', 'Breakdowns'],
    datasets: [
      {
        data: [incidentTotals.accidents, incidentTotals.violations, incidentTotals.breakdowns],
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

  // Congestion trend line chart
  const congestionChartData = {
    labels: months.filter(m => selectedMonths.includes(m)),
    datasets: [
      {
        label: 'Average Delay (minutes)',
        data: dummyData.congestionLevels
          .filter(d => selectedMonths.includes(d.month))
          .map(d => d.averageDelayMinutes),
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

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains('dark'));
  }, []);

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

      {/* Key Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Vehicle Registrations</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stats.totalVehicles.toLocaleString()}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Traffic Incidents</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stats.totalIncidents.toLocaleString()}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg. On-Time Performance</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stats.avgOnTime}%</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg. Congestion Delay</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stats.avgDelay} min</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg. Fuel Efficiency</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stats.avgMPG} MPG</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg. Maintenance Rate</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stats.avgMaintenance}%</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Vehicle Registrations</h2>
          <div className="h-64">
            <Bar data={vehicleChartData} options={currentChartOptions} />
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Traffic Incidents Distribution</h2>
          <div className="h-64">
            <Pie data={incidentChartData} options={currentChartOptions} />
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Congestion Trends</h2>
          <div className="h-64">
            <Line data={congestionChartData} options={currentChartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

