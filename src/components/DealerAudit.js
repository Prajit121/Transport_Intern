'use client';
import React, { useState, useEffect } from 'react';
import dummyData from '../data/dummyData';
import ComparisonTableEnhanced from './ComparisonTableEnhanced';
import { useComparisonEnhanced } from '../hooks/useComparisonEnhanced';
import { formatCurrency } from '../utils/currencyUtils';

const DealerAudit = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [expandedDealer, setExpandedDealer] = useState(null);

    useEffect(() => {
        setIsDarkMode(document.documentElement.classList.contains('dark'));
    }, []);

    // Enhance base dealers with district/jurisdiction
    const dealersBase = dummyData.dealerAuditData.map((d, i) => {
        const twoWheelerTransport = Math.floor(d.twoWheeler * 0.1);
        const twoWheelerNonTransport = d.twoWheeler - twoWheelerTransport;
        return {
            ...d,
            district: i % 2 === 0 ? 'Kamrup' : 'Jorhat',
            jurisdiction: i % 2 === 0 ? 'Kamrup (M)' : 'Jorhat RTO',
            rtoName: i % 2 === 0 ? 'DTO Kamrup Metro' : 'DTO Jorhat',
            classOfVehicle: i % 2 === 0 ? 'LMV / 2W' : 'HMV / 3W',
            typeOfVehicle: i % 2 === 0 ? 'Non-Transport' : 'Transport',
            twoWheelerTransport,
            twoWheelerNonTransport,
        };
    });

    const dealers2025 = dealersBase;
    const dealers2026 = dealersBase.map(d => ({
        ...d,
        totalRegistrations: Math.floor(d.totalRegistrations * 1.15),
        twoWheeler: Math.floor(d.twoWheeler * 1.15),
        threeWheeler: Math.floor(d.threeWheeler * 1.15),
        nonTransport: Math.floor(d.nonTransport * 1.15),
    }));

    const dealerCategories = [
        { id: 'totalRegistrations', label: 'Total Registrations' },
        { id: 'twoWheelerTransport', label: '2 Wheeler (Transport)' },
        { id: 'twoWheelerNonTransport', label: '2 Wheeler (Non-Transport)' },
        { id: 'threeWheeler', label: '3 Wheeler' }
    ];

    const comparisonProps = useComparisonEnhanced({
        initialCategory: 'totalRegistrations',
        getYearDataOptions: {
            '2024': dealers2025,
            '2025': dealers2025,
            '2026': dealers2026,
        }
    });

    const comparisonPropsYOY = useComparisonEnhanced({
        initialCategory: 'totalRegistrations',
        getYearDataOptions: {
            '2024': dealers2025,
            '2025': dealers2025,
            '2026': dealers2026,
        }
    });

    const dealers = dealersBase;
    const totalDealers = dealers.length;

    const scaleRow = (row, scale) => {
        if (!row) return null;
        return {
            ...row,
            totalRegistrations: Math.floor(row.totalRegistrations * scale),
            twoWheeler: Math.floor(row.twoWheeler * scale),
            twoWheelerTransport: Math.floor(row.twoWheelerTransport * scale),
            twoWheelerNonTransport: Math.floor(row.twoWheelerNonTransport * scale),
            threeWheeler: Math.floor(row.threeWheeler * scale),
            nonTransport: Math.floor(row.nonTransport * scale),
        };
    };

    // Primary Table Scaling
    const scaledPrimaryDataRaw = comparisonProps.primaryData.map(row => scaleRow(row, comparisonProps.primaryScale));
    const scaledComparisonDataRaw = comparisonProps.comparisonDataRaw.map(row => scaleRow(row, comparisonProps.compareScale));

    const scaledPrimaryData = comparisonProps.primaryDistrict === 'All'
        ? scaledPrimaryDataRaw
        : scaledPrimaryDataRaw.filter((r) => r.district === comparisonProps.primaryDistrict);

    // YOY Table Scaling
    const scaledPrimaryDataRawYOY = comparisonPropsYOY.primaryData.map(row => scaleRow(row, comparisonPropsYOY.primaryScale));
    const scaledComparisonDataRawYOY = comparisonPropsYOY.comparisonDataRaw.map(row => scaleRow(row, comparisonPropsYOY.compareScale));

    const scaledPrimaryDataYOY = comparisonPropsYOY.primaryDistrict === 'All'
        ? scaledPrimaryDataRawYOY
        : scaledPrimaryDataRawYOY.filter((r) => r.district === comparisonPropsYOY.primaryDistrict);

    const getDealerCategoryValue = (row, category) => {
        if (!row) return 0;
        return row[category] || 0;
    };

    const toggleDealerExpand = (dealerName) => {
        if (expandedDealer === dealerName) {
            setExpandedDealer(null);
        } else {
            setExpandedDealer(dealerName);
        }
    };

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dealer Audit</h1>
            
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Dealers</h3>
                    <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{totalDealers}</p>
                </div>
            </div>

            {/* Grid of Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* 1. Dealerwise Registration */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden lg:col-span-2">
                    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white uppercase">Dealerwise Registration (Click to Expand)</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-100 dark:bg-gray-800 text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                                <tr>
                                    <th className="px-4 py-3 text-left w-12"></th>
                                    <th className="px-4 py-3 text-left">Serial No.</th>
                                    <th className="px-4 py-3 text-left">Dealer Name</th>
                                    <th className="px-4 py-3 text-right">Total Registrations</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {dealers.map((row, idx) => {
                                    const isExpanded = expandedDealer === row.dealerName;
                                    return (
                                        <React.Fragment key={idx}>
                                            <tr 
                                                className={`cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors ${idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40'}`}
                                                onClick={() => toggleDealerExpand(row.dealerName)}
                                            >
                                                <td className="px-4 py-3 text-center text-gray-500">
                                                    <svg className={`w-5 h-5 transform transition-transform ${isExpanded ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                                </td>
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{idx + 1}</td>
                                                <td className="px-4 py-3 text-sm font-medium text-blue-600 dark:text-blue-400">{row.dealerName}</td>
                                                <td className="px-4 py-3 text-sm text-right text-gray-600 dark:text-gray-400 font-bold">{row.totalRegistrations.toLocaleString()}</td>
                                            </tr>
                                            {isExpanded && (
                                                <tr className="bg-blue-50/50 dark:bg-blue-900/10">
                                                    <td colSpan="4" className="px-6 py-6 border-b border-gray-200 dark:border-gray-700">
                                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                                            <div className="bg-white dark:bg-gray-800 rounded shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                                                                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                                                                    <h4 className="text-xs font-bold uppercase text-gray-700 dark:text-gray-300">Vehicle Details & Timeline</h4>
                                                                </div>
                                                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm">
                                                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                                        <tr><td className="px-4 py-2 text-gray-500 dark:text-gray-400">Make & Model</td><td className="px-4 py-2 font-medium text-gray-900 dark:text-white">Maruti Suzuki Swift</td></tr>
                                                                        <tr><td className="px-4 py-2 text-gray-500 dark:text-gray-400">Class of Vehicle</td><td className="px-4 py-2 font-medium text-gray-900 dark:text-white">Non-Transport</td></tr>
                                                                        <tr><td className="px-4 py-2 text-gray-500 dark:text-gray-400">Date of Registration</td><td className="px-4 py-2 font-medium text-gray-900 dark:text-white">2025-03-12</td></tr>
                                                                        <tr><td className="px-4 py-2 text-gray-500 dark:text-gray-400">Date of Approval</td><td className="px-4 py-2 font-medium text-gray-900 dark:text-white">2025-03-10</td></tr>
                                                                        <tr><td className="px-4 py-2 text-gray-500 dark:text-gray-400">Date of Scrutiny</td><td className="px-4 py-2 font-medium text-gray-900 dark:text-white">2025-03-08</td></tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div className="bg-white dark:bg-gray-800 rounded shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                                                                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                                                                    <h4 className="text-xs font-bold uppercase text-gray-700 dark:text-gray-300">Tax & Fee Breakdown</h4>
                                                                </div>
                                                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm">
                                                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                                        <tr><td className="px-4 py-2 text-gray-500 dark:text-gray-400">MV Tax</td><td className="px-4 py-2 text-right font-medium text-gray-900 dark:text-white">{formatCurrency(45000)}</td></tr>
                                                                        <tr><td className="px-4 py-2 text-gray-500 dark:text-gray-400">Registration Fee</td><td className="px-4 py-2 text-right font-medium text-gray-900 dark:text-white">{formatCurrency(600)}</td></tr>
                                                                        <tr><td className="px-4 py-2 text-gray-500 dark:text-gray-400">Road Safety Cess</td><td className="px-4 py-2 text-right font-medium text-gray-900 dark:text-white">{formatCurrency(1500)}</td></tr>
                                                                        <tr><td className="px-4 py-2 text-gray-500 dark:text-gray-400">Social Security Cess</td><td className="px-4 py-2 text-right font-medium text-gray-900 dark:text-white">{formatCurrency(200)}</td></tr>
                                                                        <tr className="bg-gray-50 dark:bg-gray-900"><td className="px-4 py-2 font-bold text-gray-900 dark:text-white">Total</td><td className="px-4 py-2 text-right font-bold text-blue-600 dark:text-blue-400">{formatCurrency(47300)}</td></tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )}
                                        </React.Fragment>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 2. Mobile Number Update */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden lg:col-span-2">
                    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white uppercase">Mobile Number Update</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-100 dark:bg-gray-800 text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                                <tr>
                                    <th className="px-4 py-3 text-left">Serial No.</th>
                                    <th className="px-4 py-3 text-left">RTO Jurisdiction</th>
                                    <th className="px-4 py-3 text-left">Dealer Name</th>
                                    <th className="px-4 py-3 text-left">Vehicle Number</th>
                                    <th className="px-4 py-3 text-left">Updated Mobile Number</th>
                                    <th className="px-4 py-3 text-center">Status</th>
                                    <th className="px-4 py-3 text-right">Mobile Updates Count</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {dealers.map((row, idx) => {
                                    const isUnique = idx % 3 !== 0;
                                    return (
                                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40'}>
                                            <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{idx + 1}</td>
                                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{row.jurisdiction}</td>
                                            <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{row.dealerName}</td>
                                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 font-mono">AS-01-XX-{Math.floor(1000 + Math.random() * 9000)}</td>
                                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">+91 {Math.floor(9000000000 + Math.random() * 999999999)}</td>
                                            <td className="px-4 py-3 text-sm text-center">
                                                <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${isUnique ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'}`}>
                                                    {isUnique ? 'Unique' : 'Duplicate'}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-sm text-right text-blue-600 dark:text-blue-400 font-bold">{row.mobileUpdates.toLocaleString()}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 3. Trade Certificate Details */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden lg:col-span-2">
                    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white uppercase">Trade Certificate Details</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-100 dark:bg-gray-800 text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                                <tr>
                                    <th className="px-4 py-3 text-left">Serial No.</th>
                                    <th className="px-4 py-3 text-left">District</th>
                                    <th className="px-4 py-3 text-left">Dealer Name</th>
                                    <th className="px-4 py-3 text-left">Dealer TC Number</th>
                                    <th className="px-4 py-3 text-left">Certificate Status</th>
                                    <th className="px-4 py-3 text-right">No. of TC Marks</th>
                                    <th className="px-4 py-3 text-left">TC Validity</th>
                                    <th className="px-4 py-3 text-center">Audited FY 26-27</th>
                                    <th className="px-4 py-3 text-left">Findings</th>
                                    <th className="px-4 py-3 text-center">Audit Report</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {dealers.map((row, idx) => {
                                    const isExpired = row.tradeCertStatus === 'Expired';
                                    const isExpiringSoon = row.tradeCertStatus === 'Expiring Soon';
                                    
                                    const district = idx % 2 === 0 ? 'Kamrup' : 'Jorhat';
                                    const tcNumber = `TC-${Math.floor(1000 + Math.random() * 9000)}`;
                                    const isAudited = idx % 3 !== 0; 
                                    const findings = isAudited ? (idx % 2 === 0 ? 'No major issues' : 'Minor discrepancies') : '';

                                    return (
                                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40'}>
                                            <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{idx + 1}</td>
                                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">{district}</td>
                                            <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap">{row.dealerName}</td>
                                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">{tcNumber}</td>
                                            <td className={`px-4 py-3 text-sm font-bold whitespace-nowrap ${
                                                isExpired ? 'text-red-600 dark:text-red-400' : 
                                                isExpiringSoon ? 'text-orange-500 dark:text-orange-400' : 'text-green-600 dark:text-green-400'
                                            }`}>
                                                {row.tradeCertStatus}
                                            </td>
                                            <td className="px-4 py-3 text-sm text-right text-gray-900 dark:text-gray-200 font-semibold">
                                                {(row.tradeRegMarksObtained ?? '').toString()}
                                            </td>
                                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">{row.validUntil}</td>
                                            <td className="px-4 py-3 text-sm text-center">
                                                <span className={`px-2 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${isAudited ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
                                                    {isAudited ? 'Yes' : 'No'}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 max-w-xs truncate" title={findings}>{findings}</td>
                                            <td className="px-4 py-3 text-sm text-center">
                                                <label className="cursor-pointer bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 text-blue-600 dark:text-blue-400 py-1.5 px-3 rounded text-xs font-semibold border border-blue-200 dark:border-blue-800 transition-colors inline-block whitespace-nowrap">
                                                    Upload
                                                    <input type="file" className="hidden" />
                                                </label>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                {/* 4. Vehicle Typewise and Dealerwise */}
                <div className="lg:col-span-2">
                    <ComparisonTableEnhanced
                        title="Vehicle Typewise and Dealerwise Registrations"
                        isComparisonEnabled={comparisonProps.isComparisonEnabled}
                        setIsComparisonEnabled={comparisonProps.setIsComparisonEnabled}
                        primaryRange={comparisonProps.primaryRange}
                        setPrimaryRange={comparisonProps.setPrimaryRange}
                        compareRange={comparisonProps.compareRange}
                        setCompareRange={comparisonProps.setCompareRange}
                        primaryDistrict={comparisonProps.primaryDistrict}
                        setPrimaryDistrict={comparisonProps.setPrimaryDistrict}
                        compareDistrict={comparisonProps.compareDistrict}
                        setCompareDistrict={comparisonProps.setCompareDistrict}
                        compareCategory={comparisonProps.compareCategory}
                        setCompareCategory={comparisonProps.setCompareCategory}
                        categories={dealerCategories}
                        comparisonChildren={
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-100 dark:bg-gray-800 text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                                    <tr>
                                        <th className="px-4 py-3 text-left">Serial No.</th>
                                        <th className="px-4 py-3 text-left">Jurisdiction of DTO</th>
                                        <th className="px-4 py-3 text-left">Dealer Name</th>
                                        <th className="px-4 py-3 text-right">Selected Period</th>
                                        <th className="px-4 py-3 text-right">Comparison Period</th>
                                        <th className="px-4 py-3 text-right">Variance</th>
                                        <th className="px-4 py-3 text-right">Trend</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {scaledPrimaryData.map((rowPrimary, idx) => {
                                        const rowComparison = scaledComparisonDataRaw?.find(d => d.dealerName === rowPrimary.dealerName);
                                        
                                        const valPrimary = getDealerCategoryValue(rowPrimary, comparisonProps.compareCategory);
                                        const valComparison = getDealerCategoryValue(rowComparison, comparisonProps.compareCategory);
                                        
                                        const variance = valComparison - valPrimary;
                                        const variancePct = valPrimary === 0 ? 0 : (variance / valPrimary) * 100;
                                        
                                        const isPositive = variance > 0;
                                        const isNegative = variance < 0;
                                        
                                        return (
                                            <tr key={idx} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40'}>
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{idx + 1}</td>
                                                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{rowPrimary.jurisdiction}</td>
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{rowPrimary.dealerName}</td>
                                                <td className="px-4 py-3 text-right text-sm text-gray-600 dark:text-gray-400">{valPrimary.toLocaleString()}</td>
                                                <td className="px-4 py-3 text-right text-sm text-gray-900 dark:text-white font-semibold">{valComparison.toLocaleString()}</td>
                                                <td className={`px-4 py-3 text-right text-sm font-bold ${isPositive ? 'text-green-600 dark:text-green-400' : isNegative ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'}`}>
                                                    {isPositive ? '+' : ''}{variance.toLocaleString()}
                                                </td>
                                                <td className={`px-4 py-3 text-right text-sm font-bold ${isPositive ? 'text-green-600 dark:text-green-400' : isNegative ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'}`}>
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
                            <thead className="bg-gray-100 dark:bg-gray-800 text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                                <tr>
                                    <th className="px-4 py-3 text-left">Serial No.</th>
                                    <th className="px-4 py-3 text-left">RTO Name</th>
                                    <th className="px-4 py-3 text-left">Jurisdiction of DTO</th>
                                    <th className="px-4 py-3 text-left">Dealer Name</th>
                                    <th className="px-4 py-3 text-left">Class of Vehicle</th>
                                    <th className="px-4 py-3 text-left">Type of Vehicle</th>
                                    <th className="px-4 py-3 text-right">2 Wheeler (Transport)</th>
                                    <th className="px-4 py-3 text-right">2 Wheeler (Non-Transport)</th>
                                    <th className="px-4 py-3 text-right">3 Wheeler</th>
                                    <th className="px-4 py-3 text-right">Total Registrations</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {scaledPrimaryData.map((row, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40'}>
                                        <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{idx + 1}</td>
                                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{row.rtoName}</td>
                                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{row.jurisdiction}</td>
                                        <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{row.dealerName}</td>
                                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{row.classOfVehicle}</td>
                                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{row.typeOfVehicle}</td>
                                        <td className="px-4 py-3 text-sm text-right text-gray-600 dark:text-gray-400">{row.twoWheelerTransport.toLocaleString()}</td>
                                        <td className="px-4 py-3 text-sm text-right text-gray-600 dark:text-gray-400">{row.twoWheelerNonTransport.toLocaleString()}</td>
                                        <td className="px-4 py-3 text-sm text-right text-gray-600 dark:text-gray-400">{row.threeWheeler.toLocaleString()}</td>
                                        <td className="px-4 py-3 text-sm text-right text-gray-900 dark:text-white font-bold">{row.totalRegistrations.toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </ComparisonTableEnhanced>
                </div>

                {/* 5. Year-over-Year Performance Comparison */}
                <div className="lg:col-span-2">
                    <ComparisonTableEnhanced
                        title="Year-over-Year Dealer Performance Comparison"
                        isComparisonEnabled={comparisonPropsYOY.isComparisonEnabled}
                        setIsComparisonEnabled={comparisonPropsYOY.setIsComparisonEnabled}
                        primaryRange={comparisonPropsYOY.primaryRange}
                        setPrimaryRange={comparisonPropsYOY.setPrimaryRange}
                        compareRange={comparisonPropsYOY.compareRange}
                        setCompareRange={comparisonPropsYOY.setCompareRange}
                        primaryDistrict={comparisonPropsYOY.primaryDistrict}
                        setPrimaryDistrict={comparisonPropsYOY.setPrimaryDistrict}
                        compareDistrict={comparisonPropsYOY.compareDistrict}
                        setCompareDistrict={comparisonPropsYOY.setCompareDistrict}
                        compareCategory={comparisonPropsYOY.compareCategory}
                        setCompareCategory={comparisonPropsYOY.setCompareCategory}
                        categories={dealerCategories}
                        comparisonChildren={
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-100 dark:bg-gray-800 text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                                    <tr>
                                        <th className="px-4 py-3 text-left">Serial No.</th>
                                        <th className="px-4 py-3 text-left">District</th>
                                        <th className="px-4 py-3 text-left">Dealer Name</th>
                                        <th className="px-4 py-3 text-right">Selected Period</th>
                                        <th className="px-4 py-3 text-right">Comparison Period</th>
                                        <th className="px-4 py-3 text-right">Variance</th>
                                        <th className="px-4 py-3 text-right">Trend</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {scaledPrimaryDataYOY.map((rowPrimary, idx) => {
                                        const rowComparison = scaledComparisonDataRawYOY?.find(d => d.dealerName === rowPrimary.dealerName);
                                        
                                        const valPrimary = getDealerCategoryValue(rowPrimary, comparisonPropsYOY.compareCategory);
                                        const valComparison = getDealerCategoryValue(rowComparison, comparisonPropsYOY.compareCategory);
                                        
                                        const variance = valComparison - valPrimary;
                                        const variancePct = valPrimary === 0 ? 0 : (variance / valPrimary) * 100;
                                        
                                        const isPositive = variance > 0;
                                        const isNegative = variance < 0;
                                        
                                        return (
                                            <tr key={idx} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40'}>
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{idx + 1}</td>
                                                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{rowPrimary.district}</td>
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{rowPrimary.dealerName}</td>
                                                <td className="px-4 py-3 text-right text-sm text-gray-600 dark:text-gray-400">{valPrimary.toLocaleString()}</td>
                                                <td className="px-4 py-3 text-right text-sm text-gray-900 dark:text-white font-semibold">{valComparison.toLocaleString()}</td>
                                                <td className={`px-4 py-3 text-right text-sm font-bold ${isPositive ? 'text-green-600 dark:text-green-400' : isNegative ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'}`}>
                                                    {isPositive ? '+' : ''}{variance.toLocaleString()}
                                                </td>
                                                <td className={`px-4 py-3 text-right text-sm font-bold ${isPositive ? 'text-green-600 dark:text-green-400' : isNegative ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'}`}>
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
                            <thead className="bg-gray-100 dark:bg-gray-800 text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                                <tr>
                                    <th className="px-4 py-3 text-left">Serial No.</th>
                                    <th className="px-4 py-3 text-left">District</th>
                                    <th className="px-4 py-3 text-left">Dealer Name</th>
                                    <th className="px-4 py-3 text-right">Total Registrations (2025)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {scaledPrimaryDataYOY.map((row, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40'}>
                                        <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{idx + 1}</td>
                                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{row.district}</td>
                                        <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{row.dealerName}</td>
                                        <td className="px-4 py-3 text-sm text-right text-blue-600 dark:text-blue-400 font-bold">{row.totalRegistrations.toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </ComparisonTableEnhanced>
                </div>

            </div>
        </div>
    );
};

export default DealerAudit;
