(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/dummyData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aetsData",
    ()=>aetsData,
    "congestionLevels",
    ()=>congestionLevels,
    "default",
    ()=>__TURBOPACK__default__export__,
    "enforcementData",
    ()=>enforcementData,
    "fitnessData",
    ()=>fitnessData,
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
    "permitFeesData",
    ()=>permitFeesData,
    "publicTransportRidership",
    ()=>publicTransportRidership,
    "puccData",
    ()=>puccData,
    "reassignmentRevenue",
    ()=>reassignmentRevenue,
    "renewalRevenue",
    ()=>renewalRevenue,
    "revenueCollection",
    ()=>revenueCollection,
    "roadMaintenance",
    ()=>roadMaintenance,
    "trafficIncidents",
    ()=>trafficIncidents,
    "vehicleRegistrations",
    ()=>vehicleRegistrations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
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
    // Seasonal variations: higher in spring/summer, lower in winter
    var seasonalFactor = index < 2 || index > 9 ? 0.85 : index < 5 ? 1.15 : 1.0;
    return {
        month: month,
        cars: Math.floor((1200 + Math.random() * 300) * seasonalFactor),
        bikes: Math.floor((800 + Math.random() * 200) * seasonalFactor * 1.2),
        trucks: Math.floor((200 + Math.random() * 100) * seasonalFactor * 0.9)
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
        hsrp: Math.floor((52000 + Math.random() * 12000) * revenueFactor)
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
        var freshWithoutLateFee = Math.floor(totalApplications * (0.4 + Math.random() * 0.2));
        var freshWithLateFee = Math.floor(totalApplications * (0.2 + Math.random() * 0.15));
        var grandTotal = freshWithoutLateFee + freshWithLateFee;
        var feesRealized = grandTotal * (Math.floor(Math.random() * 200) + 100); // ₹100-300 per PUCC
        var lateFeeRealized = freshWithLateFee * 500; // ₹500 late fee per certificate
        return {
            district: district,
            vehicleCategory: category,
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
const __TURBOPACK__default__export__ = {
    vehicleRegistrations: vehicleRegistrations,
    trafficIncidents: trafficIncidents,
    publicTransportRidership: publicTransportRidership,
    congestionLevels: congestionLevels,
    fuelEfficiency: fuelEfficiency,
    roadMaintenance: roadMaintenance,
    revenueCollection: revenueCollection,
    newRegistrationRevenue: newRegistrationRevenue,
    newRegistrationTransportRevenue: newRegistrationTransportRevenue,
    newReg4WheelerSplit: newReg4WheelerSplit,
    reassignmentRevenue: reassignmentRevenue,
    greenTaxRevenue: greenTaxRevenue,
    renewalRevenue: renewalRevenue,
    permitFeesData: permitFeesData,
    permitApplicationsData: permitApplicationsData,
    aetsData: aetsData,
    puccData: puccData,
    fitnessData: fitnessData,
    enforcementData: enforcementData
};
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
"[project]/src/components/Enforcement.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/dummyData.js [app-client] (ecmascript)");
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    var toggleDistrict = function(district) {
        setExpandedDistricts(function(prev) {
            return prev.includes(district) ? prev.filter(function(d) {
                return d !== district;
            }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(prev).concat([
                district
            ]);
        });
    };
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
                        lineNumber: 47,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 dark:text-gray-400",
                        children: "Total offence case detection report and CF realization offence-wise & district-wise"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Enforcement.js",
                        lineNumber: 48,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Enforcement.js",
                lineNumber: 46,
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
                                lineNumber: 54,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2",
                                children: totals.totalCasesBooked.toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 55,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                children: "All offence types"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 56,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Enforcement.js",
                        lineNumber: 53,
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
                                lineNumber: 59,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl font-bold text-orange-600 dark:text-orange-400 mt-2",
                                children: formatCurrency(totals.totalCFImposed)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 60,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                children: "Total compounding fees"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 61,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Enforcement.js",
                        lineNumber: 58,
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
                                lineNumber: 64,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl font-bold text-green-600 dark:text-green-400 mt-2",
                                children: formatCurrency(totals.totalCFRealised)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 65,
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
                                lineNumber: 66,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Enforcement.js",
                        lineNumber: 63,
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
                                lineNumber: 71,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl font-bold text-purple-600 dark:text-purple-400 mt-2",
                                children: totals.totalCasesDisposed.toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 72,
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
                                lineNumber: 73,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Enforcement.js",
                        lineNumber: 70,
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
                                lineNumber: 78,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl font-bold text-white mt-2",
                                children: totals.totalCasesPending.toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 79,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-yellow-100 mt-1",
                                children: "Yet to be disposed"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 80,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Enforcement.js",
                        lineNumber: 77,
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
                                lineNumber: 83,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl font-bold text-white mt-2",
                                children: totals.totalLicensesSuspended.toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 84,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-red-100 mt-1",
                                children: "Driving licenses"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 85,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Enforcement.js",
                        lineNumber: 82,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Enforcement.js",
                lineNumber: 52,
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
                        lineNumber: 91,
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
                                        lineNumber: 94,
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
                                                lineNumber: 103,
                                                columnNumber: 33
                                            }, _this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Enforcement.js",
                                        lineNumber: 97,
                                        columnNumber: 25
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 93,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Offence Type (within expanded districts)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Enforcement.js",
                                        lineNumber: 108,
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
                                                lineNumber: 117,
                                                columnNumber: 33
                                            }, _this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Enforcement.js",
                                        lineNumber: 111,
                                        columnNumber: 25
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 107,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Enforcement.js",
                        lineNumber: 92,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Enforcement.js",
                lineNumber: 90,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-4 border-b border-gray-200 dark:border-gray-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold text-gray-900 dark:text-white",
                                children: "Offence Case Detection & CF Realization Report"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 127,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 dark:text-gray-400 mt-1",
                                children: "District-wise grouped view - Click district rows to expand/collapse"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Enforcement.js",
                                lineNumber: 128,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Enforcement.js",
                        lineNumber: 126,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
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
                                                lineNumber: 136,
                                                columnNumber: 33
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                                children: "Cases Booked"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Enforcement.js",
                                                lineNumber: 139,
                                                columnNumber: 33
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                                children: "CF Imposed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Enforcement.js",
                                                lineNumber: 142,
                                                columnNumber: 33
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                                children: "Cases Disposed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Enforcement.js",
                                                lineNumber: 145,
                                                columnNumber: 33
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                                children: "CF Realised"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Enforcement.js",
                                                lineNumber: 148,
                                                columnNumber: 33
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                                children: "Cases Pending"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Enforcement.js",
                                                lineNumber: 151,
                                                columnNumber: 33
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                                children: "Licenses Suspended"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Enforcement.js",
                                                lineNumber: 154,
                                                columnNumber: 33
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Enforcement.js",
                                        lineNumber: 135,
                                        columnNumber: 29
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Enforcement.js",
                                    lineNumber: 134,
                                    columnNumber: 25
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700",
                                    children: (selectedDistrict === 'All' ? districts.slice(1) : districts.filter(function(d) {
                                        return d === selectedDistrict;
                                    })).map(function(district) {
                                        var districtData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].enforcementData.filter(function(d) {
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
                                                                            lineNumber: 195,
                                                                            columnNumber: 57
                                                                        }, _this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Enforcement.js",
                                                                        lineNumber: 190,
                                                                        columnNumber: 53
                                                                    }, _this),
                                                                    district
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Enforcement.js",
                                                                lineNumber: 189,
                                                                columnNumber: 49
                                                            }, _this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Enforcement.js",
                                                            lineNumber: 188,
                                                            columnNumber: 45
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-blue-600 dark:text-blue-400",
                                                            children: districtTotals.casesBooked.toLocaleString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Enforcement.js",
                                                            lineNumber: 200,
                                                            columnNumber: 45
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-orange-600 dark:text-orange-400",
                                                            children: formatCurrency(districtTotals.cfImposed)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Enforcement.js",
                                                            lineNumber: 203,
                                                            columnNumber: 45
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-purple-600 dark:text-purple-400",
                                                            children: districtTotals.casesDisposed.toLocaleString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Enforcement.js",
                                                            lineNumber: 206,
                                                            columnNumber: 45
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-green-600 dark:text-green-400",
                                                            children: formatCurrency(districtTotals.cfRealised)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Enforcement.js",
                                                            lineNumber: 209,
                                                            columnNumber: 45
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-yellow-600 dark:text-yellow-400",
                                                            children: districtTotals.casesPending.toLocaleString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Enforcement.js",
                                                            lineNumber: 212,
                                                            columnNumber: 45
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-red-600 dark:text-red-400",
                                                            children: districtTotals.licensesSuspended.toLocaleString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Enforcement.js",
                                                            lineNumber: 215,
                                                            columnNumber: 45
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Enforcement.js",
                                                    lineNumber: 184,
                                                    columnNumber: 41
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
                                                                        lineNumber: 226,
                                                                        columnNumber: 57
                                                                    }, _this),
                                                                    " ",
                                                                    row.offenceType
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Enforcement.js",
                                                                lineNumber: 225,
                                                                columnNumber: 53
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-3 whitespace-nowrap text-sm text-right text-blue-600 dark:text-blue-400",
                                                                children: row.casesBooked
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Enforcement.js",
                                                                lineNumber: 228,
                                                                columnNumber: 53
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-3 whitespace-nowrap text-sm text-right text-orange-600 dark:text-orange-400",
                                                                children: formatCurrency(row.cfImposed)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Enforcement.js",
                                                                lineNumber: 231,
                                                                columnNumber: 53
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-3 whitespace-nowrap text-sm text-right text-purple-600 dark:text-purple-400",
                                                                children: row.casesDisposed
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Enforcement.js",
                                                                lineNumber: 234,
                                                                columnNumber: 53
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-3 whitespace-nowrap text-sm text-right text-green-600 dark:text-green-400",
                                                                children: formatCurrency(row.cfRealised)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Enforcement.js",
                                                                lineNumber: 237,
                                                                columnNumber: 53
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-3 whitespace-nowrap text-sm text-right text-yellow-600 dark:text-yellow-400",
                                                                children: row.casesPending
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Enforcement.js",
                                                                lineNumber: 240,
                                                                columnNumber: 53
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-3 whitespace-nowrap text-sm text-right text-red-600 dark:text-red-400",
                                                                children: row.licensesSuspended
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Enforcement.js",
                                                                lineNumber: 243,
                                                                columnNumber: 53
                                                            }, _this)
                                                        ]
                                                    }, "".concat(district, "-").concat(row.offenceType), true, {
                                                        fileName: "[project]/src/components/Enforcement.js",
                                                        lineNumber: 224,
                                                        columnNumber: 49
                                                    }, _this);
                                                })
                                            ]
                                        }, district, true, {
                                            fileName: "[project]/src/components/Enforcement.js",
                                            lineNumber: 182,
                                            columnNumber: 37
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
                            lineNumber: 133,
                            columnNumber: 21
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Enforcement.js",
                        lineNumber: 132,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Enforcement.js",
                lineNumber: 125,
                columnNumber: 13
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Enforcement.js",
        lineNumber: 44,
        columnNumber: 9
    }, _this);
};
_s(Enforcement, "1geK4AMfMLjPDPq/ppUve8e5Y6Q=");
_c = Enforcement;
const __TURBOPACK__default__export__ = Enforcement;
var _c;
__turbopack_context__.k.register(_c, "Enforcement");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/@swc/helpers/esm/_array_without_holes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_array_without_holes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_like_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_array_like_to_array.js [app-client] (ecmascript)");
;
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_like_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr);
}
;
}),
"[project]/node_modules/@swc/helpers/esm/_iterable_to_array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_iterable_to_array
]);
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) {
        return Array.from(iter);
    }
}
;
}),
"[project]/node_modules/@swc/helpers/esm/_non_iterable_spread.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_non_iterable_spread
]);
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;
}),
"[project]/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_to_consumable_array
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_without_holes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_array_without_holes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_iterable_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_non_iterable_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_non_iterable_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_unsupported_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_unsupported_iterable_to_array.js [app-client] (ecmascript)");
;
;
;
;
function _to_consumable_array(arr) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_without_holes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_unsupported_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_non_iterable_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])();
}
;
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
]);

//# sourceMappingURL=_4ccc083b._.js.map