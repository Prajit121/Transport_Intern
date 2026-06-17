/**
 * Utility functions for consistent currency formatting across all components
 * Helps prevent hydration mismatches between server and client rendering
 */

/**
 * Format currency with consistent Indian formatting
 * @param {number} amount - The amount to format
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (amount) => {
    if (typeof amount !== 'number' || isNaN(amount)) {
        return '₹0';
    }
    
    return '₹' + amount.toLocaleString('en-IN', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
};

/**
 * Format currency with consistent Indian formatting (for comparison tables)
 * @param {number} amount - The amount to format  
 * @returns {string} Formatted currency string
 */
export const formatCurrencyForComparison = (amount) => {
    if (typeof amount !== 'number' || isNaN(amount)) {
        return '₹0';
    }
    
    return '₹' + amount.toLocaleString('en-IN', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
};
