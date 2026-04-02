import { useState } from 'react';

export function useComparison({ initialCategory, getYearDataOptions, defaultPrimaryYear = '2025', defaultCompareYear = '2026' }) {
    const [isComparisonMode, setIsComparisonMode] = useState(false);
    const [compareCategory, setCompareCategory] = useState(initialCategory);
    const [primaryRange, setPrimaryRange] = useState({ start: `${defaultPrimaryYear}-01-01`, end: `${defaultPrimaryYear}-01-15` });
    const [compareRange, setCompareRange] = useState({ start: `${defaultCompareYear}-06-01`, end: `${defaultCompareYear}-06-15` });

    const getDaysBetween = (start, end) => {
        if (!start || !end) return 365;
        const startD = new Date(start);
        const endD = new Date(end);
        if (isNaN(startD) || isNaN(endD)) return 365;
        const diff = endD - startD;
        return Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)) + 1);
    };

    const getYearData = (year) => {
        return getYearDataOptions[year] || getYearDataOptions[defaultPrimaryYear];
    };

    const primaryYear = primaryRange.start ? primaryRange.start.substring(0, 4) : defaultPrimaryYear;
    const primaryData = getYearData(primaryYear);
    const primaryDays = getDaysBetween(primaryRange.start, primaryRange.end);
    const primaryScale = primaryDays / 365;

    const compareYear = compareRange.start ? compareRange.start.substring(0, 4) : defaultCompareYear;
    const comparisonDataRaw = getYearData(compareYear) || getYearDataOptions[defaultCompareYear];
    const compareDays = getDaysBetween(compareRange.start, compareRange.end);
    const compareScale = compareDays / 365;

    return {
        isComparisonMode,
        setIsComparisonMode,
        compareCategory,
        setCompareCategory,
        primaryRange,
        setPrimaryRange,
        compareRange,
        setCompareRange,
        primaryScale,
        compareScale,
        primaryData,
        comparisonDataRaw
    };
}
