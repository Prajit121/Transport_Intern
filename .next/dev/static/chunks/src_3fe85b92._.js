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
"[project]/src/components/DateFilter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
var DateFilter = function(param) {
    var onFilterChange = param.onFilterChange;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('2025-01-01'), 2), startDate = _useState[0], setStartDate = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('2025-12-31'), 2), endDate = _useState1[0], setEndDate = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all'), 2), activePreset = _useState2[0], setActivePreset = _useState2[1];
    var presets = [
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
    var handlePresetClick = function(presetId) {
        setActivePreset(presetId);
        // Logic to calculate dates based on preset
        // For simulation purposes with monthly dummy data, we map these to month ranges
        var start = '2025-01-01';
        var end = '2025-12-31';
        var now = new Date();
        var year = 2025; // Stick to 2025 for dummy data consistency
        switch(presetId){
            case 'today':
                start = "".concat(year, "-03-11"); // Mock today as Mar 11
                end = "".concat(year, "-03-11");
                break;
            case 'yesterday':
                start = "".concat(year, "-03-10");
                end = "".concat(year, "-03-10");
                break;
            case 'lastWeek':
                start = "".concat(year, "-03-04");
                end = "".concat(year, "-03-11");
                break;
            case 'lastMonth':
                start = "".concat(year, "-02-01");
                end = "".concat(year, "-02-28");
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
            start: start,
            end: end,
            preset: presetId
        });
    };
    var handleDateChange = function(type, value) {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row md:items-center justify-between gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2",
                    children: presets.map(function(preset) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: function() {
                                return handlePresetClick(preset.id);
                            },
                            className: "px-4 py-2 rounded-md text-sm font-medium transition-all ".concat(activePreset === preset.id ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'),
                            children: preset.name
                        }, preset.id, false, {
                            fileName: "[project]/src/components/DateFilter.js",
                            lineNumber: 73,
                            columnNumber: 25
                        }, _this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/DateFilter.js",
                    lineNumber: 71,
                    columnNumber: 17
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row sm:items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                    children: "From"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DateFilter.js",
                                    lineNumber: 88,
                                    columnNumber: 25
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    value: startDate,
                                    onChange: function(e) {
                                        return handleDateChange('start', e.target.value);
                                    },
                                    className: "bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-colors"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DateFilter.js",
                                    lineNumber: 89,
                                    columnNumber: 25
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DateFilter.js",
                            lineNumber: 87,
                            columnNumber: 21
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row sm:items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                    children: "To"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DateFilter.js",
                                    lineNumber: 97,
                                    columnNumber: 25
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    value: endDate,
                                    onChange: function(e) {
                                        return handleDateChange('end', e.target.value);
                                    },
                                    className: "bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-colors"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DateFilter.js",
                                    lineNumber: 98,
                                    columnNumber: 25
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DateFilter.js",
                            lineNumber: 96,
                            columnNumber: 21
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DateFilter.js",
                    lineNumber: 86,
                    columnNumber: 17
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DateFilter.js",
            lineNumber: 70,
            columnNumber: 13
        }, _this)
    }, void 0, false, {
        fileName: "[project]/src/components/DateFilter.js",
        lineNumber: 69,
        columnNumber: 9
    }, _this);
};
_s(DateFilter, "X9z2y4dJWSmWQODy5RRudUavW+U=");
_c = DateFilter;
const __TURBOPACK__default__export__ = DateFilter;
var _c;
__turbopack_context__.k.register(_c, "DateFilter");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ComparisonTable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
;
var ComparisonTable = function(param) {
    var title = param.title, isComparisonMode = param.isComparisonMode, setIsComparisonMode = param.setIsComparisonMode, primaryRange = param.primaryRange, setPrimaryRange = param.setPrimaryRange, compareRange = param.compareRange, setCompareRange = param.setCompareRange, compareCategory = param.compareCategory, setCompareCategory = param.setCompareCategory, categories = param.categories, children = param.children, comparisonChildren = param.comparisonChildren;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden mt-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-gray-900 dark:text-white uppercase tracking-tight flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-2 md:mt-0",
                        children: [
                            title,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-sm ml-0 sm:ml-4 font-normal normal-case pt-1 sm:pt-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        value: primaryRange.start,
                                        onChange: function(e) {
                                            return setPrimaryRange((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, primaryRange), {
                                                start: e.target.value
                                            }));
                                        },
                                        className: "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded px-2 py-1 focus:ring-blue-500 focus:border-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ComparisonTable.js",
                                        lineNumber: 23,
                                        columnNumber: 25
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-500",
                                        children: "to"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ComparisonTable.js",
                                        lineNumber: 24,
                                        columnNumber: 25
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        value: primaryRange.end,
                                        onChange: function(e) {
                                            return setPrimaryRange((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, primaryRange), {
                                                end: e.target.value
                                            }));
                                        },
                                        className: "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded px-2 py-1 focus:ring-blue-500 focus:border-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ComparisonTable.js",
                                        lineNumber: 25,
                                        columnNumber: 25
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ComparisonTable.js",
                                lineNumber: 22,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ComparisonTable.js",
                        lineNumber: 20,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        className: "sr-only",
                                        checked: isComparisonMode,
                                        onChange: function() {
                                            return setIsComparisonMode(!isComparisonMode);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ComparisonTable.js",
                                        lineNumber: 30,
                                        columnNumber: 25
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "block w-10 h-6 rounded-full transition-colors ".concat(isComparisonMode ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ComparisonTable.js",
                                        lineNumber: 31,
                                        columnNumber: 25
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ".concat(isComparisonMode ? 'transform translate-x-4' : '')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ComparisonTable.js",
                                        lineNumber: 32,
                                        columnNumber: 25
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ComparisonTable.js",
                                lineNumber: 29,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-3 text-sm font-semibold text-gray-700 dark:text-gray-300",
                                children: "Custom Comparison"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ComparisonTable.js",
                                lineNumber: 34,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ComparisonTable.js",
                        lineNumber: 28,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ComparisonTable.js",
                lineNumber: 19,
                columnNumber: 13
            }, _this),
            isComparisonMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4 bg-blue-50 dark:bg-blue-900/20 border-b border-gray-200 dark:border-gray-700 flex flex-wrap gap-6 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                                children: "Compare with timeline:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ComparisonTable.js",
                                lineNumber: 43,
                                columnNumber: 25
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-sm font-normal",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        value: compareRange.start,
                                        onChange: function(e) {
                                            return setCompareRange((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, compareRange), {
                                                start: e.target.value
                                            }));
                                        },
                                        className: "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded px-2 py-1 focus:ring-blue-500 focus:border-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ComparisonTable.js",
                                        lineNumber: 45,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-500",
                                        children: "to"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ComparisonTable.js",
                                        lineNumber: 46,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        value: compareRange.end,
                                        onChange: function(e) {
                                            return setCompareRange((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, compareRange), {
                                                end: e.target.value
                                            }));
                                        },
                                        className: "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded px-2 py-1 focus:ring-blue-500 focus:border-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ComparisonTable.js",
                                        lineNumber: 47,
                                        columnNumber: 29
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ComparisonTable.js",
                                lineNumber: 44,
                                columnNumber: 25
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ComparisonTable.js",
                        lineNumber: 42,
                        columnNumber: 21
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 border-l sm:pl-6 border-blue-200 dark:border-blue-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                                children: "Category:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ComparisonTable.js",
                                lineNumber: 51,
                                columnNumber: 25
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: compareCategory,
                                onChange: function(e) {
                                    return setCompareCategory(e.target.value);
                                },
                                className: "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 shadow-sm",
                                children: categories.map(function(cat) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: cat.id,
                                        children: cat.label
                                    }, cat.id, false, {
                                        fileName: "[project]/src/components/ComparisonTable.js",
                                        lineNumber: 58,
                                        columnNumber: 33
                                    }, _this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/ComparisonTable.js",
                                lineNumber: 52,
                                columnNumber: 25
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ComparisonTable.js",
                        lineNumber: 50,
                        columnNumber: 21
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ComparisonTable.js",
                lineNumber: 41,
                columnNumber: 17
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: !isComparisonMode ? children : comparisonChildren
            }, void 0, false, {
                fileName: "[project]/src/components/ComparisonTable.js",
                lineNumber: 65,
                columnNumber: 13
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ComparisonTable.js",
        lineNumber: 18,
        columnNumber: 9
    }, _this);
};
_c = ComparisonTable;
const __TURBOPACK__default__export__ = ComparisonTable;
var _c;
__turbopack_context__.k.register(_c, "ComparisonTable");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useComparison.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useComparison",
    ()=>useComparison
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
;
function useComparison(param) {
    var initialCategory = param.initialCategory, getYearDataOptions = param.getYearDataOptions, _param_defaultPrimaryYear = param.defaultPrimaryYear, defaultPrimaryYear = _param_defaultPrimaryYear === void 0 ? '2025' : _param_defaultPrimaryYear, _param_defaultCompareYear = param.defaultCompareYear, defaultCompareYear = _param_defaultCompareYear === void 0 ? '2026' : _param_defaultCompareYear;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isComparisonMode = _useState[0], setIsComparisonMode = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialCategory), 2), compareCategory = _useState1[0], setCompareCategory = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        start: "".concat(defaultPrimaryYear, "-01-01"),
        end: "".concat(defaultPrimaryYear, "-01-15")
    }), 2), primaryRange = _useState2[0], setPrimaryRange = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        start: "".concat(defaultCompareYear, "-06-01"),
        end: "".concat(defaultCompareYear, "-06-15")
    }), 2), compareRange = _useState3[0], setCompareRange = _useState3[1];
    var getDaysBetween = function(start, end) {
        if (!start || !end) return 365;
        var startD = new Date(start);
        var endD = new Date(end);
        if (isNaN(startD) || isNaN(endD)) return 365;
        var diff = endD - startD;
        return Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)) + 1);
    };
    var getYearData = function(year) {
        return getYearDataOptions[year] || getYearDataOptions[defaultPrimaryYear];
    };
    var primaryYear = primaryRange.start ? primaryRange.start.substring(0, 4) : defaultPrimaryYear;
    var primaryData = getYearData(primaryYear);
    var primaryDays = getDaysBetween(primaryRange.start, primaryRange.end);
    var primaryScale = primaryDays / 365;
    var compareYear = compareRange.start ? compareRange.start.substring(0, 4) : defaultCompareYear;
    var comparisonDataRaw = getYearData(compareYear) || getYearDataOptions[defaultCompareYear];
    var compareDays = getDaysBetween(compareRange.start, compareRange.end);
    var compareScale = compareDays / 365;
    return {
        isComparisonMode: isComparisonMode,
        setIsComparisonMode: setIsComparisonMode,
        compareCategory: compareCategory,
        setCompareCategory: setCompareCategory,
        primaryRange: primaryRange,
        setPrimaryRange: setPrimaryRange,
        compareRange: compareRange,
        setCompareRange: setCompareRange,
        primaryScale: primaryScale,
        compareScale: compareScale,
        primaryData: primaryData,
        comparisonDataRaw: comparisonDataRaw
    };
}
_s(useComparison, "qEms75pCwVyEuLEmMEVRM8MXSis=");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Enforcement.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/dummyData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DateFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DateFilter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ComparisonTable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ComparisonTable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useComparison$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useComparison.js [app-client] (ecmascript)");
;
;
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
var Enforcement = function() {
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isDarkMode = _useState[0], setIsDarkMode = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All'), 2), selectedDistrict = _useState1[0], setSelectedDistrict = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All'), 2), selectedOffenceType = _useState2[0], setSelectedOffenceType = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), 2), expandedDistricts = _useState3[0], setExpandedDistricts = _useState3[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Enforcement.useEffect": function() {
            setIsDarkMode(document.documentElement.classList.contains('dark'));
        }
    }["Enforcement.useEffect"], []);
    // Calculate totals
    var totals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Enforcement.useMemo[totals]": function() {
            return {
                totalCasesBooked: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].enforcementData.reduce({
                    "Enforcement.useMemo[totals]": function(sum, d) {
                        return sum + d.casesBooked;
                    }
                }["Enforcement.useMemo[totals]"], 0),
                totalCFImposed: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].enforcementData.reduce({
                    "Enforcement.useMemo[totals]": function(sum, d) {
                        return sum + d.cfImposed;
                    }
                }["Enforcement.useMemo[totals]"], 0),
                totalCasesDisposed: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].enforcementData.reduce({
                    "Enforcement.useMemo[totals]": function(sum, d) {
                        return sum + d.casesDisposed;
                    }
                }["Enforcement.useMemo[totals]"], 0),
                totalCFRealised: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].enforcementData.reduce({
                    "Enforcement.useMemo[totals]": function(sum, d) {
                        return sum + d.cfRealised;
                    }
                }["Enforcement.useMemo[totals]"], 0),
                totalCasesPending: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].enforcementData.reduce({
                    "Enforcement.useMemo[totals]": function(sum, d) {
                        return sum + d.casesPending;
                    }
                }["Enforcement.useMemo[totals]"], 0),
                totalLicensesSuspended: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].enforcementData.reduce({
                    "Enforcement.useMemo[totals]": function(sum, d) {
                        return sum + d.licensesSuspended;
                    }
                }["Enforcement.useMemo[totals]"], 0)
            };
        }
    }["Enforcement.useMemo[totals]"], []);
    // Get unique values for filters
    var districts = [
        'All'
    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].enforcementData.map(function(d) {
        return d.district;
    }))));
    var offenceTypes = [
        'All'
    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].enforcementData.map(function(d) {
        return d.offenceType;
    }))));
    var comparisonProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useComparison$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComparison"])({
        initialCategory: 'casesBooked',
        getYearDataOptions: {
            '2024': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].enforcementData || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].enforcementData2026,
            '2025': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].enforcementData,
            '2026': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].enforcementData2026
        }
    });
    var primaryScale = comparisonProps.primaryScale, compareScale = comparisonProps.compareScale, primaryData = comparisonProps.primaryData, comparisonDataRaw = comparisonProps.comparisonDataRaw, compareCategory = comparisonProps.compareCategory;
    var scaleRow = function(row, scaleFactor) {
        if (!row) return null;
        var scale = function(val) {
            return Math.floor(val * scaleFactor);
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, row), {
            casesBooked: scale(row.casesBooked),
            cfImposed: scale(row.cfImposed),
            casesDisposed: scale(row.casesDisposed),
            cfRealised: scale(row.cfRealised),
            casesPending: scale(row.casesPending),
            licensesSuspended: scale(row.licensesSuspended)
        });
    };
    var scaledPrimaryDataRaw = primaryData.map(function(row) {
        return scaleRow(row, primaryScale);
    });
    var scaledComparisonDataRaw = comparisonDataRaw.map(function(row) {
        return scaleRow(row, compareScale);
    });
    var toggleDistrict = function(district) {
        setExpandedDistricts(function(prev) {
            return prev.includes(district) ? prev.filter(function(d) {
                return d !== district;
            }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(prev).concat([
                district
            ]);
        });
    };
    var categories = [
        {
            id: 'casesBooked',
            label: 'Cases Booked'
        },
        {
            id: 'cfImposed',
            label: 'CF Imposed'
        },
        {
            id: 'casesDisposed',
            label: 'Cases Disposed'
        },
        {
            id: 'cfRealised',
            label: 'CF Realised'
        },
        {
            id: 'casesPending',
            label: 'Cases Pending'
        },
        {
            id: 'licensesSuspended',
            label: 'Licenses Suspended'
        }
    ];
    var formatCurrency = function(amount) {
        return '₹' + amount.toLocaleString('en-IN');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-gray-800 rounded-lg shadow p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-gray-900 dark:text-white mb-2",
                        children: "Enforcement Management"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Enforcement.js",
                        lineNumber: 93,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 dark:text-gray-400",
                        children: "Total offence case detection report and CF realization offence-wise & district-wise"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Enforcement.js",
                        lineNumber: 94,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Enforcement.js",
                lineNumber: 92,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DateFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onFilterChange: function() {}
            }, void 0, false, {
                fileName: "[project]/src/components/Enforcement.js",
                lineNumber: 97,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-lg shadow p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-gray-500 dark:text-gray-400",
                                children: "Total Cases Booked"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 102,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2",
                                children: totals.totalCasesBooked.toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 103,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                children: "All offence types"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 104,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Enforcement.js",
                        lineNumber: 101,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-lg shadow p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-gray-500 dark:text-gray-400",
                                children: "CF Imposed"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 107,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl font-bold text-orange-600 dark:text-orange-400 mt-2",
                                children: formatCurrency(totals.totalCFImposed)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 108,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                children: "Total compounding fees"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 109,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Enforcement.js",
                        lineNumber: 106,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-lg shadow p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-gray-500 dark:text-gray-400",
                                children: "CF Realised"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 112,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl font-bold text-green-600 dark:text-green-400 mt-2",
                                children: formatCurrency(totals.totalCFRealised)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 113,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                children: [
                                    (totals.totalCFRealised / totals.totalCFImposed * 100).toFixed(1),
                                    "% collection rate"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 114,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Enforcement.js",
                        lineNumber: 111,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-lg shadow p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-gray-500 dark:text-gray-400",
                                children: "Cases Disposed"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 119,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl font-bold text-purple-600 dark:text-purple-400 mt-2",
                                children: totals.totalCasesDisposed.toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 120,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                children: [
                                    (totals.totalCasesDisposed / totals.totalCasesBooked * 100).toFixed(1),
                                    "% disposal rate"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 121,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Enforcement.js",
                        lineNumber: 118,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-yellow-500 to-yellow-600 dark:from-yellow-600 dark:to-yellow-700 rounded-lg shadow p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-yellow-100",
                                children: "Cases Pending"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 126,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl font-bold text-white mt-2",
                                children: totals.totalCasesPending.toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 127,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-yellow-100 mt-1",
                                children: "Yet to be disposed"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 128,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Enforcement.js",
                        lineNumber: 125,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-red-500 to-red-600 dark:from-red-600 dark:to-red-700 rounded-lg shadow p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-red-100",
                                children: "Licenses Suspended"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 131,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl font-bold text-white mt-2",
                                children: totals.totalLicensesSuspended.toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 132,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-red-100 mt-1",
                                children: "Driving licenses"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 133,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Enforcement.js",
                        lineNumber: 130,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Enforcement.js",
                lineNumber: 100,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-gray-800 rounded-lg shadow p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-3 text-gray-900 dark:text-white",
                        children: "Filters"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Enforcement.js",
                        lineNumber: 139,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "District"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Enforcement.js",
                                        lineNumber: 142,
                                        columnNumber: 25
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: selectedDistrict,
                                        onChange: function(e) {
                                            return setSelectedDistrict(e.target.value);
                                        },
                                        className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500",
                                        children: districts.map(function(district) {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: district,
                                                children: district
                                            }, district, false, {
                                                fileName: "[project]/src/components/Enforcement.js",
                                                lineNumber: 151,
                                                columnNumber: 33
                                            }, _this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Enforcement.js",
                                        lineNumber: 145,
                                        columnNumber: 25
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 141,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Offence Type (within expanded districts)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Enforcement.js",
                                        lineNumber: 156,
                                        columnNumber: 25
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: selectedOffenceType,
                                        onChange: function(e) {
                                            return setSelectedOffenceType(e.target.value);
                                        },
                                        className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500",
                                        children: offenceTypes.map(function(type) {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: type,
                                                children: type
                                            }, type, false, {
                                                fileName: "[project]/src/components/Enforcement.js",
                                                lineNumber: 165,
                                                columnNumber: 33
                                            }, _this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Enforcement.js",
                                        lineNumber: 159,
                                        columnNumber: 25
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 155,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Enforcement.js",
                        lineNumber: 140,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Enforcement.js",
                lineNumber: 138,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ComparisonTable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Offence Case Detection & CF Realization Report",
                isComparisonMode: comparisonProps.isComparisonMode,
                setIsComparisonMode: comparisonProps.setIsComparisonMode,
                primaryRange: comparisonProps.primaryRange,
                setPrimaryRange: comparisonProps.setPrimaryRange,
                compareRange: comparisonProps.compareRange,
                setCompareRange: comparisonProps.setCompareRange,
                compareCategory: comparisonProps.compareCategory,
                setCompareCategory: comparisonProps.setCompareCategory,
                categories: categories,
                comparisonChildren: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-gray-100 dark:bg-gray-800 text-xs font-bold uppercase text-gray-700 dark:text-gray-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left border-b border-gray-200 dark:border-gray-700",
                                        children: "District"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Enforcement.js",
                                        lineNumber: 188,
                                        columnNumber: 33
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-right border-b border-gray-200 dark:border-gray-700",
                                        children: "Selected Period"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Enforcement.js",
                                        lineNumber: 189,
                                        columnNumber: 33
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-right border-b border-gray-200 dark:border-gray-700",
                                        children: "Comparison Period"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Enforcement.js",
                                        lineNumber: 190,
                                        columnNumber: 33
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-right border-b border-gray-200 dark:border-gray-700",
                                        children: "Variance"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Enforcement.js",
                                        lineNumber: 191,
                                        columnNumber: 33
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-right border-b border-gray-200 dark:border-gray-700",
                                        children: "Trend"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Enforcement.js",
                                        lineNumber: 192,
                                        columnNumber: 33
                                    }, void 0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 187,
                                columnNumber: 29
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Enforcement.js",
                            lineNumber: 186,
                            columnNumber: 25
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-gray-200 dark:divide-gray-700",
                            children: (selectedDistrict === 'All' ? districts.slice(1) : districts.filter(function(d) {
                                return d === selectedDistrict;
                            })).map(function(district, idx) {
                                var pData = scaledPrimaryDataRaw.filter(function(d) {
                                    return d.district === district;
                                });
                                var cData = scaledComparisonDataRaw.filter(function(d) {
                                    return d.district === district;
                                });
                                var valPrimary = pData.reduce(function(sum, r) {
                                    return sum + (r[compareCategory] || 0);
                                }, 0);
                                var valComparison = cData.reduce(function(sum, r) {
                                    return sum + (r[compareCategory] || 0);
                                }, 0);
                                var variance = valComparison - valPrimary;
                                var variancePct = valPrimary === 0 ? 0 : variance / valPrimary * 100;
                                var isPositive = variance > 0;
                                var isNegative = variance < 0;
                                var isCurrency = [
                                    'cfImposed',
                                    'cfRealised'
                                ].includes(compareCategory);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/40',
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-sm font-medium text-gray-900 dark:text-white",
                                            children: district
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Enforcement.js",
                                            lineNumber: 213,
                                            columnNumber: 41
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-right text-sm text-gray-600 dark:text-gray-400",
                                            children: isCurrency ? formatCurrency(valPrimary) : valPrimary.toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Enforcement.js",
                                            lineNumber: 216,
                                            columnNumber: 41
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-right text-sm text-gray-900 dark:text-white font-semibold",
                                            children: isCurrency ? formatCurrency(valComparison) : valComparison.toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Enforcement.js",
                                            lineNumber: 219,
                                            columnNumber: 41
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-right text-sm font-bold ".concat(isPositive ? 'text-green-600 dark:text-green-400' : isNegative ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'),
                                            children: [
                                                isPositive ? '+' : '',
                                                isCurrency ? formatCurrency(variance) : variance.toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Enforcement.js",
                                            lineNumber: 222,
                                            columnNumber: 41
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-right text-sm font-bold ".concat(isPositive ? 'text-green-600 dark:text-green-400' : isNegative ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-end gap-1",
                                                children: [
                                                    isPositive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: "2",
                                                            d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Enforcement.js",
                                                            lineNumber: 227,
                                                            columnNumber: 143
                                                        }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Enforcement.js",
                                                        lineNumber: 227,
                                                        columnNumber: 64
                                                    }, void 0),
                                                    isNegative && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: "2",
                                                            d: "M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Enforcement.js",
                                                            lineNumber: 228,
                                                            columnNumber: 143
                                                        }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Enforcement.js",
                                                        lineNumber: 228,
                                                        columnNumber: 64
                                                    }, void 0),
                                                    isPositive ? '+' : '',
                                                    variancePct.toFixed(1),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Enforcement.js",
                                                lineNumber: 226,
                                                columnNumber: 45
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Enforcement.js",
                                            lineNumber: 225,
                                            columnNumber: 41
                                        }, void 0)
                                    ]
                                }, district, true, {
                                    fileName: "[project]/src/components/Enforcement.js",
                                    lineNumber: 212,
                                    columnNumber: 37
                                }, void 0);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/Enforcement.js",
                            lineNumber: 195,
                            columnNumber: 25
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Enforcement.js",
                    lineNumber: 185,
                    columnNumber: 21
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-gray-50 dark:bg-gray-700",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                        children: "District / Offence Type"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Enforcement.js",
                                        lineNumber: 242,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                        children: "Cases Booked"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Enforcement.js",
                                        lineNumber: 245,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                        children: "CF Imposed"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Enforcement.js",
                                        lineNumber: 248,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                        children: "Cases Disposed"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Enforcement.js",
                                        lineNumber: 251,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                        children: "CF Realised"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Enforcement.js",
                                        lineNumber: 254,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                        children: "Cases Pending"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Enforcement.js",
                                        lineNumber: 257,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                        children: "Licenses Suspended"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Enforcement.js",
                                        lineNumber: 260,
                                        columnNumber: 29
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 241,
                                columnNumber: 25
                            }, _this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Enforcement.js",
                            lineNumber: 240,
                            columnNumber: 21
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700",
                            children: (selectedDistrict === 'All' ? districts.slice(1) : districts.filter(function(d) {
                                return d === selectedDistrict;
                            })).map(function(district) {
                                var districtData = scaledPrimaryDataRaw.filter(function(d) {
                                    return d.district === district;
                                });
                                var isExpanded = expandedDistricts.includes(district);
                                // Calculate district totals
                                var districtTotals = districtData.reduce(function(acc, row) {
                                    return {
                                        casesBooked: acc.casesBooked + row.casesBooked,
                                        cfImposed: acc.cfImposed + row.cfImposed,
                                        casesDisposed: acc.casesDisposed + row.casesDisposed,
                                        cfRealised: acc.cfRealised + row.cfRealised,
                                        casesPending: acc.casesPending + row.casesPending,
                                        licensesSuspended: acc.licensesSuspended + row.licensesSuspended
                                    };
                                }, {
                                    casesBooked: 0,
                                    cfImposed: 0,
                                    casesDisposed: 0,
                                    cfRealised: 0,
                                    casesPending: 0,
                                    licensesSuspended: 0
                                });
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            onClick: function() {
                                                return toggleDistrict(district);
                                            },
                                            className: "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-white",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-4 h-4 mr-2 transition-transform ".concat(isExpanded ? 'rotate-90' : ''),
                                                                fill: "currentColor",
                                                                viewBox: "0 0 20 20",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fillRule: "evenodd",
                                                                    d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                                                                    clipRule: "evenodd"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Enforcement.js",
                                                                    lineNumber: 301,
                                                                    columnNumber: 53
                                                                }, _this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Enforcement.js",
                                                                lineNumber: 296,
                                                                columnNumber: 49
                                                            }, _this),
                                                            district
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Enforcement.js",
                                                        lineNumber: 295,
                                                        columnNumber: 45
                                                    }, _this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Enforcement.js",
                                                    lineNumber: 294,
                                                    columnNumber: 41
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-blue-600 dark:text-blue-400",
                                                    children: districtTotals.casesBooked.toLocaleString()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Enforcement.js",
                                                    lineNumber: 306,
                                                    columnNumber: 41
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-orange-600 dark:text-orange-400",
                                                    children: formatCurrency(districtTotals.cfImposed)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Enforcement.js",
                                                    lineNumber: 309,
                                                    columnNumber: 41
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-purple-600 dark:text-purple-400",
                                                    children: districtTotals.casesDisposed.toLocaleString()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Enforcement.js",
                                                    lineNumber: 312,
                                                    columnNumber: 41
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-green-600 dark:text-green-400",
                                                    children: formatCurrency(districtTotals.cfRealised)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Enforcement.js",
                                                    lineNumber: 315,
                                                    columnNumber: 41
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-yellow-600 dark:text-yellow-400",
                                                    children: districtTotals.casesPending.toLocaleString()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Enforcement.js",
                                                    lineNumber: 318,
                                                    columnNumber: 41
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-red-600 dark:text-red-400",
                                                    children: districtTotals.licensesSuspended.toLocaleString()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Enforcement.js",
                                                    lineNumber: 321,
                                                    columnNumber: 41
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Enforcement.js",
                                            lineNumber: 290,
                                            columnNumber: 37
                                        }, _this),
                                        isExpanded && districtData.filter(function(row) {
                                            return selectedOffenceType === 'All' || row.offenceType === selectedOffenceType;
                                        }).map(function(row, idx) {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "hover:bg-gray-50 dark:hover:bg-gray-700/50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-3 pl-12 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-500 dark:text-gray-400",
                                                                children: "↳"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Enforcement.js",
                                                                lineNumber: 332,
                                                                columnNumber: 53
                                                            }, _this),
                                                            " ",
                                                            row.offenceType
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Enforcement.js",
                                                        lineNumber: 331,
                                                        columnNumber: 49
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-3 whitespace-nowrap text-sm text-right text-blue-600 dark:text-blue-400",
                                                        children: row.casesBooked
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Enforcement.js",
                                                        lineNumber: 334,
                                                        columnNumber: 49
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-3 whitespace-nowrap text-sm text-right text-orange-600 dark:text-orange-400",
                                                        children: formatCurrency(row.cfImposed)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Enforcement.js",
                                                        lineNumber: 337,
                                                        columnNumber: 49
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-3 whitespace-nowrap text-sm text-right text-purple-600 dark:text-purple-400",
                                                        children: row.casesDisposed
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Enforcement.js",
                                                        lineNumber: 340,
                                                        columnNumber: 49
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-3 whitespace-nowrap text-sm text-right text-green-600 dark:text-green-400",
                                                        children: formatCurrency(row.cfRealised)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Enforcement.js",
                                                        lineNumber: 343,
                                                        columnNumber: 49
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-3 whitespace-nowrap text-sm text-right text-yellow-600 dark:text-yellow-400",
                                                        children: row.casesPending
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Enforcement.js",
                                                        lineNumber: 346,
                                                        columnNumber: 49
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-3 whitespace-nowrap text-sm text-right text-red-600 dark:text-red-400",
                                                        children: row.licensesSuspended
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Enforcement.js",
                                                        lineNumber: 349,
                                                        columnNumber: 49
                                                    }, _this)
                                                ]
                                            }, "".concat(district, "-").concat(row.offenceType), true, {
                                                fileName: "[project]/src/components/Enforcement.js",
                                                lineNumber: 330,
                                                columnNumber: 45
                                            }, _this);
                                        })
                                    ]
                                }, district, true, {
                                    fileName: "[project]/src/components/Enforcement.js",
                                    lineNumber: 288,
                                    columnNumber: 33
                                }, _this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/Enforcement.js",
                            lineNumber: 265,
                            columnNumber: 21
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Enforcement.js",
                    lineNumber: 239,
                    columnNumber: 17
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/components/Enforcement.js",
                lineNumber: 173,
                columnNumber: 13
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Enforcement.js",
        lineNumber: 90,
        columnNumber: 9
    }, _this);
};
_s(Enforcement, "y23XUa25kwic/gGLDHqtKFNDCws=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useComparison$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComparison"]
    ];
});
_c = Enforcement;
const __TURBOPACK__default__export__ = Enforcement;
var _c;
__turbopack_context__.k.register(_c, "Enforcement");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_3fe85b92._.js.map