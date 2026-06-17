'use client';
import React, { useState, useEffect, useMemo } from 'react';
import ComparisonTableEnhanced from './ComparisonTableEnhanced';
import { useComparisonEnhanced } from '../hooks/useComparisonEnhanced';
import dummyData from '../data/dummyData';

const RevenueEnhancedExample = () => {
    const categories = [
        { id: 'grandTotal', label: 'Grand Total Revenue' },
        { id: 'mvTax', label: 'Total MV Tax' },
        { id: 'mvFees', label: 'Total MV Fees' },
        { id: 'roadSafetyCess', label: 'Road Safety Cess' },
        { id: 'greenTax', label: 'Green Tax' },
        { id: 'compoundingFees', label: 'Compounding Fees' },
    ];

    const comparisonProps = useComparisonEnhanced({
        initialCategory: 'grandTotal',
        getYearDataOptions: {
            '2023': dummyData.districtWiseRevenue2023,
            '2024': dummyData.districtWiseRevenue2024,
            '2025': dummyData.districtWiseRevenue,
            '2026': dummyData.districtWiseRevenue2026,
        }
    });

    const {
        isComparisonEnabled,
        primaryRange,
        compareRange,
        primaryDistrict,
        compareDistrict,
        compareCategory,
        getDistrictData,
        primaryData,
        comparisonDataRaw,
    } = comparisonProps;

    // Calculate revenue data based on comparison mode
    const getRevenueValue = (data, category, district) => {
        if (!data) return 0;
        
        if (district === 'All') {
            // Sum all districts
            return data.reduce((total, item) => {
                if (category === 'grandTotal') {
                    return total + Object.values(item).reduce((sum, val) => 
                        typeof val === 'object' ? sum + Object.values(val).reduce((s, v) => s + v, 0) : sum + val, 0
                    );
                }
                return total + (item[category] ? Object.values(item[category]).reduce((sum, val) => sum + val, 0) : 0);
            }, 0);
        } else {
            const districtData = getDistrictData(data, district);
            if (!districtData) return 0;
            
            if (category === 'grandTotal') {
                return Object.values(districtData).reduce((sum, val) => 
                    typeof val === 'object' ? sum + Object.values(val).reduce((s, v) => s + v, 0) : sum + val, 0
                );
            }
            return districtData[category] ? Object.values(districtData[category]).reduce((sum, val) => sum + val, 0) : 0;
        }
    };

    const primaryRevenue = getRevenueValue(primaryData, compareCategory, primaryDistrict);
    const comparisonRevenue = getRevenueValue(comparisonDataRaw, compareCategory, compareDistrict);

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(value);
    };

    const renderBaseTable = () => (
        <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {primaryDistrict === 'All' ? 'All Districts' : `${primaryDistrict} District`}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Revenue</div>
                    <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                        {formatCurrency(primaryRevenue)}
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                        {primaryRange.start} to {primaryRange.end}
                    </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <div className="text-sm text-green-600 dark:text-green-400 font-medium">Category</div>
                    <div className="text-lg font-semibold text-green-900 dark:text-green-100">
                        {categories.find(c => c.id === compareCategory)?.label}
                    </div>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">District</div>
                    <div className="text-lg font-semibold text-purple-900 dark:text-purple-100">
                        {primaryDistrict === 'All' ? 'All Districts' : primaryDistrict}
                    </div>
                </div>
            </div>
        </div>
    );

    const renderComparisonTable = () => {
        const growthRate = primaryRevenue > 0 ? ((comparisonRevenue - primaryRevenue) / primaryRevenue * 100).toFixed(1) : 0;
        
        return (
            <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Primary Data */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {primaryDistrict === 'All' ? 'All Districts' : primaryDistrict}
                        </h4>
                        <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                {primaryRange.start} to {primaryRange.end}
                            </div>
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                {formatCurrency(primaryRevenue)}
                            </div>
                        </div>
                    </div>

                    {/* Comparison Data */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {compareDistrict === 'All' ? 'All Districts' : compareDistrict}
                        </h4>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                            <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                                {compareRange.start} to {compareRange.end}
                            </div>
                            <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                                {formatCurrency(comparisonRevenue)}
                            </div>
                            <div className={`text-sm font-medium mt-2 ${
                                parseFloat(growthRate) >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                            }`}>
                                {parseFloat(growthRate) >= 0 ? '↑' : '↓'} {Math.abs(growthRate)}%
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visual Comparison */}
                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Visual Comparison</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                            {categories.find(c => c.id === compareCategory)?.label}
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex-1">
                            <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Primary</div>
                            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-6">
                                <div 
                                    className="bg-blue-600 h-6 rounded-full flex items-center justify-center text-xs text-white font-medium"
                                    style={{ width: `${Math.min(100, (primaryRevenue / Math.max(primaryRevenue, comparisonRevenue)) * 100)}%` }}
                                >
                                    {formatCurrency(primaryRevenue)}
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Comparison</div>
                            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-6">
                                <div 
                                    className="bg-green-600 h-6 rounded-full flex items-center justify-center text-xs text-white font-medium"
                                    style={{ width: `${Math.min(100, (comparisonRevenue / Math.max(primaryRevenue, comparisonRevenue)) * 100)}%` }}
                                >
                                    {formatCurrency(comparisonRevenue)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <ComparisonTableEnhanced
            title="Revenue Analysis"
            isComparisonEnabled={isComparisonEnabled}
            setIsComparisonEnabled={comparisonProps.setIsComparisonEnabled}
            primaryRange={primaryRange}
            setPrimaryRange={comparisonProps.setPrimaryRange}
            compareRange={compareRange}
            setCompareRange={comparisonProps.setCompareRange}
            primaryDistrict={primaryDistrict}
            setPrimaryDistrict={comparisonProps.setPrimaryDistrict}
            compareDistrict={compareDistrict}
            setCompareDistrict={comparisonProps.setCompareDistrict}
            compareCategory={compareCategory}
            setCompareCategory={comparisonProps.setCompareCategory}
            categories={categories}
        >
            {renderBaseTable()}
            {renderComparisonTable()}
        </ComparisonTableEnhanced>
    );
};

export default RevenueEnhancedExample;
