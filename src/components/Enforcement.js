'use client';
import React, { useState, useEffect, useMemo } from 'react';
import dummyData from '../data/dummyData';

const Enforcement = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [selectedDistrict, setSelectedDistrict] = useState('All');
    const [selectedOffenceType, setSelectedOffenceType] = useState('All');
    const [expandedDistricts, setExpandedDistricts] = useState([]);

    useEffect(() => {
        setIsDarkMode(document.documentElement.classList.contains('dark'));
    }, []);

    // Calculate totals
    const totals = useMemo(() => {
        return {
            totalCasesBooked: dummyData.enforcementData.reduce((sum, d) => sum + d.casesBooked, 0),
            totalCFImposed: dummyData.enforcementData.reduce((sum, d) => sum + d.cfImposed, 0),
            totalCasesDisposed: dummyData.enforcementData.reduce((sum, d) => sum + d.casesDisposed, 0),
            totalCFRealised: dummyData.enforcementData.reduce((sum, d) => sum + d.cfRealised, 0),
            totalCasesPending: dummyData.enforcementData.reduce((sum, d) => sum + d.casesPending, 0),
            totalLicensesSuspended: dummyData.enforcementData.reduce((sum, d) => sum + d.licensesSuspended, 0)
        };
    }, []);

    // Get unique values for filters
    const districts = ['All', ...new Set(dummyData.enforcementData.map(d => d.district))];
    const offenceTypes = ['All', ...new Set(dummyData.enforcementData.map(d => d.offenceType))];

    const toggleDistrict = (district) => {
        setExpandedDistricts(prev =>
            prev.includes(district)
                ? prev.filter(d => d !== district)
                : [...prev, district]
        );
    };

    const formatCurrency = (amount) => {
        return '₹' + amount.toLocaleString('en-IN');
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Enforcement Management</h1>
                <p className="text-gray-600 dark:text-gray-400">Total offence case detection report and CF realization offence-wise & district-wise</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Cases Booked</h3>
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2">{totals.totalCasesBooked.toLocaleString()}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">All offence types</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">CF Imposed</h3>
                    <p className="text-3xl font-bold text-orange-600 dark:text-orange-400 mt-2">{formatCurrency(totals.totalCFImposed)}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Total compounding fees</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">CF Realised</h3>
                    <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-2">{formatCurrency(totals.totalCFRealised)}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {((totals.totalCFRealised / totals.totalCFImposed) * 100).toFixed(1)}% collection rate
                    </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Cases Disposed</h3>
                    <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mt-2">{totals.totalCasesDisposed.toLocaleString()}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {((totals.totalCasesDisposed / totals.totalCasesBooked) * 100).toFixed(1)}% disposal rate
                    </p>
                </div>
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 dark:from-yellow-600 dark:to-yellow-700 rounded-lg shadow p-6">
                    <h3 className="text-sm font-medium text-yellow-100">Cases Pending</h3>
                    <p className="text-3xl font-bold text-white mt-2">{totals.totalCasesPending.toLocaleString()}</p>
                    <p className="text-xs text-yellow-100 mt-1">Yet to be disposed</p>
                </div>
                <div className="bg-gradient-to-br from-red-500 to-red-600 dark:from-red-600 dark:to-red-700 rounded-lg shadow p-6">
                    <h3 className="text-sm font-medium text-red-100">Licenses Suspended</h3>
                    <p className="text-3xl font-bold text-white mt-2">{totals.totalLicensesSuspended.toLocaleString()}</p>
                    <p className="text-xs text-red-100 mt-1">Driving licenses</p>
                </div>
            </div>

            {/* Filters */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Filters</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            District
                        </label>
                        <select
                            value={selectedDistrict}
                            onChange={(e) => setSelectedDistrict(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                        >
                            {districts.map(district => (
                                <option key={district} value={district}>{district}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Offence Type (within expanded districts)
                        </label>
                        <select
                            value={selectedOffenceType}
                            onChange={(e) => setSelectedOffenceType(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                        >
                            {offenceTypes.map(type => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Grouped Enforcement Table */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Offence Case Detection & CF Realization Report</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        District-wise grouped view - Click district rows to expand/collapse
                    </p>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    District / Offence Type
                                </th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Cases Booked
                                </th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    CF Imposed
                                </th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Cases Disposed
                                </th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    CF Realised
                                </th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Cases Pending
                                </th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Licenses Suspended
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            {(selectedDistrict === 'All' ? districts.slice(1) : districts.filter(d => d === selectedDistrict)).map((district) => {
                                const districtData = dummyData.enforcementData.filter(d => d.district === district);
                                const isExpanded = expandedDistricts.includes(district);

                                // Calculate district totals
                                const districtTotals = districtData.reduce((acc, row) => ({
                                    casesBooked: acc.casesBooked + row.casesBooked,
                                    cfImposed: acc.cfImposed + row.cfImposed,
                                    casesDisposed: acc.casesDisposed + row.casesDisposed,
                                    cfRealised: acc.cfRealised + row.cfRealised,
                                    casesPending: acc.casesPending + row.casesPending,
                                    licensesSuspended: acc.licensesSuspended + row.licensesSuspended
                                }), {
                                    casesBooked: 0,
                                    cfImposed: 0,
                                    casesDisposed: 0,
                                    cfRealised: 0,
                                    casesPending: 0,
                                    licensesSuspended: 0
                                });

                                return (
                                    <React.Fragment key={district}>
                                        {/* District Summary Row */}
                                        <tr
                                            onClick={() => toggleDistrict(district)}
                                            className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer transition-colors"
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-white">
                                                <div className="flex items-center">
                                                    <svg
                                                        className={`w-4 h-4 mr-2 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    {district}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-blue-600 dark:text-blue-400">
                                                {districtTotals.casesBooked.toLocaleString()}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-orange-600 dark:text-orange-400">
                                                {formatCurrency(districtTotals.cfImposed)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-purple-600 dark:text-purple-400">
                                                {districtTotals.casesDisposed.toLocaleString()}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-green-600 dark:text-green-400">
                                                {formatCurrency(districtTotals.cfRealised)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-yellow-600 dark:text-yellow-400">
                                                {districtTotals.casesPending.toLocaleString()}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-red-600 dark:text-red-400">
                                                {districtTotals.licensesSuspended.toLocaleString()}
                                            </td>
                                        </tr>

                                        {/* Expanded Offence Rows */}
                                        {isExpanded && districtData
                                            .filter(row => selectedOffenceType === 'All' || row.offenceType === selectedOffenceType)
                                            .map((row, idx) => (
                                                <tr key={`${district}-${row.offenceType}`} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                                    <td className="px-6 py-3 pl-12 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                                                        <span className="text-gray-500 dark:text-gray-400">↳</span> {row.offenceType}
                                                    </td>
                                                    <td className="px-6 py-3 whitespace-nowrap text-sm text-right text-blue-600 dark:text-blue-400">
                                                        {row.casesBooked}
                                                    </td>
                                                    <td className="px-6 py-3 whitespace-nowrap text-sm text-right text-orange-600 dark:text-orange-400">
                                                        {formatCurrency(row.cfImposed)}
                                                    </td>
                                                    <td className="px-6 py-3 whitespace-nowrap text-sm text-right text-purple-600 dark:text-purple-400">
                                                        {row.casesDisposed}
                                                    </td>
                                                    <td className="px-6 py-3 whitespace-nowrap text-sm text-right text-green-600 dark:text-green-400">
                                                        {formatCurrency(row.cfRealised)}
                                                    </td>
                                                    <td className="px-6 py-3 whitespace-nowrap text-sm text-right text-yellow-600 dark:text-yellow-400">
                                                        {row.casesPending}
                                                    </td>
                                                    <td className="px-6 py-3 whitespace-nowrap text-sm text-right text-red-600 dark:text-red-400">
                                                        {row.licensesSuspended}
                                                    </td>
                                                </tr>
                                            ))}
                                    </React.Fragment>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Enforcement;
