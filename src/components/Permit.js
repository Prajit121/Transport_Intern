'use client';
import React, { useState, useEffect } from 'react';
import dummyData from '../data/dummyData';
import DateFilter from './DateFilter';
import ComparisonTableEnhanced from './ComparisonTableEnhanced';
import { useComparisonEnhanced } from '../hooks/useComparisonEnhanced';

const Permit = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [selectedDistrict, setSelectedDistrict] = useState('All');
    const [selectedPermitType, setSelectedPermitType] = useState('All');
    const [selectedVehicleClass, setSelectedVehicleClass] = useState('All');

    useEffect(() => {
        setIsDarkMode(document.documentElement.classList.contains('dark'));
    }, []);

    const permitTypes = ['All', ...new Set(dummyData.permitFeesData.map(d => d.permitType))];
    const vehicleClasses = ['All', ...new Set(dummyData.permitFeesData.map(d => d.vehicleClass))];

    // Filter permit fees data (used as the base before scaling)
    const comparisonPropsFees = useComparisonEnhanced({
        initialCategory: 'permitFeeRealised',
        getYearDataOptions: {
            '2024': dummyData.permitFeesData || dummyData.permitFeesData2026,
            '2025': dummyData.permitFeesData,
            '2026': dummyData.permitFeesData2026,
        }
    });

    const scaleFeeRow = (row, scaleFactor) => {
        if (!row) return null;
        const scale = (val) => Math.floor(val * scaleFactor);
        return {
            ...row,
            totalVehicles: scale(row.totalVehicles),
            period1Year: scale(row.period1Year),
            period3Year: scale(row.period3Year),
            period5Year: scale(row.period5Year),
            permitFeeRealised: scale(row.permitFeeRealised),
            lateFeeRealised: scale(row.lateFeeRealised),
        };
    };

    const filteredPrimaryFeesRaw = comparisonPropsFees.primaryData.filter(row => {
        if (selectedDistrict !== 'All' && row.district !== selectedDistrict) return false;
        if (selectedPermitType !== 'All' && row.permitType !== selectedPermitType) return false;
        if (selectedVehicleClass !== 'All' && row.vehicleClass !== selectedVehicleClass) return false;
        return true;
    });

    const scaledPrimaryFeesData = filteredPrimaryFeesRaw.map(row => scaleFeeRow(row, comparisonPropsFees.primaryScale));
    const scaledComparisonFeesRaw = comparisonPropsFees.comparisonDataRaw?.map(row => scaleFeeRow(row, comparisonPropsFees.compareScale));

    const feesCategories = [
        { id: 'totalVehicles', label: 'Total Vehicles' },
        { id: 'period1Year', label: '1 Year Period' },
        { id: 'period3Year', label: '3 Year Period' },
        { id: 'period5Year', label: '5 Year Period' },
        { id: 'permitFeeRealised', label: 'Permit Fee' },
        { id: 'lateFeeRealised', label: 'Late Fee' }
    ];

    // Filter application data
    const comparisonProps = useComparisonEnhanced({
        initialCategory: 'totalReceived',
        getYearDataOptions: {
            '2024': dummyData.permitApplicationsData2024,
            '2025': dummyData.permitApplicationsData,
            '2026': dummyData.permitApplicationsData2026,
        }
    });

    const {
        isComparisonEnabled: isComparisonEnabledFees,
        setIsComparisonEnabled: setIsComparisonEnabledFees,
        primaryRange: primaryRangeFees,
        setPrimaryRange: setPrimaryRangeFees,
        compareRange: compareRangeFees,
        setCompareRange: setCompareRangeFees,
        compareCategory: compareCategoryFees,
        setCompareCategory: setCompareCategoryFees,
        primaryDistrict: primaryDistrictFees,
        setPrimaryDistrict: setPrimaryDistrictFees,
        compareDistrict: compareDistrictFees,
        setCompareDistrict: setCompareDistrictFees,
        primaryScale,
        compareScale,
        primaryData,
        comparisonDataRaw
    } = comparisonPropsFees;

    const scaleRow = (row, scaleFactor) => {
        if (!row) return null;
        const scale = (val) => Math.floor(val * scaleFactor);
        return {
            ...row,
            totalReceived: scale(row.totalReceived),
            online: scale(row.online),
            offline: scale(row.offline),
            scrutiny: scale(row.scrutiny),
            approvalStage: scale(row.approvalStage),
            approved: scale(row.approved),
        };
    };

    const scaledPrimaryData = (selectedDistrict === 'All' ? primaryData : primaryData.filter(r => r.district === selectedDistrict))
        .map(row => scaleRow(row, primaryScale));
        
    const scaledComparisonData = (selectedDistrict === 'All' ? comparisonDataRaw : (comparisonDataRaw || []).filter(r => r.district === selectedDistrict))
        .map(row => scaleRow(row, compareScale));

    const getDistrictCategoryValue = (districtData, category) => {
        if (!districtData) return 0;
        return districtData[category] || 0;
    };

    const categories = [
        { id: 'totalReceived', label: 'Total Received' },
        { id: 'online', label: 'Online' },
        { id: 'offline', label: 'Offline (DTO)' },
        { id: 'scrutiny', label: 'Under Scrutiny' },
        { id: 'approvalStage', label: 'Approval Stage' },
        { id: 'approved', label: 'Approved' }
    ];

    const formatCurrency = (amount) => {
        return '₹' + amount.toLocaleString('en-IN');
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Permit Management</h1>
                <p className="text-gray-600 dark:text-gray-400">District-wise permit fee details and application status</p>
            </div>

            <DateFilter onFilterChange={({ district }) => { if (district) setSelectedDistrict(district); }} />

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Filters</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Permit Type
                        </label>
                        <select
                            value={selectedPermitType}
                            onChange={(e) => setSelectedPermitType(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                        >
                            {permitTypes.map(type => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Vehicle Class
                        </label>
                        <select
                            value={selectedVehicleClass}
                            onChange={(e) => setSelectedVehicleClass(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                        >
                            {vehicleClasses.map(vClass => (
                                <option key={vClass} value={vClass}>{vClass}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Permit Fee Details Table */}
            <ComparisonTableEnhanced
                title="Permit & Permit Fee Details"
                isComparisonEnabled={isComparisonEnabledFees}
                setIsComparisonEnabled={setIsComparisonEnabledFees}
                primaryRange={primaryRangeFees}
                setPrimaryRange={setPrimaryRangeFees}
                compareRange={compareRangeFees}
                setCompareRange={setCompareRangeFees}
                compareCategory={compareCategoryFees}
                setCompareCategory={setCompareCategoryFees}
                categories={feesCategories}
                comparisonChildren={
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-100 dark:bg-gray-800 text-[10px] font-bold uppercase text-gray-700 dark:text-gray-300">
                            <tr>
                                <th className="px-6 py-4 text-left border-b border-gray-200 dark:border-gray-700">Serial No.</th>
                                <th className="px-6 py-4 text-left border-b border-gray-200 dark:border-gray-700">District</th>
                                <th className="px-6 py-4 text-left border-b border-gray-200 dark:border-gray-700">Type/Sub-Type/Class</th>
                                <th className="px-6 py-4 text-left border-b border-gray-200 dark:border-gray-700">Permit Issuance Date</th>
                                <th className="px-6 py-4 text-left border-b border-gray-200 dark:border-gray-700">Validity</th>
                                <th className="px-6 py-4 text-left border-b border-gray-200 dark:border-gray-700">Permit Valid Upto</th>
                                <th className="px-6 py-4 text-right border-b border-gray-200 dark:border-gray-700">Selected Period</th>
                                <th className="px-6 py-4 text-right border-b border-gray-200 dark:border-gray-700">Comparison Period</th>
                                <th className="px-6 py-4 text-right border-b border-gray-200 dark:border-gray-700">Variance</th>
                                <th className="px-6 py-4 text-right border-b border-gray-200 dark:border-gray-700">Trend</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {scaledPrimaryFeesData.map((rowPrimary, idx) => {
                                const rowComparison = scaledComparisonFeesRaw?.find(d => 
                                    d.district === rowPrimary.district &&
                                    d.permitType === rowPrimary.permitType &&
                                    d.subType === rowPrimary.subType &&
                                    d.vehicleClass === rowPrimary.vehicleClass
                                );
                                
                                const valPrimary = rowPrimary[comparisonPropsFees.compareCategory] || 0;
                                const valComparison = rowComparison ? rowComparison[comparisonPropsFees.compareCategory] || 0 : 0;
                                
                                const variance = valComparison - valPrimary;
                                const variancePct = valPrimary === 0 ? 0 : (variance / valPrimary) * 100;
                                
                                const isPositive = variance > 0;
                                const isNegative = variance < 0;
                                
                                const isCurrency = ['permitFeeRealised', 'lateFeeRealised'].includes(comparisonPropsFees.compareCategory);

                                return (
                                    <tr key={`${rowPrimary.district}-${idx}`} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40'}>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                            {idx + 1}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                            {rowPrimary.district}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                            {rowPrimary.permitType} / {rowPrimary.subType} / {rowPrimary.vehicleClass}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                            {rowPrimary.permitIssuanceDate || ''}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                            {rowPrimary.validity || ''}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                            {rowPrimary.permitValidUpto || ''}
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
                                Serial No.
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                District
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Permit Type
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Sub Type
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Permit Issuance Date
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Validity
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Permit Valid Upto
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Total Vehicles
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Vehicle Class
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                1 Year
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                3 Year
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                5 Year
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Permit Fee
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Late Fee
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {scaledPrimaryFeesData.map((row, idx) => (
                            <tr key={idx} className={`hover:bg-gray-50 dark:hover:bg-gray-700 ${idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-800/50'}`}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                    {idx + 1}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                    {row.district}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    {row.permitType}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    {row.subType}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    {row.permitIssuanceDate || ''}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    {row.validity || ''}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    {row.permitValidUpto || ''}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900 dark:text-gray-300">
                                    {row.totalVehicles}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    {row.vehicleClass}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900 dark:text-gray-300">
                                    {row.period1Year}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900 dark:text-gray-300">
                                    {row.period3Year}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900 dark:text-gray-300">
                                    {row.period5Year}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-blue-600 dark:text-blue-400 font-medium">
                                    {formatCurrency(row.permitFeeRealised)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600 dark:text-red-400">
                                    {formatCurrency(row.lateFeeRealised)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </ComparisonTableEnhanced>

            {/* Application Status Table */}
            <ComparisonTableEnhanced
                title="Permit Application Status"
                isComparisonEnabled={isComparisonEnabledFees}
                setIsComparisonEnabled={setIsComparisonEnabledFees}
                primaryRange={primaryRangeFees}
                setPrimaryRange={setPrimaryRangeFees}
                compareRange={compareRangeFees}
                setCompareRange={setCompareRangeFees}
                compareCategory={compareCategoryFees}
                setCompareCategory={setCompareCategoryFees}
                primaryDistrict={primaryDistrictFees}
                setPrimaryDistrict={setPrimaryDistrictFees}
                compareDistrict={compareDistrictFees}
                setCompareDistrict={setCompareDistrictFees}
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
                                const rowComparison = scaledComparisonData?.find(d => d.district === rowPrimary.district);
                                
                                const valPrimary = getDistrictCategoryValue(rowPrimary, compareCategoryFees);
                                const valComparison = getDistrictCategoryValue(rowComparison, compareCategoryFees);
                                
                                const variance = valComparison - valPrimary;
                                const variancePct = valPrimary === 0 ? 0 : (variance / valPrimary) * 100;
                                
                                const isPositive = variance > 0;
                                const isNegative = variance < 0;
                                
                                return (
                                    <tr key={rowPrimary.district} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40'}>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                            {idx + 1}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                            {rowPrimary.district}
                                        </td>
                                        <td className="px-6 py-4 text-right text-sm text-gray-600 dark:text-gray-400">
                                            {valPrimary.toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4 text-right text-sm text-gray-900 dark:text-white font-semibold">
                                            {valComparison.toLocaleString()}
                                        </td>
                                        <td className={`px-6 py-4 text-right text-sm font-bold ${isPositive ? 'text-green-600 dark:text-green-400' : isNegative ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'}`}>
                                            {isPositive ? '+' : ''}{variance.toLocaleString()}
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
                                District
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Total Received
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Online
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Offline (DTO)
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Under Scrutiny
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Approval Stage
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Approved
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {scaledPrimaryData.map((row, idx) => (
                            <tr key={row.district} className={`hover:bg-gray-50 dark:hover:bg-gray-700 ${idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-800/50'}`}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                    {idx + 1}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                    {row.district}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900 dark:text-gray-300 font-medium">
                                    {row.totalReceived.toLocaleString()}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600 dark:text-green-400">
                                    {row.online.toLocaleString()}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500 dark:text-gray-400">
                                    {row.offline.toLocaleString()}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-yellow-600 dark:text-yellow-400">
                                    {row.scrutiny.toLocaleString()}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-orange-600 dark:text-orange-400">
                                    {row.approvalStage.toLocaleString()}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-blue-600 dark:text-blue-400 font-medium">
                                    {row.approved.toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </ComparisonTableEnhanced>
        </div>
    );
};

export default Permit;
