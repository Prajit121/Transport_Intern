module.exports = [
"[project]/src/data/dummyData.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aetsData",
    ()=>aetsData,
    "aetsData2024",
    ()=>aetsData2024,
    "aetsData2026",
    ()=>aetsData2026,
    "congestionLevels",
    ()=>congestionLevels,
    "dealerAuditData",
    ()=>dealerAuditData,
    "default",
    ()=>__TURBOPACK__default__export__,
    "districtWiseRevenue",
    ()=>districtWiseRevenue,
    "districtWiseRevenue2023",
    ()=>districtWiseRevenue2023,
    "districtWiseRevenue2024",
    ()=>districtWiseRevenue2024,
    "districtWiseRevenue2026",
    ()=>districtWiseRevenue2026,
    "districtWiseVehicles",
    ()=>districtWiseVehicles,
    "districtWiseVehicles2024",
    ()=>districtWiseVehicles2024,
    "districtWiseVehicles2026",
    ()=>districtWiseVehicles2026,
    "enforcementData",
    ()=>enforcementData,
    "enforcementData2024",
    ()=>enforcementData2024,
    "enforcementData2026",
    ()=>enforcementData2026,
    "fitnessData",
    ()=>fitnessData,
    "fitnessData2024",
    ()=>fitnessData2024,
    "fitnessData2026",
    ()=>fitnessData2026,
    "fuelEfficiency",
    ()=>fuelEfficiency,
    "greenTaxRevenue",
    ()=>greenTaxRevenue,
    "newReg4WheelerSplit",
    ()=>newReg4WheelerSplit,
    "newRegistrationRevenue",
    ()=>newRegistrationRevenue,
    "newRegistrationTransportRevenue",
    ()=>newRegistrationTransportRevenue,
    "permitApplicationsData",
    ()=>permitApplicationsData,
    "permitApplicationsData2024",
    ()=>permitApplicationsData2024,
    "permitApplicationsData2026",
    ()=>permitApplicationsData2026,
    "permitFeesData",
    ()=>permitFeesData,
    "permitFeesData2026",
    ()=>permitFeesData2026,
    "publicTransportRidership",
    ()=>publicTransportRidership,
    "puccData",
    ()=>puccData,
    "puccData2024",
    ()=>puccData2024,
    "puccData2026",
    ()=>puccData2026,
    "reassignmentRevenue",
    ()=>reassignmentRevenue,
    "registrationApplicationsData",
    ()=>registrationApplicationsData,
    "registrationApplicationsData2026",
    ()=>registrationApplicationsData2026,
    "renewalRevenue",
    ()=>renewalRevenue,
    "revenueCollection",
    ()=>revenueCollection,
    "revenueCollection2026",
    ()=>revenueCollection2026,
    "roadMaintenance",
    ()=>roadMaintenance,
    "serviceDeliveryData",
    ()=>serviceDeliveryData,
    "trafficIncidents",
    ()=>trafficIncidents,
    "vehicleRegistrations",
    ()=>vehicleRegistrations,
    "vehicleRegistrations2026",
    ()=>vehicleRegistrations2026
]);
// Dummy data for Transport Department Statistics Dashboard
// Monthly data for Jan-Dec 2025
const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];
const vehicleRegistrations = months.map((month, index)=>{
    const seasonalFactor = index < 2 || index > 9 ? 0.85 : index < 5 ? 1.15 : 1.0;
    const twoWheeler = Math.floor((1500 + Math.random() * 500) * seasonalFactor);
    const threeWheeler = Math.floor((300 + Math.random() * 100) * seasonalFactor);
    const cars = Math.floor((1200 + Math.random() * 300) * seasonalFactor);
    const others = Math.floor((200 + Math.random() * 100) * seasonalFactor);
    return {
        month,
        twoWheeler,
        threeWheeler,
        cars,
        others,
        nonTransport: Math.floor((cars + twoWheeler) * 0.9 + others * 0.2),
        transport: Math.floor((cars + twoWheeler) * 0.1 + threeWheeler + others * 0.8)
    };
});
const vehicleRegistrations2026 = months.map((month, index)=>{
    const seasonalFactor = (index < 2 || index > 9 ? 0.85 : index < 5 ? 1.15 : 1.0) * 1.12; // 12% growth
    const twoWheeler = Math.floor((1500 + Math.random() * 500) * seasonalFactor);
    const threeWheeler = Math.floor((300 + Math.random() * 100) * seasonalFactor);
    const cars = Math.floor((1200 + Math.random() * 300) * seasonalFactor);
    const others = Math.floor((200 + Math.random() * 100) * seasonalFactor);
    return {
        month,
        twoWheeler,
        threeWheeler,
        cars,
        others,
        nonTransport: Math.floor((cars + twoWheeler) * 0.9 + others * 0.2),
        transport: Math.floor((cars + twoWheeler) * 0.1 + threeWheeler + others * 0.8)
    };
});
const trafficIncidents = months.map((month, index)=>{
    // Higher incidents in winter months (Nov-Feb) and summer vacation
    const incidentFactor = index < 2 || index === 11 ? 1.3 : index > 5 && index < 8 ? 1.15 : 1.0;
    return {
        month,
        accidents: Math.floor((45 + Math.random() * 15) * incidentFactor),
        violations: Math.floor((320 + Math.random() * 80) * incidentFactor),
        breakdowns: Math.floor((180 + Math.random() * 50) * incidentFactor * 0.8)
    };
});
const publicTransportRidership = months.map((month, index)=>{
    // Higher ridership in fall/winter, lower in summer
    const ridershipFactor = index > 7 && index < 11 ? 1.2 : index > 4 && index < 8 ? 0.85 : 1.0;
    return {
        month,
        passengerCount: Math.floor((450000 + Math.random() * 50000) * ridershipFactor),
        onTimePercentage: 85 + Math.random() * 10
    };
});
const congestionLevels = months.map((month, index)=>{
    // Higher congestion in fall (back to school) and holiday season
    const congestionFactor = index > 7 && index < 11 ? 1.25 : index === 11 ? 1.15 : 1.0;
    return {
        month,
        averageDelayMinutes: Number(((12 + Math.random() * 8) * congestionFactor).toFixed(1))
    };
});
const fuelEfficiency = months.map((month, index)=>{
    // Slightly better efficiency in warmer months
    const efficiencyFactor = index > 3 && index < 9 ? 1.05 : 1.0;
    return {
        month,
        averageMPG: Number(((28 + Math.random() * 4) * efficiencyFactor).toFixed(1))
    };
});
const roadMaintenance = months.map((month, index)=>{
    // Higher completion in warmer months (better weather for construction)
    const maintenanceFactor = index > 3 && index < 9 ? 1.1 : 0.9;
    return {
        month,
        completionRate: Number(Math.min(100, (75 + Math.random() * 20) * maintenanceFactor).toFixed(1)),
        scheduledProjects: Math.floor(15 + Math.random() * 10),
        completedProjects: Math.floor((15 + Math.random() * 10) * maintenanceFactor * 0.8)
    };
});
const revenueCollection = months.map((month, index)=>{
    // Higher revenue in registration-heavy months
    const revenueFactor = index > 2 && index < 6 ? 1.2 : index > 8 ? 0.9 : 1.0;
    return {
        month,
        // MV Tax
        mvTaxNonTransport: Math.floor((450000 + Math.random() * 100000) * revenueFactor),
        mvTaxTransport: Math.floor((280000 + Math.random() * 60000) * revenueFactor),
        mvTaxNewRegistration: Math.floor((320000 + Math.random() * 80000) * revenueFactor),
        mvTaxFromRegistered: Math.floor((180000 + Math.random() * 40000) * revenueFactor),
        // MV Fees
        mvFeesSarathi: Math.floor((45000 + Math.random() * 10000) * revenueFactor),
        mvFeesVahan: Math.floor((65000 + Math.random() * 15000) * revenueFactor),
        mvFeesPUCC: Math.floor((35000 + Math.random() * 8000) * revenueFactor),
        // Road Safety Cess
        roadSafetyCessNonTransport: Math.floor((120000 + Math.random() * 30000) * revenueFactor),
        roadSafetyCessTransport: Math.floor((85000 + Math.random() * 20000) * revenueFactor),
        // Green Tax
        greenTaxNonTransport: Math.floor((95000 + Math.random() * 20000) * revenueFactor),
        greenTaxTransport: Math.floor((72000 + Math.random() * 15000) * revenueFactor),
        // Compounding Fees
        cfOffence: Math.floor((42000 + Math.random() * 10000) * revenueFactor),
        cfDelayFine: Math.floor((28000 + Math.random() * 7000) * revenueFactor),
        fitnessCF: Math.floor((18000 + Math.random() * 5000) * revenueFactor),
        // Other Fees
        puccLateFine: Math.floor((15000 + Math.random() * 4000) * revenueFactor),
        otherLateFees: Math.floor((22000 + Math.random() * 6000) * revenueFactor),
        apgt: Math.floor((38000 + Math.random() * 9000) * revenueFactor),
        hsrp: Math.floor((52000 + Math.random() * 12000) * revenueFactor),
        laborCess: Math.floor((25000 + Math.random() * 8000) * revenueFactor)
    };
});
const revenueCollection2026 = months.map((month, index)=>{
    const revenueFactor = (index > 2 && index < 6 ? 1.2 : index > 8 ? 0.9 : 1.0) * 1.15; // 15% increase
    return {
        month,
        mvTaxNonTransport: Math.floor((450000 + Math.random() * 100000) * revenueFactor),
        mvTaxTransport: Math.floor((280000 + Math.random() * 60000) * revenueFactor),
        mvTaxNewRegistration: Math.floor((320000 + Math.random() * 80000) * revenueFactor),
        mvTaxFromRegistered: Math.floor((180000 + Math.random() * 40000) * revenueFactor),
        mvFeesSarathi: Math.floor((45000 + Math.random() * 10000) * revenueFactor),
        mvFeesVahan: Math.floor((65000 + Math.random() * 15000) * revenueFactor),
        mvFeesPUCC: Math.floor((35000 + Math.random() * 8000) * revenueFactor),
        roadSafetyCessNonTransport: Math.floor((120000 + Math.random() * 30000) * revenueFactor),
        roadSafetyCessTransport: Math.floor((85000 + Math.random() * 20000) * revenueFactor),
        greenTaxNonTransport: Math.floor((95000 + Math.random() * 20000) * revenueFactor),
        greenTaxTransport: Math.floor((72000 + Math.random() * 15000) * revenueFactor),
        cfOffence: Math.floor((42000 + Math.random() * 10000) * revenueFactor),
        cfDelayFine: Math.floor((28000 + Math.random() * 7000) * revenueFactor),
        fitnessCF: Math.floor((18000 + Math.random() * 5000) * revenueFactor),
        puccLateFine: Math.floor((15000 + Math.random() * 4000) * revenueFactor),
        otherLateFees: Math.floor((22000 + Math.random() * 6000) * revenueFactor),
        apgt: Math.floor((38000 + Math.random() * 9000) * revenueFactor),
        hsrp: Math.floor((52000 + Math.random() * 12000) * revenueFactor),
        laborCess: Math.floor((25000 + Math.random() * 8000) * revenueFactor)
    };
});
// List of Districts in Assam
const assamDistricts = [
    "Bajali",
    "Baksa",
    "Barpeta",
    "Biswanath",
    "Bongaigaon",
    "Cachar",
    "Charaideo",
    "Chirang",
    "Darrang",
    "Dhemaji",
    "Dhubri",
    "Dibrugarh",
    "Dima Hasao",
    "Goalpara",
    "Golaghat",
    "Hailakandi",
    "Hojai",
    "Jorhat",
    "Kamrup",
    "Kamrup Metropolitan",
    "Karbi Anglong",
    "Karimganj",
    "Kokrajhar",
    "Lakhimpur",
    "Majuli",
    "Morigaon",
    "Nagaon",
    "Nalbari",
    "Sivasagar",
    "Sonitpur",
    "South Salmara-Mankachar",
    "Tamulpur",
    "Tinsukia",
    "Udalguri",
    "West Karbi Anglong"
];
const newRegistrationRevenue = {
    twoWheeler: assamDistricts.map((district)=>({
            district,
            totalVehicles: Math.floor(500 + Math.random() * 2000),
            mvTaxNonTransport: "One-time",
            category: "Two-wheeler",
            weight: "Below 65kg",
            mvTaxRealised: Math.floor(500000 + Math.random() * 2000000),
            mvFeesRealised: Math.floor(50000 + Math.random() * 200000),
            roadSafetyCess: Math.floor(10000 + Math.random() * 50000),
            cfPenalty: Math.floor(Math.random() * 10000)
        })),
    threeWheeler: assamDistricts.map((district)=>({
            district,
            totalVehicles: Math.floor(100 + Math.random() * 500),
            mvTaxNonTransport: "One-time",
            category: "Three-wheeler",
            weight: "N/A",
            mvTaxRealised: Math.floor(200000 + Math.random() * 800000),
            mvFeesRealised: Math.floor(20000 + Math.random() * 80000),
            roadSafetyCess: Math.floor(5000 + Math.random() * 20000),
            cfPenalty: Math.floor(Math.random() * 5000)
        })),
    fourWheeler: assamDistricts.map((district)=>({
            district,
            totalVehicles: Math.floor(50 + Math.random() * 300),
            mvTaxNonTransport: "One-time",
            category: "Four-wheeler",
            originalCost: "VARIES",
            mvTaxRealised: Math.floor(1500000 + Math.random() * 5000000),
            mvFeesRealised: Math.floor(100000 + Math.random() * 300000),
            roadSafetyCess: Math.floor(30000 + Math.random() * 100000),
            cfPenalty: Math.floor(Math.random() * 20000)
        })),
    otherVehicles: assamDistricts.map((district)=>({
            district,
            totalVehicles: Math.floor(20 + Math.random() * 100),
            mvTaxNonTransport: "Annual",
            category: "LMV/MMV/HMV",
            otherParams: "2% annual tax",
            mvTaxRealised: Math.floor(800000 + Math.random() * 3000000),
            mvFeesRealised: Math.floor(50000 + Math.random() * 150000),
            roadSafetyCess: Math.floor(20000 + Math.random() * 60000),
            cfPenalty: Math.floor(Math.random() * 15000)
        }))
};
const newRegistrationTransportRevenue = {
    twoWheeler: assamDistricts.map((district)=>({
            district,
            totalVehicles: Math.floor(100 + Math.random() * 500),
            mvTaxTransport: "Quarterly",
            category: "Two-wheeler",
            param: "Below 65kg",
            mvTaxRealised: Math.floor(100000 + Math.random() * 500000),
            mvFeesRealised: Math.floor(10000 + Math.random() * 50000),
            roadSafetyCess: Math.floor(5000 + Math.random() * 20000),
            cfPerDay: Math.floor(Math.random() * 2000)
        })),
    threeWheelerPassenger: assamDistricts.map((district)=>({
            district,
            totalVehicles: Math.floor(200 + Math.random() * 800),
            mvTaxTransport: "Quarterly",
            category: "Three-wheeler (Passenger)",
            param: "3+1",
            mvTaxRealised: Math.floor(300000 + Math.random() * 1000000),
            mvFeesRealised: Math.floor(30000 + Math.random() * 100000),
            roadSafetyCess: Math.floor(10000 + Math.random() * 40000),
            cfPerDay: Math.floor(Math.random() * 5000)
        })),
    threeWheelerGoods: assamDistricts.map((district)=>({
            district,
            totalVehicles: Math.floor(150 + Math.random() * 600),
            mvTaxTransport: "Quarterly",
            category: "Three-wheeler (Goods)",
            param: "500kg",
            mvTaxRealised: Math.floor(250000 + Math.random() * 900000),
            mvFeesRealised: Math.floor(25000 + Math.random() * 90000),
            roadSafetyCess: Math.floor(8000 + Math.random() * 30000),
            cfPerDay: Math.floor(Math.random() * 4000)
        })),
    lmvPassenger: assamDistricts.map((district)=>({
            district,
            totalVehicles: Math.floor(100 + Math.random() * 400),
            mvTaxTransport: "Quarterly",
            category: "Four-wheeler (LMV) Passenger",
            param: "4+1",
            mvTaxRealised: Math.floor(500000 + Math.random() * 2000000),
            mvFeesRealised: Math.floor(50000 + Math.random() * 200000),
            roadSafetyCess: Math.floor(15000 + Math.random() * 60000),
            cfPerDay: Math.floor(Math.random() * 8000)
        })),
    lmvGoods: assamDistricts.map((district)=>({
            district,
            totalVehicles: Math.floor(80 + Math.random() * 350),
            mvTaxTransport: "Quarterly",
            category: "Four-wheeler (LMV) Goods",
            param: "1500kg",
            mvTaxRealised: Math.floor(450000 + Math.random() * 1800000),
            mvFeesRealised: Math.floor(45000 + Math.random() * 180000),
            roadSafetyCess: Math.floor(12000 + Math.random() * 50000),
            cfPerDay: Math.floor(Math.random() * 7000)
        })),
    mmvPassenger: assamDistricts.map((district)=>({
            district,
            totalVehicles: Math.floor(50 + Math.random() * 200),
            mvTaxTransport: "Quarterly",
            category: "MMV (Passenger)",
            param: "12+1",
            mvTaxRealised: Math.floor(600000 + Math.random() * 2500000),
            mvFeesRealised: Math.floor(60000 + Math.random() * 250000),
            roadSafetyCess: Math.floor(20000 + Math.random() * 80000),
            cfPerDay: Math.floor(Math.random() * 10000)
        })),
    mmvGoods: assamDistricts.map((district)=>({
            district,
            totalVehicles: Math.floor(40 + Math.random() * 180),
            mvTaxTransport: "Quarterly",
            category: "MMV (Goods)",
            param: "5000kg",
            mvTaxRealised: Math.floor(700000 + Math.random() * 3000000),
            mvFeesRealised: Math.floor(70000 + Math.random() * 300000),
            roadSafetyCess: Math.floor(25000 + Math.random() * 90000),
            cfPerDay: Math.floor(Math.random() * 12000)
        })),
    hmvPassenger: assamDistricts.map((district)=>({
            district,
            totalVehicles: Math.floor(30 + Math.random() * 150),
            mvTaxTransport: "Quarterly",
            category: "HMV (Passenger)",
            param: "32+1",
            mvTaxRealised: Math.floor(1000000 + Math.random() * 4000000),
            mvFeesRealised: Math.floor(100000 + Math.random() * 400000),
            roadSafetyCess: Math.floor(40000 + Math.random() * 120000),
            cfPerDay: Math.floor(Math.random() * 15000)
        })),
    hmvGoods: assamDistricts.map((district)=>({
            district,
            totalVehicles: Math.floor(60 + Math.random() * 250),
            mvTaxTransport: "Quarterly",
            category: "HMV (Goods)",
            param: "12000kg",
            mvTaxRealised: Math.floor(1200000 + Math.random() * 5000000),
            mvFeesRealised: Math.floor(120000 + Math.random() * 500000),
            roadSafetyCess: Math.floor(50000 + Math.random() * 150000),
            cfPerDay: Math.floor(Math.random() * 18000)
        })),
    hmvGoods: assamDistricts.map((district)=>({
            district,
            totalVehicles: Math.floor(60 + Math.random() * 250),
            mvTaxTransport: "Quarterly",
            category: "HMV (Goods)",
            param: "12000kg",
            mvTaxRealised: Math.floor(1200000 + Math.random() * 5000000),
            mvFeesRealised: Math.floor(120000 + Math.random() * 500000),
            roadSafetyCess: Math.floor(50000 + Math.random() * 150000),
            cfPerDay: Math.floor(Math.random() * 18000)
        }))
};
const newReg4WheelerSplit = {
    fiveYear: assamDistricts.map((district)=>({
            district,
            totalVehicles: Math.floor(20 + Math.random() * 100),
            mvTaxNonTransport: "5-Year",
            category: "Four-wheeler",
            originalCost: "VARIES",
            mvTaxRealised: Math.floor(500000 + Math.random() * 1500000),
            mvFeesRealised: Math.floor(20000 + Math.random() * 80000),
            roadSafetyCess: Math.floor(10000 + Math.random() * 30000),
            cfPenalty: Math.floor(Math.random() * 5000)
        })),
    fifteenYear: assamDistricts.map((district)=>({
            district,
            totalVehicles: Math.floor(30 + Math.random() * 200),
            mvTaxNonTransport: "Lifetime (15Y)",
            category: "Four-wheeler",
            originalCost: "VARIES",
            mvTaxRealised: Math.floor(1000000 + Math.random() * 3500000),
            mvFeesRealised: Math.floor(80000 + Math.random() * 220000),
            roadSafetyCess: Math.floor(20000 + Math.random() * 70000),
            cfPenalty: Math.floor(Math.random() * 15000)
        }))
};
const reassignmentRevenue = {
    twoWheeler: assamDistricts.map((district)=>({
            district,
            totalVehicles: Math.floor(50 + Math.random() * 200),
            mvTaxNonTransport: "Re-assign",
            category: "Two-wheeler",
            weight: "Below 65kg",
            mvTaxRealised: Math.floor(100000 + Math.random() * 500000),
            mvFeesRealised: Math.floor(10000 + Math.random() * 50000),
            roadSafetyCess: Math.floor(5000 + Math.random() * 15000),
            cfPenalty: Math.floor(Math.random() * 2000)
        })),
    threeWheeler: assamDistricts.map((district)=>({
            district,
            totalVehicles: Math.floor(20 + Math.random() * 80),
            mvTaxNonTransport: "Re-assign",
            category: "Three-wheeler",
            weight: "N/A",
            mvTaxRealised: Math.floor(50000 + Math.random() * 200000),
            mvFeesRealised: Math.floor(5000 + Math.random() * 20000),
            roadSafetyCess: Math.floor(2000 + Math.random() * 8000),
            cfPenalty: Math.floor(Math.random() * 1000)
        })),
    fourWheeler: assamDistricts.map((district)=>({
            district,
            totalVehicles: Math.floor(30 + Math.random() * 150),
            mvTaxNonTransport: "Re-assign",
            category: "Four-wheeler",
            originalCost: "VARIES",
            mvTaxRealised: Math.floor(300000 + Math.random() * 1000000),
            mvFeesRealised: Math.floor(30000 + Math.random() * 100000),
            roadSafetyCess: Math.floor(10000 + Math.random() * 30000),
            cfPenalty: Math.floor(Math.random() * 5000)
        })),
    otherVehicles: assamDistricts.map((district)=>({
            district,
            totalVehicles: Math.floor(10 + Math.random() * 50),
            mvTaxNonTransport: "Re-assign",
            category: "LMV/MMV/HMV",
            otherParams: "N/A",
            mvTaxRealised: Math.floor(200000 + Math.random() * 800000),
            mvFeesRealised: Math.floor(20000 + Math.random() * 60000),
            roadSafetyCess: Math.floor(8000 + Math.random() * 20000),
            cfPenalty: Math.floor(Math.random() * 4000)
        }))
};
const greenTaxRevenue = {
    nonTransport: assamDistricts.map((district)=>({
            district,
            totalVehicles: Math.floor(100 + Math.random() * 600),
            period: "5 Years",
            category: "Non-Transport",
            mvFeesRealised: Math.floor(15000 + Math.random() * 60000),
            roadSafetyCess: Math.floor(5000 + Math.random() * 20000),
            cfPerDay: Math.floor(Math.random() * 3000),
            taxRealised: Math.floor(200000 + Math.random() * 800000)
        })),
    transport: assamDistricts.map((district)=>({
            district,
            totalVehicles: Math.floor(150 + Math.random() * 800),
            period: "Annual",
            category: "Transport",
            mvFeesRealised: Math.floor(25000 + Math.random() * 90000),
            roadSafetyCess: Math.floor(8000 + Math.random() * 35000),
            cfPerDay: Math.floor(Math.random() * 5000),
            taxRealised: Math.floor(400000 + Math.random() * 1500000)
        }))
};
const renewalRevenue = {
    nonTransport: assamDistricts.map((district)=>({
            district,
            totalVehicles: Math.floor(80 + Math.random() * 400),
            mvTaxNonTransport: "10-Year (Post 5Y)",
            category: "Non-Transport",
            mvTaxRealised: Math.floor(600000 + Math.random() * 2000000),
            mvFeesRealised: Math.floor(60000 + Math.random() * 200000),
            roadSafetyCess: Math.floor(20000 + Math.random() * 60000),
            cfPenalty: Math.floor(Math.random() * 10000)
        }))
};
// Permit Data
const permitTypes = [
    'Contract Carriage',
    'Stage Carriage',
    'Goods Carriage',
    'National Permit',
    'AITP'
];
const vehicleClasses = [
    'Three Wheeler',
    'Four Wheeler',
    'MMV',
    'HMV'
];
const permitSubTypes = [
    'Temporary',
    'Periodic',
    'Special'
];
const permitFeesData = [];
const permitApplicationsData = [];
assamDistricts.forEach((district)=>{
    // Permit Fees Data - 1-2 entries per district
    const numEntries = Math.floor(Math.random() * 2) + 1;
    for(let i = 0; i < numEntries; i++){
        const pType = permitTypes[Math.floor(Math.random() * permitTypes.length)];
        const vClass = vehicleClasses[Math.floor(Math.random() * vehicleClasses.length)];
        const subType = permitSubTypes[Math.floor(Math.random() * permitSubTypes.length)];
        const period1 = Math.floor(Math.random() * 50) + 10;
        const period3 = Math.floor(Math.random() * 30) + 5;
        const period5 = Math.floor(Math.random() * 20) + 2;
        const totalVehicles = period1 + period3 + period5;
        permitFeesData.push({
            district: district,
            permitType: pType,
            subType: subType,
            totalVehicles: totalVehicles,
            vehicleClass: vClass,
            period1Year: period1,
            period3Year: period3,
            period5Year: period5,
            permitFeeRealised: Math.floor(Math.random() * 50000) + 10000,
            lateFeeRealised: Math.floor(Math.random() * 5000) + 500
        });
    }
    // Permit Applications Data - One entry per district
    const totalReceived = Math.floor(Math.random() * 500) + 100;
    const online = Math.floor(totalReceived * (0.6 + Math.random() * 0.2));
    const offline = totalReceived - online;
    const approved = Math.floor(totalReceived * (0.7 + Math.random() * 0.15));
    const scrutiny = Math.floor((totalReceived - approved) * 0.6);
    const approvalStage = totalReceived - approved - scrutiny;
    permitApplicationsData.push({
        district: district,
        totalReceived: totalReceived,
        online: online,
        offline: offline,
        scrutiny: scrutiny,
        approvalStage: approvalStage,
        approved: approved
    });
});
const aetsData = assamDistricts.map((district)=>{
    const totalCentres = Math.floor(Math.random() * 15) + 3; // 3-17 centers
    const calibratedCentres = Math.floor(totalCentres * (0.7 + Math.random() * 0.25)); // 70-95% calibrated
    const feesDeposited = Math.floor(Math.random() * 300000) + 50000; // ₹50k-350k
    return {
        district: district,
        totalCentres: totalCentres,
        calibratedCentres: calibratedCentres,
        feesDeposited: feesDeposited
    };
});
const permitFeesData2026 = permitFeesData.map((d)=>({
        ...d,
        totalVehicles: Math.floor(d.totalVehicles * 1.15),
        period1Year: Math.floor(d.period1Year * 1.15),
        period3Year: Math.floor(d.period3Year * 1.15),
        period5Year: Math.floor(d.period5Year * 1.15),
        permitFeeRealised: Math.floor(d.permitFeeRealised * 1.15),
        lateFeeRealised: Math.floor(d.lateFeeRealised * 1.15)
    }));
// PUCC (Pollution Under Control Certificate) Data
const vehicleCategories = [
    'Two Wheeler',
    'Three Wheeler',
    'Four Wheeler',
    'LMV',
    'MMV',
    'HMV'
];
const puccData = assamDistricts.flatMap((district)=>{
    return vehicleCategories.map((category)=>{
        const totalApplications = Math.floor(Math.random() * 500) + 100;
        const totalVehicles = Math.floor(totalApplications * (1.2 + Math.random() * 0.4)); // More vehicles than apps
        const freshWithoutLateFee = Math.floor(totalApplications * (0.4 + Math.random() * 0.2));
        const freshWithLateFee = Math.floor(totalApplications * (0.2 + Math.random() * 0.15));
        const grandTotal = freshWithoutLateFee + freshWithLateFee;
        const feesRealized = grandTotal * (Math.floor(Math.random() * 200) + 100);
        const lateFeeRealized = freshWithLateFee * 500;
        return {
            district: district,
            vehicleCategory: category,
            totalVehicles: totalVehicles,
            totalApplications: totalApplications,
            freshWithoutLateFee: freshWithoutLateFee,
            freshWithLateFee: freshWithLateFee,
            grandTotal: grandTotal,
            feesRealized: feesRealized,
            lateFeeRealized: lateFeeRealized
        };
    });
});
const fitnessData = assamDistricts.map((district)=>{
    const totalTransportVehicles = Math.floor(Math.random() * 5000) + 1000;
    const certificatesApplied = Math.floor(totalTransportVehicles * (0.3 + Math.random() * 0.2)); // 30-50% apply
    const certificatesIssued = Math.floor(certificatesApplied * (0.85 + Math.random() * 0.1)); // 85-95% approved
    const certificatesRejected = Math.floor(certificatesApplied * (0.02 + Math.random() * 0.03)); // 2-5% rejected
    const certificatesImpounded = Math.floor(certificatesApplied * (0.01 + Math.random() * 0.02)); // 1-3% impounded
    const feesRealised = certificatesIssued * (Math.floor(Math.random() * 300) + 200); // ₹200-500 per certificate
    const lateFeeRealised = Math.floor(certificatesIssued * 0.2) * 50; // 20% pay late fee of ₹50
    const withoutFCCasesBooked = Math.floor(Math.random() * 100) + 20; // 20-120 cases
    return {
        district: district,
        totalTransportVehicles: totalTransportVehicles,
        certificatesApplied: certificatesApplied,
        certificatesIssued: certificatesIssued,
        certificatesRejected: certificatesRejected,
        certificatesImpounded: certificatesImpounded,
        feesRealised: feesRealised,
        lateFeeRealised: lateFeeRealised,
        withoutFCCasesBooked: withoutFCCasesBooked
    };
});
// Enforcement Data (Offence Cases & CF Realization)
const offenceTypes = [
    'Overloading',
    'No Helmet',
    'Triple Riding',
    'Wrong Side Driving',
    'Drunk Driving',
    'No Seatbelt',
    'Using Mobile While Driving',
    'Red Light Jump',
    'No Valid Documents',
    'Over Speeding'
];
const enforcementData = assamDistricts.flatMap((district)=>{
    return offenceTypes.map((offence)=>{
        const casesBooked = Math.floor(Math.random() * 500) + 100;
        const cfImposed = casesBooked * (Math.floor(Math.random() * 1000) + 500); // ₹500-1500 per case
        const casesDisposed = Math.floor(casesBooked * (0.6 + Math.random() * 0.25)); // 60-85% disposed
        const cfRealised = Math.floor(cfImposed * (casesDisposed / casesBooked) * (0.8 + Math.random() * 0.15)); // 80-95% of imposed for disposed cases
        const casesPending = casesBooked - casesDisposed;
        const licensesSuspended = offence === 'Drunk Driving' || offence === 'Over Speeding' ? Math.floor(casesDisposed * (0.1 + Math.random() * 0.15)) // 10-25% for serious offences
         : Math.floor(casesDisposed * (0.01 + Math.random() * 0.03)); // 1-4% for others
        return {
            district: district,
            offenceType: offence,
            casesBooked: casesBooked,
            cfImposed: cfImposed,
            casesDisposed: casesDisposed,
            cfRealised: cfRealised,
            casesPending: casesPending,
            licensesSuspended: licensesSuspended
        };
    });
});
const districtWiseRevenue = assamDistricts.map((district)=>{
    const factor = 0.5 + Math.random(); // Varied performance by district
    return {
        district,
        mvTax: {
            nonTransport: Math.floor(1200000 * factor),
            newReg: Math.floor(850000 * factor),
            alreadyReg: Math.floor(450000 * factor)
        },
        mvFees: {
            sarathi: Math.floor(150000 * factor),
            vahan: Math.floor(220000 * factor),
            pucc: Math.floor(80000 * factor)
        },
        roadSafetyCess: {
            nonTransport: Math.floor(350000 * factor),
            transport: Math.floor(250000 * factor)
        },
        greenTax: {
            nonTransport: Math.floor(180000 * factor),
            transport: Math.floor(120000 * factor)
        },
        compoundingFees: {
            offenceCF: Math.floor(95000 * factor),
            perDayCF: Math.floor(45000 * factor),
            fitnessCF: Math.floor(35000 * factor),
            puccLateFine: Math.floor(25000 * factor),
            otherLateFees: Math.floor(15000 * factor)
        },
        apgt: Math.floor(110000 * factor),
        hsrp: Math.floor(140000 * factor),
        laborCess: Math.floor(80000 * factor)
    };
});
const districtWiseRevenue2024 = assamDistricts.map((district)=>{
    const factor = 0.5 + Math.random(); // Varied performance by district
    const growth = 1 + (Math.random() * 0.2 - 0.2); // -20% to 0% growth
    return {
        district,
        mvTax: {
            nonTransport: Math.floor(1200000 * factor * growth),
            newReg: Math.floor(850000 * factor * growth),
            alreadyReg: Math.floor(450000 * factor * growth)
        },
        mvFees: {
            sarathi: Math.floor(150000 * factor * growth),
            vahan: Math.floor(220000 * factor * growth),
            pucc: Math.floor(80000 * factor * growth)
        },
        roadSafetyCess: {
            nonTransport: Math.floor(350000 * factor * growth),
            transport: Math.floor(250000 * factor * growth)
        },
        greenTax: {
            nonTransport: Math.floor(180000 * factor * growth),
            transport: Math.floor(120000 * factor * growth)
        },
        compoundingFees: {
            offenceCF: Math.floor(95000 * factor * growth),
            perDayCF: Math.floor(45000 * factor * growth),
            fitnessCF: Math.floor(35000 * factor * growth),
            puccLateFine: Math.floor(25000 * factor * growth),
            otherLateFees: Math.floor(15000 * factor * growth)
        },
        apgt: Math.floor(110000 * factor * growth),
        hsrp: Math.floor(140000 * factor * growth),
        laborCess: Math.floor(80000 * factor * growth)
    };
});
const districtWiseRevenue2023 = assamDistricts.map((district)=>{
    const factor = 0.5 + Math.random(); // Varied performance by district
    const growth = 1 + (Math.random() * 0.2 - 0.4); // -40% to -20% growth
    return {
        district,
        mvTax: {
            nonTransport: Math.floor(1200000 * factor * growth),
            newReg: Math.floor(850000 * factor * growth),
            alreadyReg: Math.floor(450000 * factor * growth)
        },
        mvFees: {
            sarathi: Math.floor(150000 * factor * growth),
            vahan: Math.floor(220000 * factor * growth),
            pucc: Math.floor(80000 * factor * growth)
        },
        roadSafetyCess: {
            nonTransport: Math.floor(350000 * factor * growth),
            transport: Math.floor(250000 * factor * growth)
        },
        greenTax: {
            nonTransport: Math.floor(180000 * factor * growth),
            transport: Math.floor(120000 * factor * growth)
        },
        compoundingFees: {
            offenceCF: Math.floor(95000 * factor * growth),
            perDayCF: Math.floor(45000 * factor * growth),
            fitnessCF: Math.floor(35000 * factor * growth),
            puccLateFine: Math.floor(25000 * factor * growth),
            otherLateFees: Math.floor(15000 * factor * growth)
        },
        apgt: Math.floor(110000 * factor * growth),
        hsrp: Math.floor(140000 * factor * growth),
        laborCess: Math.floor(80000 * factor * growth)
    };
});
const districtWiseRevenue2026 = assamDistricts.map((district)=>{
    const factor = 0.5 + Math.random(); // Varied performance by district
    const growth = 1 + (Math.random() * 0.4 - 0.1); // -10% to +30% growth
    return {
        district,
        mvTax: {
            nonTransport: Math.floor(1200000 * factor * growth),
            newReg: Math.floor(850000 * factor * growth),
            alreadyReg: Math.floor(450000 * factor * growth)
        },
        mvFees: {
            sarathi: Math.floor(150000 * factor * growth),
            vahan: Math.floor(220000 * factor * growth),
            pucc: Math.floor(80000 * factor * growth)
        },
        roadSafetyCess: {
            nonTransport: Math.floor(350000 * factor * growth),
            transport: Math.floor(250000 * factor * growth)
        },
        greenTax: {
            nonTransport: Math.floor(180000 * factor * growth),
            transport: Math.floor(120000 * factor * growth)
        },
        compoundingFees: {
            offenceCF: Math.floor(95000 * factor * growth),
            perDayCF: Math.floor(45000 * factor * growth),
            fitnessCF: Math.floor(35000 * factor * growth),
            puccLateFine: Math.floor(25000 * factor * growth),
            otherLateFees: Math.floor(15000 * factor * growth)
        },
        apgt: Math.floor(110000 * factor * growth),
        hsrp: Math.floor(140000 * factor * growth),
        laborCess: Math.floor(80000 * factor * growth)
    };
});
const districtWiseVehicles = assamDistricts.map((district)=>{
    const factor = 0.5 + Math.random();
    const twoWheeler = Math.floor(2500 * factor);
    const threeWheeler = Math.floor(600 * factor);
    const nonTransport = Math.floor(2800 * factor);
    const transport = Math.floor(1200 * factor);
    const total = nonTransport + transport;
    return {
        district,
        total,
        nonTransport,
        transport,
        twoWheeler,
        threeWheeler
    };
});
const districtWiseVehicles2024 = assamDistricts.map((district)=>{
    const factor = 0.5 + Math.random();
    const growth = 1 + (Math.random() * 0.2 - 0.2); // -20% to 0% growth
    const twoWheeler = Math.floor(2500 * factor * growth);
    const threeWheeler = Math.floor(600 * factor * growth);
    const nonTransport = Math.floor(2800 * factor * growth);
    const transport = Math.floor(1200 * factor * growth);
    const total = nonTransport + transport;
    return {
        district,
        total,
        nonTransport,
        transport,
        twoWheeler,
        threeWheeler
    };
});
const districtWiseVehicles2026 = assamDistricts.map((district)=>{
    const factor = 0.5 + Math.random();
    const growth = 1 + (Math.random() * 0.4 - 0.1); // -10% to +30% growth
    const twoWheeler = Math.floor(2500 * factor * growth);
    const threeWheeler = Math.floor(600 * factor * growth);
    const nonTransport = Math.floor(2800 * factor * growth);
    const transport = Math.floor(1200 * factor * growth);
    const total = nonTransport + transport;
    return {
        district,
        total,
        nonTransport,
        transport,
        twoWheeler,
        threeWheeler
    };
});
const registrationApplicationsData = assamDistricts.map((district)=>{
    const totalReceived = Math.floor(Math.random() * 800) + 200;
    const dealerPoint = Math.floor(totalReceived * (0.85 + Math.random() * 0.1));
    const dtoOffice = totalReceived - dealerPoint;
    const approved = Math.floor(totalReceived * (0.75 + Math.random() * 0.2));
    const scrutiny = Math.floor((totalReceived - approved) * 0.6);
    const approvalStage = totalReceived - approved - scrutiny;
    return {
        district,
        totalReceived,
        dealerPoint,
        dtoOffice,
        scrutiny,
        approvalStage,
        approved
    };
});
const registrationApplicationsData2026 = registrationApplicationsData.map((d)=>({
        district: d.district,
        totalReceived: Math.floor(d.totalReceived * 1.12),
        dealerPoint: Math.floor(d.dealerPoint * 1.12),
        dtoOffice: Math.floor(d.dtoOffice * 1.12),
        scrutiny: Math.floor(d.scrutiny * 1.12),
        approvalStage: Math.floor(d.approvalStage * 1.12),
        approved: Math.floor(d.approved * 1.12)
    }));
const permitApplicationsData2024 = permitApplicationsData.map((row)=>{
    const g = 1 + (Math.random() * 0.2 - 0.2);
    return {
        ...row,
        totalReceived: Math.floor(row.totalReceived * g),
        online: Math.floor(row.online * g),
        offline: Math.floor(row.offline * g),
        scrutiny: Math.floor(row.scrutiny * g),
        approvalStage: Math.floor(row.approvalStage * g),
        approved: Math.floor(row.approved * g)
    };
});
const permitApplicationsData2026 = permitApplicationsData.map((row)=>{
    const g = 1 + (Math.random() * 0.4 - 0.1);
    return {
        ...row,
        totalReceived: Math.floor(row.totalReceived * g),
        online: Math.floor(row.online * g),
        offline: Math.floor(row.offline * g),
        scrutiny: Math.floor(row.scrutiny * g),
        approvalStage: Math.floor(row.approvalStage * g),
        approved: Math.floor(row.approved * g)
    };
});
const aetsData2024 = aetsData.map((r)=>{
    const g = 1 + (Math.random() * 0.2 - 0.2);
    return {
        ...r,
        totalCentres: r.totalCentres,
        calibratedCentres: Math.floor(r.calibratedCentres * g),
        feesDeposited: Math.floor(r.feesDeposited * g)
    };
});
const aetsData2026 = aetsData.map((r)=>{
    const g = 1 + (Math.random() * 0.4 - 0.1);
    return {
        ...r,
        totalCentres: r.totalCentres,
        calibratedCentres: Math.floor(r.calibratedCentres * g),
        feesDeposited: Math.floor(r.feesDeposited * g)
    };
});
const puccData2024 = puccData.map((r)=>{
    const g = 1 + (Math.random() * 0.2 - 0.2);
    return {
        ...r,
        totalVehicles: Math.floor(r.totalVehicles * g),
        totalApplications: Math.floor(r.totalApplications * g),
        freshWithoutLateFee: Math.floor(r.freshWithoutLateFee * g),
        freshWithLateFee: Math.floor(r.freshWithLateFee * g),
        grandTotal: Math.floor(r.grandTotal * g),
        feesRealized: Math.floor(r.feesRealized * g),
        lateFeeRealized: Math.floor(r.lateFeeRealized * g)
    };
});
const puccData2026 = puccData.map((r)=>{
    const g = 1 + (Math.random() * 0.4 - 0.1);
    return {
        ...r,
        totalVehicles: Math.floor(r.totalVehicles * g),
        totalApplications: Math.floor(r.totalApplications * g),
        freshWithoutLateFee: Math.floor(r.freshWithoutLateFee * g),
        freshWithLateFee: Math.floor(r.freshWithLateFee * g),
        grandTotal: Math.floor(r.grandTotal * g),
        feesRealized: Math.floor(r.feesRealized * g),
        lateFeeRealized: Math.floor(r.lateFeeRealized * g)
    };
});
const fitnessData2024 = fitnessData.map((r)=>{
    const g = 1 + (Math.random() * 0.2 - 0.2);
    return {
        ...r,
        totalTransportVehicles: Math.floor(r.totalTransportVehicles * g),
        certificatesApplied: Math.floor(r.certificatesApplied * g),
        certificatesIssued: Math.floor(r.certificatesIssued * g),
        certificatesRejected: Math.floor(r.certificatesRejected * g),
        certificatesImpounded: Math.floor(r.certificatesImpounded * g),
        feesRealised: Math.floor(r.feesRealised * g),
        lateFeeRealised: Math.floor(r.lateFeeRealised * g),
        withoutFCCasesBooked: Math.floor(r.withoutFCCasesBooked * g)
    };
});
const fitnessData2026 = fitnessData.map((r)=>{
    const g = 1 + (Math.random() * 0.4 - 0.1);
    return {
        ...r,
        totalTransportVehicles: Math.floor(r.totalTransportVehicles * g),
        certificatesApplied: Math.floor(r.certificatesApplied * g),
        certificatesIssued: Math.floor(r.certificatesIssued * g),
        certificatesRejected: Math.floor(r.certificatesRejected * g),
        certificatesImpounded: Math.floor(r.certificatesImpounded * g),
        feesRealised: Math.floor(r.feesRealised * g),
        lateFeeRealised: Math.floor(r.lateFeeRealised * g),
        withoutFCCasesBooked: Math.floor(r.withoutFCCasesBooked * g)
    };
});
const enforcementData2024 = enforcementData.map((r)=>{
    const g = 1 + (Math.random() * 0.2 - 0.2);
    return {
        ...r,
        casesBooked: Math.floor(r.casesBooked * g),
        cfImposed: Math.floor(r.cfImposed * g),
        casesDisposed: Math.floor(r.casesDisposed * g),
        cfRealised: Math.floor(r.cfRealised * g),
        casesPending: Math.floor(r.casesPending * g),
        licensesSuspended: Math.floor(r.licensesSuspended * g)
    };
});
const enforcementData2026 = enforcementData.map((r)=>{
    const g = 1 + (Math.random() * 0.4 - 0.1);
    return {
        ...r,
        casesBooked: Math.floor(r.casesBooked * g),
        cfImposed: Math.floor(r.cfImposed * g),
        casesDisposed: Math.floor(r.casesDisposed * g),
        cfRealised: Math.floor(r.cfRealised * g),
        casesPending: Math.floor(r.casesPending * g),
        licensesSuspended: Math.floor(r.licensesSuspended * g)
    };
});
const dealerAuditData = [
    {
        dealerName: 'Sri Kamakhya Motors',
        totalRegistrations: 450,
        twoWheeler: 400,
        threeWheeler: 0,
        nonTransport: 50,
        mobileUpdates: 120,
        tradeCertStatus: 'Valid',
        validUntil: '2027-10-15'
    },
    {
        dealerName: 'Bimal Auto Agency',
        totalRegistrations: 320,
        twoWheeler: 150,
        threeWheeler: 20,
        nonTransport: 150,
        mobileUpdates: 95,
        tradeCertStatus: 'Valid',
        validUntil: '2026-11-20'
    },
    {
        dealerName: 'Podder Car World',
        totalRegistrations: 680,
        twoWheeler: 0,
        threeWheeler: 0,
        nonTransport: 680,
        mobileUpdates: 420,
        tradeCertStatus: 'Expired',
        validUntil: '2025-12-31'
    },
    {
        dealerName: 'Pallavi Motors',
        totalRegistrations: 290,
        twoWheeler: 290,
        threeWheeler: 0,
        nonTransport: 0,
        mobileUpdates: 110,
        tradeCertStatus: 'Valid',
        validUntil: '2026-08-05'
    },
    {
        dealerName: 'Gargya Toyota',
        totalRegistrations: 180,
        twoWheeler: 0,
        threeWheeler: 0,
        nonTransport: 180,
        mobileUpdates: 140,
        tradeCertStatus: 'Expiring Soon',
        validUntil: '2026-05-15'
    },
    {
        dealerName: 'Sethi Motors',
        totalRegistrations: 510,
        twoWheeler: 480,
        threeWheeler: 30,
        nonTransport: 0,
        mobileUpdates: 230,
        tradeCertStatus: 'Valid',
        validUntil: '2028-02-10'
    }
];
const serviceDeliveryData = {
    contactless: {
        physical: 125000,
        eService: 480000
    },
    delivery: [
        {
            serviceName: 'Learner License Issuance',
            applicationsHandled: 150000,
            avgProcessingTime: '2 Days'
        },
        {
            serviceName: 'Driving License Renewal',
            applicationsHandled: 85000,
            avgProcessingTime: '5 Days'
        },
        {
            serviceName: 'Vehicle Registration (Dealer)',
            applicationsHandled: 210000,
            avgProcessingTime: '1 Day'
        },
        {
            serviceName: 'Fitness Certificate',
            applicationsHandled: 45000,
            avgProcessingTime: 'Same Day'
        },
        {
            serviceName: 'Permit Issuance/Renewal',
            applicationsHandled: 32000,
            avgProcessingTime: '3 Days'
        }
    ],
    pendency: [
        {
            serviceName: 'Learner License Issuance',
            pendingApplications: 450
        },
        {
            serviceName: 'Driving License Renewal',
            pendingApplications: 1200
        },
        {
            serviceName: 'Vehicle Registration',
            pendingApplications: 350
        },
        {
            serviceName: 'Fitness Certificate',
            pendingApplications: 80
        },
        {
            serviceName: 'Permit Issuance/Renewal',
            pendingApplications: 210
        }
    ]
};
const __TURBOPACK__default__export__ = {
    vehicleRegistrations,
    vehicleRegistrations2026,
    trafficIncidents,
    publicTransportRidership,
    congestionLevels,
    fuelEfficiency,
    roadMaintenance,
    revenueCollection,
    revenueCollection2026,
    newRegistrationRevenue,
    newRegistrationTransportRevenue,
    newReg4WheelerSplit,
    reassignmentRevenue,
    greenTaxRevenue,
    renewalRevenue,
    permitFeesData,
    permitFeesData2026,
    permitApplicationsData,
    permitApplicationsData2024,
    permitApplicationsData2026,
    aetsData,
    aetsData2024,
    aetsData2026,
    puccData,
    puccData2024,
    puccData2026,
    fitnessData,
    fitnessData2024,
    fitnessData2026,
    enforcementData,
    enforcementData2024,
    enforcementData2026,
    districtWiseRevenue,
    districtWiseRevenue2023,
    districtWiseRevenue2024,
    districtWiseRevenue2026,
    districtWiseVehicles,
    districtWiseVehicles2024,
    districtWiseVehicles2026,
    registrationApplicationsData,
    registrationApplicationsData2026,
    permitFeesData2026,
    dealerAuditData,
    serviceDeliveryData
};
 // Future CSV import function (commented out for now)
 // import Papa from 'papaparse';
 // 
 // export const loadDataFromCSV = async (file) => {
 //   return new Promise((resolve, reject) => {
 //     Papa.parse(file, {
 //       header: true,
 //       complete: (results) => {
 //         resolve(results.data);
 //       },
 //       error: (error) => {
 //         reject(error);
 //       },
 //     });
 //   });
 // };
}),
"[project]/src/components/DateFilter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const DateFilter = ({ onFilterChange })=>{
    const [startDate, setStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('2025-01-01');
    const [endDate, setEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('2025-12-31');
    const [activePreset, setActivePreset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const presets = [
        {
            id: 'today',
            name: 'Today'
        },
        {
            id: 'yesterday',
            name: 'Yesterday'
        },
        {
            id: 'lastWeek',
            name: 'Last Week'
        },
        {
            id: 'lastMonth',
            name: 'Last Month'
        },
        {
            id: 'lastYear',
            name: 'Last Year'
        }
    ];
    const handlePresetClick = (presetId)=>{
        setActivePreset(presetId);
        // Logic to calculate dates based on preset
        // For simulation purposes with monthly dummy data, we map these to month ranges
        let start = '2025-01-01';
        let end = '2025-12-31';
        const now = new Date();
        const year = 2025; // Stick to 2025 for dummy data consistency
        switch(presetId){
            case 'today':
                start = `${year}-03-11`; // Mock today as Mar 11
                end = `${year}-03-11`;
                break;
            case 'yesterday':
                start = `${year}-03-10`;
                end = `${year}-03-10`;
                break;
            case 'lastWeek':
                start = `${year}-03-04`;
                end = `${year}-03-11`;
                break;
            case 'lastMonth':
                start = `${year}-02-01`;
                end = `${year}-02-28`;
                break;
            case 'lastYear':
                start = '2025-01-01';
                end = '2025-12-31';
                break;
            default:
                break;
        }
        setStartDate(start);
        setEndDate(end);
        onFilterChange({
            start,
            end,
            preset: presetId
        });
    };
    const handleDateChange = (type, value)=>{
        setActivePreset('custom');
        if (type === 'start') {
            setStartDate(value);
            onFilterChange({
                start: value,
                end: endDate,
                preset: 'custom'
            });
        } else {
            setEndDate(value);
            onFilterChange({
                start: startDate,
                end: value,
                preset: 'custom'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row md:items-center justify-between gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2",
                    children: presets.map((preset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handlePresetClick(preset.id),
                            className: `px-4 py-2 rounded-md text-sm font-medium transition-all ${activePreset === preset.id ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`,
                            children: preset.name
                        }, preset.id, false, {
                            fileName: "[project]/src/components/DateFilter.js",
                            lineNumber: 73,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/DateFilter.js",
                    lineNumber: 71,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row sm:items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                    children: "From"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DateFilter.js",
                                    lineNumber: 88,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    value: startDate,
                                    onChange: (e)=>handleDateChange('start', e.target.value),
                                    className: "bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-colors"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DateFilter.js",
                                    lineNumber: 89,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DateFilter.js",
                            lineNumber: 87,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row sm:items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                    children: "To"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DateFilter.js",
                                    lineNumber: 97,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    value: endDate,
                                    onChange: (e)=>handleDateChange('end', e.target.value),
                                    className: "bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-colors"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DateFilter.js",
                                    lineNumber: 98,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DateFilter.js",
                            lineNumber: 96,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DateFilter.js",
                    lineNumber: 86,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DateFilter.js",
            lineNumber: 70,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/DateFilter.js",
        lineNumber: 69,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = DateFilter;
}),
"[project]/src/components/ComparisonTable.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const ComparisonTable = ({ title, isComparisonMode, setIsComparisonMode, primaryRange, setPrimaryRange, compareRange, setCompareRange, compareCategory, setCompareCategory, categories, children, comparisonChildren })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden mt-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-gray-900 dark:text-white uppercase tracking-tight flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-2 md:mt-0",
                        children: [
                            title,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-sm ml-0 sm:ml-4 font-normal normal-case pt-1 sm:pt-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        value: primaryRange.start,
                                        onChange: (e)=>setPrimaryRange({
                                                ...primaryRange,
                                                start: e.target.value
                                            }),
                                        className: "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded px-2 py-1 focus:ring-blue-500 focus:border-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ComparisonTable.js",
                                        lineNumber: 23,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-500",
                                        children: "to"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ComparisonTable.js",
                                        lineNumber: 24,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        value: primaryRange.end,
                                        onChange: (e)=>setPrimaryRange({
                                                ...primaryRange,
                                                end: e.target.value
                                            }),
                                        className: "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded px-2 py-1 focus:ring-blue-500 focus:border-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ComparisonTable.js",
                                        lineNumber: 25,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ComparisonTable.js",
                                lineNumber: 22,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ComparisonTable.js",
                        lineNumber: 20,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        className: "sr-only",
                                        checked: isComparisonMode,
                                        onChange: ()=>setIsComparisonMode(!isComparisonMode)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ComparisonTable.js",
                                        lineNumber: 30,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `block w-10 h-6 rounded-full transition-colors ${isComparisonMode ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ComparisonTable.js",
                                        lineNumber: 31,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${isComparisonMode ? 'transform translate-x-4' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ComparisonTable.js",
                                        lineNumber: 32,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ComparisonTable.js",
                                lineNumber: 29,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-3 text-sm font-semibold text-gray-700 dark:text-gray-300",
                                children: "Custom Comparison"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ComparisonTable.js",
                                lineNumber: 34,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ComparisonTable.js",
                        lineNumber: 28,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ComparisonTable.js",
                lineNumber: 19,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            isComparisonMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4 bg-blue-50 dark:bg-blue-900/20 border-b border-gray-200 dark:border-gray-700 flex flex-wrap gap-6 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                                children: "Compare with timeline:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ComparisonTable.js",
                                lineNumber: 43,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-sm font-normal",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        value: compareRange.start,
                                        onChange: (e)=>setCompareRange({
                                                ...compareRange,
                                                start: e.target.value
                                            }),
                                        className: "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded px-2 py-1 focus:ring-blue-500 focus:border-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ComparisonTable.js",
                                        lineNumber: 45,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-500",
                                        children: "to"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ComparisonTable.js",
                                        lineNumber: 46,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        value: compareRange.end,
                                        onChange: (e)=>setCompareRange({
                                                ...compareRange,
                                                end: e.target.value
                                            }),
                                        className: "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded px-2 py-1 focus:ring-blue-500 focus:border-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ComparisonTable.js",
                                        lineNumber: 47,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ComparisonTable.js",
                                lineNumber: 44,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ComparisonTable.js",
                        lineNumber: 42,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 border-l sm:pl-6 border-blue-200 dark:border-blue-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                                children: "Category:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ComparisonTable.js",
                                lineNumber: 51,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: compareCategory,
                                onChange: (e)=>setCompareCategory(e.target.value),
                                className: "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 shadow-sm",
                                children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: cat.id,
                                        children: cat.label
                                    }, cat.id, false, {
                                        fileName: "[project]/src/components/ComparisonTable.js",
                                        lineNumber: 58,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ComparisonTable.js",
                                lineNumber: 52,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ComparisonTable.js",
                        lineNumber: 50,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ComparisonTable.js",
                lineNumber: 41,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: !isComparisonMode ? children : comparisonChildren
            }, void 0, false, {
                fileName: "[project]/src/components/ComparisonTable.js",
                lineNumber: 65,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ComparisonTable.js",
        lineNumber: 18,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ComparisonTable;
}),
"[project]/src/hooks/useComparison.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useComparison",
    ()=>useComparison
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useComparison({ initialCategory, getYearDataOptions, defaultPrimaryYear = '2025', defaultCompareYear = '2026' }) {
    const [isComparisonMode, setIsComparisonMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [compareCategory, setCompareCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialCategory);
    const [primaryRange, setPrimaryRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        start: `${defaultPrimaryYear}-01-01`,
        end: `${defaultPrimaryYear}-01-15`
    });
    const [compareRange, setCompareRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        start: `${defaultCompareYear}-06-01`,
        end: `${defaultCompareYear}-06-15`
    });
    const getDaysBetween = (start, end)=>{
        if (!start || !end) return 365;
        const startD = new Date(start);
        const endD = new Date(end);
        if (isNaN(startD) || isNaN(endD)) return 365;
        const diff = endD - startD;
        return Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)) + 1);
    };
    const getYearData = (year)=>{
        return getYearDataOptions[year] || getYearDataOptions[defaultPrimaryYear];
    };
    const primaryYear = primaryRange.start ? primaryRange.start.substring(0, 4) : defaultPrimaryYear;
    const primaryData = getYearData(primaryYear);
    const primaryDays = getDaysBetween(primaryRange.start, primaryRange.end);
    const primaryScale = primaryDays / 365;
    const compareYear = compareRange.start ? compareRange.start.substring(0, 4) : defaultCompareYear;
    const comparisonDataRaw = getYearData(compareYear) || getYearDataOptions[defaultCompareYear];
    const compareDays = getDaysBetween(compareRange.start, compareRange.end);
    const compareScale = compareDays / 365;
    return {
        isComparisonMode,
        setIsComparisonMode,
        compareCategory,
        setCompareCategory,
        primaryRange,
        setPrimaryRange,
        compareRange,
        setCompareRange,
        primaryScale,
        compareScale,
        primaryData,
        comparisonDataRaw
    };
}
}),
"[project]/src/components/Permit.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/dummyData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DateFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DateFilter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ComparisonTable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ComparisonTable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useComparison$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useComparison.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const Permit = ()=>{
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedDistrict, setSelectedDistrict] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('All');
    const [selectedPermitType, setSelectedPermitType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('All');
    const [selectedVehicleClass, setSelectedVehicleClass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('All');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsDarkMode(document.documentElement.classList.contains('dark'));
    }, []);
    // Get unique values for filters
    const districts = [
        'All',
        ...new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].permitFeesData.map((d)=>d.district))
    ];
    const permitTypes = [
        'All',
        ...new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].permitFeesData.map((d)=>d.permitType))
    ];
    const vehicleClasses = [
        'All',
        ...new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].permitFeesData.map((d)=>d.vehicleClass))
    ];
    // Filter permit fees data (used as the base before scaling)
    const comparisonPropsFees = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useComparison$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComparison"])({
        initialCategory: 'permitFeeRealised',
        getYearDataOptions: {
            '2024': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].permitFeesData || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].permitFeesData2026,
            '2025': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].permitFeesData,
            '2026': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].permitFeesData2026
        }
    });
    const scaleFeeRow = (row, scaleFactor)=>{
        if (!row) return null;
        const scale = (val)=>Math.floor(val * scaleFactor);
        return {
            ...row,
            totalVehicles: scale(row.totalVehicles),
            period1Year: scale(row.period1Year),
            period3Year: scale(row.period3Year),
            period5Year: scale(row.period5Year),
            permitFeeRealised: scale(row.permitFeeRealised),
            lateFeeRealised: scale(row.lateFeeRealised)
        };
    };
    const filteredPrimaryFeesRaw = comparisonPropsFees.primaryData.filter((row)=>{
        if (selectedDistrict !== 'All' && row.district !== selectedDistrict) return false;
        if (selectedPermitType !== 'All' && row.permitType !== selectedPermitType) return false;
        if (selectedVehicleClass !== 'All' && row.vehicleClass !== selectedVehicleClass) return false;
        return true;
    });
    const scaledPrimaryFeesData = filteredPrimaryFeesRaw.map((row)=>scaleFeeRow(row, comparisonPropsFees.primaryScale));
    const scaledComparisonFeesRaw = comparisonPropsFees.comparisonDataRaw?.map((row)=>scaleFeeRow(row, comparisonPropsFees.compareScale));
    const feesCategories = [
        {
            id: 'totalVehicles',
            label: 'Total Vehicles'
        },
        {
            id: 'period1Year',
            label: '1 Year Period'
        },
        {
            id: 'period3Year',
            label: '3 Year Period'
        },
        {
            id: 'period5Year',
            label: '5 Year Period'
        },
        {
            id: 'permitFeeRealised',
            label: 'Permit Fee'
        },
        {
            id: 'lateFeeRealised',
            label: 'Late Fee'
        }
    ];
    // Filter application data
    const comparisonProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useComparison$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComparison"])({
        initialCategory: 'totalReceived',
        getYearDataOptions: {
            '2024': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].permitApplicationsData2024,
            '2025': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].permitApplicationsData,
            '2026': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].permitApplicationsData2026
        }
    });
    const { primaryScale, compareScale, primaryData, comparisonDataRaw, compareCategory } = comparisonProps;
    const scaleRow = (row, scaleFactor)=>{
        if (!row) return null;
        const scale = (val)=>Math.floor(val * scaleFactor);
        return {
            ...row,
            totalReceived: scale(row.totalReceived),
            online: scale(row.online),
            offline: scale(row.offline),
            scrutiny: scale(row.scrutiny),
            approvalStage: scale(row.approvalStage),
            approved: scale(row.approved)
        };
    };
    const scaledPrimaryData = (selectedDistrict === 'All' ? primaryData : primaryData.filter((r)=>r.district === selectedDistrict)).map((row)=>scaleRow(row, primaryScale));
    const scaledComparisonData = (selectedDistrict === 'All' ? comparisonDataRaw : (comparisonDataRaw || []).filter((r)=>r.district === selectedDistrict)).map((row)=>scaleRow(row, compareScale));
    const getDistrictCategoryValue = (districtData, category)=>{
        if (!districtData) return 0;
        return districtData[category] || 0;
    };
    const categories = [
        {
            id: 'totalReceived',
            label: 'Total Received'
        },
        {
            id: 'online',
            label: 'Online'
        },
        {
            id: 'offline',
            label: 'Offline (DTO)'
        },
        {
            id: 'scrutiny',
            label: 'Under Scrutiny'
        },
        {
            id: 'approvalStage',
            label: 'Approval Stage'
        },
        {
            id: 'approved',
            label: 'Approved'
        }
    ];
    const formatCurrency = (amount)=>{
        return '₹' + amount.toLocaleString('en-IN');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-gray-800 rounded-lg shadow p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-gray-900 dark:text-white mb-2",
                        children: "Permit Management"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Permit.js",
                        lineNumber: 126,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 dark:text-gray-400",
                        children: "District-wise permit fee details and application status"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Permit.js",
                        lineNumber: 127,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Permit.js",
                lineNumber: 125,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DateFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onFilterChange: ()=>{}
            }, void 0, false, {
                fileName: "[project]/src/components/Permit.js",
                lineNumber: 130,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-gray-800 rounded-lg shadow p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-3 text-gray-900 dark:text-white",
                        children: "Filters"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Permit.js",
                        lineNumber: 133,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "District"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 136,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: selectedDistrict,
                                        onChange: (e)=>setSelectedDistrict(e.target.value),
                                        className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500",
                                        children: districts.map((district)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: district,
                                                children: district
                                            }, district, false, {
                                                fileName: "[project]/src/components/Permit.js",
                                                lineNumber: 145,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 139,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Permit.js",
                                lineNumber: 135,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Permit Type"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 150,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: selectedPermitType,
                                        onChange: (e)=>setSelectedPermitType(e.target.value),
                                        className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500",
                                        children: permitTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: type,
                                                children: type
                                            }, type, false, {
                                                fileName: "[project]/src/components/Permit.js",
                                                lineNumber: 159,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 153,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Permit.js",
                                lineNumber: 149,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Vehicle Class"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 164,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: selectedVehicleClass,
                                        onChange: (e)=>setSelectedVehicleClass(e.target.value),
                                        className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500",
                                        children: vehicleClasses.map((vClass)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: vClass,
                                                children: vClass
                                            }, vClass, false, {
                                                fileName: "[project]/src/components/Permit.js",
                                                lineNumber: 173,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 167,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Permit.js",
                                lineNumber: 163,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Permit.js",
                        lineNumber: 134,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Permit.js",
                lineNumber: 132,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ComparisonTable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "Permit & Permit Fee Details",
                isComparisonMode: comparisonPropsFees.isComparisonMode,
                setIsComparisonMode: comparisonPropsFees.setIsComparisonMode,
                primaryRange: comparisonPropsFees.primaryRange,
                setPrimaryRange: comparisonPropsFees.setPrimaryRange,
                compareRange: comparisonPropsFees.compareRange,
                setCompareRange: comparisonPropsFees.setCompareRange,
                compareCategory: comparisonPropsFees.compareCategory,
                setCompareCategory: comparisonPropsFees.setCompareCategory,
                categories: feesCategories,
                comparisonChildren: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-gray-100 dark:bg-gray-800 text-[10px] font-bold uppercase text-gray-700 dark:text-gray-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left border-b border-gray-200 dark:border-gray-700",
                                        children: "District"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 196,
                                        columnNumber: 33
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left border-b border-gray-200 dark:border-gray-700",
                                        children: "Type/Sub-Type/Class"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 197,
                                        columnNumber: 33
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-right border-b border-gray-200 dark:border-gray-700",
                                        children: "Selected Period"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 198,
                                        columnNumber: 33
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-right border-b border-gray-200 dark:border-gray-700",
                                        children: "Comparison Period"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 199,
                                        columnNumber: 33
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-right border-b border-gray-200 dark:border-gray-700",
                                        children: "Variance"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 200,
                                        columnNumber: 33
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-right border-b border-gray-200 dark:border-gray-700",
                                        children: "Trend"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 201,
                                        columnNumber: 33
                                    }, void 0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Permit.js",
                                lineNumber: 195,
                                columnNumber: 29
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Permit.js",
                            lineNumber: 194,
                            columnNumber: 25
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-gray-200 dark:divide-gray-700",
                            children: scaledPrimaryFeesData.map((rowPrimary, idx)=>{
                                const rowComparison = scaledComparisonFeesRaw?.find((d)=>d.district === rowPrimary.district && d.permitType === rowPrimary.permitType && d.subType === rowPrimary.subType && d.vehicleClass === rowPrimary.vehicleClass);
                                const valPrimary = rowPrimary[comparisonPropsFees.compareCategory] || 0;
                                const valComparison = rowComparison ? rowComparison[comparisonPropsFees.compareCategory] || 0 : 0;
                                const variance = valComparison - valPrimary;
                                const variancePct = valPrimary === 0 ? 0 : variance / valPrimary * 100;
                                const isPositive = variance > 0;
                                const isNegative = variance < 0;
                                const isCurrency = [
                                    'permitFeeRealised',
                                    'lateFeeRealised'
                                ].includes(comparisonPropsFees.compareCategory);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40',
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-sm font-medium text-gray-900 dark:text-white",
                                            children: rowPrimary.district
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Permit.js",
                                            lineNumber: 226,
                                            columnNumber: 41
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-sm text-gray-500 dark:text-gray-400",
                                            children: [
                                                rowPrimary.permitType,
                                                " / ",
                                                rowPrimary.subType,
                                                " / ",
                                                rowPrimary.vehicleClass
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Permit.js",
                                            lineNumber: 229,
                                            columnNumber: 41
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-right text-sm text-gray-600 dark:text-gray-400",
                                            children: isCurrency ? formatCurrency(valPrimary) : valPrimary.toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Permit.js",
                                            lineNumber: 232,
                                            columnNumber: 41
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-right text-sm text-gray-900 dark:text-white font-semibold",
                                            children: isCurrency ? formatCurrency(valComparison) : valComparison.toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Permit.js",
                                            lineNumber: 235,
                                            columnNumber: 41
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: `px-6 py-4 text-right text-sm font-bold ${isPositive ? 'text-green-600 dark:text-green-400' : isNegative ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'}`,
                                            children: [
                                                isPositive ? '+' : '',
                                                isCurrency ? formatCurrency(variance) : variance.toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Permit.js",
                                            lineNumber: 238,
                                            columnNumber: 41
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: `px-6 py-4 text-right text-sm font-bold ${isPositive ? 'text-green-600 dark:text-green-400' : isNegative ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-end gap-1",
                                                children: [
                                                    isPositive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: "2",
                                                            d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Permit.js",
                                                            lineNumber: 243,
                                                            columnNumber: 143
                                                        }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Permit.js",
                                                        lineNumber: 243,
                                                        columnNumber: 64
                                                    }, void 0),
                                                    isNegative && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: "2",
                                                            d: "M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Permit.js",
                                                            lineNumber: 244,
                                                            columnNumber: 143
                                                        }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Permit.js",
                                                        lineNumber: 244,
                                                        columnNumber: 64
                                                    }, void 0),
                                                    isPositive ? '+' : '',
                                                    variancePct.toFixed(1),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Permit.js",
                                                lineNumber: 242,
                                                columnNumber: 45
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Permit.js",
                                            lineNumber: 241,
                                            columnNumber: 41
                                        }, void 0)
                                    ]
                                }, `${rowPrimary.district}-${idx}`, true, {
                                    fileName: "[project]/src/components/Permit.js",
                                    lineNumber: 225,
                                    columnNumber: 37
                                }, void 0);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/Permit.js",
                            lineNumber: 204,
                            columnNumber: 25
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Permit.js",
                    lineNumber: 193,
                    columnNumber: 21
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-gray-50 dark:bg-gray-700",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                        children: "District"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 258,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                        children: "Permit Type"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 261,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                        children: "Sub Type"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 264,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                        children: "Total Vehicles"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 267,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                        children: "Vehicle Class"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 270,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                        children: "1 Year"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 273,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                        children: "3 Year"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 276,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                        children: "5 Year"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 279,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                        children: "Permit Fee"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 282,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                        children: "Late Fee"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 285,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Permit.js",
                                lineNumber: 257,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Permit.js",
                            lineNumber: 256,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700",
                            children: scaledPrimaryFeesData.map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: `hover:bg-gray-50 dark:hover:bg-gray-700 ${idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-800/50'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white",
                                            children: row.district
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Permit.js",
                                            lineNumber: 293,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400",
                                            children: row.permitType
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Permit.js",
                                            lineNumber: 296,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400",
                                            children: row.subType
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Permit.js",
                                            lineNumber: 299,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900 dark:text-gray-300",
                                            children: row.totalVehicles
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Permit.js",
                                            lineNumber: 302,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400",
                                            children: row.vehicleClass
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Permit.js",
                                            lineNumber: 305,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900 dark:text-gray-300",
                                            children: row.period1Year
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Permit.js",
                                            lineNumber: 308,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900 dark:text-gray-300",
                                            children: row.period3Year
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Permit.js",
                                            lineNumber: 311,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900 dark:text-gray-300",
                                            children: row.period5Year
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Permit.js",
                                            lineNumber: 314,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-right text-blue-600 dark:text-blue-400 font-medium",
                                            children: formatCurrency(row.permitFeeRealised)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Permit.js",
                                            lineNumber: 317,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-right text-red-600 dark:text-red-400",
                                            children: formatCurrency(row.lateFeeRealised)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Permit.js",
                                            lineNumber: 320,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/src/components/Permit.js",
                                    lineNumber: 292,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Permit.js",
                            lineNumber: 290,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Permit.js",
                    lineNumber: 255,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Permit.js",
                lineNumber: 181,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ComparisonTable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "Permit Application Status",
                isComparisonMode: comparisonProps.isComparisonMode,
                setIsComparisonMode: comparisonProps.setIsComparisonMode,
                primaryRange: comparisonProps.primaryRange,
                setPrimaryRange: comparisonProps.setPrimaryRange,
                compareRange: comparisonProps.compareRange,
                setCompareRange: comparisonProps.setCompareRange,
                compareCategory: comparisonProps.compareCategory,
                setCompareCategory: comparisonProps.setCompareCategory,
                categories: categories,
                comparisonChildren: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-gray-100 dark:bg-gray-800 text-xs font-bold uppercase text-gray-700 dark:text-gray-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left border-b border-gray-200 dark:border-gray-700",
                                        children: "District"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 345,
                                        columnNumber: 33
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-right border-b border-gray-200 dark:border-gray-700",
                                        children: "Selected Period"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 346,
                                        columnNumber: 33
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-right border-b border-gray-200 dark:border-gray-700",
                                        children: "Comparison Period"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 347,
                                        columnNumber: 33
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-right border-b border-gray-200 dark:border-gray-700",
                                        children: "Variance"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 348,
                                        columnNumber: 33
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-right border-b border-gray-200 dark:border-gray-700",
                                        children: "Trend"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 349,
                                        columnNumber: 33
                                    }, void 0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Permit.js",
                                lineNumber: 344,
                                columnNumber: 29
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Permit.js",
                            lineNumber: 343,
                            columnNumber: 25
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-gray-200 dark:divide-gray-700",
                            children: scaledPrimaryData.map((rowPrimary, idx)=>{
                                const rowComparison = scaledComparisonData?.find((d)=>d.district === rowPrimary.district);
                                const valPrimary = getDistrictCategoryValue(rowPrimary, compareCategory);
                                const valComparison = getDistrictCategoryValue(rowComparison, compareCategory);
                                const variance = valComparison - valPrimary;
                                const variancePct = valPrimary === 0 ? 0 : variance / valPrimary * 100;
                                const isPositive = variance > 0;
                                const isNegative = variance < 0;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40',
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-sm font-medium text-gray-900 dark:text-white",
                                            children: rowPrimary.district
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Permit.js",
                                            lineNumber: 367,
                                            columnNumber: 41
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-right text-sm text-gray-600 dark:text-gray-400",
                                            children: valPrimary.toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Permit.js",
                                            lineNumber: 370,
                                            columnNumber: 41
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-right text-sm text-gray-900 dark:text-white font-semibold",
                                            children: valComparison.toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Permit.js",
                                            lineNumber: 373,
                                            columnNumber: 41
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: `px-6 py-4 text-right text-sm font-bold ${isPositive ? 'text-green-600 dark:text-green-400' : isNegative ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'}`,
                                            children: [
                                                isPositive ? '+' : '',
                                                variance.toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Permit.js",
                                            lineNumber: 376,
                                            columnNumber: 41
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: `px-6 py-4 text-right text-sm font-bold ${isPositive ? 'text-green-600 dark:text-green-400' : isNegative ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-end gap-1",
                                                children: [
                                                    isPositive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: "2",
                                                            d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Permit.js",
                                                            lineNumber: 381,
                                                            columnNumber: 143
                                                        }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Permit.js",
                                                        lineNumber: 381,
                                                        columnNumber: 64
                                                    }, void 0),
                                                    isNegative && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: "2",
                                                            d: "M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Permit.js",
                                                            lineNumber: 382,
                                                            columnNumber: 143
                                                        }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Permit.js",
                                                        lineNumber: 382,
                                                        columnNumber: 64
                                                    }, void 0),
                                                    isPositive ? '+' : '',
                                                    variancePct.toFixed(1),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Permit.js",
                                                lineNumber: 380,
                                                columnNumber: 45
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Permit.js",
                                            lineNumber: 379,
                                            columnNumber: 41
                                        }, void 0)
                                    ]
                                }, rowPrimary.district, true, {
                                    fileName: "[project]/src/components/Permit.js",
                                    lineNumber: 366,
                                    columnNumber: 37
                                }, void 0);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/Permit.js",
                            lineNumber: 352,
                            columnNumber: 25
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Permit.js",
                    lineNumber: 342,
                    columnNumber: 21
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-gray-50 dark:bg-gray-700",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                        children: "District"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 396,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                        children: "Total Received"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 399,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                        children: "Online"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 402,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                        children: "Offline (DTO)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 405,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                        children: "Under Scrutiny"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 408,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                        children: "Approval Stage"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 411,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                        children: "Approved"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Permit.js",
                                        lineNumber: 414,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Permit.js",
                                lineNumber: 395,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Permit.js",
                            lineNumber: 394,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700",
                            children: scaledPrimaryData.map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: `hover:bg-gray-50 dark:hover:bg-gray-700 ${idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-800/50'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white",
                                            children: row.district
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Permit.js",
                                            lineNumber: 422,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900 dark:text-gray-300 font-medium",
                                            children: row.totalReceived.toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Permit.js",
                                            lineNumber: 425,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-right text-green-600 dark:text-green-400",
                                            children: row.online.toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Permit.js",
                                            lineNumber: 428,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500 dark:text-gray-400",
                                            children: row.offline.toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Permit.js",
                                            lineNumber: 431,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-right text-yellow-600 dark:text-yellow-400",
                                            children: row.scrutiny.toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Permit.js",
                                            lineNumber: 434,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-right text-orange-600 dark:text-orange-400",
                                            children: row.approvalStage.toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Permit.js",
                                            lineNumber: 437,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-right text-blue-600 dark:text-blue-400 font-medium",
                                            children: row.approved.toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Permit.js",
                                            lineNumber: 440,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, row.district, true, {
                                    fileName: "[project]/src/components/Permit.js",
                                    lineNumber: 421,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Permit.js",
                            lineNumber: 419,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Permit.js",
                    lineNumber: 393,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Permit.js",
                lineNumber: 330,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Permit.js",
        lineNumber: 123,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Permit;
}),
];

//# sourceMappingURL=src_89307dfd._.js.map