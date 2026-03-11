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
    const [selectedStream, setSelectedStream] = useState('grandTotal');

    const streams = [
        { id: 'grandTotal', name: 'Grand Total Revenue' },
        { id: 'totalMVTax', name: 'Total MV Tax' },
        { id: 'totalMVFees', name: 'Total MV Fees' },
        { id: 'totalRoadSafetyCess', name: 'Road Safety Cess' },
        { id: 'totalGreenTax', name: 'Green Tax' },
        { id: 'totalCF', name: 'Compounding Fees' },
        { id: 'totalAPGT', name: 'APGT' },
        { id: 'totalHSRP', name: 'HSRP' },
    ];

    const handleFilterChange = ({ start, end }) => {
        const monthsInRange = getMonthsInRange(start, end);
        setSelectedMonths(monthsInRange);
    };

    useEffect(() => {
        setIsDarkMode(document.documentElement.classList.contains('dark'));
    }, []);

    const filteredData2025 = dummyData.revenueCollection.filter(d => selectedMonths.includes(d.month));
    const filteredData2026 = dummyData.revenueCollection2026.filter(d => selectedMonths.includes(d.month));

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
            case 'grandTotal':
            default:
                return (
                    d.mvTaxNonTransport + d.mvTaxTransport + d.mvTaxNewRegistration + d.mvTaxFromRegistered +
                    d.mvFeesSarathi + d.mvFeesVahan + d.mvFeesPUCC +
                    d.roadSafetyCessNonTransport + d.roadSafetyCessTransport +
                    d.greenTaxNonTransport + d.greenTaxTransport +
                    d.cfOffence + d.cfDelayFine + d.fitnessCF +
                    d.puccLateFine + d.otherLateFees + d.apgt + d.hsrp
                );
        }
    };

    // Calculate total revenue for summary cards (using 2025 as base)
    const stats = useMemo(() => {
        const totalMVTax = filteredData2025.reduce((sum, d) =>
            sum + d.mvTaxNonTransport + d.mvTaxTransport + d.mvTaxNewRegistration + d.mvTaxFromRegistered, 0
        );
        const totalMVFees = filteredData2025.reduce((sum, d) =>
            sum + d.mvFeesSarathi + d.mvFeesVahan + d.mvFeesPUCC, 0
        );
        const totalRoadSafetyCess = filteredData2025.reduce((sum, d) =>
            sum + d.roadSafetyCessNonTransport + d.roadSafetyCessTransport, 0
        );
        const totalGreenTax = filteredData2025.reduce((sum, d) =>
            sum + d.greenTaxNonTransport + d.greenTaxTransport, 0
        );
        const totalCF = filteredData2025.reduce((sum, d) =>
            sum + d.cfOffence + d.cfDelayFine + d.fitnessCF + d.puccLateFine + d.otherLateFees, 0
        );
        const totalAPGT = filteredData2025.reduce((sum, d) => sum + d.apgt, 0);
        const totalHSRP = filteredData2025.reduce((sum, d) => sum + d.hsrp, 0);
        const grandTotal = totalMVTax + totalMVFees + totalRoadSafetyCess + totalGreenTax + totalCF + totalAPGT + totalHSRP;

        return {
            totalMVTax,
            totalMVFees,
            totalRoadSafetyCess,
            totalGreenTax,
            totalCF,
            totalAPGT,
            totalHSRP,
            grandTotal,
        };
    }, [filteredData2025]);

    // Revenue breakdown by category (Pie chart)
    const revenuePieData = {
        labels: ['MV Tax', 'MV Fees', 'Road Safety Cess', 'Green Tax', 'Compounding Fees', 'APGT', 'HSRP'],
        datasets: [
            {
                data: [
                    stats.totalMVTax,
                    stats.totalMVFees,
                    stats.totalRoadSafetyCess,
                    stats.totalGreenTax,
                    stats.totalCF,
                    stats.totalAPGT,
                    stats.totalHSRP
                ],
                backgroundColor: [
                    'rgba(59, 130, 246, 0.8)',
                    'rgba(16, 185, 129, 0.8)',
                    'rgba(245, 158, 11, 0.8)',
                    'rgba(34, 197, 94, 0.8)',
                    'rgba(239, 68, 68, 0.8)',
                    'rgba(168, 85, 247, 0.8)',
                    'rgba(99, 102, 241, 0.8)',
                ],
                borderColor: [
                    'rgba(59, 130, 246, 1)',
                    'rgba(16, 185, 129, 1)',
                    'rgba(245, 158, 11, 1)',
                    'rgba(34, 197, 94, 1)',
                    'rgba(239, 68, 68, 1)',
                    'rgba(168, 85, 247, 1)',
                    'rgba(99, 102, 241, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    // Dual line trend chart (2025 vs 2026)
    const revenueTrendData = {
        labels: selectedMonths,
        datasets: [
            {
                label: `2025`,
                data: filteredData2025.map(d => getStreamValue(d)),
                borderColor: 'rgba(59, 130, 246, 1)',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                tension: 0.4,
                fill: false,
            },
            {
                label: `2026`,
                data: filteredData2026.map(d => getStreamValue(d)),
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

    const formatCurrency = (amount) => '₹' + amount.toLocaleString('en-IN');

    return (
        <div className="space-y-6">
            <DateFilter onFilterChange={handleFilterChange} />

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
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white uppercase tracking-tight">
                        District-Wise Revenue Collection Statement
                    </h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-200 dark:border-gray-700">
                        <thead className="bg-gray-100 dark:bg-gray-800 text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                            {/* Row 1 */}
                            <tr>
                                <th rowSpan="3" className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">District</th>
                                <th colSpan="3" className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">MV Tax</th>
                                <th colSpan="3" className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">MV Fees</th>
                                <th colSpan="2" className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">Road Safety Cess</th>
                                <th colSpan="2" className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">Green Tax</th>
                                <th colSpan="5" className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">C.F. (Compounding Fees)</th>
                                <th rowSpan="3" className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">APGT</th>
                                <th rowSpan="3" className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">HSRP</th>
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
                            {dummyData.districtWiseRevenue.map((row, idx) => (
                                <tr key={row.district} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40'}>
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
                                    
                                    {/* APGT & HSRP */}
                                    <td className="border border-gray-200 dark:border-gray-700 px-2 py-2 text-right text-xs text-purple-600 dark:text-purple-400 font-bold">{row.apgt.toLocaleString()}</td>
                                    <td className="border border-gray-200 dark:border-gray-700 px-2 py-2 text-right text-xs text-indigo-600 dark:text-indigo-400 font-bold">{row.hsrp.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Revenue;
