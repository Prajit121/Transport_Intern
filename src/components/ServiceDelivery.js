'use client';
import React, { useState, useEffect } from 'react';
import dummyData from '../data/dummyData';

const ServiceDelivery = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [expandedServices, setExpandedServices] = useState([]);
    const [expandedServiceDistricts, setExpandedServiceDistricts] = useState([]);

    const toggleService = (serviceName) => {
        setExpandedServices(prev => 
            prev.includes(serviceName) ? prev.filter(s => s !== serviceName) : [...prev, serviceName]
        );
    };

    const toggleServiceDistrict = (id) => {
        setExpandedServiceDistricts(prev => 
            prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
        );
    };

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
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden lg:col-span-2">
                    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white uppercase">Service Delivery</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-100 dark:bg-gray-800 text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                                <tr>
                                    <th className="px-4 py-3 text-left">Serial No.</th>
                                    <th className="px-4 py-3 text-left">Service Name</th>
                                    <th className="px-4 py-3 text-right">Applications Handled</th>
                                    <th className="px-4 py-3 text-right">Avg. Processing Time</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {delivery.map((row, idx) => {
                                    const isServiceExpanded = expandedServices.includes(row.serviceName);
                                    // Mock 5 districts
                                    const topDistricts = dummyData.assamDistricts.slice(0, 5).map(dist => ({
                                        name: dist,
                                        count: Math.floor(row.applicationsHandled / 10 + Math.random() * 5000)
                                    }));

                                    return (
                                        <React.Fragment key={idx}>
                                            <tr 
                                                onClick={() => toggleService(row.serviceName)}
                                                className={`cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40'}`}
                                            >
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{idx + 1}</td>
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                                                    <div className="flex items-center">
                                                        <svg
                                                            className={`w-4 h-4 mr-2 transition-transform ${isServiceExpanded ? 'rotate-90' : ''}`}
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                        {row.serviceName}
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3 text-sm text-right text-gray-600 dark:text-gray-400 font-bold">{row.applicationsHandled.toLocaleString()}</td>
                                                <td className="px-4 py-3 text-sm text-right text-green-600 dark:text-green-400">{row.avgProcessingTime}</td>
                                            </tr>
                                            {isServiceExpanded && (
                                                <tr>
                                                    <td colSpan={4} className="p-0 border-b border-gray-200 dark:border-gray-700">
                                                        <div className="bg-gray-50 dark:bg-gray-800/80 px-4 py-3 border-l-4 border-blue-500">
                                                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                                                                <thead className="text-[10px] uppercase font-bold text-gray-500 dark:text-gray-400">
                                                                    <tr>
                                                                        <th className="px-4 py-2 text-left">District</th>
                                                                        <th className="px-4 py-2 text-right">Applications Handled (District)</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                                    {topDistricts.map((dist) => {
                                                                        const sdId = `${row.serviceName}-${dist.name}`;
                                                                        const isDistrictExpanded = expandedServiceDistricts.includes(sdId);
                                                                        
                                                                        const applicants = isDistrictExpanded ? Array.from({ length: 3 }).map((_, i) => {
                                                                            const applied = new Date(2025, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
                                                                            const test = new Date(applied);
                                                                            test.setDate(test.getDate() + Math.floor(Math.random() * 5));
                                                                            const approved = new Date(test);
                                                                            approved.setDate(approved.getDate() + Math.floor(Math.random() * 3));
                                                                            const daysTaken = Math.round((approved - applied) / (1000 * 60 * 60 * 24));
                                                                            
                                                                            return {
                                                                                id: i + 1,
                                                                                applicantName: `Applicant ${String.fromCharCode(65 + i)}`,
                                                                                classOfVehicle: 'LMV',
                                                                                licenseNumber: `AS${Math.floor(10 + Math.random() * 90)} ${Math.floor(1000000000 + Math.random() * 9000000000)}`,
                                                                                appliedDate: applied.toLocaleDateString(),
                                                                                testDate: test.toLocaleDateString(),
                                                                                approvedDate: approved.toLocaleDateString(),
                                                                                daysTaken: daysTaken
                                                                            };
                                                                        }) : [];

                                                                        return (
                                                                            <React.Fragment key={dist.name}>
                                                                                <tr 
                                                                                    onClick={() => toggleServiceDistrict(sdId)}
                                                                                    className="cursor-pointer hover:bg-white dark:hover:bg-gray-700 transition-colors"
                                                                                >
                                                                                    <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                                                                                        <div className="flex items-center ml-4">
                                                                                            <svg
                                                                                                className={`w-3 h-3 mr-2 text-gray-400 transition-transform ${isDistrictExpanded ? 'rotate-90' : ''}`}
                                                                                                fill="currentColor"
                                                                                                viewBox="0 0 20 20"
                                                                                            >
                                                                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                                                            </svg>
                                                                                            {dist.name}
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className="px-4 py-2 text-sm text-right text-gray-600 dark:text-gray-400 font-medium">
                                                                                        {dist.count.toLocaleString()}
                                                                                    </td>
                                                                                </tr>
                                                                                {isDistrictExpanded && (
                                                                                    <tr>
                                                                                        <td colSpan={2} className="px-4 py-2 bg-white dark:bg-gray-900 border-l-2 border-indigo-400 ml-8">
                                                                                            <div className="ml-8 overflow-x-auto">
                                                                                                <table className="min-w-full text-xs divide-y divide-gray-200 dark:divide-gray-700">
                                                                                                    <thead className="bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                                                                                                        <tr>
                                                                                                            <th className="px-3 py-2 text-left">Applicant Name</th>
                                                                                                            <th className="px-3 py-2 text-left">Vehicle Class</th>
                                                                                                            <th className="px-3 py-2 text-left">License Number</th>
                                                                                                            <th className="px-3 py-2 text-left">Applied Date</th>
                                                                                                            <th className="px-3 py-2 text-left">Test Date</th>
                                                                                                            <th className="px-3 py-2 text-left">Approved Date</th>
                                                                                                            <th className="px-3 py-2 text-right">Days Taken</th>
                                                                                                        </tr>
                                                                                                    </thead>
                                                                                                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                                                                                        {applicants.map(app => (
                                                                                                            <tr key={app.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                                                                                                <td className="px-3 py-2 font-medium text-gray-900 dark:text-gray-200">{app.applicantName}</td>
                                                                                                                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">{app.classOfVehicle}</td>
                                                                                                                <td className="px-3 py-2 text-blue-600 dark:text-blue-400 font-mono">{app.licenseNumber}</td>
                                                                                                                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">{app.appliedDate}</td>
                                                                                                                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">{app.testDate}</td>
                                                                                                                <td className="px-3 py-2 text-green-600 dark:text-green-400">{app.approvedDate}</td>
                                                                                                                <td className="px-3 py-2 text-right font-medium text-gray-700 dark:text-gray-300">{app.daysTaken}</td>
                                                                                                            </tr>
                                                                                                        ))}
                                                                                                    </tbody>
                                                                                                </table>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                )}
                                                                            </React.Fragment>
                                                                        );
                                                                    })}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )}
                                        </React.Fragment>
                                    );
                                })}
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
                                    <th className="px-4 py-3 text-left">Serial No.</th>
                                    <th className="px-4 py-3 text-left">Service Name</th>
                                    <th className="px-4 py-3 text-right">Pending Applications</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {pendency.map((row, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40'}>
                                        <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{idx + 1}</td>
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
