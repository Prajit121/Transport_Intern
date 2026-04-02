'use client';
import React from 'react';

const PlaceholderPage = ({ title }) => {
    return (
        <div className="flex items-center justify-center min-h-[400px] bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 border border-gray-100 dark:border-gray-700">
            <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h2>
                <p className="text-gray-500 dark:text-gray-400 max-w-md">
                    This section is currently under development. Detailed analytics and metrics for {title.toLowerCase()} will be available soon.
                </p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 opacity-50">
                    <div className="h-24 bg-gray-50 dark:bg-gray-700/50 rounded-lg animate-pulse"></div>
                    <div className="h-24 bg-gray-50 dark:bg-gray-700/50 rounded-lg animate-pulse"></div>
                    <div className="h-24 bg-gray-50 dark:bg-gray-700/50 rounded-lg animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default PlaceholderPage;
