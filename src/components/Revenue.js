'use client';
import React, { useState, useEffect, useMemo } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';
import dummyData from '../data/dummyData';
import DateFilter from './DateFilter';
import { getMonthsInRange } from '../utils/dateUtils';
import ComparisonTableEnhanced from './ComparisonTableEnhanced';
import { useComparisonEnhanced } from '../hooks/useComparisonEnhanced';
import { useClientSideValue } from '../hooks/useClientSideValue';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const Revenue = () => {
    const today = new Date().toISOString().split('T')[0];
    const defaultStart = '2026-04-01';
    const [selectedMonths, setSelectedMonths] = useState(getMonthsInRange(defaultStart, today));
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [selectedStream, setSelectedStream] = useState('grandTotal');
    const [selectedDistrict, setSelectedDistrict] = useState('All');

    const categories = [
        { id: 'grandTotal', label: 'Grand Total Revenue' },
        { id: 'mvTax', label: 'Total MV Tax' },
        { id: 'mvFees', label: 'Total MV Fees' },
        { id: 'roadSafetyCess', label: 'Road Safety Cess' },
        { id: 'greenTax', label: 'Green Tax' },
        { id: 'compoundingFees', label: 'Compounding Fees' },
        { id: 'apgt', label: 'APGT' },
        { id: 'hsrp', label: 'HSRP' },
        { id: 'laborCess', label: 'Labor Cess' },
        { id: 'mvArrear', label: 'MV Arrear' },
        { id: 'socialSecurity', label: 'Social Security' },
        { id: 'permitFeeCess', label: 'Permit Fee Cess' }
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
        primaryScale,
        compareScale,
        primaryData,
        comparisonDataRaw,
        compareCategory,
        primaryDistrict,
        compareDistrict,
        primaryRange,
        compareRange,
        setIsComparisonEnabled,
        setPrimaryRange,
        setCompareRange,
        setPrimaryDistrict,
        setCompareDistrict,
        setCompareCategory
    } = comparisonProps;

    const streams = [
        { id: 'grandTotal', name: 'Grand Total Revenue' },
        { id: 'totalMVTax', name: 'Total MV Tax' },
        { id: 'totalMVFees', name: 'Total MV Fees' },
        { id: 'totalRoadSafetyCess', name: 'Road Safety Cess' },
        { id: 'totalGreenTax', name: 'Green Tax' },
        { id: 'totalCF', name: 'Compounding Fees' },
        { id: 'totalAPGT', name: 'APGT' },
        { id: 'totalHSRP', name: 'HSRP' },
        { id: 'totalLaborCess', name: 'Labor Cess' },
    ];

    const handleFilterChange = ({ start, end, district }) => {
        const monthsInRange = getMonthsInRange(start, end);
        setSelectedMonths(monthsInRange);
        if (district) setSelectedDistrict(district);
    };

    useEffect(() => {
        setIsDarkMode(document.documentElement.classList.contains('dark'));
    }, []);

    const filteredData2025 = dummyData.revenueCollection.filter(d => selectedMonths.includes(d.month));
    const filteredData2026 = dummyData.revenueCollection2026.filter(d => selectedMonths.includes(d.month));

    const getDistrictStreamValue = (districtData) => {
        if (!districtData) return 0;
        switch (selectedStream) {
            case 'totalMVTax':
                return districtData.mvTax.nonTransport + districtData.mvTax.newReg + districtData.mvTax.alreadyReg;
            case 'totalMVFees':
                return districtData.mvFees.sarathi + districtData.mvFees.vahan + districtData.mvFees.pucc;
            case 'totalRoadSafetyCess':
                return districtData.roadSafetyCess.nonTransport + districtData.roadSafetyCess.transport;
            case 'totalGreenTax':
                return districtData.greenTax.nonTransport + districtData.greenTax.transport;
            case 'totalCF':
                return districtData.compoundingFees.offenceCF + districtData.compoundingFees.perDayCF + districtData.compoundingFees.fitnessCF + districtData.compoundingFees.puccLateFine + districtData.compoundingFees.otherLateFees;
            case 'totalAPGT':
                return districtData.apgt;
            case 'totalHSRP':
                return districtData.hsrp;
            case 'totalLaborCess':
                return districtData.laborCess;
            case 'grandTotal':
            default:
                return (
                    districtData.mvTax.nonTransport + districtData.mvTax.newReg + districtData.mvTax.alreadyReg +
                    districtData.mvFees.sarathi + districtData.mvFees.vahan + districtData.mvFees.pucc +
                    districtData.roadSafetyCess.nonTransport + districtData.roadSafetyCess.transport +
                    districtData.greenTax.nonTransport + districtData.greenTax.transport +
                    districtData.compoundingFees.offenceCF + districtData.compoundingFees.perDayCF + districtData.compoundingFees.fitnessCF + districtData.compoundingFees.puccLateFine + districtData.compoundingFees.otherLateFees +
                    districtData.apgt + districtData.hsrp + districtData.laborCess
                );
        }
    };

    const getStreamValue = (d) => {
        if (!d) return 0;
        switch (selectedStream) {
            case 'totalMVTax':
                return d.mvTaxNonTransport + d.mvTaxTransport + d.mvTaxNewRegistration + d.mvTaxFromRegistered;
            case 'totalMVFees':
                return d.mvFeesSarathi + d.mvFeesVahan + d.mvFeesPUCC;
            case 'totalRoadSafetyCess':
                return d.roadSafetyCessNonTransport + d.roadSafetyCessTransport;
            case 'totalGreenTax':
                return d.greenTaxNonTransport + d.greenTaxTransport;
            case 'totalCF':
                return d.cfOffence + d.cfDelayFine + d.fitnessCF + d.puccLateFine + d.otherLateFees;
            case 'totalAPGT':
                return d.apgt;
            case 'totalHSRP':
                return d.hsrp;
            case 'totalLaborCess':
                return d.laborCess;
            case 'grandTotal':
            default:
                return (
                    d.mvTaxNonTransport + d.mvTaxTransport + d.mvTaxNewRegistration + d.mvTaxFromRegistered +
                    d.mvFeesSarathi + d.mvFeesVahan + d.mvFeesPUCC +
                    d.roadSafetyCessNonTransport + d.roadSafetyCessTransport +
                    d.greenTaxNonTransport + d.greenTaxTransport +
                    d.cfOffence + d.cfDelayFine + d.fitnessCF +
                    d.puccLateFine + d.otherLateFees + d.apgt + d.hsrp + d.laborCess
                );
        }
    };

    const getDistrictCategoryValue = (districtData, category) => {
        if (!districtData) return 0;
        switch (category) {
            case 'mvTax': return districtData.mvTax.nonTransport + districtData.mvTax.newReg + districtData.mvTax.alreadyReg;
            case 'mvFees': return districtData.mvFees.sarathi + districtData.mvFees.vahan + districtData.mvFees.pucc;
            case 'roadSafetyCess': return districtData.roadSafetyCess.nonTransport + districtData.roadSafetyCess.transport;
            case 'greenTax': return districtData.greenTax.nonTransport + districtData.greenTax.transport;
            case 'compoundingFees': return districtData.compoundingFees.offenceCF + districtData.compoundingFees.perDayCF + districtData.compoundingFees.fitnessCF + districtData.compoundingFees.puccLateFine + districtData.compoundingFees.otherLateFees;
            case 'apgt': return districtData.apgt;
            case 'hsrp': return districtData.hsrp;
            case 'laborCess': return districtData.laborCess;
            case 'mvArrear': return districtData.mvArrear;
            case 'socialSecurity': return districtData.socialSecurity;
            case 'permitFeeCess': return districtData.permitFeeCess;
            case 'grandTotal':
            default:
                return (
                    districtData.mvTax.nonTransport + districtData.mvTax.newReg + districtData.mvTax.alreadyReg +
                    districtData.mvFees.sarathi + districtData.mvFees.vahan + districtData.mvFees.pucc +
                    districtData.roadSafetyCess.nonTransport + districtData.roadSafetyCess.transport +
                    districtData.greenTax.nonTransport + districtData.greenTax.transport +
                    districtData.compoundingFees.offenceCF + districtData.compoundingFees.perDayCF + districtData.compoundingFees.fitnessCF + districtData.compoundingFees.puccLateFine + districtData.compoundingFees.otherLateFees +
                    districtData.apgt + districtData.hsrp + districtData.laborCess + districtData.mvArrear + districtData.socialSecurity + districtData.permitFeeCess
                );
        }
    };

    const scaleRow = (row, scaleFactor) => {
        const scale = (val) => Math.floor(val * scaleFactor);
        return {
            ...row,
            mvTax: { nonTransport: scale(row.mvTax.nonTransport), newReg: scale(row.mvTax.newReg), alreadyReg: scale(row.mvTax.alreadyReg) },
            mvFees: { sarathi: scale(row.mvFees.sarathi), vahan: scale(row.mvFees.vahan), pucc: scale(row.mvFees.pucc) },
            roadSafetyCess: { nonTransport: scale(row.roadSafetyCess.nonTransport), transport: scale(row.roadSafetyCess.transport) },
            greenTax: { nonTransport: scale(row.greenTax.nonTransport), transport: scale(row.greenTax.transport) },
            compoundingFees: { offenceCF: scale(row.compoundingFees.offenceCF), perDayCF: scale(row.compoundingFees.perDayCF), fitnessCF: scale(row.compoundingFees.fitnessCF), puccLateFine: scale(row.compoundingFees.puccLateFine), otherLateFees: scale(row.compoundingFees.otherLateFees) },
            apgt: scale(row.apgt),
            hsrp: scale(row.hsrp),
            laborCess: scale(row.laborCess),
            mvArrear: scale(row.mvArrear),
            socialSecurity: scale(row.socialSecurity),
            permitFeeCess: scale(row.permitFeeCess),
        };
    };

    const scaledPrimaryData = primaryData.map(row => scaleRow(row, primaryScale));
    const scaledComparisonData = comparisonDataRaw.map(row => scaleRow(row, compareScale));

    const scaledPrimaryDataFiltered = primaryDistrict === 'All'
        ? scaledPrimaryData
        : scaledPrimaryData.filter((r) => r.district === primaryDistrict);

    const scaledComparisonDataFiltered = compareDistrict === 'All'
        ? scaledComparisonData
        : scaledComparisonData.filter((r) => r.district === compareDistrict);

    const sumDistrictValue = (rows, fn) => rows.reduce((sum, r) => sum + fn(r), 0);

    // Calculate total revenue for summary cards (district-aware, based on district-wise dataset)
    const stats = useMemo(() => {
        const rows = scaledPrimaryDataFiltered;
        const totalMVTax = sumDistrictValue(rows, (d) => d.mvTax.nonTransport + d.mvTax.newReg + d.mvTax.alreadyReg);
        const totalMVFees = sumDistrictValue(rows, (d) => d.mvFees.sarathi + d.mvFees.vahan + d.mvFees.pucc);
        const totalRoadSafetyCess = sumDistrictValue(rows, (d) => d.roadSafetyCess.nonTransport + d.roadSafetyCess.transport);
        const totalGreenTax = sumDistrictValue(rows, (d) => d.greenTax.nonTransport + d.greenTax.transport);
        const totalCF = sumDistrictValue(rows, (d) => d.compoundingFees.offenceCF + d.compoundingFees.perDayCF + d.compoundingFees.fitnessCF + d.compoundingFees.puccLateFine + d.compoundingFees.otherLateFees);
        const totalAPGT = sumDistrictValue(rows, (d) => d.apgt);
        const totalHSRP = sumDistrictValue(rows, (d) => d.hsrp);
        const totalLaborCess = sumDistrictValue(rows, (d) => d.laborCess);
        const grandTotal = totalMVTax + totalMVFees + totalRoadSafetyCess + totalGreenTax + totalCF + totalAPGT + totalHSRP + totalLaborCess;

        return {
            totalMVTax,
            totalMVFees,
            totalRoadSafetyCess,
            totalGreenTax,
            totalCF,
            totalAPGT,
            totalHSRP,
            totalLaborCess,
            grandTotal,
        };
    }, [scaledPrimaryDataFiltered]);

    // Revenue breakdown by category (Pie chart)
    const revenuePieData = {
        labels: ['MV Tax', 'MV Fees', 'Road Safety Cess', 'Green Tax', 'Compounding Fees', 'APGT', 'HSRP', 'Labor Cess'],
        datasets: [
            {
                data: [
                    stats.totalMVTax,
                    stats.totalMVFees,
                    stats.totalRoadSafetyCess,
                    stats.totalGreenTax,
                    stats.totalCF,
                    stats.totalAPGT,
                    stats.totalHSRP,
                    stats.totalLaborCess
                ],
                backgroundColor: [
                    'rgba(59, 130, 246, 0.8)',
                    'rgba(16, 185, 129, 0.8)',
                    'rgba(245, 158, 11, 0.8)',
                    'rgba(34, 197, 94, 0.8)',
                    'rgba(239, 68, 68, 0.8)',
                    'rgba(168, 85, 247, 0.8)',
                    'rgba(99, 102, 241, 0.8)',
                    'rgba(236, 72, 153, 0.8)',
                ],
                borderColor: [
                    'rgba(59, 130, 246, 1)',
                    'rgba(16, 185, 129, 1)',
                    'rgba(245, 158, 11, 1)',
                    'rgba(34, 197, 94, 1)',
                    'rgba(239, 68, 68, 1)',
                    'rgba(168, 85, 247, 1)',
                    'rgba(99, 102, 241, 1)',
                    'rgba(236, 72, 153, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const buildMonthlySeriesFromAnnual = (annualTotal, baseMonthlyValues) => {
        const base = baseMonthlyValues.map((v) => Math.max(0, v));
        const sumBase = base.reduce((a, b) => a + b, 0);
        const weights = sumBase > 0 ? base.map((v) => v / sumBase) : base.map(() => 1 / base.length);
        return weights.map((w) => Math.round(annualTotal * w));
    };

    const getDistrictAnnualForYear = (year) => {
        const data = year === 2026 ? dummyData.districtWiseRevenue2026 : dummyData.districtWiseRevenue;
        if (selectedDistrict === 'All') return null;
        return data.find((d) => d.district === selectedDistrict) || null;
    };

    const monthly2025 = selectedDistrict === 'All'
        ? filteredData2025.map((d) => getStreamValue(d))
        : buildMonthlySeriesFromAnnual(
            getDistrictStreamValue(getDistrictAnnualForYear(2025)),
            filteredData2025.map((d) => getStreamValue(d))
        );

    const monthly2026 = selectedDistrict === 'All'
        ? filteredData2026.map((d) => getStreamValue(d))
        : buildMonthlySeriesFromAnnual(
            getDistrictStreamValue(getDistrictAnnualForYear(2026)),
            filteredData2026.map((d) => getStreamValue(d))
        );

    // Dual line trend chart (2025 vs 2026) (district-aware synthesized when needed)
    const revenueTrendData = {
        labels: selectedMonths,
        datasets: [
            {
                label: `2025`,
                data: dummyData.revenueCollection.filter(d => selectedMonths.includes(d.month)).map((d, idx) => monthly2025[idx]),
                borderColor: 'rgba(59, 130, 246, 1)',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                tension: 0.4,
                fill: false,
            },
            {
                label: `2026`,
                data: dummyData.revenueCollection2026.filter(d => selectedMonths.includes(d.month)).map((d, idx) => monthly2026[idx]),
                borderColor: 'rgba(239, 68, 68, 1)',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                tension: 0.4,
                fill: false,
            },
        ],
    };

    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                },
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                callbacks: {
                    label: function (context) {
                        return context.dataset.label + ': ' + formatCurrency(context.parsed.y);
                    }
                }
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                    callback: (value) => '₹' + (value / 1000).toFixed(0) + 'K'
                },
                grid: { color: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)' }
            },
            x: {
                ticks: { color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)' },
                grid: { color: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)' }
            }
        }
    };

    const pieOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                },
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const label = context.label || '';
                        const value = context.parsed;
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const percentage = ((value / total) * 100).toFixed(1) + '%';
                        return label + ': ' + formatCurrency(value) + ' (' + percentage + ')';
                    }
                }
            },
        },
        scales: {
            x: { display: false },
            y: { display: false },
        },
    };

    const formatCurrency = (amount) => {
        return '₹' + amount.toLocaleString('en-IN');
    };

    return (
        <div className="space-y-6">
            <DateFilter onFilterChange={handleFilterChange} defaultStart={defaultStart} defaultEnd={today} />

            {/* Top Section: Summary & Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-lg shadow p-6 md:col-span-2">
                        <h3 className="text-sm font-medium text-blue-100">Grand Total Revenue (2025)</h3>
                        <p className="text-3xl font-bold text-white mt-2">{formatCurrency(stats.grandTotal)}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total MV Tax</h3>
                        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-2">{formatCurrency(stats.totalMVTax)}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total MV Fees</h3>
                        <p className="text-2xl font-bold text-green-600 dark:text-green-400 mt-2">{formatCurrency(stats.totalMVFees)}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Road Safety Cess</h3>
                        <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mt-2">{formatCurrency(stats.totalRoadSafetyCess)}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Green Tax</h3>
                        <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-2">{formatCurrency(stats.totalGreenTax)}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Compounding Fees</h3>
                        <p className="text-2xl font-bold text-red-600 dark:text-red-400 mt-2">{formatCurrency(stats.totalCF)}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">APGT</h3>
                        <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 mt-2">{formatCurrency(stats.totalAPGT)}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">HSRP</h3>
                        <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mt-2">{formatCurrency(stats.totalHSRP)}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Labor Cess</h3>
                        <p className="text-2xl font-bold text-pink-600 dark:text-pink-400 mt-2">{formatCurrency(stats.totalLaborCess)}</p>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col h-full">
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Revenue Breakdown (2025)</h2>
                    <div className="flex-1 min-h-[300px]">
                        <Pie data={revenuePieData} options={pieOptions} />
                    </div>
                </div>
            </div>

            {/* Middle Section: Comparison Chart with Stream Selector */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white uppercase tracking-tight">Revenue Comparison (2025 vs 2026)</h2>
                    
                    <div className="flex flex-wrap gap-2">
                        {streams.map(stream => (
                            <button
                                key={stream.id}
                                onClick={() => setSelectedStream(stream.id)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                                    selectedStream === stream.id
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                                }`}
                            >
                                {stream.name}
                            </button>
                        ))}
                    </div>
                </div>
                
                <div className="h-96">
                    <Line data={revenueTrendData} options={commonOptions} />
                </div>
            </div>

            {/* Bottom Section: District-wise Detailed Table */}
            <ComparisonTableEnhanced
                title="District-Wise Revenue"
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
                    <table className="min-w-full border-collapse border border-gray-200 dark:border-gray-700">
                        <thead className="bg-gray-100 dark:bg-gray-800 text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                            <tr>
                                <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center w-12">Sl. No.</th>
                                <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">District</th>
                                <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-right">Selected Period</th>
                                <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-right">Comparison Period</th>
                                <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-right">Variance (₹)</th>
                                <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-right">Trend</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {scaledPrimaryDataFiltered.map((rowPrimary, idx) => {
                                const rowComparison = scaledComparisonDataFiltered?.find(d => d.district === rowPrimary.district);
                                
                                const valPrimary = getDistrictCategoryValue(rowPrimary, compareCategory);
                                const valComparison = getDistrictCategoryValue(rowComparison, compareCategory);
                                
                                const variance = valComparison - valPrimary;
                                const variancePct = valPrimary === 0 ? 0 : (variance / valPrimary) * 100;
                                
                                const isPositive = variance > 0;
                                const isNegative = variance < 0;
                                
                                return (
                                    <tr key={rowPrimary.district} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40'}>
                                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm text-center font-medium text-gray-900 dark:text-white">
                                            {idx + 1}
                                        </td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                                            {rowPrimary.district}
                                        </td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-right text-sm text-gray-600 dark:text-gray-400">
                                            {formatCurrency(valPrimary)}
                                        </td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-right text-sm text-gray-900 dark:text-white font-semibold">
                                            {formatCurrency(valComparison)}
                                        </td>
                                        <td className={`border border-gray-200 dark:border-gray-700 px-4 py-3 text-right text-sm font-bold ${isPositive ? 'text-green-600 dark:text-green-400' : isNegative ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'}`}>
                                            {isPositive ? '+' : ''}{formatCurrency(variance)}
                                        </td>
                                        <td className={`border border-gray-200 dark:border-gray-700 px-4 py-3 text-right text-sm font-bold ${isPositive ? 'text-green-600 dark:text-green-400' : isNegative ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'}`}>
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
                <table className="min-w-full border-collapse border border-gray-200 dark:border-gray-700">
                            <thead className="bg-gray-100 dark:bg-gray-800 text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                                {/* Row 1 */}
                                <tr>
                                    <th rowSpan="3" className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center w-12">Sl. No.</th>
                                    <th rowSpan="3" className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">District</th>
                                    <th colSpan="3" className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">MV Tax</th>
                                    <th colSpan="3" className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">MV Fees</th>
                                    <th colSpan="2" className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">Road Safety Cess</th>
                                    <th colSpan="2" className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">Green Tax</th>
                                    <th colSpan="5" className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">C.F. (Compounding Fees)</th>
                                    <th rowSpan="3" className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">APGT</th>
                                    <th rowSpan="3" className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">HSRP</th>
                                    <th rowSpan="3" className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">Labor Cess</th>
                                    <th rowSpan="3" className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">MV Arrear</th>
                                    <th rowSpan="3" className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">Social Security</th>
                                    <th rowSpan="3" className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">Permit Fee Cess</th>
                                </tr>
                                {/* Row 2 */}
                                <tr>
                                    <th rowSpan="2" className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-center">Non-Transport</th>
                                    <th colSpan="2" className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-center">Transport</th>
                                    <th rowSpan="2" className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-center">Sarathi</th>
                                    <th rowSpan="2" className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-center">Vahan</th>
                                    <th rowSpan="2" className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-center">PUCC</th>
                                    <th rowSpan="2" className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-center">Non-Transport</th>
                                    <th rowSpan="2" className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-center">Transport</th>
                                    <th rowSpan="2" className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-center">Non-Transport</th>
                                    <th rowSpan="2" className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-center">Transport</th>
                                    <th rowSpan="2" className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-center">Offence CF</th>
                                    <th rowSpan="2" className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-center text-[10px]">CF @₹5/day delay</th>
                                    <th rowSpan="2" className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-center text-[10px]">Fitness CF @₹50/day</th>
                                    <th rowSpan="2" className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-center text-[10px]">PUCC Late @₹500</th>
                                    <th rowSpan="2" className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-center text-[10px]">Other Late fees</th>
                                </tr>
                                {/* Row 3 */}
                                <tr>
                                    <th className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-center text-[10px]">New Registration</th>
                                    <th className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-center text-[10px]">Already Registered</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {scaledPrimaryDataFiltered.map((row, idx) => (
                                    <tr key={row.district} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40'}>
                                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-sm text-center font-medium text-gray-900 dark:text-white">{idx + 1}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-sm font-medium text-gray-900 dark:text-white">{row.district}</td>
                                        
                                        {/* MV Tax */}
                                        <td className="border border-gray-200 dark:border-gray-700 px-2 py-2 text-right text-xs text-gray-600 dark:text-gray-400">{row.mvTax.nonTransport.toLocaleString()}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-2 py-2 text-right text-xs text-gray-600 dark:text-gray-400">{row.mvTax.newReg.toLocaleString()}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-2 py-2 text-right text-xs text-gray-600 dark:text-gray-400">{row.mvTax.alreadyReg.toLocaleString()}</td>
                                        
                                        {/* MV Fees */}
                                        <td className="border border-gray-200 dark:border-gray-700 px-2 py-2 text-right text-xs text-green-600 dark:text-green-400 font-medium">{row.mvFees.sarathi.toLocaleString()}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-2 py-2 text-right text-xs text-green-600 dark:text-green-400 font-medium">{row.mvFees.vahan.toLocaleString()}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-2 py-2 text-right text-xs text-green-600 dark:text-green-400 font-medium">{row.mvFees.pucc.toLocaleString()}</td>
                                        
                                        {/* Road Safety Cess */}
                                        <td className="border border-gray-200 dark:border-gray-700 px-2 py-2 text-right text-xs text-yellow-600 dark:text-yellow-400">{row.roadSafetyCess.nonTransport.toLocaleString()}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-2 py-2 text-right text-xs text-yellow-600 dark:text-yellow-400">{row.roadSafetyCess.transport.toLocaleString()}</td>
                                        
                                        {/* Green Tax */}
                                        <td className="border border-gray-200 dark:border-gray-700 px-2 py-2 text-right text-xs text-emerald-600 dark:text-emerald-400">{row.greenTax.nonTransport.toLocaleString()}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-2 py-2 text-right text-xs text-emerald-600 dark:text-emerald-400">{row.greenTax.transport.toLocaleString()}</td>
                                        
                                        {/* Compounding Fees */}
                                        <td className="border border-gray-200 dark:border-gray-700 px-2 py-2 text-right text-xs text-red-600 dark:text-red-400">{row.compoundingFees.offenceCF.toLocaleString()}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-2 py-2 text-right text-xs text-red-600 dark:text-red-400">{row.compoundingFees.perDayCF.toLocaleString()}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-2 py-2 text-right text-xs text-red-600 dark:text-red-400">{row.compoundingFees.fitnessCF.toLocaleString()}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-2 py-2 text-right text-xs text-red-600 dark:text-red-400">{row.compoundingFees.puccLateFine.toLocaleString()}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-2 py-2 text-right text-xs text-red-600 dark:text-red-400">{row.compoundingFees.otherLateFees.toLocaleString()}</td>
                                        
                                        {/* APGT & HSRP & Labor Cess */}
                                        <td className="border border-gray-200 dark:border-gray-700 px-2 py-2 text-right text-xs text-purple-600 dark:text-purple-400 font-bold">{row.apgt.toLocaleString()}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-2 py-2 text-right text-xs text-indigo-600 dark:text-indigo-400 font-bold">{row.hsrp.toLocaleString()}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-2 py-2 text-right text-xs text-pink-600 dark:text-pink-400 font-bold">{row.laborCess.toLocaleString()}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-2 py-2 text-right text-xs text-gray-600 dark:text-gray-400 font-bold">{row.mvArrear.toLocaleString()}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-2 py-2 text-right text-xs text-gray-600 dark:text-gray-400 font-bold">{row.socialSecurity.toLocaleString()}</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-2 py-2 text-right text-xs text-gray-600 dark:text-gray-400 font-bold">{row.permitFeeCess.toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
            </ComparisonTableEnhanced>
        </div>
    );
};

export default Revenue;
