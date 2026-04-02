(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/dummyData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
;
;
;
// Dummy data for Transport Department Statistics Dashboard
// Monthly data for Jan-Dec 2025
var months = [
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
var vehicleRegistrations = months.map(function(month, index) {
    var seasonalFactor = index < 2 || index > 9 ? 0.85 : index < 5 ? 1.15 : 1.0;
    var twoWheeler = Math.floor((1500 + Math.random() * 500) * seasonalFactor);
    var threeWheeler = Math.floor((300 + Math.random() * 100) * seasonalFactor);
    var cars = Math.floor((1200 + Math.random() * 300) * seasonalFactor);
    var others = Math.floor((200 + Math.random() * 100) * seasonalFactor);
    return {
        month: month,
        twoWheeler: twoWheeler,
        threeWheeler: threeWheeler,
        cars: cars,
        others: others,
        nonTransport: Math.floor((cars + twoWheeler) * 0.9 + others * 0.2),
        transport: Math.floor((cars + twoWheeler) * 0.1 + threeWheeler + others * 0.8)
    };
});
var vehicleRegistrations2026 = months.map(function(month, index) {
    var seasonalFactor = (index < 2 || index > 9 ? 0.85 : index < 5 ? 1.15 : 1.0) * 1.12; // 12% growth
    var twoWheeler = Math.floor((1500 + Math.random() * 500) * seasonalFactor);
    var threeWheeler = Math.floor((300 + Math.random() * 100) * seasonalFactor);
    var cars = Math.floor((1200 + Math.random() * 300) * seasonalFactor);
    var others = Math.floor((200 + Math.random() * 100) * seasonalFactor);
    return {
        month: month,
        twoWheeler: twoWheeler,
        threeWheeler: threeWheeler,
        cars: cars,
        others: others,
        nonTransport: Math.floor((cars + twoWheeler) * 0.9 + others * 0.2),
        transport: Math.floor((cars + twoWheeler) * 0.1 + threeWheeler + others * 0.8)
    };
});
var trafficIncidents = months.map(function(month, index) {
    // Higher incidents in winter months (Nov-Feb) and summer vacation
    var incidentFactor = index < 2 || index === 11 ? 1.3 : index > 5 && index < 8 ? 1.15 : 1.0;
    return {
        month: month,
        accidents: Math.floor((45 + Math.random() * 15) * incidentFactor),
        violations: Math.floor((320 + Math.random() * 80) * incidentFactor),
        breakdowns: Math.floor((180 + Math.random() * 50) * incidentFactor * 0.8)
    };
});
var publicTransportRidership = months.map(function(month, index) {
    // Higher ridership in fall/winter, lower in summer
    var ridershipFactor = index > 7 && index < 11 ? 1.2 : index > 4 && index < 8 ? 0.85 : 1.0;
    return {
        month: month,
        passengerCount: Math.floor((450000 + Math.random() * 50000) * ridershipFactor),
        onTimePercentage: 85 + Math.random() * 10
    };
});
var congestionLevels = months.map(function(month, index) {
    // Higher congestion in fall (back to school) and holiday season
    var congestionFactor = index > 7 && index < 11 ? 1.25 : index === 11 ? 1.15 : 1.0;
    return {
        month: month,
        averageDelayMinutes: Number(((12 + Math.random() * 8) * congestionFactor).toFixed(1))
    };
});
var fuelEfficiency = months.map(function(month, index) {
    // Slightly better efficiency in warmer months
    var efficiencyFactor = index > 3 && index < 9 ? 1.05 : 1.0;
    return {
        month: month,
        averageMPG: Number(((28 + Math.random() * 4) * efficiencyFactor).toFixed(1))
    };
});
var roadMaintenance = months.map(function(month, index) {
    // Higher completion in warmer months (better weather for construction)
    var maintenanceFactor = index > 3 && index < 9 ? 1.1 : 0.9;
    return {
        month: month,
        completionRate: Number(Math.min(100, (75 + Math.random() * 20) * maintenanceFactor).toFixed(1)),
        scheduledProjects: Math.floor(15 + Math.random() * 10),
        completedProjects: Math.floor((15 + Math.random() * 10) * maintenanceFactor * 0.8)
    };
});
var revenueCollection = months.map(function(month, index) {
    // Higher revenue in registration-heavy months
    var revenueFactor = index > 2 && index < 6 ? 1.2 : index > 8 ? 0.9 : 1.0;
    return {
        month: month,
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
var revenueCollection2026 = months.map(function(month, index) {
    var revenueFactor = (index > 2 && index < 6 ? 1.2 : index > 8 ? 0.9 : 1.0) * 1.15; // 15% increase
    return {
        month: month,
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
var assamDistricts = [
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
var newRegistrationRevenue = {
    twoWheeler: assamDistricts.map(function(district) {
        return {
            district: district,
            totalVehicles: Math.floor(500 + Math.random() * 2000),
            mvTaxNonTransport: "One-time",
            category: "Two-wheeler",
            weight: "Below 65kg",
            mvTaxRealised: Math.floor(500000 + Math.random() * 2000000),
            mvFeesRealised: Math.floor(50000 + Math.random() * 200000),
            roadSafetyCess: Math.floor(10000 + Math.random() * 50000),
            cfPenalty: Math.floor(Math.random() * 10000)
        };
    }),
    threeWheeler: assamDistricts.map(function(district) {
        return {
            district: district,
            totalVehicles: Math.floor(100 + Math.random() * 500),
            mvTaxNonTransport: "One-time",
            category: "Three-wheeler",
            weight: "N/A",
            mvTaxRealised: Math.floor(200000 + Math.random() * 800000),
            mvFeesRealised: Math.floor(20000 + Math.random() * 80000),
            roadSafetyCess: Math.floor(5000 + Math.random() * 20000),
            cfPenalty: Math.floor(Math.random() * 5000)
        };
    }),
    fourWheeler: assamDistricts.map(function(district) {
        return {
            district: district,
            totalVehicles: Math.floor(50 + Math.random() * 300),
            mvTaxNonTransport: "One-time",
            category: "Four-wheeler",
            originalCost: "VARIES",
            mvTaxRealised: Math.floor(1500000 + Math.random() * 5000000),
            mvFeesRealised: Math.floor(100000 + Math.random() * 300000),
            roadSafetyCess: Math.floor(30000 + Math.random() * 100000),
            cfPenalty: Math.floor(Math.random() * 20000)
        };
    }),
    otherVehicles: assamDistricts.map(function(district) {
        return {
            district: district,
            totalVehicles: Math.floor(20 + Math.random() * 100),
            mvTaxNonTransport: "Annual",
            category: "LMV/MMV/HMV",
            otherParams: "2% annual tax",
            mvTaxRealised: Math.floor(800000 + Math.random() * 3000000),
            mvFeesRealised: Math.floor(50000 + Math.random() * 150000),
            roadSafetyCess: Math.floor(20000 + Math.random() * 60000),
            cfPenalty: Math.floor(Math.random() * 15000)
        };
    })
};
var newRegistrationTransportRevenue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
    twoWheeler: assamDistricts.map(function(district) {
        return {
            district: district,
            totalVehicles: Math.floor(100 + Math.random() * 500),
            mvTaxTransport: "Quarterly",
            category: "Two-wheeler",
            param: "Below 65kg",
            mvTaxRealised: Math.floor(100000 + Math.random() * 500000),
            mvFeesRealised: Math.floor(10000 + Math.random() * 50000),
            roadSafetyCess: Math.floor(5000 + Math.random() * 20000),
            cfPerDay: Math.floor(Math.random() * 2000)
        };
    }),
    threeWheelerPassenger: assamDistricts.map(function(district) {
        return {
            district: district,
            totalVehicles: Math.floor(200 + Math.random() * 800),
            mvTaxTransport: "Quarterly",
            category: "Three-wheeler (Passenger)",
            param: "3+1",
            mvTaxRealised: Math.floor(300000 + Math.random() * 1000000),
            mvFeesRealised: Math.floor(30000 + Math.random() * 100000),
            roadSafetyCess: Math.floor(10000 + Math.random() * 40000),
            cfPerDay: Math.floor(Math.random() * 5000)
        };
    }),
    threeWheelerGoods: assamDistricts.map(function(district) {
        return {
            district: district,
            totalVehicles: Math.floor(150 + Math.random() * 600),
            mvTaxTransport: "Quarterly",
            category: "Three-wheeler (Goods)",
            param: "500kg",
            mvTaxRealised: Math.floor(250000 + Math.random() * 900000),
            mvFeesRealised: Math.floor(25000 + Math.random() * 90000),
            roadSafetyCess: Math.floor(8000 + Math.random() * 30000),
            cfPerDay: Math.floor(Math.random() * 4000)
        };
    }),
    lmvPassenger: assamDistricts.map(function(district) {
        return {
            district: district,
            totalVehicles: Math.floor(100 + Math.random() * 400),
            mvTaxTransport: "Quarterly",
            category: "Four-wheeler (LMV) Passenger",
            param: "4+1",
            mvTaxRealised: Math.floor(500000 + Math.random() * 2000000),
            mvFeesRealised: Math.floor(50000 + Math.random() * 200000),
            roadSafetyCess: Math.floor(15000 + Math.random() * 60000),
            cfPerDay: Math.floor(Math.random() * 8000)
        };
    }),
    lmvGoods: assamDistricts.map(function(district) {
        return {
            district: district,
            totalVehicles: Math.floor(80 + Math.random() * 350),
            mvTaxTransport: "Quarterly",
            category: "Four-wheeler (LMV) Goods",
            param: "1500kg",
            mvTaxRealised: Math.floor(450000 + Math.random() * 1800000),
            mvFeesRealised: Math.floor(45000 + Math.random() * 180000),
            roadSafetyCess: Math.floor(12000 + Math.random() * 50000),
            cfPerDay: Math.floor(Math.random() * 7000)
        };
    }),
    mmvPassenger: assamDistricts.map(function(district) {
        return {
            district: district,
            totalVehicles: Math.floor(50 + Math.random() * 200),
            mvTaxTransport: "Quarterly",
            category: "MMV (Passenger)",
            param: "12+1",
            mvTaxRealised: Math.floor(600000 + Math.random() * 2500000),
            mvFeesRealised: Math.floor(60000 + Math.random() * 250000),
            roadSafetyCess: Math.floor(20000 + Math.random() * 80000),
            cfPerDay: Math.floor(Math.random() * 10000)
        };
    }),
    mmvGoods: assamDistricts.map(function(district) {
        return {
            district: district,
            totalVehicles: Math.floor(40 + Math.random() * 180),
            mvTaxTransport: "Quarterly",
            category: "MMV (Goods)",
            param: "5000kg",
            mvTaxRealised: Math.floor(700000 + Math.random() * 3000000),
            mvFeesRealised: Math.floor(70000 + Math.random() * 300000),
            roadSafetyCess: Math.floor(25000 + Math.random() * 90000),
            cfPerDay: Math.floor(Math.random() * 12000)
        };
    }),
    hmvPassenger: assamDistricts.map(function(district) {
        return {
            district: district,
            totalVehicles: Math.floor(30 + Math.random() * 150),
            mvTaxTransport: "Quarterly",
            category: "HMV (Passenger)",
            param: "32+1",
            mvTaxRealised: Math.floor(1000000 + Math.random() * 4000000),
            mvFeesRealised: Math.floor(100000 + Math.random() * 400000),
            roadSafetyCess: Math.floor(40000 + Math.random() * 120000),
            cfPerDay: Math.floor(Math.random() * 15000)
        };
    }),
    hmvGoods: assamDistricts.map(function(district) {
        return {
            district: district,
            totalVehicles: Math.floor(60 + Math.random() * 250),
            mvTaxTransport: "Quarterly",
            category: "HMV (Goods)",
            param: "12000kg",
            mvTaxRealised: Math.floor(1200000 + Math.random() * 5000000),
            mvFeesRealised: Math.floor(120000 + Math.random() * 500000),
            roadSafetyCess: Math.floor(50000 + Math.random() * 150000),
            cfPerDay: Math.floor(Math.random() * 18000)
        };
    })
}, "hmvGoods", assamDistricts.map(function(district) {
    return {
        district: district,
        totalVehicles: Math.floor(60 + Math.random() * 250),
        mvTaxTransport: "Quarterly",
        category: "HMV (Goods)",
        param: "12000kg",
        mvTaxRealised: Math.floor(1200000 + Math.random() * 5000000),
        mvFeesRealised: Math.floor(120000 + Math.random() * 500000),
        roadSafetyCess: Math.floor(50000 + Math.random() * 150000),
        cfPerDay: Math.floor(Math.random() * 18000)
    };
}));
var newReg4WheelerSplit = {
    fiveYear: assamDistricts.map(function(district) {
        return {
            district: district,
            totalVehicles: Math.floor(20 + Math.random() * 100),
            mvTaxNonTransport: "5-Year",
            category: "Four-wheeler",
            originalCost: "VARIES",
            mvTaxRealised: Math.floor(500000 + Math.random() * 1500000),
            mvFeesRealised: Math.floor(20000 + Math.random() * 80000),
            roadSafetyCess: Math.floor(10000 + Math.random() * 30000),
            cfPenalty: Math.floor(Math.random() * 5000)
        };
    }),
    fifteenYear: assamDistricts.map(function(district) {
        return {
            district: district,
            totalVehicles: Math.floor(30 + Math.random() * 200),
            mvTaxNonTransport: "Lifetime (15Y)",
            category: "Four-wheeler",
            originalCost: "VARIES",
            mvTaxRealised: Math.floor(1000000 + Math.random() * 3500000),
            mvFeesRealised: Math.floor(80000 + Math.random() * 220000),
            roadSafetyCess: Math.floor(20000 + Math.random() * 70000),
            cfPenalty: Math.floor(Math.random() * 15000)
        };
    })
};
var reassignmentRevenue = {
    twoWheeler: assamDistricts.map(function(district) {
        return {
            district: district,
            totalVehicles: Math.floor(50 + Math.random() * 200),
            mvTaxNonTransport: "Re-assign",
            category: "Two-wheeler",
            weight: "Below 65kg",
            mvTaxRealised: Math.floor(100000 + Math.random() * 500000),
            mvFeesRealised: Math.floor(10000 + Math.random() * 50000),
            roadSafetyCess: Math.floor(5000 + Math.random() * 15000),
            cfPenalty: Math.floor(Math.random() * 2000)
        };
    }),
    threeWheeler: assamDistricts.map(function(district) {
        return {
            district: district,
            totalVehicles: Math.floor(20 + Math.random() * 80),
            mvTaxNonTransport: "Re-assign",
            category: "Three-wheeler",
            weight: "N/A",
            mvTaxRealised: Math.floor(50000 + Math.random() * 200000),
            mvFeesRealised: Math.floor(5000 + Math.random() * 20000),
            roadSafetyCess: Math.floor(2000 + Math.random() * 8000),
            cfPenalty: Math.floor(Math.random() * 1000)
        };
    }),
    fourWheeler: assamDistricts.map(function(district) {
        return {
            district: district,
            totalVehicles: Math.floor(30 + Math.random() * 150),
            mvTaxNonTransport: "Re-assign",
            category: "Four-wheeler",
            originalCost: "VARIES",
            mvTaxRealised: Math.floor(300000 + Math.random() * 1000000),
            mvFeesRealised: Math.floor(30000 + Math.random() * 100000),
            roadSafetyCess: Math.floor(10000 + Math.random() * 30000),
            cfPenalty: Math.floor(Math.random() * 5000)
        };
    }),
    otherVehicles: assamDistricts.map(function(district) {
        return {
            district: district,
            totalVehicles: Math.floor(10 + Math.random() * 50),
            mvTaxNonTransport: "Re-assign",
            category: "LMV/MMV/HMV",
            otherParams: "N/A",
            mvTaxRealised: Math.floor(200000 + Math.random() * 800000),
            mvFeesRealised: Math.floor(20000 + Math.random() * 60000),
            roadSafetyCess: Math.floor(8000 + Math.random() * 20000),
            cfPenalty: Math.floor(Math.random() * 4000)
        };
    })
};
var greenTaxRevenue = {
    nonTransport: assamDistricts.map(function(district) {
        return {
            district: district,
            totalVehicles: Math.floor(100 + Math.random() * 600),
            period: "5 Years",
            category: "Non-Transport",
            mvFeesRealised: Math.floor(15000 + Math.random() * 60000),
            roadSafetyCess: Math.floor(5000 + Math.random() * 20000),
            cfPerDay: Math.floor(Math.random() * 3000),
            taxRealised: Math.floor(200000 + Math.random() * 800000)
        };
    }),
    transport: assamDistricts.map(function(district) {
        return {
            district: district,
            totalVehicles: Math.floor(150 + Math.random() * 800),
            period: "Annual",
            category: "Transport",
            mvFeesRealised: Math.floor(25000 + Math.random() * 90000),
            roadSafetyCess: Math.floor(8000 + Math.random() * 35000),
            cfPerDay: Math.floor(Math.random() * 5000),
            taxRealised: Math.floor(400000 + Math.random() * 1500000)
        };
    })
};
var renewalRevenue = {
    nonTransport: assamDistricts.map(function(district) {
        return {
            district: district,
            totalVehicles: Math.floor(80 + Math.random() * 400),
            mvTaxNonTransport: "10-Year (Post 5Y)",
            category: "Non-Transport",
            mvTaxRealised: Math.floor(600000 + Math.random() * 2000000),
            mvFeesRealised: Math.floor(60000 + Math.random() * 200000),
            roadSafetyCess: Math.floor(20000 + Math.random() * 60000),
            cfPenalty: Math.floor(Math.random() * 10000)
        };
    })
};
// Permit Data
var permitTypes = [
    'Contract Carriage',
    'Stage Carriage',
    'Goods Carriage',
    'National Permit',
    'AITP'
];
var vehicleClasses = [
    'Three Wheeler',
    'Four Wheeler',
    'MMV',
    'HMV'
];
var permitSubTypes = [
    'Temporary',
    'Periodic',
    'Special'
];
var permitFeesData = [];
var permitApplicationsData = [];
assamDistricts.forEach(function(district) {
    // Permit Fees Data - 1-2 entries per district
    var numEntries = Math.floor(Math.random() * 2) + 1;
    for(var i = 0; i < numEntries; i++){
        var pType = permitTypes[Math.floor(Math.random() * permitTypes.length)];
        var vClass = vehicleClasses[Math.floor(Math.random() * vehicleClasses.length)];
        var subType = permitSubTypes[Math.floor(Math.random() * permitSubTypes.length)];
        var period1 = Math.floor(Math.random() * 50) + 10;
        var period3 = Math.floor(Math.random() * 30) + 5;
        var period5 = Math.floor(Math.random() * 20) + 2;
        var totalVehicles = period1 + period3 + period5;
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
    var totalReceived = Math.floor(Math.random() * 500) + 100;
    var online = Math.floor(totalReceived * (0.6 + Math.random() * 0.2));
    var offline = totalReceived - online;
    var approved = Math.floor(totalReceived * (0.7 + Math.random() * 0.15));
    var scrutiny = Math.floor((totalReceived - approved) * 0.6);
    var approvalStage = totalReceived - approved - scrutiny;
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
var aetsData = assamDistricts.map(function(district) {
    var totalCentres = Math.floor(Math.random() * 15) + 3; // 3-17 centers
    var calibratedCentres = Math.floor(totalCentres * (0.7 + Math.random() * 0.25)); // 70-95% calibrated
    var feesDeposited = Math.floor(Math.random() * 300000) + 50000; // ₹50k-350k
    return {
        district: district,
        totalCentres: totalCentres,
        calibratedCentres: calibratedCentres,
        feesDeposited: feesDeposited
    };
});
var permitFeesData2026 = permitFeesData.map(function(d) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, d), {
        totalVehicles: Math.floor(d.totalVehicles * 1.15),
        period1Year: Math.floor(d.period1Year * 1.15),
        period3Year: Math.floor(d.period3Year * 1.15),
        period5Year: Math.floor(d.period5Year * 1.15),
        permitFeeRealised: Math.floor(d.permitFeeRealised * 1.15),
        lateFeeRealised: Math.floor(d.lateFeeRealised * 1.15)
    });
});
// PUCC (Pollution Under Control Certificate) Data
var vehicleCategories = [
    'Two Wheeler',
    'Three Wheeler',
    'Four Wheeler',
    'LMV',
    'MMV',
    'HMV'
];
var puccData = assamDistricts.flatMap(function(district) {
    return vehicleCategories.map(function(category) {
        var totalApplications = Math.floor(Math.random() * 500) + 100;
        var totalVehicles = Math.floor(totalApplications * (1.2 + Math.random() * 0.4)); // More vehicles than apps
        var freshWithoutLateFee = Math.floor(totalApplications * (0.4 + Math.random() * 0.2));
        var freshWithLateFee = Math.floor(totalApplications * (0.2 + Math.random() * 0.15));
        var grandTotal = freshWithoutLateFee + freshWithLateFee;
        var feesRealized = grandTotal * (Math.floor(Math.random() * 200) + 100);
        var lateFeeRealized = freshWithLateFee * 500;
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
var fitnessData = assamDistricts.map(function(district) {
    var totalTransportVehicles = Math.floor(Math.random() * 5000) + 1000;
    var certificatesApplied = Math.floor(totalTransportVehicles * (0.3 + Math.random() * 0.2)); // 30-50% apply
    var certificatesIssued = Math.floor(certificatesApplied * (0.85 + Math.random() * 0.1)); // 85-95% approved
    var certificatesRejected = Math.floor(certificatesApplied * (0.02 + Math.random() * 0.03)); // 2-5% rejected
    var certificatesImpounded = Math.floor(certificatesApplied * (0.01 + Math.random() * 0.02)); // 1-3% impounded
    var feesRealised = certificatesIssued * (Math.floor(Math.random() * 300) + 200); // ₹200-500 per certificate
    var lateFeeRealised = Math.floor(certificatesIssued * 0.2) * 50; // 20% pay late fee of ₹50
    var withoutFCCasesBooked = Math.floor(Math.random() * 100) + 20; // 20-120 cases
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
var offenceTypes = [
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
var enforcementData = assamDistricts.flatMap(function(district) {
    return offenceTypes.map(function(offence) {
        var casesBooked = Math.floor(Math.random() * 500) + 100;
        var cfImposed = casesBooked * (Math.floor(Math.random() * 1000) + 500); // ₹500-1500 per case
        var casesDisposed = Math.floor(casesBooked * (0.6 + Math.random() * 0.25)); // 60-85% disposed
        var cfRealised = Math.floor(cfImposed * (casesDisposed / casesBooked) * (0.8 + Math.random() * 0.15)); // 80-95% of imposed for disposed cases
        var casesPending = casesBooked - casesDisposed;
        var licensesSuspended = offence === 'Drunk Driving' || offence === 'Over Speeding' ? Math.floor(casesDisposed * (0.1 + Math.random() * 0.15)) // 10-25% for serious offences
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
var districtWiseRevenue = assamDistricts.map(function(district) {
    var factor = 0.5 + Math.random(); // Varied performance by district
    return {
        district: district,
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
var districtWiseRevenue2024 = assamDistricts.map(function(district) {
    var factor = 0.5 + Math.random(); // Varied performance by district
    var growth = 1 + (Math.random() * 0.2 - 0.2); // -20% to 0% growth
    return {
        district: district,
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
var districtWiseRevenue2023 = assamDistricts.map(function(district) {
    var factor = 0.5 + Math.random(); // Varied performance by district
    var growth = 1 + (Math.random() * 0.2 - 0.4); // -40% to -20% growth
    return {
        district: district,
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
var districtWiseRevenue2026 = assamDistricts.map(function(district) {
    var factor = 0.5 + Math.random(); // Varied performance by district
    var growth = 1 + (Math.random() * 0.4 - 0.1); // -10% to +30% growth
    return {
        district: district,
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
var districtWiseVehicles = assamDistricts.map(function(district) {
    var factor = 0.5 + Math.random();
    var twoWheeler = Math.floor(2500 * factor);
    var threeWheeler = Math.floor(600 * factor);
    var nonTransport = Math.floor(2800 * factor);
    var transport = Math.floor(1200 * factor);
    var total = nonTransport + transport;
    return {
        district: district,
        total: total,
        nonTransport: nonTransport,
        transport: transport,
        twoWheeler: twoWheeler,
        threeWheeler: threeWheeler
    };
});
var districtWiseVehicles2024 = assamDistricts.map(function(district) {
    var factor = 0.5 + Math.random();
    var growth = 1 + (Math.random() * 0.2 - 0.2); // -20% to 0% growth
    var twoWheeler = Math.floor(2500 * factor * growth);
    var threeWheeler = Math.floor(600 * factor * growth);
    var nonTransport = Math.floor(2800 * factor * growth);
    var transport = Math.floor(1200 * factor * growth);
    var total = nonTransport + transport;
    return {
        district: district,
        total: total,
        nonTransport: nonTransport,
        transport: transport,
        twoWheeler: twoWheeler,
        threeWheeler: threeWheeler
    };
});
var districtWiseVehicles2026 = assamDistricts.map(function(district) {
    var factor = 0.5 + Math.random();
    var growth = 1 + (Math.random() * 0.4 - 0.1); // -10% to +30% growth
    var twoWheeler = Math.floor(2500 * factor * growth);
    var threeWheeler = Math.floor(600 * factor * growth);
    var nonTransport = Math.floor(2800 * factor * growth);
    var transport = Math.floor(1200 * factor * growth);
    var total = nonTransport + transport;
    return {
        district: district,
        total: total,
        nonTransport: nonTransport,
        transport: transport,
        twoWheeler: twoWheeler,
        threeWheeler: threeWheeler
    };
});
var registrationApplicationsData = assamDistricts.map(function(district) {
    var totalReceived = Math.floor(Math.random() * 800) + 200;
    var dealerPoint = Math.floor(totalReceived * (0.85 + Math.random() * 0.1));
    var dtoOffice = totalReceived - dealerPoint;
    var approved = Math.floor(totalReceived * (0.75 + Math.random() * 0.2));
    var scrutiny = Math.floor((totalReceived - approved) * 0.6);
    var approvalStage = totalReceived - approved - scrutiny;
    return {
        district: district,
        totalReceived: totalReceived,
        dealerPoint: dealerPoint,
        dtoOffice: dtoOffice,
        scrutiny: scrutiny,
        approvalStage: approvalStage,
        approved: approved
    };
});
var registrationApplicationsData2026 = registrationApplicationsData.map(function(d) {
    return {
        district: d.district,
        totalReceived: Math.floor(d.totalReceived * 1.12),
        dealerPoint: Math.floor(d.dealerPoint * 1.12),
        dtoOffice: Math.floor(d.dtoOffice * 1.12),
        scrutiny: Math.floor(d.scrutiny * 1.12),
        approvalStage: Math.floor(d.approvalStage * 1.12),
        approved: Math.floor(d.approved * 1.12)
    };
});
var permitApplicationsData2024 = permitApplicationsData.map(function(row) {
    var g = 1 + (Math.random() * 0.2 - 0.2);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, row), {
        totalReceived: Math.floor(row.totalReceived * g),
        online: Math.floor(row.online * g),
        offline: Math.floor(row.offline * g),
        scrutiny: Math.floor(row.scrutiny * g),
        approvalStage: Math.floor(row.approvalStage * g),
        approved: Math.floor(row.approved * g)
    });
});
var permitApplicationsData2026 = permitApplicationsData.map(function(row) {
    var g = 1 + (Math.random() * 0.4 - 0.1);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, row), {
        totalReceived: Math.floor(row.totalReceived * g),
        online: Math.floor(row.online * g),
        offline: Math.floor(row.offline * g),
        scrutiny: Math.floor(row.scrutiny * g),
        approvalStage: Math.floor(row.approvalStage * g),
        approved: Math.floor(row.approved * g)
    });
});
var aetsData2024 = aetsData.map(function(r) {
    var g = 1 + (Math.random() * 0.2 - 0.2);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, r), {
        totalCentres: r.totalCentres,
        calibratedCentres: Math.floor(r.calibratedCentres * g),
        feesDeposited: Math.floor(r.feesDeposited * g)
    });
});
var aetsData2026 = aetsData.map(function(r) {
    var g = 1 + (Math.random() * 0.4 - 0.1);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, r), {
        totalCentres: r.totalCentres,
        calibratedCentres: Math.floor(r.calibratedCentres * g),
        feesDeposited: Math.floor(r.feesDeposited * g)
    });
});
var puccData2024 = puccData.map(function(r) {
    var g = 1 + (Math.random() * 0.2 - 0.2);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, r), {
        totalVehicles: Math.floor(r.totalVehicles * g),
        totalApplications: Math.floor(r.totalApplications * g),
        freshWithoutLateFee: Math.floor(r.freshWithoutLateFee * g),
        freshWithLateFee: Math.floor(r.freshWithLateFee * g),
        grandTotal: Math.floor(r.grandTotal * g),
        feesRealized: Math.floor(r.feesRealized * g),
        lateFeeRealized: Math.floor(r.lateFeeRealized * g)
    });
});
var puccData2026 = puccData.map(function(r) {
    var g = 1 + (Math.random() * 0.4 - 0.1);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, r), {
        totalVehicles: Math.floor(r.totalVehicles * g),
        totalApplications: Math.floor(r.totalApplications * g),
        freshWithoutLateFee: Math.floor(r.freshWithoutLateFee * g),
        freshWithLateFee: Math.floor(r.freshWithLateFee * g),
        grandTotal: Math.floor(r.grandTotal * g),
        feesRealized: Math.floor(r.feesRealized * g),
        lateFeeRealized: Math.floor(r.lateFeeRealized * g)
    });
});
var fitnessData2024 = fitnessData.map(function(r) {
    var g = 1 + (Math.random() * 0.2 - 0.2);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, r), {
        totalTransportVehicles: Math.floor(r.totalTransportVehicles * g),
        certificatesApplied: Math.floor(r.certificatesApplied * g),
        certificatesIssued: Math.floor(r.certificatesIssued * g),
        certificatesRejected: Math.floor(r.certificatesRejected * g),
        certificatesImpounded: Math.floor(r.certificatesImpounded * g),
        feesRealised: Math.floor(r.feesRealised * g),
        lateFeeRealised: Math.floor(r.lateFeeRealised * g),
        withoutFCCasesBooked: Math.floor(r.withoutFCCasesBooked * g)
    });
});
var fitnessData2026 = fitnessData.map(function(r) {
    var g = 1 + (Math.random() * 0.4 - 0.1);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, r), {
        totalTransportVehicles: Math.floor(r.totalTransportVehicles * g),
        certificatesApplied: Math.floor(r.certificatesApplied * g),
        certificatesIssued: Math.floor(r.certificatesIssued * g),
        certificatesRejected: Math.floor(r.certificatesRejected * g),
        certificatesImpounded: Math.floor(r.certificatesImpounded * g),
        feesRealised: Math.floor(r.feesRealised * g),
        lateFeeRealised: Math.floor(r.lateFeeRealised * g),
        withoutFCCasesBooked: Math.floor(r.withoutFCCasesBooked * g)
    });
});
var enforcementData2024 = enforcementData.map(function(r) {
    var g = 1 + (Math.random() * 0.2 - 0.2);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, r), {
        casesBooked: Math.floor(r.casesBooked * g),
        cfImposed: Math.floor(r.cfImposed * g),
        casesDisposed: Math.floor(r.casesDisposed * g),
        cfRealised: Math.floor(r.cfRealised * g),
        casesPending: Math.floor(r.casesPending * g),
        licensesSuspended: Math.floor(r.licensesSuspended * g)
    });
});
var enforcementData2026 = enforcementData.map(function(r) {
    var g = 1 + (Math.random() * 0.4 - 0.1);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, r), {
        casesBooked: Math.floor(r.casesBooked * g),
        cfImposed: Math.floor(r.cfImposed * g),
        casesDisposed: Math.floor(r.casesDisposed * g),
        cfRealised: Math.floor(r.cfRealised * g),
        casesPending: Math.floor(r.casesPending * g),
        licensesSuspended: Math.floor(r.licensesSuspended * g)
    });
});
var dealerAuditData = [
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
var serviceDeliveryData = {
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
var _obj;
const __TURBOPACK__default__export__ = (_obj = {
    vehicleRegistrations: vehicleRegistrations,
    vehicleRegistrations2026: vehicleRegistrations2026,
    trafficIncidents: trafficIncidents,
    publicTransportRidership: publicTransportRidership,
    congestionLevels: congestionLevels,
    fuelEfficiency: fuelEfficiency,
    roadMaintenance: roadMaintenance,
    revenueCollection: revenueCollection,
    revenueCollection2026: revenueCollection2026,
    newRegistrationRevenue: newRegistrationRevenue,
    newRegistrationTransportRevenue: newRegistrationTransportRevenue,
    newReg4WheelerSplit: newReg4WheelerSplit,
    reassignmentRevenue: reassignmentRevenue,
    greenTaxRevenue: greenTaxRevenue,
    renewalRevenue: renewalRevenue,
    permitFeesData: permitFeesData,
    permitFeesData2026: permitFeesData2026,
    permitApplicationsData: permitApplicationsData,
    permitApplicationsData2024: permitApplicationsData2024,
    permitApplicationsData2026: permitApplicationsData2026,
    aetsData: aetsData,
    aetsData2024: aetsData2024,
    aetsData2026: aetsData2026,
    puccData: puccData,
    puccData2024: puccData2024,
    puccData2026: puccData2026,
    fitnessData: fitnessData,
    fitnessData2024: fitnessData2024,
    fitnessData2026: fitnessData2026,
    enforcementData: enforcementData,
    enforcementData2024: enforcementData2024,
    enforcementData2026: enforcementData2026,
    districtWiseRevenue: districtWiseRevenue,
    districtWiseRevenue2023: districtWiseRevenue2023,
    districtWiseRevenue2024: districtWiseRevenue2024,
    districtWiseRevenue2026: districtWiseRevenue2026,
    districtWiseVehicles: districtWiseVehicles,
    districtWiseVehicles2024: districtWiseVehicles2024,
    districtWiseVehicles2026: districtWiseVehicles2026,
    registrationApplicationsData: registrationApplicationsData,
    registrationApplicationsData2026: registrationApplicationsData2026
}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "permitFeesData2026", permitFeesData2026), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "dealerAuditData", dealerAuditData), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "serviceDeliveryData", serviceDeliveryData), _obj);
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
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
"[project]/src/components/ServiceDelivery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/dummyData.js [app-client] (ecmascript)");
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
var ServiceDelivery = function() {
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isDarkMode = _useState[0], setIsDarkMode = _useState[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServiceDelivery.useEffect": function() {
            setIsDarkMode(document.documentElement.classList.contains('dark'));
        }
    }["ServiceDelivery.useEffect"], []);
    var _dummyData_serviceDeliveryData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].serviceDeliveryData, contactless = _dummyData_serviceDeliveryData.contactless, delivery = _dummyData_serviceDeliveryData.delivery, pendency = _dummyData_serviceDeliveryData.pendency;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold text-gray-900 dark:text-white",
                children: "Service Delivery"
            }, void 0, false, {
                fileName: "[project]/src/components/ServiceDelivery.js",
                lineNumber: 16,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-bold text-gray-900 dark:text-white uppercase mb-4",
                        children: "Contactless Service Details"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServiceDelivery.js",
                        lineNumber: 20,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl shadow p-6 border border-gray-100 dark:border-gray-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 bg-blue-100 text-blue-600 rounded-lg dark:bg-blue-900/50 dark:text-blue-400",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-6 h-6",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ServiceDelivery.js",
                                                    lineNumber: 25,
                                                    columnNumber: 112
                                                }, _this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ServiceDelivery.js",
                                                lineNumber: 25,
                                                columnNumber: 33
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceDelivery.js",
                                            lineNumber: 24,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-medium text-gray-500 dark:text-gray-400",
                                                    children: "E-Service (Contactless)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ServiceDelivery.js",
                                                    lineNumber: 28,
                                                    columnNumber: 33
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 text-3xl font-bold text-gray-900 dark:text-white",
                                                    children: contactless.eService.toLocaleString()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ServiceDelivery.js",
                                                    lineNumber: 29,
                                                    columnNumber: 33
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ServiceDelivery.js",
                                            lineNumber: 27,
                                            columnNumber: 29
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ServiceDelivery.js",
                                    lineNumber: 23,
                                    columnNumber: 25
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ServiceDelivery.js",
                                lineNumber: 22,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl shadow p-6 border border-gray-100 dark:border-gray-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 bg-indigo-100 text-indigo-600 rounded-lg dark:bg-indigo-900/50 dark:text-indigo-400",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-6 h-6",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ServiceDelivery.js",
                                                    lineNumber: 36,
                                                    columnNumber: 112
                                                }, _this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ServiceDelivery.js",
                                                lineNumber: 36,
                                                columnNumber: 33
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceDelivery.js",
                                            lineNumber: 35,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-medium text-gray-500 dark:text-gray-400",
                                                    children: "Physical Visits (DTO)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ServiceDelivery.js",
                                                    lineNumber: 39,
                                                    columnNumber: 33
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 text-3xl font-bold text-gray-900 dark:text-white",
                                                    children: contactless.physical.toLocaleString()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ServiceDelivery.js",
                                                    lineNumber: 40,
                                                    columnNumber: 33
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ServiceDelivery.js",
                                            lineNumber: 38,
                                            columnNumber: 29
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ServiceDelivery.js",
                                    lineNumber: 34,
                                    columnNumber: 25
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ServiceDelivery.js",
                                lineNumber: 33,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ServiceDelivery.js",
                        lineNumber: 21,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ServiceDelivery.js",
                lineNumber: 19,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6 py-4 border-b border-gray-200 dark:border-gray-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-bold text-gray-900 dark:text-white uppercase",
                                    children: "Service Delivery"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServiceDelivery.js",
                                    lineNumber: 53,
                                    columnNumber: 25
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ServiceDelivery.js",
                                lineNumber: 52,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "bg-gray-100 dark:bg-gray-800 text-xs font-bold uppercase text-gray-700 dark:text-gray-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 text-left",
                                                        children: "Service Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ServiceDelivery.js",
                                                        lineNumber: 59,
                                                        columnNumber: 37
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 text-right",
                                                        children: "Applications Handled"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ServiceDelivery.js",
                                                        lineNumber: 60,
                                                        columnNumber: 37
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 text-right",
                                                        children: "Avg. Processing Time"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ServiceDelivery.js",
                                                        lineNumber: 61,
                                                        columnNumber: 37
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ServiceDelivery.js",
                                                lineNumber: 58,
                                                columnNumber: 33
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceDelivery.js",
                                            lineNumber: 57,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: "divide-y divide-gray-200 dark:divide-gray-700",
                                            children: delivery.map(function(row, idx) {
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40',
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-3 text-sm font-medium text-gray-900 dark:text-white",
                                                            children: row.serviceName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ServiceDelivery.js",
                                                            lineNumber: 67,
                                                            columnNumber: 41
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-3 text-sm text-right text-gray-600 dark:text-gray-400 font-bold",
                                                            children: row.applicationsHandled.toLocaleString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ServiceDelivery.js",
                                                            lineNumber: 68,
                                                            columnNumber: 41
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-3 text-sm text-right text-green-600 dark:text-green-400",
                                                            children: row.avgProcessingTime
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ServiceDelivery.js",
                                                            lineNumber: 69,
                                                            columnNumber: 41
                                                        }, _this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/src/components/ServiceDelivery.js",
                                                    lineNumber: 66,
                                                    columnNumber: 37
                                                }, _this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceDelivery.js",
                                            lineNumber: 64,
                                            columnNumber: 29
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ServiceDelivery.js",
                                    lineNumber: 56,
                                    columnNumber: 25
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ServiceDelivery.js",
                                lineNumber: 55,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ServiceDelivery.js",
                        lineNumber: 51,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6 py-4 border-b border-gray-200 dark:border-gray-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-bold text-gray-900 dark:text-white uppercase",
                                    children: "Pendency Details"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServiceDelivery.js",
                                    lineNumber: 80,
                                    columnNumber: 25
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ServiceDelivery.js",
                                lineNumber: 79,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "bg-gray-100 dark:bg-gray-800 text-xs font-bold uppercase text-gray-700 dark:text-gray-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 text-left",
                                                        children: "Service Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ServiceDelivery.js",
                                                        lineNumber: 86,
                                                        columnNumber: 37
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 text-right",
                                                        children: "Pending Applications"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ServiceDelivery.js",
                                                        lineNumber: 87,
                                                        columnNumber: 37
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ServiceDelivery.js",
                                                lineNumber: 85,
                                                columnNumber: 33
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceDelivery.js",
                                            lineNumber: 84,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: "divide-y divide-gray-200 dark:divide-gray-700",
                                            children: pendency.map(function(row, idx) {
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40',
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-3 text-sm font-medium text-gray-900 dark:text-white",
                                                            children: row.serviceName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ServiceDelivery.js",
                                                            lineNumber: 93,
                                                            columnNumber: 41
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-3 text-sm text-right text-red-600 dark:text-red-400 font-bold",
                                                            children: row.pendingApplications.toLocaleString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ServiceDelivery.js",
                                                            lineNumber: 94,
                                                            columnNumber: 41
                                                        }, _this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/src/components/ServiceDelivery.js",
                                                    lineNumber: 92,
                                                    columnNumber: 37
                                                }, _this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceDelivery.js",
                                            lineNumber: 90,
                                            columnNumber: 29
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ServiceDelivery.js",
                                    lineNumber: 83,
                                    columnNumber: 25
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ServiceDelivery.js",
                                lineNumber: 82,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ServiceDelivery.js",
                        lineNumber: 78,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ServiceDelivery.js",
                lineNumber: 48,
                columnNumber: 13
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ServiceDelivery.js",
        lineNumber: 15,
        columnNumber: 9
    }, _this);
};
_s(ServiceDelivery, "bUs4CHDjU8AH+ZZYt8wlh4bHppI=");
_c = ServiceDelivery;
const __TURBOPACK__default__export__ = ServiceDelivery;
var _c;
__turbopack_context__.k.register(_c, "ServiceDelivery");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_define_property
]);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
;
}),
"[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_object_spread
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(target, key, source[key]);
        });
    }
    return target;
}
;
}),
"[project]/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_object_spread_props
]);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
;
}),
]);

//# sourceMappingURL=_bb102549._.js.map