'use client';
import React, { useState, useEffect, useMemo } from 'react';
import dummyData from '../data/dummyData';
import DateFilter from './DateFilter';
import ComparisonTableEnhanced from './ComparisonTableEnhanced';
import { useComparisonEnhanced } from '../hooks/useComparisonEnhanced';

const Fitness = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [selectedDistrict, setSelectedDistrict] = useState('All');
    const [expandedDistricts, setExpandedDistricts] = useState([]);

    const toggleDistrict = (district) => {
        setExpandedDistricts(prev => 
            prev.includes(district) ? prev.filter(d => d !== district) : [...prev, district]
        );
    };

    useEffect(() => {
        setIsDarkMode(document.documentElement.classList.contains('dark'));
    }, []);

    // Calculate totals
    const totals = useMemo(() => {
        return {
            totalVehicles: dummyData.fitnessData.reduce((sum, d) => sum + d.totalTransportVehicles, 0),
            totalApplied: dummyData.fitnessData.reduce((sum, d) => sum + d.certificatesApplied, 0),
            totalIssued: dummyData.fitnessData.reduce((sum, d) => sum + d.certificatesIssued, 0),
            totalRejected: dummyData.fitnessData.reduce((sum, d) => sum + d.certificatesRejected, 0),
            totalImpounded: dummyData.fitnessData.reduce((sum, d) => sum + d.certificatesImpounded, 0),
            totalFees: dummyData.fitnessData.reduce((sum, d) => sum + d.feesRealised, 0),
            totalLateFees: dummyData.fitnessData.reduce((sum, d) => sum + d.lateFeeRealised, 0),
            totalCasesBooked: dummyData.fitnessData.reduce((sum, d) => sum + d.withoutFCCasesBooked, 0)
        };
    }, []);

    // Filter data
    const comparisonProps = useComparisonEnhanced({
        initialCategory: 'certificatesIssued',
        getYearDataOptions: {
            '2024': dummyData.fitnessData || dummyData.fitnessData2026,
            '2025': dummyData.fitnessData,
            '2026': dummyData.fitnessData2026,
        }
    });

    const {
        isComparisonEnabled,
        setIsComparisonEnabled,
        primaryRange,
        setPrimaryRange,
        compareRange,
        setCompareRange,
        compareCategory,
        setCompareCategory,
        primaryDistrict,
        setPrimaryDistrict,
        compareDistrict,
        setCompareDistrict,
        primaryScale,
        compareScale,
        primaryData,
        comparisonDataRaw
    } = comparisonProps;

    const scaleRow = (row, scaleFactor) => {
        if (!row) return null;
        const scale = (val) => Math.floor(val * scaleFactor);
        return {
            ...row,
            totalTransportVehicles: scale(row.totalTransportVehicles),
            certificatesApplied: scale(row.certificatesApplied),
            certificatesIssued: scale(row.certificatesIssued),
            certificatesRejected: scale(row.certificatesRejected),
            certificatesImpounded: scale(row.certificatesImpounded),
            feesRealised: scale(row.feesRealised),
            lateFeeRealised: scale(row.lateFeeRealised),
            withoutFCCasesBooked: scale(row.withoutFCCasesBooked),
        };
    };

    const scaledPrimaryDataRaw = primaryData.map(row => scaleRow(row, primaryScale));
    const scaledComparisonDataRaw = comparisonDataRaw.map(row => scaleRow(row, compareScale));

    const scaledPrimaryData = selectedDistrict === 'All'
        ? scaledPrimaryDataRaw
        : scaledPrimaryDataRaw.filter(d => d.district === selectedDistrict);

    const categories = [
        { id: 'totalTransportVehicles', label: 'Total Transport Vehicles' },
        { id: 'certificatesApplied', label: 'FC Applied' },
        { id: 'certificatesIssued', label: 'FC Issued/Renewed' },
        { id: 'certificatesRejected', label: 'FC Rejected' },
        { id: 'certificatesImpounded', label: 'FC Impounded' },
        { id: 'feesRealised', label: 'Fitness Fee Realised' },
        { id: 'lateFeeRealised', label: 'Late Fee @₹50' },
        { id: 'withoutFCCasesBooked', label: 'Offence Cases Booked (No CF)' }
    ];

    const formatCurrency = (amount) => {
        return '₹' + amount.toLocaleString('en-IN');
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Fitness Certificate Management</h1>
                <p className="text-gray-600 dark:text-gray-400">District-wise fitness report for transport vehicles</p>
            </div>

            <DateFilter onFilterChange={({ district }) => { if (district) setSelectedDistrict(district); }} />

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Transport Vehicles</h3>
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2">{formatCurrency(totals.totalVehicles)}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Across all districts</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Certificates Issued</h3>
                    <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-2">{formatCurrency(totals.totalIssued)}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {((totals.totalIssued / totals.totalApplied) * 100).toFixed(1)}% approval rate
                    </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Fitness Fees Realized</h3>
                    <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mt-2">{formatCurrency(totals.totalFees)}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Total revenue</p>
                </div>
                <div className="bg-gradient-to-br from-red-500 to-red-600 dark:from-red-600 dark:to-red-700 rounded-lg shadow p-6">
                    <h3 className="text-sm font-medium text-red-100">Offence Cases Booked (No CF)</h3>
                    <p className="text-3xl font-bold text-white mt-2">{formatCurrency(totals.totalCasesBooked)}</p>
                    <p className="text-xs text-red-100 mt-1">Offence cases booked</p>
                </div>
            </div>

            {/* Fitness Report Table */}
            <ComparisonTableEnhanced
                title="Fitness Report District-wise"
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
                compareCategory={compareCategory}
                setCompareCategory={setCompareCategory}
                categories={categories}
                comparisonChildren={
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-100 dark:bg-gray-800 text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                            <tr>
                                <th className="px-6 py-4 text-left border-b border-gray-200 dark:border-gray-700">No.</th>
                                <th className="px-6 py-4 text-left border-b border-gray-200 dark:border-gray-700">Name of District</th>
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
                                
                                const isCurrency = ['feesRealised', 'lateFeeRealised'].includes(compareCategory);
                                
                                return (
                                    <tr key={rowPrimary.district} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40'}>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                            {idx + 1}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                            {rowPrimary.district}
                                        </td>
                                        <td className="px-6 py-4 text-right text-sm text-gray-600 dark:text-gray-400">
                                            {isCurrency ? formatCurrency(valPrimary) : valPrimary.toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4 text-right text-sm text-gray-900 dark:text-white font-semibold">
                                            {isCurrency ? formatCurrency(valComparison) : valComparison.toLocaleString()}
                                        </td>
                                        <td className={`px-6 py-4 text-right text-sm font-bold ${isPositive ? 'text-green-600 dark:text-green-400' : isNegative ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'}`}>
                                            {isPositive ? '+' : ''}{isCurrency ? formatCurrency(variance) : variance.toLocaleString()}
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
                                Sl No
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Name of District
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Total Transport Vehicles
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                FC Applied
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                FC Issued/Renewed
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                FC Rejected
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                FC Impounded
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Fitness Fee Realised
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Late Fee @₹50
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Offence Cases Booked (No CF)
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {scaledPrimaryData.map((row, idx) => {
                            const isExpanded = expandedDistricts.includes(row.district);
                            const granularRecords = isExpanded ? Array.from({ length: Math.min(row.certificatesApplied, 5) }).map((_, i) => {
                                const appliedDate = new Date(2025, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
                                const approvedDate = new Date(appliedDate);
                                approvedDate.setDate(approvedDate.getDate() + Math.floor(Math.random() * 5));
                                const validUpto = new Date(approvedDate);
                                validUpto.setFullYear(validUpto.getFullYear() + (Math.random() > 0.5 ? 1 : 2));
                                
                                return {
                                    id: i + 1,
                                    vehicleNumber: `AS-01-${Math.random().toString(36).substring(2, 4).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`,
                                    makeModel: i % 2 === 0 ? 'Tata LPT 1618' : 'Ashok Leyland Dost',
                                    classOfVehicle: 'Goods Carriage',
                                    typeOfVehicle: 'Transport',
                                    appliedDate: appliedDate.toLocaleDateString(),
                                    approvedDate: approvedDate.toLocaleDateString(),
                                    validUpto: validUpto.toLocaleDateString(),
                                    isValid: true,
                                    inspectingAuthority: `MVI ${row.district}`,
                                    issuanceAuthority: `DTO ${row.district}`,
                                    offencesBooked: Math.floor(Math.random() * 3),
                                    cfRealised: Math.floor(Math.random() * 5000),
                                    seized: Math.random() > 0.9 ? 1 : 0
                                };
                            }) : [];

                            return (
                                <React.Fragment key={row.district}>
                                    <tr 
                                        onClick={() => toggleDistrict(row.district)}
                                        className={`cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 ${idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-800/50'}`}
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                            {idx + 1}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                            <div className="flex items-center">
                                                <svg
                                                    className={`w-4 h-4 mr-2 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                </svg>
                                                {row.district}
                                            </div>
                                        </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900 dark:text-gray-300">
                                    {row.totalTransportVehicles.toLocaleString()}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-blue-600 dark:text-blue-400">
                                    {row.certificatesApplied.toLocaleString()}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600 dark:text-green-400 font-medium">
                                    {row.certificatesIssued.toLocaleString()}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600 dark:text-red-400">
                                    {row.certificatesRejected}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-orange-600 dark:text-orange-400">
                                    {row.certificatesImpounded}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-purple-600 dark:text-purple-400 font-medium">
                                    {formatCurrency(row.feesRealised)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-yellow-600 dark:text-yellow-400">
                                    {formatCurrency(row.lateFeeRealised)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600 dark:text-red-400 font-medium">
                                    {row.withoutFCCasesBooked}
                                </td>
                            </tr>
                            {isExpanded && (
                                <tr>
                                    <td colSpan={10} className="px-6 py-4 bg-gray-50 dark:bg-gray-800/80">
                                        <div className="overflow-x-auto rounded-lg shadow-inner border border-gray-200 dark:border-gray-600">
                                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                                                <thead className="bg-gray-100 dark:bg-gray-700 text-[10px] font-bold uppercase text-gray-700 dark:text-gray-300">
                                                    <tr>
                                                        <th className="px-4 py-2 text-left">Sl No</th>
                                                        <th className="px-4 py-2 text-left">Vehicle No</th>
                                                        <th className="px-4 py-2 text-left">Make/Model</th>
                                                        <th className="px-4 py-2 text-left">Class</th>
                                                        <th className="px-4 py-2 text-left">Type</th>
                                                        <th className="px-4 py-2 text-left">Applied</th>
                                                        <th className="px-4 py-2 text-left">Approved</th>
                                                        <th className="px-4 py-2 text-left">Valid Upto</th>
                                                        <th className="px-4 py-2 text-center">Valid?</th>
                                                        <th className="px-4 py-2 text-left">Inspecting Auth</th>
                                                        <th className="px-4 py-2 text-left">Issuance Auth</th>
                                                        <th className="px-4 py-2 text-right">Offences</th>
                                                        <th className="px-4 py-2 text-right">CF Realised</th>
                                                        <th className="px-4 py-2 text-right">Seized</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                                                    {granularRecords.map((rec) => (
                                                        <tr key={rec.id} className="text-xs hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                                            <td className="px-4 py-2 text-gray-900 dark:text-white font-medium">{rec.id}</td>
                                                            <td className="px-4 py-2 text-blue-600 dark:text-blue-400 font-mono">{rec.vehicleNumber}</td>
                                                            <td className="px-4 py-2 text-gray-600 dark:text-gray-400">{rec.makeModel}</td>
                                                            <td className="px-4 py-2 text-gray-600 dark:text-gray-400">{rec.classOfVehicle}</td>
                                                            <td className="px-4 py-2 text-gray-600 dark:text-gray-400">{rec.typeOfVehicle}</td>
                                                            <td className="px-4 py-2 text-gray-600 dark:text-gray-400">{rec.appliedDate}</td>
                                                            <td className="px-4 py-2 text-gray-600 dark:text-gray-400">{rec.approvedDate}</td>
                                                            <td className="px-4 py-2 text-gray-600 dark:text-gray-400">{rec.validUpto}</td>
                                                            <td className="px-4 py-2 text-center">
                                                                <span className="px-2 py-1 rounded text-[10px] font-bold uppercase bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">Yes</span>
                                                            </td>
                                                            <td className="px-4 py-2 text-gray-600 dark:text-gray-400">{rec.inspectingAuthority}</td>
                                                            <td className="px-4 py-2 text-gray-600 dark:text-gray-400">{rec.issuanceAuthority}</td>
                                                            <td className="px-4 py-2 text-right text-gray-600 dark:text-gray-400">{rec.offencesBooked}</td>
                                                            <td className="px-4 py-2 text-right text-green-600 dark:text-green-400">{formatCurrency(rec.cfRealised)}</td>
                                                            <td className="px-4 py-2 text-right text-gray-600 dark:text-gray-400">{rec.seized}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                        )})}
                    </tbody>
                </table>
            </ComparisonTableEnhanced>
        </div>
    );
};

export default Fitness;
