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
import { formatCurrency, formatCurrencyForComparison } from '../utils/currencyUtils';
import ComparisonTableEnhanced from './ComparisonTableEnhanced';
import { useComparisonEnhanced } from '../hooks/useComparisonEnhanced';

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

const Vehicles = () => {
    const [selectedMonths, setSelectedMonths] = useState(dummyData.vehicleRegistrations.map(d => d.month));
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [selectedStream, setSelectedStream] = useState('total');
    const [selectedDistrict, setSelectedDistrict] = useState('All');

    const categories = [
        { id: 'total', label: 'Total Registrations' },
        { id: 'nonTransport', label: 'Non Transport' },
        { id: 'transport', label: 'Transport' },
        { id: 'twoWheeler', label: '2 Wheeler' },
        { id: 'threeWheeler', label: '3 Wheeler' }
    ];

    const appCategories = [
        { id: 'totalReceived', label: 'Total Received' },
        { id: 'dealerPoint', label: 'Dealer Point' },
        { id: 'dtoOffice', label: 'DTO Office' },
        { id: 'scrutiny', label: 'Under Scrutiny' },
        { id: 'approvalStage', label: 'Approval Stage' },
        { id: 'approved', label: 'Approved' }
    ];

    const comparisonProps = useComparisonEnhanced({
        initialCategory: 'total',
        getYearDataOptions: {
            '2024': dummyData.districtWiseVehicles2024,
            '2025': dummyData.districtWiseVehicles,
            '2026': dummyData.districtWiseVehicles2026,
        }
    });

    const comparisonPropsApps = useComparisonEnhanced({
        initialCategory: 'totalReceived',
        getYearDataOptions: {
            '2024': dummyData.registrationApplicationsData || dummyData.registrationApplicationsData2026,
            '2025': dummyData.registrationApplicationsData,
            '2026': dummyData.registrationApplicationsData2026,
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

    const {
        isComparisonEnabled: isComparisonEnabledApps,
        setIsComparisonEnabled: setIsComparisonEnabledApps,
        primaryRange: primaryRangeApps,
        setPrimaryRange: setPrimaryRangeApps,
        compareRange: compareRangeApps,
        setCompareRange: setCompareRangeApps,
        compareCategory: compareCategoryApps,
        setCompareCategory: setCompareCategoryApps,
        primaryDistrict: primaryDistrictApps,
        setPrimaryDistrict: setPrimaryDistrictApps,
        compareDistrict: compareDistrictApps,
        setCompareDistrict: setCompareDistrictApps,
        primaryScale: primaryScaleApps,
        compareScale: compareScaleApps,
        primaryData: primaryDataApps,
        comparisonDataRaw: comparisonDataRawApps
    } = comparisonPropsApps;

    const streams = [
        { id: 'total', name: 'Total Registrations' },
        { id: 'nonTransport', name: 'Non Transport' },
        { id: 'transport', name: 'Transport' },
        { id: 'twoWheeler', name: '2 Wheeler' },
        { id: 'threeWheeler', name: '3 Wheeler' },
    ];

    const handleFilterChange = ({ start, end, district }) => {
        const monthsInRange = getMonthsInRange(start, end);
        setSelectedMonths(monthsInRange);
        if (district) setSelectedDistrict(district);
    };

    useEffect(() => {
        setIsDarkMode(document.documentElement.classList.contains('dark'));
    }, []);

    const filteredData2025 = dummyData.vehicleRegistrations.filter(d => selectedMonths.includes(d.month));
    const filteredData2026 = dummyData.vehicleRegistrations2026.filter(d => selectedMonths.includes(d.month));

    const scaleRow = (row, scaleFactor) => {
        const scale = (val) => Math.floor(val * scaleFactor);
        return {
            ...row,
            total: scale(row.total),
            nonTransport: scale(row.nonTransport),
            transport: scale(row.transport),
            twoWheeler: scale(row.twoWheeler),
            threeWheeler: scale(row.threeWheeler),
        };
    };

    const scaledPrimaryDataRaw = primaryData.map(row => scaleRow(row, primaryScale));
    const scaledComparisonDataRaw = comparisonDataRaw.map(row => scaleRow(row, compareScale));

    const scaledPrimaryData = selectedDistrict === 'All'
        ? scaledPrimaryDataRaw
        : scaledPrimaryDataRaw.filter((r) => r.district === selectedDistrict);

    const scaledComparisonData = selectedDistrict === 'All'
        ? scaledComparisonDataRaw
        : scaledComparisonDataRaw.filter((r) => r.district === selectedDistrict);

    const getDistrictCategoryValue = (districtData, category) => {
        if (!districtData) return 0;
        switch (category) {
            case 'nonTransport': return districtData.nonTransport;
            case 'transport': return districtData.transport;
            case 'twoWheeler': return districtData.twoWheeler;
            case 'threeWheeler': return districtData.threeWheeler;
            case 'total':
            default: return districtData.total;
        }
    };

    const getStreamValue = (d) => {
        if (!d) return 0;
        switch (selectedStream) {
            case 'nonTransport': return d.nonTransport;
            case 'transport': return d.transport;
            case 'twoWheeler': return d.twoWheeler;
            case 'threeWheeler': return d.threeWheeler;
            case 'total':
            default:
                return d.nonTransport + d.transport;
        }
    };

    const stats = useMemo(() => {
        const totalNonTransport = filteredData2025.reduce((sum, d) => sum + d.nonTransport, 0);
        const totalTransport = filteredData2025.reduce((sum, d) => sum + d.transport, 0);
        const total2Wheeler = filteredData2025.reduce((sum, d) => sum + d.twoWheeler, 0);
        const total3Wheeler = filteredData2025.reduce((sum, d) => sum + d.threeWheeler, 0);
        const grandTotal = totalNonTransport + totalTransport;

        return {
            totalNonTransport,
            totalTransport,
            total2Wheeler,
            total3Wheeler,
            grandTotal,
        };
    }, [filteredData2025]);

    const registrationPieData = {
        labels: ['Non Transport', 'Transport', 'Others'],
        datasets: [
            {
                data: [
                    stats.totalNonTransport,
                    stats.totalTransport,
                    filteredData2025.reduce((sum, d) => sum + d.others, 0)
                ],
                backgroundColor: [
                    'rgba(59, 130, 246, 0.8)',
                    'rgba(16, 185, 129, 0.8)',
                    'rgba(245, 158, 11, 0.8)',
                ],
                borderColor: [
                    'rgba(59, 130, 246, 1)',
                    'rgba(16, 185, 129, 1)',
                    'rgba(245, 158, 11, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const registrationTrendData = {
        labels: selectedMonths,
        datasets: [
            {
                label: `2025`,
                data: primaryData.map(d => getStreamValue(d)),
                borderColor: 'rgba(59, 130, 246, 1)',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                tension: 0.4,
                fill: false,
            },
            {
                label: `2026`,
                data: primaryData.map(d => getStreamValue(d)),
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
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
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
                        const value = formatCurrency(context.parsed.y);
                        const total = context.raw.reduce((a, b) => a + b, 0);
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

    const scaleAppRow = (row, scaleFactor) => {
        if (!row) return null;
        const scale = (val) => Math.floor(val * scaleFactor);
        return {
            ...row,
            totalReceived: scale(row.totalReceived),
            dealerPoint: scale(row.dealerPoint),
            dtoOffice: scale(row.dtoOffice),
            scrutiny: scale(row.scrutiny),
            approvalStage: scale(row.approvalStage),
            approved: scale(row.approved)
        };
    };

    const scaledAppPrimaryRaw = primaryDataApps.map(row => scaleAppRow(row, primaryScaleApps));
    const scaledAppComparisonRaw = comparisonDataRawApps?.map(row => scaleAppRow(row, compareScaleApps));

    const scaledAppPrimaryData = selectedDistrict === 'All'
        ? scaledAppPrimaryRaw
        : scaledAppPrimaryRaw.filter(d => d.district === selectedDistrict);

    const top5DistrictsData = useMemo(() => {
        const districtTotals = scaledPrimaryDataRaw.filter(r => r.district !== 'All').map(r => ({
            district: r.district,
            total: getDistrictCategoryValue(r, compareCategory)
        }));
        return districtTotals.sort((a, b) => b.total - a.total).slice(0, 5);
    }, [scaledPrimaryDataRaw, compareCategory]);

    const top5ChartData = {
        labels: top5DistrictsData.map(d => d.district),
        datasets: [
            {
                label: 'Registrations',
                data: top5DistrictsData.map(d => d.total),
                backgroundColor: 'rgba(59, 130, 246, 0.8)',
                borderColor: 'rgba(59, 130, 246, 1)',
                borderWidth: 1,
                borderRadius: 4,
            }
        ]
    };

    const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return formatCurrency(context.parsed.y);
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: { color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)' },
                grid: { color: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)' }
            },
            x: {
                ticks: { color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)' },
                grid: { display: false }
            }
        }
    };

    return (
        <div className="space-y-6">
            <DateFilter onFilterChange={handleFilterChange} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-lg shadow p-6 md:col-span-2">
                        <h3 className="text-sm font-medium text-blue-100 uppercase tracking-wider">Total new vehicle registrations (2025)</h3>
                        <p className="text-4xl font-bold text-white mt-2">{stats.grandTotal.toLocaleString()}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Non Transport</h3>
                        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-2">{stats.totalNonTransport.toLocaleString()}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Transport</h3>
                        <p className="text-2xl font-bold text-green-600 dark:text-green-400 mt-2">{stats.totalTransport.toLocaleString()}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">2 Wheeler</h3>
                        <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 mt-2">{stats.total2Wheeler.toLocaleString()}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">3 Wheeler</h3>
                        <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mt-2">{stats.total3Wheeler.toLocaleString()}</p>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col h-full">
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white uppercase tracking-tight">Registrations by Type (2025)</h2>
                    <div className="flex-1 min-h-[300px]">
                        <Pie data={registrationPieData} options={pieOptions} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white uppercase tracking-tight">Total Registration Trend (2025 vs 2026)</h2>
                        
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
                        <Line data={registrationTrendData} options={commonOptions} />
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white uppercase tracking-tight mb-6">Registration in Top Five Districts</h2>
                    <div className="h-96">
                        <Bar data={top5ChartData} options={barOptions} />
                    </div>
                </div>
            </div>

            {/* District-wise Registration Table */}
            {/* District-wise Registration Table */}
            <ComparisonTableEnhanced
                title="DISTRICT-WISE VEHICLE REGISTRATION"
                isComparisonEnabled={isComparisonEnabled}
                setIsComparisonEnabled={setIsComparisonEnabled}
                primaryRange={primaryRange}
                setPrimaryRange={setPrimaryRange}
                compareRange={compareRange}
                setCompareRange={setCompareRange}
                compareCategory={compareCategory}
                setCompareCategory={setCompareCategory}
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
                            {scaledPrimaryData.map((rowPrimary, idx) => {
                                const rowComparison = comparisonProps.comparisonDataRaw?.find(d => d.district === rowPrimary.district);
                                
                                const valPrimary = getDistrictCategoryValue(rowPrimary, comparisonProps.compareCategory);
                                const valComparison = getDistrictCategoryValue(rowComparison, comparisonProps.compareCategory);
                                
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
                    <thead className="bg-gray-100 dark:bg-gray-800 text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                        <tr>
                            <th className="px-6 py-4 text-left border-b border-gray-200 dark:border-gray-700">Serial No.</th>
                            <th className="px-6 py-4 text-left border-b border-gray-200 dark:border-gray-700">District</th>
                            <th className="px-6 py-4 text-right border-b border-gray-200 dark:border-gray-700">Total registrations</th>
                            <th className="px-6 py-4 text-right border-b border-gray-200 dark:border-gray-700">Non Transport</th>
                            <th className="px-6 py-4 text-right border-b border-gray-200 dark:border-gray-700">Transport</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {scaledPrimaryData.map((row, idx) => (
                            <tr key={row.district} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40'}>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{idx + 1}</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{row.district}</td>
                                <td className="px-6 py-4 text-sm text-right text-blue-600 dark:text-blue-400 font-bold">{row.total.toLocaleString()}</td>
                                <td className="px-6 py-4 text-sm text-right text-gray-600 dark:text-gray-400">{row.nonTransport.toLocaleString()}</td>
                                <td className="px-6 py-4 text-sm text-right text-gray-600 dark:text-gray-400">{row.transport.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </ComparisonTableEnhanced>

            {/* Registration Application Status Table (from Image) */}
            <ComparisonTableEnhanced
                title="Registration Application Status"
                isComparisonEnabled={isComparisonEnabledApps}
                setIsComparisonEnabled={setIsComparisonEnabledApps}
                primaryRange={primaryRangeApps}
                setPrimaryRange={setPrimaryRangeApps}
                compareRange={compareRangeApps}
                setCompareRange={setCompareRangeApps}
                primaryDistrict={primaryDistrictApps}
                setPrimaryDistrict={setPrimaryDistrictApps}
                compareDistrict={compareDistrictApps}
                setCompareDistrict={setCompareDistrictApps}
                compareCategory={compareCategoryApps}
                setCompareCategory={setCompareCategoryApps}
                categories={appCategories}
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
                            {scaledAppPrimaryData.map((rowPrimary, idx) => {
                                const rowComparison = scaledAppComparisonRaw?.find(d => d.district === rowPrimary.district);
                                
                                const valPrimary = rowPrimary[compareCategoryApps] || 0;
                                const valComparison = rowComparison ? rowComparison[compareCategoryApps] || 0 : 0;
                                
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
                    <thead className="bg-gray-100 dark:bg-gray-800 text-[10px] font-bold uppercase text-gray-700 dark:text-gray-300">
                        <tr>
                            <th className="px-4 py-3 text-left">Serial No.</th>
                            <th className="px-4 py-3 text-left">Name of District</th>
                            <th className="px-4 py-3 text-center">Total applications received for new registration</th>
                            <th className="px-4 py-3 text-center">Total registration made from dealer-point</th>
                            <th className="px-4 py-3 text-center">Total registration made from DTO office, if any</th>
                            <th className="px-4 py-3 text-center">Total applications under scrutiny stage</th>
                            <th className="px-4 py-3 text-center">Total applications under approval stage</th>
                            <th className="px-4 py-3 text-center">Total applications approved</th>
                            <th className="px-4 py-3 text-center">Date of application for new registration</th>
                            <th className="px-4 py-3 text-center">Date of scrutiny</th>
                            <th className="px-4 py-3 text-center">Date of approval</th>
                            <th className="px-4 py-3 text-center">Time taken (days) between application and approval</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {scaledAppPrimaryData.map((row, idx) => (
                            <tr key={row.district} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40'}>
                                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{idx + 1}</td>
                                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{row.district}</td>
                                <td className="px-4 py-3 text-sm text-right text-gray-600 dark:text-gray-400">{row.totalReceived.toLocaleString()}</td>
                                <td className="px-4 py-3 text-sm text-right text-blue-600 dark:text-blue-400 font-medium">{row.dealerPoint.toLocaleString()}</td>
                                <td className="px-4 py-3 text-sm text-right text-gray-600 dark:text-gray-400">{row.dtoOffice.toLocaleString()}</td>
                                <td className="px-4 py-3 text-sm text-right text-yellow-600 dark:text-yellow-400 font-medium">{row.scrutiny.toLocaleString()}</td>
                                <td className="px-4 py-3 text-sm text-right text-orange-600 dark:text-orange-400 font-medium">{row.approvalStage.toLocaleString()}</td>
                                <td className="px-4 py-3 text-sm text-right text-green-600 dark:text-green-400 font-bold">{row.approved.toLocaleString()}</td>
                                <td className="px-4 py-3 text-sm text-center text-gray-600 dark:text-gray-400">{row.applicationDate || ''}</td>
                                <td className="px-4 py-3 text-sm text-center text-gray-600 dark:text-gray-400">{row.scrutinyDate || ''}</td>
                                <td className="px-4 py-3 text-sm text-center text-gray-600 dark:text-gray-400">{row.approvalDate || ''}</td>
                                <td className="px-4 py-3 text-sm text-center text-gray-900 dark:text-white font-semibold">{(row.timeTakenDays ?? '').toString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </ComparisonTableEnhanced>
        </div>
    );
};

export default Vehicles;
