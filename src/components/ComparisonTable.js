import React from 'react';

const ComparisonTable = ({
    title,
    isComparisonMode,
    setIsComparisonMode,
    primaryRange,
    setPrimaryRange,
    compareRange,
    setCompareRange,
    compareCategory,
    setCompareCategory,
    categories,
    children, // Render prop or component for base table
    comparisonChildren, // Render prop or component for comparison table
}) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden mt-6">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white uppercase tracking-tight flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-2 md:mt-0">
                    {title}
                    <div className="flex items-center gap-2 text-sm ml-0 sm:ml-4 font-normal normal-case pt-1 sm:pt-0">
                        <input type="date" value={primaryRange.start} onChange={(e) => setPrimaryRange({...primaryRange, start: e.target.value})} className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded px-2 py-1 focus:ring-blue-500 focus:border-blue-500" />
                        <span className="text-gray-500">to</span>
                        <input type="date" value={primaryRange.end} onChange={(e) => setPrimaryRange({...primaryRange, end: e.target.value})} className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded px-2 py-1 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                </h2>
                <label className="flex items-center cursor-pointer">
                    <div className="relative">
                        <input type="checkbox" className="sr-only" checked={isComparisonMode} onChange={() => setIsComparisonMode(!isComparisonMode)} />
                        <div className={`block w-10 h-6 rounded-full transition-colors ${isComparisonMode ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
                        <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${isComparisonMode ? 'transform translate-x-4' : ''}`}></div>
                    </div>
                    <div className="ml-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Custom Comparison
                    </div>
                </label>
            </div>

            {isComparisonMode && (
                <div className="px-6 py-4 bg-blue-50 dark:bg-blue-900/20 border-b border-gray-200 dark:border-gray-700 flex flex-wrap gap-6 items-center">
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Compare with timeline:</span>
                        <div className="flex items-center gap-2 text-sm font-normal">
                            <input type="date" value={compareRange.start} onChange={(e) => setCompareRange({...compareRange, start: e.target.value})} className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded px-2 py-1 focus:ring-blue-500 focus:border-blue-500" />
                            <span className="text-gray-500">to</span>
                            <input type="date" value={compareRange.end} onChange={(e) => setCompareRange({...compareRange, end: e.target.value})} className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded px-2 py-1 focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                    </div>
                    <div className="flex items-center gap-3 border-l sm:pl-6 border-blue-200 dark:border-blue-800">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Category:</span>
                        <select 
                            value={compareCategory} 
                            onChange={(e) => setCompareCategory(e.target.value)}
                            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 shadow-sm"
                        >
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>{cat.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
            )}

            <div className="overflow-x-auto">
                {!isComparisonMode ? children : comparisonChildren}
            </div>
        </div>
    );
};

export default ComparisonTable;
