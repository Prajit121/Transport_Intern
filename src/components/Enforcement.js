'use client';
import React, { useState, useEffect, useMemo } from 'react';
import dummyData from '../data/dummyData';
import DateFilter from './DateFilter';
import ComparisonTableEnhanced from './ComparisonTableEnhanced';
import { getMonthsInRange } from '../utils/dateUtils';
import { formatCurrency, formatCurrencyForComparison } from '../utils/currencyUtils';
import { useComparisonEnhanced } from '../hooks/useComparisonEnhanced';

const Enforcement = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [selectedDistrict, setSelectedDistrict] = useState('All');
    const [selectedOffenceType, setSelectedOffenceType] = useState('All');
    const [expandedDistricts, setExpandedDistricts] = useState([]);
    const [expandedOffenceTypes, setExpandedOffenceTypes] = useState([]);

    // Generate mocked officers
    const mockOfficers = useMemo(() => {
        return dummyData.assamDistricts.slice(0, 15).map((district, idx) => ({
            id: idx + 1,
            officerName: `Officer ${String.fromCharCode(65 + idx % 26)}`,
            designation: idx % 3 === 0 ? 'MVI' : 'Enforcement Inspector',
            district: district,
            casesDetected: Math.floor(100 + Math.random() * 500),
            cfRealised: Math.floor(50000 + Math.random() * 200000),
        }));
    }, []);

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

    const comparisonProps = useComparisonEnhanced({
        initialCategory: 'casesBooked',
        getYearDataOptions: {
            '2024': dummyData.enforcementData || dummyData.enforcementData2026,
            '2025': dummyData.enforcementData,
            '2026': dummyData.enforcementData2026,
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
            casesBooked: scale(row.casesBooked),
            cfImposed: scale(row.cfImposed),
            casesDisposed: scale(row.casesDisposed),
            cfRealised: scale(row.cfRealised),
            casesPending: scale(row.casesPending),
            licensesSuspended: scale(row.licensesSuspended),
        };
    };

    const scaledPrimaryDataRaw = primaryData.map(row => scaleRow(row, primaryScale));
    const scaledComparisonDataRaw = comparisonDataRaw.map(row => scaleRow(row, compareScale));

    const toggleDistrict = (district) => {
        setExpandedDistricts(prev =>
            prev.includes(district)
                ? prev.filter(d => d !== district)
                : [...prev, district]
        );
    };

    const toggleOffenceType = (id) => {
        setExpandedOffenceTypes(prev => 
            prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
        );
    };

    const categories = [
        { id: 'casesBooked', label: 'Cases Booked' },
        { id: 'cfImposed', label: 'CF Imposed' },
        { id: 'casesDisposed', label: 'Cases Disposed' },
        { id: 'cfRealised', label: 'CF Realised' },
        { id: 'casesPending', label: 'Cases Pending' },
        { id: 'licensesSuspended', label: 'Licenses Suspended' }
    ];

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

            <DateFilter
                onFilterChange={({ district }) => {
                    if (district) {
                        setSelectedDistrict(district);
                        setExpandedDistricts([]);
                    }
                }}
            />

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Cases Booked</h3>
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2">{formatCurrency(totals.totalCasesBooked)}</p>
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
                    <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mt-2">{formatCurrency(totals.totalCasesDisposed)}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {((totals.totalCasesDisposed / totals.totalCasesBooked) * 100).toFixed(1)}% disposal rate
                    </p>
                </div>
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 dark:from-yellow-600 dark:to-yellow-700 rounded-lg shadow p-6">
                    <h3 className="text-sm font-medium text-yellow-100">Cases Pending</h3>
                    <p className="text-3xl font-bold text-white mt-2">{formatCurrency(totals.totalCasesPending)}</p>
                    <p className="text-xs text-yellow-100 mt-1">Yet to be disposed</p>
                </div>
                <div className="bg-gradient-to-br from-red-500 to-red-600 dark:from-red-600 dark:to-red-700 rounded-lg shadow p-6">
                    <h3 className="text-sm font-medium text-red-100">Licenses Suspended</h3>
                    <p className="text-3xl font-bold text-white mt-2">{formatCurrency(totals.totalLicensesSuspended)}</p>
                    <p className="text-xs text-red-100 mt-1">Driving licenses</p>
                </div>
            </div>

            {/* Filters */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Filters</h3>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
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
            <ComparisonTableEnhanced
                title="Offence Case Detection & CF Realization Report"
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
                            {(selectedDistrict === 'All' ? districts.slice(1) : districts.filter(d => d === selectedDistrict)).map((district, idx) => {
                                const pData = scaledPrimaryDataRaw.filter(d => d.district === district);
                                const cData = scaledComparisonDataRaw.filter(d => d.district === district);
                                
                                const valPrimary = pData.reduce((sum, r) => sum + (r[compareCategory] || 0), 0);
                                const valComparison = cData.reduce((sum, r) => sum + (r[compareCategory] || 0), 0);
                                
                                const variance = valComparison - valPrimary;
                                const variancePct = valPrimary === 0 ? 0 : (variance / valPrimary) * 100;
                                
                                const isPositive = variance > 0;
                                const isNegative = variance < 0;
                                
                                const isCurrency = ['cfImposed', 'cfRealised'].includes(compareCategory);
                                
                                return (
                                    <tr key={district} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40'}>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                            {idx + 1}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                            {district}
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
                        {(selectedDistrict === 'All' ? districts.slice(1) : districts.filter(d => d === selectedDistrict)).map((district, districtIdx) => {
                            const districtData = scaledPrimaryDataRaw.filter(d => d.district === district);
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
                                            {districtIdx + 1}
                                        </td>
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
                                            {formatCurrency(districtTotals.casesBooked)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-orange-600 dark:text-orange-400">
                                            {formatCurrency(districtTotals.cfImposed)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-purple-600 dark:text-purple-400">
                                            {formatCurrency(districtTotals.casesDisposed)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-green-600 dark:text-green-400">
                                            {formatCurrency(districtTotals.cfRealised)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-yellow-600 dark:text-yellow-400">
                                            {formatCurrency(districtTotals.casesPending)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-red-600 dark:text-red-400">
                                            {formatCurrency(districtTotals.licensesSuspended)}
                                        </td>
                                    </tr>

                                    {/* Expanded Offence Rows */}
                                    {isExpanded && districtData
                                        .filter(row => selectedOffenceType === 'All' || row.offenceType === selectedOffenceType)
                                        .map((row, idx) => {
                                            const offenceId = `${district}-${row.offenceType}`;
                                            const isOffenceExpanded = expandedOffenceTypes.includes(offenceId);
                                            // Mocking granular records
                                            const granularRecords = isOffenceExpanded ? Array.from({ length: Math.min(row.casesBooked, 5) }).map((_, i) => ({
                                                id: i + 1,
                                                vehicleNumber: `AS-01-${Math.random().toString(36).substring(2, 4).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`,
                                                typeOfVehicle: 'Transport',
                                                classOfVehicle: 'LMV',
                                                timeOfOffence: new Date(2025, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28)).toLocaleDateString() + ' ' + Math.floor(Math.random() * 24) + ':' + Math.floor(Math.random() * 60).toString().padStart(2, '0'),
                                                location: `${district} Main Road`,
                                                officerName: 'Inspector Sharma'
                                            })) : [];

                                            return (
                                                <React.Fragment key={offenceId}>
                                                    <tr onClick={() => toggleOffenceType(offenceId)} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer transition-colors">
                                                        <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                                                            {districtIdx + 1}.{idx + 1}
                                                        </td>
                                                        <td className="px-6 py-3 pl-12 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                                                            <div className="flex items-center">
                                                                <svg
                                                                    className={`w-3 h-3 mr-2 transition-transform ${isOffenceExpanded ? 'rotate-90' : ''}`}
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                                </svg>
                                                                <span className="text-gray-500 dark:text-gray-400">↳</span> {row.offenceType}
                                                            </div>
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
                                                    {isOffenceExpanded && (
                                                        <tr>
                                                            <td colSpan={8} className="px-6 py-4 bg-gray-50 dark:bg-gray-800/80">
                                                                <div className="overflow-x-auto rounded-lg shadow-inner border border-gray-200 dark:border-gray-600">
                                                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                                                                        <thead className="bg-gray-100 dark:bg-gray-700 text-[10px] font-bold uppercase text-gray-700 dark:text-gray-300">
                                                                            <tr>
                                                                                <th className="px-4 py-2 text-left">Serial No.</th>
                                                                                <th className="px-4 py-2 text-left">Vehicle Number</th>
                                                                                <th className="px-4 py-2 text-left">Type of Vehicle</th>
                                                                                <th className="px-4 py-2 text-left">Class of Vehicle</th>
                                                                                <th className="px-4 py-2 text-left">Time of Offence</th>
                                                                                <th className="px-4 py-2 text-left">Location of Offence</th>
                                                                                <th className="px-4 py-2 text-left">Detecting Officer Name</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                                                            {granularRecords.map((record) => (
                                                                                <tr key={record.id} className="text-xs hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                                                                    <td className="px-4 py-2 text-gray-900 dark:text-white font-medium">{record.id}</td>
                                                                                    <td className="px-4 py-2 text-blue-600 dark:text-blue-400 font-mono font-medium">{record.vehicleNumber}</td>
                                                                                    <td className="px-4 py-2 text-gray-600 dark:text-gray-400">{record.typeOfVehicle}</td>
                                                                                    <td className="px-4 py-2 text-gray-600 dark:text-gray-400">{record.classOfVehicle}</td>
                                                                                    <td className="px-4 py-2 text-gray-600 dark:text-gray-400 whitespace-nowrap">{record.timeOfOffence}</td>
                                                                                    <td className="px-4 py-2 text-gray-600 dark:text-gray-400">{record.location}</td>
                                                                                    <td className="px-4 py-2 text-gray-600 dark:text-gray-400">{record.officerName}</td>
                                                                                </tr>
                                                                            ))}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )}
                                                </React.Fragment>
                                            );
                                        })}
                                </React.Fragment>
                            );
                        })}
                    </tbody>
                </table>
            </ComparisonTableEnhanced>

            {/* New table: Individual Officer-wise Offense Case Detection and CF Realisation (blank for now) */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white uppercase">
                        Individual Officer wise offense case detection and CF realisation
                    </h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-100 dark:bg-gray-800 text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                            <tr>
                                <th className="px-4 py-3 text-left">Serial No.</th>
                                <th className="px-4 py-3 text-left">Officer Name</th>
                                <th className="px-4 py-3 text-left">Designation</th>
                                <th className="px-4 py-3 text-left">District</th>
                                <th className="px-4 py-3 text-right">Offense Cases Detected</th>
                                <th className="px-4 py-3 text-right">CF Realised</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {mockOfficers.map((officer, idx) => (
                                <tr key={officer.id} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40'}>
                                    <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{idx + 1}</td>
                                    <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{officer.officerName}</td>
                                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{officer.designation}</td>
                                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{officer.district}</td>
                                    <td className="px-4 py-3 text-sm text-right text-blue-600 dark:text-blue-400 font-bold">{officer.casesDetected.toLocaleString()}</td>
                                    <td className="px-4 py-3 text-sm text-right text-green-600 dark:text-green-400 font-bold">{formatCurrency(officer.cfRealised)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* New table: District wise availability of enforcement manpower and equipment */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white uppercase">
                        District wise availability of enforcement manpower and equipment
                    </h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-200 dark:border-gray-700">
                        <thead className="bg-gray-100 dark:bg-gray-800 text-[10px] font-bold uppercase text-gray-700 dark:text-gray-300">
                            <tr>
                                <th rowSpan="2" className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left">Serial No.</th>
                                <th rowSpan="2" className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left">District</th>
                                <th rowSpan="2" className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left">Name of DTO</th>
                                <th rowSpan="2" className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left">Name of Enforcement Inspector</th>
                                <th rowSpan="2" className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left">Name of MVI(s)</th>
                                <th rowSpan="2" className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left">Name of AEI(s)</th>
                                <th rowSpan="2" className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left">Name of Enforcement Checkers</th>
                                <th rowSpan="2" className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left">Total no. of available Traffic Interceptor Vehicles (if available)</th>
                                <th rowSpan="2" className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left">No. of available vehicles for enforcement drive</th>
                                <th rowSpan="2" className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left">Device no. of available eChallan device</th>
                                <th rowSpan="2" className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left">Device no. of Breath Analyser</th>
                                <th rowSpan="2" className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left">Functional / Non-functional (eChallan)</th>
                                <th rowSpan="2" className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left">Functional / Non-functional (Breath Analyser)</th>
                                <th rowSpan="2" className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left">Functional / Non-functional (TIV)</th>
                                <th rowSpan="2" className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left">Any other available device/equipment (if any)</th>
                                <th rowSpan="2" className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left">Name of the official driver(s)</th>
                                <th rowSpan="2" className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left">Total number of homeguards in the office</th>
                                <th colSpan="4" className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center">Vehicle details</th>
                            </tr>
                            <tr>
                                <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left">Vehicle number</th>
                                <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left">Speedometer reading as on date</th>
                                <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left">Make and model of vehicle</th>
                                <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left">Whether in running condition</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {dummyData.districtWiseEnforcementManpowerEquipment.map((row, idx) => {
                                const v = row.vehicleDetails?.[0] || {};
                                return (
                                    <tr key={row.district} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40'}>
                                        <td className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-xs text-gray-900 dark:text-white">{idx + 1}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-xs font-medium text-gray-900 dark:text-white">{row.district}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-xs text-gray-600 dark:text-gray-400">{row.dtoName}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-xs text-gray-600 dark:text-gray-400">{row.enforcementInspectorName}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-xs text-gray-600 dark:text-gray-400">{row.mvis}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-xs text-gray-600 dark:text-gray-400">{row.aeis}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-xs text-gray-600 dark:text-gray-400">{row.enforcementCheckers}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-xs text-gray-600 dark:text-gray-400">{row.totalTIVsAvailable}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-xs text-gray-600 dark:text-gray-400">{row.vehiclesForEnforcementDrive}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-xs text-gray-600 dark:text-gray-400">{row.echallanDeviceNumber}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-xs text-gray-600 dark:text-gray-400">{row.breathAnalyserDeviceNumber}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-xs text-gray-600 dark:text-gray-400">{row.echallanFunctionalStatus}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-xs text-gray-600 dark:text-gray-400">{row.breathAnalyserFunctionalStatus}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-xs text-gray-600 dark:text-gray-400">{row.tivFunctionalStatus}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-xs text-gray-600 dark:text-gray-400">{row.otherDeviceEquipment}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-xs text-gray-600 dark:text-gray-400">{row.officialDrivers}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-xs text-gray-600 dark:text-gray-400">{row.homeguardsTotal}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-xs text-gray-600 dark:text-gray-400">{v.vehicleNumber}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-xs text-gray-600 dark:text-gray-400">{v.speedometerReadingAsOnDate}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-xs text-gray-600 dark:text-gray-400">{v.makeModel}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-xs text-gray-600 dark:text-gray-400">{v.runningCondition}</td>
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

export default Enforcement;
