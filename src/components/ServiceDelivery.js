'use client';
import React, { useState, useEffect } from 'react';
import dummyData from '../data/dummyData';

const ServiceDelivery = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        setIsDarkMode(document.documentElement.classList.contains('dark'));
    }, []);

    const { contactless, delivery, pendency } = dummyData.serviceDeliveryData;

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Service Delivery</h1>
            
            {/* Contactless Service Details Cards */}
            <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white uppercase mb-4">Contactless Service Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 border border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg dark:bg-blue-900/50 dark:text-blue-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">E-Service (Contactless)</h3>
                                <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{contactless.eService.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 border border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg dark:bg-indigo-900/50 dark:text-indigo-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Physical Visits (DTO)</h3>
                                <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{contactless.physical.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid of Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Service Delivery */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white uppercase">Service Delivery</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-100 dark:bg-gray-800 text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                                <tr>
                                    <th className="px-4 py-3 text-left">Service Name</th>
                                    <th className="px-4 py-3 text-right">Applications Handled</th>
                                    <th className="px-4 py-3 text-right">Avg. Processing Time</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {delivery.map((row, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40'}>
                                        <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{row.serviceName}</td>
                                        <td className="px-4 py-3 text-sm text-right text-gray-600 dark:text-gray-400 font-bold">{row.applicationsHandled.toLocaleString()}</td>
                                        <td className="px-4 py-3 text-sm text-right text-green-600 dark:text-green-400">{row.avgProcessingTime}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Pendency Details */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white uppercase">Pendency Details</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-100 dark:bg-gray-800 text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                                <tr>
                                    <th className="px-4 py-3 text-left">Service Name</th>
                                    <th className="px-4 py-3 text-right">Pending Applications</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {pendency.map((row, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40'}>
                                        <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{row.serviceName}</td>
                                        <td className="px-4 py-3 text-sm text-right text-red-600 dark:text-red-400 font-bold">{row.pendingApplications.toLocaleString()}</td>
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

export default ServiceDelivery;
