'use client';
import React, { useState, useEffect, useMemo } from 'react';
import dummyData from '../data/dummyData';
import DateFilter from './DateFilter';
import ComparisonTable from './ComparisonTable';
import { useComparison } from '../hooks/useComparison';

const PUCC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [selectedDistrict, setSelectedDistrict] = useState('All');
    const [selectedVehicleCategory, setSelectedVehicleCategory] = useState('All');
    const [expandedDistricts, setExpandedDistricts] = useState([]);

    useEffect(() => {
        setIsDarkMode(document.documentElement.classList.contains('dark'));
    }, []);

    // Calculate totals
    const totals = useMemo(() => {
        return {
            totalApplications: dummyData.puccData.reduce((sum, d) => sum + d.totalApplications, 0),
            totalPUCCs: dummyData.puccData.reduce((sum, d) => sum + d.grandTotal, 0),
            totalFees: dummyData.puccData.reduce((sum, d) => sum + d.feesRealized, 0),
            totalLateFees: dummyData.puccData.reduce((sum, d) => sum + d.lateFeeRealized, 0),
            totalDefaulters: dummyData.puccData.reduce((sum, d) => sum + (d.totalVehicles - d.grandTotal), 0)
        };
    }, []);

    // Get unique values for filters
    const districts = ['All', ...new Set(dummyData.puccData.map(d => d.district))];
    const vehicleCategories = ['All', ...new Set(dummyData.puccData.map(d => d.vehicleCategory))];

    // Filter data
    const comparisonProps = useComparison({
        initialCategory: 'grandTotal',
        getYearDataOptions: {
            '2024': dummyData.puccData || dummyData.puccData2026, // fallback
            '2025': dummyData.puccData,
            '2026': dummyData.puccData2026,
        }
    });

    const {
        primaryScale,
        compareScale,
        primaryData,
        comparisonDataRaw,
        compareCategory
    } = comparisonProps;

    const scaleRow = (row, scaleFactor) => {
        if (!row) return null;
        const scale = (val) => Math.floor(val * scaleFactor);
        return {
            ...row,
            totalApplications: scale(row.totalApplications),
            freshWithoutLateFee: scale(row.freshWithoutLateFee),
            freshWithLateFee: scale(row.freshWithLateFee),
            grandTotal: scale(row.grandTotal),
            feesRealized: scale(row.feesRealized),
            lateFeeRealized: scale(row.lateFeeRealized),
        };
    };

    const scaledPrimaryDataRaw = primaryData.map(row => scaleRow(row, primaryScale));
    const scaledComparisonDataRaw = comparisonDataRaw.map(row => scaleRow(row, compareScale));

    const scaledPrimaryData = scaledPrimaryDataRaw.filter(row => {
        if (selectedDistrict !== 'All' && row.district !== selectedDistrict) return false;
        if (selectedVehicleCategory !== 'All' && row.vehicleCategory !== selectedVehicleCategory) return false;
        return true;
    });

    const categories = [
        { id: 'totalApplications', label: 'Total Applications' },
        { id: 'freshWithoutLateFee', label: 'PUCC Issued on Time' },
        { id: 'freshWithLateFee', label: 'PUCC Issued with Late Fee' },
        { id: 'grandTotal', label: 'Grand Total PUCC' },
        { id: 'feesRealized', label: 'PUCC Fees' },
        { id: 'lateFeeRealized', label: 'Late Fee @₹500' }
    ];

    const formatCurrency = (amount) => {
        return '₹' + amount.toLocaleString('en-IN');
    };

    const toggleDistrict = (district) => {
        setExpandedDistricts(prev =>
            prev.includes(district)
                ? prev.filter(d => d !== district)
                : [...prev, district]
        );
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">PUCC Management</h1>
                <p className="text-gray-600 dark:text-gray-400">Pollution Under Control Certificate details vehicle class-wise</p>
            </div>

            <DateFilter onFilterChange={() => { }} />

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Applications</h3>
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2">{totals.totalApplications.toLocaleString()}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Received at AETS</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border-l-4 border-yellow-500">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Defaulters</h3>
                    <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mt-2">{totals.totalDefaulters.toLocaleString()}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Pending PUCC renewals</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total PUCCs Issued</h3>
                    <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-2">{totals.totalPUCCs.toLocaleString()}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">All categories</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">PUCC Fees Realized</h3>
                    <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mt-2">{formatCurrency(totals.totalFees)}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Total revenue</p>
                </div>
                <div className="bg-gradient-to-br from-red-500 to-red-600 dark:from-red-600 dark:to-red-700 rounded-lg shadow p-6">
                    <h3 className="text-sm font-medium text-red-100">Late Fees @₹500</h3>
                    <p className="text-3xl font-bold text-white mt-2">{formatCurrency(totals.totalLateFees)}</p>
                    <p className="text-xs text-red-100 mt-1">From delayed renewals</p>
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
                            Vehicle Category (within expanded districts)
                        </label>
                        <select
                            value={selectedVehicleCategory}
                            onChange={(e) => setSelectedVehicleCategory(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                        >
                            {vehicleCategories.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* PUCC Details Table */}
            <ComparisonTable
                title="PUCC Details Vehicle Class-wise"
                isComparisonMode={comparisonProps.isComparisonMode}
                setIsComparisonMode={comparisonProps.setIsComparisonMode}
                primaryRange={comparisonProps.primaryRange}
                setPrimaryRange={comparisonProps.setPrimaryRange}
                compareRange={comparisonProps.compareRange}
                setCompareRange={comparisonProps.setCompareRange}
                compareCategory={comparisonProps.compareCategory}
                setCompareCategory={comparisonProps.setCompareCategory}
                categories={categories}
                comparisonChildren={
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-100 dark:bg-gray-800 text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                            <tr>
                                <th className="px-6 py-4 text-left border-b border-gray-200 dark:border-gray-700">District</th>
                                <th className="px-6 py-4 text-right border-b border-gray-200 dark:border-gray-700">Selected Period</th>
                                <th className="px-6 py-4 text-right border-b border-gray-200 dark:border-gray-700">Comparison Period</th>
                                <th className="px-6 py-4 text-right border-b border-gray-200 dark:border-gray-700">Variance</th>
                                <th className="px-6 py-4 text-right border-b border-gray-200 dark:border-gray-700">Trend</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {(selectedDistrict === 'All' ? districts.slice(1) : districts.filter(d => d === selectedDistrict)).map((district, idx) => {
                                const pData = scaledPrimaryDataRaw.filter(d => d.district === district);
                                const cData = scaledComparisonDataRaw.filter(d => d.district === district);
                                
                                const valPrimary = pData.reduce((sum, r) => sum + (r[compareCategory] || 0), 0);
                                const valComparison = cData.reduce((sum, r) => sum + (r[compareCategory] || 0), 0);
                                
                                const variance = valComparison - valPrimary;
                                const variancePct = valPrimary === 0 ? 0 : (variance / valPrimary) * 100;
                                
                                const isPositive = variance > 0;
                                const isNegative = variance < 0;
                                
                                return (
                                    <tr key={district} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40'}>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                            {district}
                                        </td>
                                        <td className="px-6 py-4 text-right text-sm text-gray-600 dark:text-gray-400">
                                            {['feesRealized', 'lateFeeRealized'].includes(compareCategory) ? formatCurrency(valPrimary) : valPrimary.toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4 text-right text-sm text-gray-900 dark:text-white font-semibold">
                                            {['feesRealized', 'lateFeeRealized'].includes(compareCategory) ? formatCurrency(valComparison) : valComparison.toLocaleString()}
                                        </td>
                                        <td className={`px-6 py-4 text-right text-sm font-bold ${isPositive ? 'text-green-600 dark:text-green-400' : isNegative ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'}`}>
                                            {isPositive ? '+' : ''}{['feesRealized', 'lateFeeRealized'].includes(compareCategory) ? formatCurrency(variance) : variance.toLocaleString()}
                                        </td>
                                        <td className={`px-6 py-4 text-right text-sm font-bold ${isPositive ? 'text-green-600 dark:text-green-400' : isNegative ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'}`}>
                                            <div className="flex items-center justify-end gap-1">
                                                {isPositive && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>}
                                                {isNegative && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6"></path></svg>}
                                                {isPositive ? '+' : ''}{variancePct.toFixed(1)}%
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                }
            >
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                District / Vehicle Category
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Total Applications
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                PUCC Issued on Time
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                PUCC Issued with Late Fee
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Grand Total PUCC
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                PUCC Fees
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Late Fee @₹500
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {(selectedDistrict === 'All' ? districts.slice(1) : districts.filter(d => d === selectedDistrict)).map((district) => {
                            const districtData = scaledPrimaryDataRaw.filter(d => d.district === district);
                            const isExpanded = expandedDistricts.includes(district);

                            // Calculate district totals
                            const districtTotals = districtData.reduce((acc, row) => ({
                                totalApplications: acc.totalApplications + row.totalApplications,
                                freshWithoutLateFee: acc.freshWithoutLateFee + row.freshWithoutLateFee,
                                freshWithLateFee: acc.freshWithLateFee + row.freshWithLateFee,
                                grandTotal: acc.grandTotal + row.grandTotal,
                                feesRealized: acc.feesRealized + row.feesRealized,
                                lateFeeRealized: acc.lateFeeRealized + row.lateFeeRealized
                            }), {
                                totalApplications: 0,
                                freshWithoutLateFee: 0,
                                freshWithLateFee: 0,
                                grandTotal: 0,
                                feesRealized: 0,
                                lateFeeRealized: 0
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
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-gray-900 dark:text-gray-300">
                                            {districtTotals.totalApplications.toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-green-600 dark:text-green-400">
                                            {districtTotals.freshWithoutLateFee.toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-orange-600 dark:text-orange-400">
                                            {districtTotals.freshWithLateFee.toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-blue-600 dark:text-blue-400">
                                            {districtTotals.grandTotal.toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-purple-600 dark:text-purple-400">
                                            {formatCurrency(districtTotals.feesRealized)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-red-600 dark:text-red-400">
                                            {formatCurrency(districtTotals.lateFeeRealized)}
                                        </td>
                                    </tr>

                                    {/* Expanded Vehicle Category Rows */}
                                    {isExpanded && districtData
                                        .filter(row => selectedVehicleCategory === 'All' || row.vehicleCategory === selectedVehicleCategory)
                                        .map((row, idx) => (
                                            <tr key={`${district}-${row.vehicleCategory}`} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                                <td className="px-6 py-3 pl-12 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                                                    <span className="text-gray-500 dark:text-gray-400">↳</span> {row.vehicleCategory}
                                                </td>
                                                <td className="px-6 py-3 whitespace-nowrap text-sm text-right text-gray-700 dark:text-gray-300">
                                                    {row.totalApplications}
                                                </td>
                                                <td className="px-6 py-3 whitespace-nowrap text-sm text-right text-green-600 dark:text-green-400">
                                                    {row.freshWithoutLateFee}
                                                </td>
                                                <td className="px-6 py-3 whitespace-nowrap text-sm text-right text-orange-600 dark:text-orange-400">
                                                    {row.freshWithLateFee}
                                                </td>
                                                <td className="px-6 py-3 whitespace-nowrap text-sm text-right text-blue-600 dark:text-blue-400">
                                                    {row.grandTotal}
                                                </td>
                                                <td className="px-6 py-3 whitespace-nowrap text-sm text-right text-purple-600 dark:text-purple-400">
                                                    {formatCurrency(row.feesRealized)}
                                                </td>
                                                <td className="px-6 py-3 whitespace-nowrap text-sm text-right text-red-600 dark:text-red-400">
                                                    {formatCurrency(row.lateFeeRealized)}
                                                </td>
                                            </tr>
                                        ))}
                                </React.Fragment>
                            );
                        })}
                    </tbody>
                </table>
            </ComparisonTable>
        </div>
    );
};

export default PUCC;
