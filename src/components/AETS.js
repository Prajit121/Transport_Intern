'use client';
import React, { useState, useEffect, useMemo } from 'react';
import dummyData from '../data/dummyData';

const AETS = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [selectedDistrict, setSelectedDistrict] = useState('All');

    useEffect(() => {
        setIsDarkMode(document.documentElement.classList.contains('dark'));
    }, []);

    // Calculate totals
    const totals = useMemo(() => {
        return {
            totalCentres: dummyData.aetsData.reduce((sum, d) => sum + d.totalCentres, 0),
            calibratedCentres: dummyData.aetsData.reduce((sum, d) => sum + d.calibratedCentres, 0),
            totalFees: dummyData.aetsData.reduce((sum, d) => sum + d.feesDeposited, 0)
        };
    }, []);

    // Get unique districts for filter
    const districts = ['All', ...dummyData.aetsData.map(d => d.district)];

    // Filter data
    const filteredData = selectedDistrict === 'All'
        ? dummyData.aetsData
        : dummyData.aetsData.filter(d => d.district === selectedDistrict);

    const formatCurrency = (amount) => {
        return '₹' + amount.toLocaleString('en-IN');
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">AETS Management</h1>
                <p className="text-gray-600 dark:text-gray-400">Automated Emission Testing Station details and fee collections</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total AETS Centres</h3>
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2">{totals.totalCentres}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Across all districts</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Calibrated Centres</h3>
                    <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-2">{totals.calibratedCentres}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {((totals.calibratedCentres / totals.totalCentres) * 100).toFixed(1)}% of total
                    </p>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-lg shadow p-6">
                    <h3 className="text-sm font-medium text-blue-100">Total Fees Deposited</h3>
                    <p className="text-3xl font-bold text-white mt-2">{formatCurrency(totals.totalFees)}</p>
                    <p className="text-xs text-blue-100 mt-1">From all AETS centres</p>
                </div>
            </div>

            {/* Filter */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                <div className="flex items-center gap-4">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Filter by District:
                    </label>
                    <select
                        value={selectedDistrict}
                        onChange={(e) => setSelectedDistrict(e.target.value)}
                        className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                    >
                        {districts.map(district => (
                            <option key={district} value={district}>{district}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* AETS Details Table */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">AETS Details District-wise</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Complete details for the selected period
                    </p>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Name of District
                                </th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Total Available AETS Centres
                                </th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    AETS Centres Duly Calibrated
                                </th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Total Fees Deposited
                                </th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Calibration %
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            {filteredData.map((row, idx) => {
                                const calibrationPercent = ((row.calibratedCentres / row.totalCentres) * 100).toFixed(1);
                                return (
                                    <tr key={row.district} className={`hover:bg-gray-50 dark:hover:bg-gray-700 ${idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-800/50'}`}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                            {row.district}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900 dark:text-gray-300">
                                            {row.totalCentres}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600 dark:text-green-400 font-medium">
                                            {row.calibratedCentres}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-blue-600 dark:text-blue-400 font-medium">
                                            {formatCurrency(row.feesDeposited)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${parseFloat(calibrationPercent) >= 90
                                                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                                    : parseFloat(calibrationPercent) >= 75
                                                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                                }`}>
                                                {calibrationPercent}%
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AETS;
