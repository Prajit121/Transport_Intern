'use client';
import React, { useState, useEffect, useMemo } from 'react';
import dummyData from '../data/dummyData';
import DateFilter from './DateFilter';
import ComparisonTableEnhanced from './ComparisonTableEnhanced';
import { getMonthsInRange } from '../utils/dateUtils';
import { formatCurrency, formatCurrencyForComparison } from '../utils/currencyUtils';
import { useComparisonEnhanced } from '../hooks/useComparisonEnhanced';

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

    const comparisonProps = useComparisonEnhanced({
        initialCategory: 'feesDeposited',
        getYearDataOptions: {
            '2024': dummyData.aetsData || dummyData.aetsData2026,
            '2025': dummyData.aetsData,
            '2026': dummyData.aetsData2026,
        }
    });

    const {
        isComparisonEnabled,
        setIsComparisonEnabled,
        primaryRange,
        setPrimaryRange,
        compareRange,
        setCompareRange,
        primaryScale,
        compareScale,
        primaryData,
        comparisonDataRaw,
        compareCategory,
        setCompareCategory,
        primaryDistrict,
        setPrimaryDistrict,
        compareDistrict,
        setCompareDistrict
    } = comparisonProps;

    const scaleRow = (row, scaleFactor) => {
        if (!row) return null;
        const scale = (val) => Math.floor(val * scaleFactor);
        return {
            ...row,
            // totalCentres is static, only scale the rest if necessary
            totalCentres: row.totalCentres,
            calibratedCentres: scale(row.calibratedCentres),
            feesDeposited: scale(row.feesDeposited),
        };
    };

    const scaledPrimaryDataRaw = primaryData.map(row => scaleRow(row, primaryScale));
    const scaledComparisonDataRaw = comparisonDataRaw.map(row => scaleRow(row, compareScale));

    const scaledPrimaryData = selectedDistrict === 'All'
        ? scaledPrimaryDataRaw
        : scaledPrimaryDataRaw.filter(d => d.district === selectedDistrict);

    const categories = [
        { id: 'totalCentres', label: 'Total AETS Centres' },
        { id: 'calibratedCentres', label: 'Calibrated Centres' },
        { id: 'feesDeposited', label: 'Total Fees Deposited' }
    ];

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

            <DateFilter onFilterChange={({ district }) => { if (district) setSelectedDistrict(district); }} />

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

            {/* AETS Details Table */}
            <ComparisonTableEnhanced
                title="AETS Details District-wise"
                isComparisonEnabled={isComparisonEnabled}
                setIsComparisonEnabled={setIsComparisonEnabled}
                primaryRange={primaryRange}
                setPrimaryRange={setPrimaryRange}
                compareRange={compareRange}
                setCompareRange={setCompareRange}
                primaryDistrict={primaryDistrict}
                setPrimaryDistrict={setPrimaryDistrict}
                compareDistrict={compareDistrict}
                setCompareDistrict={setCompareDistrict}
                categories={categories}
                comparisonChildren={
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-100 dark:bg-gray-800 text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                            <tr>
                                <th className="px-6 py-4 text-left border-b border-gray-200 dark:border-gray-700">Serial No.</th>
                                <th className="px-6 py-4 text-left border-b border-gray-200 dark:border-gray-700">District</th>
                                <th className="px-6 py-4 text-right border-b border-gray-200 dark:border-gray-700">Selected Period</th>
                                <th className="px-6 py-4 text-right border-b border-gray-200 dark:border-gray-700">Comparison Period</th>
                                <th className="px-6 py-4 text-right border-b border-gray-200 dark:border-gray-700">Variance</th>
                                <th className="px-6 py-4 text-right border-b border-gray-200 dark:border-gray-700">Trend</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {scaledPrimaryData.map((rowPrimary, idx) => {
                                const rowComparison = scaledComparisonDataRaw?.find(d => d.district === rowPrimary.district);
                                
                                const valPrimary = rowPrimary[compareCategory] || 0;
                                const valComparison = rowComparison ? rowComparison[compareCategory] || 0 : 0;
                                
                                const variance = valComparison - valPrimary;
                                const variancePct = valPrimary === 0 ? 0 : (variance / valPrimary) * 100;
                                
                                const isPositive = variance > 0;
                                const isNegative = variance < 0;
                                
                                const isCurrency = ['feesDeposited'].includes(compareCategory);
                                
                                return (
                                    <tr key={rowPrimary.district} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40'}>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                            {idx + 1}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                            {rowPrimary.district}
                                        </td>
                                        <td className="px-6 py-4 text-right text-sm text-gray-600 dark:text-gray-400">
                                            {formatCurrency(valPrimary)}
                                        </td>
                                        <td className="px-6 py-4 text-right text-sm text-gray-900 dark:text-white font-semibold">
                                            {formatCurrency(valComparison)}
                                        </td>
                                        <td className={`px-6 py-4 text-right text-sm font-bold ${isPositive ? 'text-green-600 dark:text-green-400' : isNegative ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'}`}>
                                            {isPositive ? '+' : ''}{formatCurrency(variance)}
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
                                Serial No.
                            </th>
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
                        {scaledPrimaryData.map((row, idx) => {
                            const calibrationPercent = ((row.calibratedCentres / row.totalCentres) * 100).toFixed(1);
                            return (
                                <tr key={row.district} className={`hover:bg-gray-50 dark:hover:bg-gray-700 ${idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-800/50'}`}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                        {idx + 1}
                                    </td>
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
            </ComparisonTableEnhanced>
        </div>
    );
};

export default AETS;
