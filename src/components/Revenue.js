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
import { Bar, Line } from 'react-chartjs-2';
import dummyData from '../data/dummyData';

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
    const [selectedMonths, setSelectedMonths] = useState(dummyData.revenueCollection.map(d => d.month));
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        setIsDarkMode(document.documentElement.classList.contains('dark'));
    }, []);

    const months = dummyData.revenueCollection.map(d => d.month);
    const filteredData = dummyData.revenueCollection.filter(d => selectedMonths.includes(d.month));

    // Calculate total revenue by category
    const stats = useMemo(() => {
        const totalMVTax = filteredData.reduce((sum, d) =>
            sum + d.mvTaxNonTransport + d.mvTaxTransport + d.mvTaxNewRegistration + d.mvTaxFromRegistered, 0
        );
        const totalMVFees = filteredData.reduce((sum, d) =>
            sum + d.mvFeesSarathi + d.mvFeesVahan + d.mvFeesPUCC, 0
        );
        const totalRoadSafetyCess = filteredData.reduce((sum, d) =>
            sum + d.roadSafetyCessNonTransport + d.roadSafetyCessTransport, 0
        );
        const totalGreenTax = filteredData.reduce((sum, d) =>
            sum + d.greenTaxNonTransport + d.greenTaxTransport, 0
        );
        const totalCF = filteredData.reduce((sum, d) =>
            sum + d.cfOffence + d.cfDelayFine + d.fitnessCF, 0
        );
        const totalOther = filteredData.reduce((sum, d) =>
            sum + d.puccLateFine + d.otherLateFees + d.apgt + d.hsrp, 0
        );
        const grandTotal = totalMVTax + totalMVFees + totalRoadSafetyCess + totalGreenTax + totalCF + totalOther;

        return {
            totalMVTax,
            totalMVFees,
            totalRoadSafetyCess,
            totalGreenTax,
            totalCF,
            totalOther,
            grandTotal,
        };
    }, [filteredData]);

    // Revenue breakdown by category (stacked bar chart)
    const revenueBreakdownData = {
        labels: filteredData.map(d => d.month),
        datasets: [
            {
                label: 'MV Tax',
                data: filteredData.map(d => d.mvTaxNonTransport + d.mvTaxTransport + d.mvTaxNewRegistration + d.mvTaxFromRegistered),
                backgroundColor: 'rgba(59, 130, 246, 0.8)',
            },
            {
                label: 'MV Fees',
                data: filteredData.map(d => d.mvFeesSarathi + d.mvFeesVahan + d.mvFeesPUCC),
                backgroundColor: 'rgba(16, 185, 129, 0.8)',
            },
            {
                label: 'Road Safety Cess',
                data: filteredData.map(d => d.roadSafetyCessNonTransport + d.roadSafetyCessTransport),
                backgroundColor: 'rgba(245, 158, 11, 0.8)',
            },
            {
                label: 'Green Tax',
                data: filteredData.map(d => d.greenTaxNonTransport + d.greenTaxTransport),
                backgroundColor: 'rgba(34, 197, 94, 0.8)',
            },
            {
                label: 'Compounding Fees',
                data: filteredData.map(d => d.cfOffence + d.cfDelayFine + d.fitnessCF),
                backgroundColor: 'rgba(239, 68, 68, 0.8)',
            },
            {
                label: 'Other Fees',
                data: filteredData.map(d => d.puccLateFine + d.otherLateFees + d.apgt + d.hsrp),
                backgroundColor: 'rgba(168, 85, 247, 0.8)',
            },
        ],
    };

    // Total revenue trend line chart
    const revenueTrendData = {
        labels: filteredData.map(d => d.month),
        datasets: [
            {
                label: 'Total Revenue (₹)',
                data: filteredData.map(d =>
                    d.mvTaxNonTransport + d.mvTaxTransport + d.mvTaxNewRegistration + d.mvTaxFromRegistered +
                    d.mvFeesSarathi + d.mvFeesVahan + d.mvFeesPUCC +
                    d.roadSafetyCessNonTransport + d.roadSafetyCessTransport +
                    d.greenTaxNonTransport + d.greenTaxTransport +
                    d.cfOffence + d.cfDelayFine + d.fitnessCF +
                    d.puccLateFine + d.otherLateFees + d.apgt + d.hsrp
                ),
                borderColor: 'rgba(59, 130, 246, 1)',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                tension: 0.4,
                fill: true,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'rgba(0, 0, 0, 0.7)',
                },
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                callbacks: {
                    label: function (context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += '₹' + context.parsed.y.toLocaleString('en-IN');
                        return label;
                    }
                }
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                stacked: true,
                ticks: {
                    color: 'rgba(0, 0, 0, 0.7)',
                    callback: function (value) {
                        return '₹' + (value / 1000).toFixed(0) + 'K';
                    }
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)',
                },
            },
            x: {
                stacked: true,
                ticks: {
                    color: 'rgba(0, 0, 0, 0.7)',
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)',
                },
            },
        },
    };

    const lineChartOptions = {
        ...chartOptions,
        scales: {
            ...chartOptions.scales,
            y: {
                ...chartOptions.scales.y,
                stacked: false,
            },
            x: {
                ...chartOptions.scales.x,
                stacked: false,
            },
        },
    };

    const darkChartOptions = {
        ...chartOptions,
        plugins: {
            ...chartOptions.plugins,
            legend: {
                ...chartOptions.plugins.legend,
                labels: {
                    color: 'rgba(255, 255, 255, 0.7)',
                },
            },
        },
        scales: {
            y: {
                ...chartOptions.scales.y,
                ticks: {
                    ...chartOptions.scales.y.ticks,
                    color: 'rgba(255, 255, 255, 0.7)',
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.05)',
                },
            },
            x: {
                ...chartOptions.scales.x,
                ticks: {
                    color: 'rgba(255, 255, 255, 0.7)',
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.05)',
                },
            },
        },
    };

    const darkLineChartOptions = {
        ...lineChartOptions,
        plugins: {
            ...lineChartOptions.plugins,
            legend: {
                ...lineChartOptions.plugins.legend,
                labels: {
                    color: 'rgba(255, 255, 255, 0.7)',
                },
            },
        },
        scales: {
            y: {
                ...lineChartOptions.scales.y,
                ticks: {
                    ...lineChartOptions.scales.y.ticks,
                    color: 'rgba(255, 255, 255, 0.7)',
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.05)',
                },
            },
            x: {
                ...lineChartOptions.scales.x,
                ticks: {
                    color: 'rgba(255, 255, 255, 0.7)',
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.05)',
                },
            },
        },
    };

    const currentChartOptions = isDarkMode ? darkChartOptions : chartOptions;
    const currentLineChartOptions = isDarkMode ? darkLineChartOptions : lineChartOptions;

    const handleMonthToggle = (month) => {
        setSelectedMonths(prev =>
            prev.includes(month)
                ? prev.filter(m => m !== month)
                : [...prev, month]
        );
    };

    const formatCurrency = (amount) => {
        return '₹' + amount.toLocaleString('en-IN');
    };

    return (
        <div className="space-y-6">
            {/* Month Filter */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Filter by Month</h3>
                <div className="flex flex-wrap gap-2">
                    {months.map(month => (
                        <button
                            key={month}
                            onClick={() => handleMonthToggle(month)}
                            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${selectedMonths.includes(month)
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                                }`}
                        >
                            {month}
                        </button>
                    ))}
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Other Fees</h3>
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 mt-2">{formatCurrency(stats.totalOther)}</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-lg shadow p-6 md:col-span-2">
                    <h3 className="text-sm font-medium text-blue-100">Grand Total Revenue</h3>
                    <p className="text-3xl font-bold text-white mt-2">{formatCurrency(stats.grandTotal)}</p>
                </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Revenue Breakdown by Category</h2>
                    <div className="h-96">
                        <Bar data={revenueBreakdownData} options={currentChartOptions} />
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Total Revenue Trend</h2>
                    <div className="h-80">
                        <Line data={revenueTrendData} options={currentLineChartOptions} />
                    </div>
                </div>
            </div>

            {/* Detailed Revenue Table with Sections and Subsections */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Revenue Collection Statement</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Revenue Category</th>
                                {filteredData.map((row) => (
                                    <th key={row.month} className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">{row.month}</th>
                                ))}
                                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider font-bold">Total</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            {/* 1. MV Tax */}
                            <tr className="bg-blue-50 dark:bg-blue-900/20">
                                <td className="px-6 py-3 text-sm font-bold text-gray-900 dark:text-white" colSpan={filteredData.length + 2}>
                                    MV Tax (Motor Vehicle Tax)
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300">Non-Transport</td>
                                {filteredData.map((row) => (
                                    <td key={row.month} className="px-4 py-3 text-right text-sm text-gray-900 dark:text-white">{formatCurrency(row.mvTaxNonTransport)}</td>
                                ))}
                                <td className="px-4 py-3 text-right text-sm font-semibold text-blue-600 dark:text-blue-400">
                                    {formatCurrency(filteredData.reduce((sum, d) => sum + d.mvTaxNonTransport, 0))}
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300">Transport</td>
                                {filteredData.map((row) => (
                                    <td key={row.month} className="px-4 py-3 text-right text-sm text-gray-900 dark:text-white">{formatCurrency(row.mvTaxTransport)}</td>
                                ))}
                                <td className="px-4 py-3 text-right text-sm font-semibold text-blue-600 dark:text-blue-400">
                                    {formatCurrency(filteredData.reduce((sum, d) => sum + d.mvTaxTransport, 0))}
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="px-6 py-3 pl-20 text-sm text-gray-600 dark:text-gray-400">New Registration of Vehicle</td>
                                {filteredData.map((row) => (
                                    <td key={row.month} className="px-4 py-3 text-right text-sm text-gray-900 dark:text-white">{formatCurrency(row.mvTaxNewRegistration)}</td>
                                ))}
                                <td className="px-4 py-3 text-right text-sm font-semibold text-blue-600 dark:text-blue-400">
                                    {formatCurrency(filteredData.reduce((sum, d) => sum + d.mvTaxNewRegistration, 0))}
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="px-6 py-3 pl-20 text-sm text-gray-600 dark:text-gray-400">M.V. Tax from already registered vehicle</td>
                                {filteredData.map((row) => (
                                    <td key={row.month} className="px-4 py-3 text-right text-sm text-gray-900 dark:text-white">{formatCurrency(row.mvTaxFromRegistered)}</td>
                                ))}
                                <td className="px-4 py-3 text-right text-sm font-semibold text-blue-600 dark:text-blue-400">
                                    {formatCurrency(filteredData.reduce((sum, d) => sum + d.mvTaxFromRegistered, 0))}
                                </td>
                            </tr>

                            {/* 2. MV Fees */}
                            <tr className="bg-green-50 dark:bg-green-900/20">
                                <td className="px-6 py-3 text-sm font-bold text-gray-900 dark:text-white" colSpan={filteredData.length + 2}>
                                    MV Fees
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300">Sarathi <span className="text-xs text-gray-500">(Driving Licence related services)</span></td>
                                {filteredData.map((row) => (
                                    <td key={row.month} className="px-4 py-3 text-right text-sm text-gray-900 dark:text-white">{formatCurrency(row.mvFeesSarathi)}</td>
                                ))}
                                <td className="px-4 py-3 text-right text-sm font-semibold text-green-600 dark:text-green-400">
                                    {formatCurrency(filteredData.reduce((sum, d) => sum + d.mvFeesSarathi, 0))}
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300">Vahan <span className="text-xs text-gray-500">(Vehicle related services)</span></td>
                                {filteredData.map((row) => (
                                    <td key={row.month} className="px-4 py-3 text-right text-sm text-gray-900 dark:text-white">{formatCurrency(row.mvFeesVahan)}</td>
                                ))}
                                <td className="px-4 py-3 text-right text-sm font-semibold text-green-600 dark:text-green-400">
                                    {formatCurrency(filteredData.reduce((sum, d) => sum + d.mvFeesVahan, 0))}
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300">PUCC <span className="text-xs text-gray-500">(Pollution Under Control Certificate fees)</span></td>
                                {filteredData.map((row) => (
                                    <td key={row.month} className="px-4 py-3 text-right text-sm text-gray-900 dark:text-white">{formatCurrency(row.mvFeesPUCC)}</td>
                                ))}
                                <td className="px-4 py-3 text-right text-sm font-semibold text-green-600 dark:text-green-400">
                                    {formatCurrency(filteredData.reduce((sum, d) => sum + d.mvFeesPUCC, 0))}
                                </td>
                            </tr>

                            {/* 3. Road Safety Cess */}
                            <tr className="bg-yellow-50 dark:bg-yellow-900/20">
                                <td className="px-6 py-3 text-sm font-bold text-gray-900 dark:text-white" colSpan={filteredData.length + 2}>
                                    Road Safety Cess
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300">Non-Transport</td>
                                {filteredData.map((row) => (
                                    <td key={row.month} className="px-4 py-3 text-right text-sm text-gray-900 dark:text-white">{formatCurrency(row.roadSafetyCessNonTransport)}</td>
                                ))}
                                <td className="px-4 py-3 text-right text-sm font-semibold text-yellow-600 dark:text-yellow-400">
                                    {formatCurrency(filteredData.reduce((sum, d) => sum + d.roadSafetyCessNonTransport, 0))}
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300">Transport</td>
                                {filteredData.map((row) => (
                                    <td key={row.month} className="px-4 py-3 text-right text-sm text-gray-900 dark:text-white">{formatCurrency(row.roadSafetyCessTransport)}</td>
                                ))}
                                <td className="px-4 py-3 text-right text-sm font-semibold text-yellow-600 dark:text-yellow-400">
                                    {formatCurrency(filteredData.reduce((sum, d) => sum + d.roadSafetyCessTransport, 0))}
                                </td>
                            </tr>

                            {/* 4. Green Tax */}
                            <tr className="bg-emerald-50 dark:bg-emerald-900/20">
                                <td className="px-6 py-3 text-sm font-bold text-gray-900 dark:text-white" colSpan={filteredData.length + 2}>
                                    Green Tax
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300">Non-Transport</td>
                                {filteredData.map((row) => (
                                    <td key={row.month} className="px-4 py-3 text-right text-sm text-gray-900 dark:text-white">{formatCurrency(row.greenTaxNonTransport)}</td>
                                ))}
                                <td className="px-4 py-3 text-right text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                                    {formatCurrency(filteredData.reduce((sum, d) => sum + d.greenTaxNonTransport, 0))}
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300">Transport</td>
                                {filteredData.map((row) => (
                                    <td key={row.month} className="px-4 py-3 text-right text-sm text-gray-900 dark:text-white">{formatCurrency(row.greenTaxTransport)}</td>
                                ))}
                                <td className="px-4 py-3 text-right text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                                    {formatCurrency(filteredData.reduce((sum, d) => sum + d.greenTaxTransport, 0))}
                                </td>
                            </tr>

                            {/* 5. C.F. (Compounding Fee) */}
                            <tr className="bg-red-50 dark:bg-red-900/20">
                                <td className="px-6 py-3 text-sm font-bold text-gray-900 dark:text-white" colSpan={filteredData.length + 2}>
                                    C.F. (Compounding Fee)
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300">Offence CF</td>
                                {filteredData.map((row) => (
                                    <td key={row.month} className="px-4 py-3 text-right text-sm text-gray-900 dark:text-white">{formatCurrency(row.cfOffence)}</td>
                                ))}
                                <td className="px-4 py-3 text-right text-sm font-semibold text-red-600 dark:text-red-400">
                                    {formatCurrency(filteredData.reduce((sum, d) => sum + d.cfOffence, 0))}
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300">CF @ ₹5 per day (delay fine)</td>
                                {filteredData.map((row) => (
                                    <td key={row.month} className="px-4 py-3 text-right text-sm text-gray-900 dark:text-white">{formatCurrency(row.cfDelayFine)}</td>
                                ))}
                                <td className="px-4 py-3 text-right text-sm font-semibold text-red-600 dark:text-red-400">
                                    {formatCurrency(filteredData.reduce((sum, d) => sum + d.cfDelayFine, 0))}
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300">Fitness CF @ ₹50 per day delay</td>
                                {filteredData.map((row) => (
                                    <td key={row.month} className="px-4 py-3 text-right text-sm text-gray-900 dark:text-white">{formatCurrency(row.fitnessCF)}</td>
                                ))}
                                <td className="px-4 py-3 text-right text-sm font-semibold text-red-600 dark:text-red-400">
                                    {formatCurrency(filteredData.reduce((sum, d) => sum + d.fitnessCF, 0))}
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300">PUCC Late fine @ ₹500</td>
                                {filteredData.map((row) => (
                                    <td key={row.month} className="px-4 py-3 text-right text-sm text-gray-900 dark:text-white">{formatCurrency(row.puccLateFine)}</td>
                                ))}
                                <td className="px-4 py-3 text-right text-sm font-semibold text-red-600 dark:text-red-400">
                                    {formatCurrency(filteredData.reduce((sum, d) => sum + d.puccLateFine, 0))}
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300">Other late fee / fine / etc.</td>
                                {filteredData.map((row) => (
                                    <td key={row.month} className="px-4 py-3 text-right text-sm text-gray-900 dark:text-white">{formatCurrency(row.otherLateFees)}</td>
                                ))}
                                <td className="px-4 py-3 text-right text-sm font-semibold text-red-600 dark:text-red-400">
                                    {formatCurrency(filteredData.reduce((sum, d) => sum + d.otherLateFees, 0))}
                                </td>
                            </tr>

                            {/* 6. APGT */}
                            <tr className="bg-purple-50 dark:bg-purple-900/20">
                                <td className="px-6 py-3 text-sm font-bold text-gray-900 dark:text-white" colSpan={filteredData.length + 2}>
                                    APGT
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300">APGT Fees</td>
                                {filteredData.map((row) => (
                                    <td key={row.month} className="px-4 py-3 text-right text-sm text-gray-900 dark:text-white">{formatCurrency(row.apgt)}</td>
                                ))}
                                <td className="px-4 py-3 text-right text-sm font-semibold text-purple-600 dark:text-purple-400">
                                    {formatCurrency(filteredData.reduce((sum, d) => sum + d.apgt, 0))}
                                </td>
                            </tr>

                            {/* 7. HSRP */}
                            <tr className="bg-indigo-50 dark:bg-indigo-900/20">
                                <td className="px-6 py-3 text-sm font-bold text-gray-900 dark:text-white" colSpan={filteredData.length + 2}>
                                    HSRP
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300">HSRP Fees <span className="text-xs text-gray-500">(High Security Registration Plate)</span></td>
                                {filteredData.map((row) => (
                                    <td key={row.month} className="px-4 py-3 text-right text-sm text-gray-900 dark:text-white">{formatCurrency(row.hsrp)}</td>
                                ))}
                                <td className="px-4 py-3 text-right text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                                    {formatCurrency(filteredData.reduce((sum, d) => sum + d.hsrp, 0))}
                                </td>
                            </tr>

                            {/* Grand Total Row */}
                            <tr className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 border-t-2 border-blue-500">
                                <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-white uppercase">Grand Total</td>
                                {filteredData.map((row) => {
                                    const monthTotal =
                                        row.mvTaxNonTransport + row.mvTaxTransport + row.mvTaxNewRegistration + row.mvTaxFromRegistered +
                                        row.mvFeesSarathi + row.mvFeesVahan + row.mvFeesPUCC +
                                        row.roadSafetyCessNonTransport + row.roadSafetyCessTransport +
                                        row.greenTaxNonTransport + row.greenTaxTransport +
                                        row.cfOffence + row.cfDelayFine + row.fitnessCF + row.puccLateFine + row.otherLateFees +
                                        row.apgt + row.hsrp;
                                    return (
                                        <td key={row.month} className="px-4 py-4 text-right text-sm font-bold text-gray-900 dark:text-white">
                                            {formatCurrency(monthTotal)}
                                        </td>
                                    );
                                })}
                                <td className="px-4 py-4 text-right text-sm font-bold text-blue-700 dark:text-blue-300 text-lg">
                                    {formatCurrency(stats.grandTotal)}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Revenue;
