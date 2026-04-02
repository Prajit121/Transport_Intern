'use client';
import React, { useState, useEffect } from 'react';
import dummyData from '../data/dummyData';

const DealerAudit = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        setIsDarkMode(document.documentElement.classList.contains('dark'));
    }, []);

    const dealers = dummyData.dealerAuditData;
    const totalDealers = dealers.length;

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dealer Audit</h1>
            
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Dealers</h3>
                    <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{totalDealers}</p>
                </div>
            </div>

            {/* Grid of Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* 1. Dealerwise Registration */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white uppercase">Dealerwise Registration</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-100 dark:bg-gray-800 text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                                <tr>
                                    <th className="px-4 py-3 text-left">Dealer Name</th>
                                    <th className="px-4 py-3 text-right">Total Registrations</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {dealers.map((row, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40'}>
                                        <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{row.dealerName}</td>
                                        <td className="px-4 py-3 text-sm text-right text-gray-600 dark:text-gray-400 font-bold">{row.totalRegistrations.toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 2. Mobile Number Update */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white uppercase">Mobile Number Update</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-100 dark:bg-gray-800 text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                                <tr>
                                    <th className="px-4 py-3 text-left">Dealer Name</th>
                                    <th className="px-4 py-3 text-right">Mobile Updates</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {dealers.map((row, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40'}>
                                        <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{row.dealerName}</td>
                                        <td className="px-4 py-3 text-sm text-right text-blue-600 dark:text-blue-400 font-bold">{row.mobileUpdates.toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 3. Trade Certificate Details */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden lg:col-span-2">
                    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white uppercase">Trade Certificate Details</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-100 dark:bg-gray-800 text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                                <tr>
                                    <th className="px-4 py-3 text-left">Dealer Name</th>
                                    <th className="px-4 py-3 text-left">Certificate Status</th>
                                    <th className="px-4 py-3 text-right">Valid Until</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {dealers.map((row, idx) => {
                                    const isExpired = row.tradeCertStatus === 'Expired';
                                    const isExpiringSoon = row.tradeCertStatus === 'Expiring Soon';

                                    return (
                                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40'}>
                                            <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{row.dealerName}</td>
                                            <td className={`px-4 py-3 text-sm font-bold ${
                                                isExpired ? 'text-red-600 dark:text-red-400' : 
                                                isExpiringSoon ? 'text-orange-500 dark:text-orange-400' : 'text-green-600 dark:text-green-400'
                                            }`}>
                                                {row.tradeCertStatus}
                                            </td>
                                            <td className="px-4 py-3 text-sm text-right text-gray-600 dark:text-gray-400">{row.validUntil}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                {/* 4. Vehicle Typewise and Dealerwise */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden lg:col-span-2">
                    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white uppercase">Vehicle Typewise and Dealerwise Registrations</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-100 dark:bg-gray-800 text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                                <tr>
                                    <th className="px-4 py-3 text-left">Dealer Name</th>
                                    <th className="px-4 py-3 text-right">2 Wheeler</th>
                                    <th className="px-4 py-3 text-right">3 Wheeler</th>
                                    <th className="px-4 py-3 text-right">Cars/Non-Transport</th>
                                    <th className="px-4 py-3 text-right">Total Registrations</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {dealers.map((row, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40'}>
                                        <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{row.dealerName}</td>
                                        <td className="px-4 py-3 text-sm text-right text-gray-600 dark:text-gray-400">{row.twoWheeler.toLocaleString()}</td>
                                        <td className="px-4 py-3 text-sm text-right text-gray-600 dark:text-gray-400">{row.threeWheeler.toLocaleString()}</td>
                                        <td className="px-4 py-3 text-sm text-right text-gray-600 dark:text-gray-400">{row.nonTransport.toLocaleString()}</td>
                                        <td className="px-4 py-3 text-sm text-right text-gray-900 dark:text-white font-bold">{row.totalRegistrations.toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DealerAudit;
