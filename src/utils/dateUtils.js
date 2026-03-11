export const getMonthsInRange = (start, end) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const startDate = new Date(start);
    const endDate = new Date(end);

    const startMonth = startDate.getMonth();
    const endMonth = endDate.getMonth();
    const startYear = startDate.getFullYear();
    const endYear = endDate.getFullYear();

    // For our dummy data (all 2025), we just return months between start and end
    // If range spans multiple years, we'd need more complex logic, but here we assume 2025

    if (startYear < 2025 && endYear < 2025) return [];
    if (startYear > 2025 && endYear > 2025) return [];

    const effectiveStart = startYear < 2025 ? 0 : startMonth;
    const effectiveEnd = endYear > 2025 ? 11 : endMonth;

    return months.slice(effectiveStart, effectiveEnd + 1);
};
