'use client';
import React, { useState } from 'react';

const DateFilter = ({ onFilterChange }) => {
    const [startDate, setStartDate] = useState('2025-01-01');
    const [endDate, setEndDate] = useState('2025-12-31');
    const [activePreset, setActivePreset] = useState('all');

    const presets = [
        { id: 'today', name: 'Today' },
        { id: 'yesterday', name: 'Yesterday' },
        { id: 'lastWeek', name: 'Last Week' },
        { id: 'lastMonth', name: 'Last Month' },
        { id: 'lastYear', name: 'Last Year' },
    ];

    const handlePresetClick = (presetId) => {
        setActivePreset(presetId);
        // Logic to calculate dates based on preset
        // For simulation purposes with monthly dummy data, we map these to month ranges
        let start = '2025-01-01';
        let end = '2025-12-31';

        const now = new Date();
        const year = 2025; // Stick to 2025 for dummy data consistency

        switch (presetId) {
            case 'today':
                start = `${year}-03-11`; // Mock today as Mar 11
                end = `${year}-03-11`;
                break;
            case 'yesterday':
                start = `${year}-03-10`;
                end = `${year}-03-10`;
                break;
            case 'lastWeek':
                start = `${year}-03-04`;
                end = `${year}-03-11`;
                break;
            case 'lastMonth':
                start = `${year}-02-01`;
                end = `${year}-02-28`;
                break;
            case 'lastYear':
                start = '2025-01-01';
                end = '2025-12-31';
                break;
            default:
                break;
        }

        setStartDate(start);
        setEndDate(end);
        onFilterChange({ start, end, preset: presetId });
    };

    const handleDateChange = (type, value) => {
        setActivePreset('custom');
        if (type === 'start') {
            setStartDate(value);
            onFilterChange({ start: value, end: endDate, preset: 'custom' });
        } else {
            setEndDate(value);
            onFilterChange({ start: startDate, end: value, preset: 'custom' });
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                    {presets.map(preset => (
                        <button
                            key={preset.id}
                            onClick={() => handlePresetClick(preset.id)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activePreset === preset.id
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                }`}
                        >
                            {preset.name}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">From</label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => handleDateChange('start', e.target.value)}
                            className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-colors"
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">To</label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => handleDateChange('end', e.target.value)}
                            className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-colors"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DateFilter;
