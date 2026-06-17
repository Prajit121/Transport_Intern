'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { assamDistricts } from '../data/dummyData';

const DateFilter = ({
    onFilterChange,
    defaultStart = '2025-01-01',
    defaultEnd = '2025-12-31',
    showDistrictFilter = true,
}) => {
    const [startDate, setStartDate] = useState(defaultStart);
    const [endDate, setEndDate] = useState(defaultEnd);
    const [activePreset, setActivePreset] = useState('custom');
    const [selectedDistrict, setSelectedDistrict] = useState('All');
    const [districtQuery, setDistrictQuery] = useState('All');
    const [isDistrictOpen, setIsDistrictOpen] = useState(false);
    const [highlightIndex, setHighlightIndex] = useState(0);
    const districtWrapRef = useRef(null);

    const presets = [
        { id: 'today', name: 'Today' },
        { id: 'yesterday', name: 'Yesterday' },
        { id: 'lastWeek', name: 'Last Week' },
        { id: 'lastMonth', name: 'Last Month' },
        { id: 'lastYear', name: 'Last Year' },
    ];

    const emitChange = ({ start, end, preset, district }) => {
        onFilterChange?.({ start, end, preset, district });
    };

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
        emitChange({ start, end, preset: presetId, district: selectedDistrict });
    };

    const handleDateChange = (type, value) => {
        setActivePreset('custom');
        if (type === 'start') {
            setStartDate(value);
            emitChange({ start: value, end: endDate, preset: 'custom', district: selectedDistrict });
        } else {
            setEndDate(value);
            emitChange({ start: startDate, end: value, preset: 'custom', district: selectedDistrict });
        }
    };

    const districtOptions = useMemo(() => ['All', ...assamDistricts], []);

    const filteredDistrictOptions = useMemo(() => {
        const q = (districtQuery || '').trim().toLowerCase();
        if (!q) return districtOptions;
        return districtOptions.filter((d) => d.toLowerCase().includes(q));
    }, [districtOptions, districtQuery]);

    const commitDistrict = (district) => {
        const next = district || 'All';
        setSelectedDistrict(next);
        setDistrictQuery(next);
        setIsDistrictOpen(false);
        setHighlightIndex(0);
        emitChange({ start: startDate, end: endDate, preset: activePreset, district: next });
    };

    const onDistrictKeyDown = (e) => {
        if (!showDistrictFilter) return;

        if (e.key === 'Escape') {
            setIsDistrictOpen(false);
            setHighlightIndex(0);
            return;
        }

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setIsDistrictOpen(true);
            setHighlightIndex((prev) => Math.min(prev + 1, filteredDistrictOptions.length - 1));
            return;
        }

        if (e.key === 'ArrowUp') {
            e.preventDefault();
            setIsDistrictOpen(true);
            setHighlightIndex((prev) => Math.max(prev - 1, 0));
            return;
        }

        if (e.key === 'Enter') {
            if (!isDistrictOpen) {
                setIsDistrictOpen(true);
                return;
            }
            const choice = filteredDistrictOptions[highlightIndex];
            if (choice) commitDistrict(choice);
        }
    };

    useEffect(() => {
        const onDocMouseDown = (e) => {
            if (!districtWrapRef.current) return;
            if (!districtWrapRef.current.contains(e.target)) {
                setIsDistrictOpen(false);
            }
        };
        document.addEventListener('mousedown', onDocMouseDown);
        return () => document.removeEventListener('mousedown', onDocMouseDown);
    }, []);

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

                <div className="flex flex-col sm:flex-row sm:items-end gap-3">
                    {showDistrictFilter && (
                        <div className="relative" ref={districtWrapRef}>
                            <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                                District
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={districtQuery}
                                    onChange={(e) => {
                                        setDistrictQuery(e.target.value);
                                        setIsDistrictOpen(true);
                                        setHighlightIndex(0);
                                    }}
                                    onFocus={() => setIsDistrictOpen(true)}
                                    onKeyDown={onDistrictKeyDown}
                                    className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 max-w-full p-2.5 transition-colors pr-10"
                                    role="combobox"
                                    aria-label="District filter"
                                    aria-controls="district-listbox"
                                    aria-expanded={isDistrictOpen}
                                    aria-autocomplete="list"
                                />
                                <button
                                    type="button"
                                    onClick={() => setIsDistrictOpen((v) => !v)}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 dark:text-gray-300"
                                    aria-label="Toggle district options"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>

                            {isDistrictOpen && (
                                <ul
                                    id="district-listbox"
                                    role="listbox"
                                    aria-label="District options"
                                    className="absolute mt-2 w-full max-h-60 overflow-auto rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-lg z-50"
                                >
                                    {filteredDistrictOptions.length === 0 ? (
                                        <li className="px-3 py-2 text-sm text-gray-500 dark:text-gray-400">
                                            No matches
                                        </li>
                                    ) : (
                                        filteredDistrictOptions.map((d, idx) => {
                                            const isActive = idx === highlightIndex;
                                            const isSelected = d === selectedDistrict;
                                            return (
                                                <li
                                                    key={d}
                                                    role="option"
                                                    aria-selected={isSelected}
                                                    onMouseEnter={() => setHighlightIndex(idx)}
                                                    onMouseDown={(e) => {
                                                        e.preventDefault();
                                                        commitDistrict(d);
                                                    }}
                                                    className={`px-3 py-2 text-sm cursor-pointer ${
                                                        isActive
                                                            ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200'
                                                            : 'text-gray-700 dark:text-gray-200'
                                                    }`}
                                                >
                                                    <div className="flex items-center justify-between gap-2">
                                                        <span className="truncate">{d}</span>
                                                        {isSelected && (
                                                            <span className="text-xs font-semibold text-blue-600 dark:text-blue-300">
                                                                Selected
                                                            </span>
                                                        )}
                                                    </div>
                                                </li>
                                            );
                                        })
                                    )}
                                </ul>
                            )}
                        </div>
                    )}

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
