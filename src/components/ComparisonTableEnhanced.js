import React from 'react';
import { assamDistricts } from '../data/dummyData';

const ComparisonTableEnhanced = ({
    title,
    isComparisonEnabled,
    setIsComparisonEnabled,
    primaryRange,
    setPrimaryRange,
    compareRange,
    setCompareRange,
    primaryDistrict,
    setPrimaryDistrict,
    compareDistrict,
    setCompareDistrict,
    compareCategory,
    setCompareCategory,
    categories,
    children,
    comparisonChildren,
}) => {
    const districtOptions = ['All', ...assamDistricts];

    const renderPrimaryControls = () => (
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center gap-2 text-sm">
                <input 
                    type="date" 
                    value={primaryRange.start} 
                    onChange={(e) => setPrimaryRange({...primaryRange, start: e.target.value})} 
                    className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded px-2 py-1 focus:ring-blue-500 focus:border-blue-500" 
                />
                <span className="text-gray-500">to</span>
                <input 
                    type="date" 
                    value={primaryRange.end} 
                    onChange={(e) => setPrimaryRange({...primaryRange, end: e.target.value})} 
                    className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded px-2 py-1 focus:ring-blue-500 focus:border-blue-500" 
                />
            </div>
            <select 
                value={primaryDistrict} 
                onChange={(e) => setPrimaryDistrict(e.target.value)}
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2"
            >
                {districtOptions.map(district => (
                    <option key={district} value={district}>{district}</option>
                ))}
            </select>
        </div>
    );

    const renderComparisonControls = () => (
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center gap-2 text-sm">
                <input 
                    type="date" 
                    value={compareRange.start} 
                    onChange={(e) => setCompareRange({...compareRange, start: e.target.value})} 
                    className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded px-2 py-1 focus:ring-blue-500 focus:border-blue-500" 
                />
                <span className="text-gray-500">to</span>
                <input 
                    type="date" 
                    value={compareRange.end} 
                    onChange={(e) => setCompareRange({...compareRange, end: e.target.value})} 
                    className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded px-2 py-1 focus:ring-blue-500 focus:border-blue-500" 
                />
            </div>
            <select 
                value={compareDistrict} 
                onChange={(e) => setCompareDistrict(e.target.value)}
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2"
            >
                {districtOptions.map(district => (
                    <option key={district} value={district}>{district}</option>
                ))}
            </select>
        </div>
    );

    
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden mt-6">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white uppercase tracking-tight">
                        {title}
                    </h2>
                    
                    <label className="flex items-center cursor-pointer">
                        <div className="relative">
                            <input 
                                type="checkbox" 
                                className="sr-only" 
                                checked={isComparisonEnabled} 
                                onChange={() => setIsComparisonEnabled(!isComparisonEnabled)} 
                            />
                            <div className={`block w-10 h-6 rounded-full transition-colors ${isComparisonEnabled ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
                            <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${isComparisonEnabled ? 'transform translate-x-4' : ''}`}></div>
                        </div>
                        <div className="ml-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Custom Comparison
                        </div>
                    </label>
                </div>
            </div>

            {/* Controls */}
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <div className="space-y-4">
                    {/* Primary Controls - Only show when comparison is enabled */}
                    {isComparisonEnabled && (
                        <div>
                            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                Primary Selection
                            </h3>
                            {renderPrimaryControls()}
                        </div>
                    )}
                    
                    {/* Comparison Controls - Only show when comparison is enabled */}
                    {isComparisonEnabled && (
                        <div>
                            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                Comparison Selection
                            </h3>
                            {renderComparisonControls()}
                        </div>
                    )}
                    
                    {/* Category Selection - Only show when comparison is enabled */}
                    {isComparisonEnabled && (
                        <div className="flex items-center gap-3 pt-2 border-t border-gray-200 dark:border-gray-600">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Category:</span>
                            <select 
                                value={compareCategory} 
                                onChange={(e) => setCompareCategory(e.target.value)}
                                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2"
                            >
                                {categories.map((cat) => (
                                    <option key={cat.id} value={cat.id}>{cat.label}</option>
                                ))}
                            </select>
                        </div>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="overflow-x-auto">
                {!isComparisonEnabled ? children : comparisonChildren}
            </div>
        </div>
    );
};

export default ComparisonTableEnhanced;
