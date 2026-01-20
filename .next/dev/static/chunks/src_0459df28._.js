(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/dummyData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "congestionLevels",
    ()=>congestionLevels,
    "default",
    ()=>__TURBOPACK__default__export__,
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
    "publicTransportRidership",
    ()=>publicTransportRidership,
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
    renewalRevenue: renewalRevenue
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
"[project]/src/components/Revenue.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/dummyData.js [app-client] (ecmascript)");
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
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LineElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PointElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
var Revenue = function() {
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].revenueCollection.map({
        "Revenue._useState.useState": function(d) {
            return d.month;
        }
    }["Revenue._useState.useState"])), 2), selectedMonths = _useState[0], setSelectedMonths = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isDarkMode = _useState1[0], setIsDarkMode = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('twoWheeler'), 2), activeTab = _useState2[0], setActiveTab = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('twoWheeler'), 2), activeTransportTab = _useState3[0], setActiveTransportTab = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('new'), 2), viewMode = _useState4[0], setViewMode = _useState4[1];
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all'), 2), taxTenure = _useState5[0], setTaxTenure = _useState5[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Revenue.useEffect": function() {
            setIsDarkMode(document.documentElement.classList.contains('dark'));
        }
    }["Revenue.useEffect"], []);
    var months = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].revenueCollection.map(function(d) {
        return d.month;
    });
    var filteredData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].revenueCollection.filter(function(d) {
        return selectedMonths.includes(d.month);
    });
    // Calculate total revenue by category
    var stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Revenue.useMemo[stats]": function() {
            var totalMVTax = filteredData.reduce({
                "Revenue.useMemo[stats].totalMVTax": function(sum, d) {
                    return sum + d.mvTaxNonTransport + d.mvTaxTransport + d.mvTaxNewRegistration + d.mvTaxFromRegistered;
                }
            }["Revenue.useMemo[stats].totalMVTax"], 0);
            var totalMVFees = filteredData.reduce({
                "Revenue.useMemo[stats].totalMVFees": function(sum, d) {
                    return sum + d.mvFeesSarathi + d.mvFeesVahan + d.mvFeesPUCC;
                }
            }["Revenue.useMemo[stats].totalMVFees"], 0);
            var totalRoadSafetyCess = filteredData.reduce({
                "Revenue.useMemo[stats].totalRoadSafetyCess": function(sum, d) {
                    return sum + d.roadSafetyCessNonTransport + d.roadSafetyCessTransport;
                }
            }["Revenue.useMemo[stats].totalRoadSafetyCess"], 0);
            var totalGreenTax = filteredData.reduce({
                "Revenue.useMemo[stats].totalGreenTax": function(sum, d) {
                    return sum + d.greenTaxNonTransport + d.greenTaxTransport;
                }
            }["Revenue.useMemo[stats].totalGreenTax"], 0);
            var totalCF = filteredData.reduce({
                "Revenue.useMemo[stats].totalCF": function(sum, d) {
                    return sum + d.cfOffence + d.cfDelayFine + d.fitnessCF;
                }
            }["Revenue.useMemo[stats].totalCF"], 0);
            var totalOther = filteredData.reduce({
                "Revenue.useMemo[stats].totalOther": function(sum, d) {
                    return sum + d.puccLateFine + d.otherLateFees + d.apgt + d.hsrp;
                }
            }["Revenue.useMemo[stats].totalOther"], 0);
            var grandTotal = totalMVTax + totalMVFees + totalRoadSafetyCess + totalGreenTax + totalCF + totalOther;
            return {
                totalMVTax: totalMVTax,
                totalMVFees: totalMVFees,
                totalRoadSafetyCess: totalRoadSafetyCess,
                totalGreenTax: totalGreenTax,
                totalCF: totalCF,
                totalOther: totalOther,
                grandTotal: grandTotal
            };
        }
    }["Revenue.useMemo[stats]"], [
        filteredData
    ]);
    // Revenue breakdown by category (stacked bar chart)
    var revenueBreakdownData = {
        labels: filteredData.map(function(d) {
            return d.month;
        }),
        datasets: [
            {
                label: 'MV Tax',
                data: filteredData.map(function(d) {
                    return d.mvTaxNonTransport + d.mvTaxTransport + d.mvTaxNewRegistration + d.mvTaxFromRegistered;
                }),
                backgroundColor: 'rgba(59, 130, 246, 0.8)'
            },
            {
                label: 'MV Fees',
                data: filteredData.map(function(d) {
                    return d.mvFeesSarathi + d.mvFeesVahan + d.mvFeesPUCC;
                }),
                backgroundColor: 'rgba(16, 185, 129, 0.8)'
            },
            {
                label: 'Road Safety Cess',
                data: filteredData.map(function(d) {
                    return d.roadSafetyCessNonTransport + d.roadSafetyCessTransport;
                }),
                backgroundColor: 'rgba(245, 158, 11, 0.8)'
            },
            {
                label: 'Green Tax',
                data: filteredData.map(function(d) {
                    return d.greenTaxNonTransport + d.greenTaxTransport;
                }),
                backgroundColor: 'rgba(34, 197, 94, 0.8)'
            },
            {
                label: 'Compounding Fees',
                data: filteredData.map(function(d) {
                    return d.cfOffence + d.cfDelayFine + d.fitnessCF;
                }),
                backgroundColor: 'rgba(239, 68, 68, 0.8)'
            },
            {
                label: 'Other Fees',
                data: filteredData.map(function(d) {
                    return d.puccLateFine + d.otherLateFees + d.apgt + d.hsrp;
                }),
                backgroundColor: 'rgba(168, 85, 247, 0.8)'
            }
        ]
    };
    // Total revenue trend line chart
    var revenueTrendData = {
        labels: filteredData.map(function(d) {
            return d.month;
        }),
        datasets: [
            {
                label: 'Total Revenue (₹)',
                data: filteredData.map(function(d) {
                    return d.mvTaxNonTransport + d.mvTaxTransport + d.mvTaxNewRegistration + d.mvTaxFromRegistered + d.mvFeesSarathi + d.mvFeesVahan + d.mvFeesPUCC + d.roadSafetyCessNonTransport + d.roadSafetyCessTransport + d.greenTaxNonTransport + d.greenTaxTransport + d.cfOffence + d.cfDelayFine + d.fitnessCF + d.puccLateFine + d.otherLateFees + d.apgt + d.hsrp;
                }),
                borderColor: 'rgba(59, 130, 246, 1)',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                tension: 0.4,
                fill: true
            }
        ]
    };
    var chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'rgba(0, 0, 0, 0.7)'
                }
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                callbacks: {
                    label: function label(context) {
                        var label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += '₹' + context.parsed.y.toLocaleString('en-IN');
                        return label;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                stacked: true,
                ticks: {
                    color: 'rgba(0, 0, 0, 0.7)',
                    callback: function callback(value) {
                        return '₹' + (value / 1000).toFixed(0) + 'K';
                    }
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                }
            },
            x: {
                stacked: true,
                ticks: {
                    color: 'rgba(0, 0, 0, 0.7)'
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                }
            }
        }
    };
    var lineChartOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, chartOptions), {
        scales: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, chartOptions.scales), {
            y: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, chartOptions.scales.y), {
                stacked: false
            }),
            x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, chartOptions.scales.x), {
                stacked: false
            })
        })
    });
    var darkChartOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, chartOptions), {
        plugins: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, chartOptions.plugins), {
            legend: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, chartOptions.plugins.legend), {
                labels: {
                    color: 'rgba(255, 255, 255, 0.7)'
                }
            })
        }),
        scales: {
            y: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, chartOptions.scales.y), {
                ticks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, chartOptions.scales.y.ticks), {
                    color: 'rgba(255, 255, 255, 0.7)'
                }),
                grid: {
                    color: 'rgba(255, 255, 255, 0.05)'
                }
            }),
            x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, chartOptions.scales.x), {
                ticks: {
                    color: 'rgba(255, 255, 255, 0.7)'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.05)'
                }
            })
        }
    });
    var darkLineChartOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, lineChartOptions), {
        plugins: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, lineChartOptions.plugins), {
            legend: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, lineChartOptions.plugins.legend), {
                labels: {
                    color: 'rgba(255, 255, 255, 0.7)'
                }
            })
        }),
        scales: {
            y: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, lineChartOptions.scales.y), {
                ticks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, lineChartOptions.scales.y.ticks), {
                    color: 'rgba(255, 255, 255, 0.7)'
                }),
                grid: {
                    color: 'rgba(255, 255, 255, 0.05)'
                }
            }),
            x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, lineChartOptions.scales.x), {
                ticks: {
                    color: 'rgba(255, 255, 255, 0.7)'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.05)'
                }
            })
        }
    });
    var currentChartOptions = isDarkMode ? darkChartOptions : chartOptions;
    var currentLineChartOptions = isDarkMode ? darkLineChartOptions : lineChartOptions;
    var handleMonthToggle = function(month) {
        setSelectedMonths(function(prev) {
            return prev.includes(month) ? prev.filter(function(m) {
                return m !== month;
            }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(prev).concat([
                month
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
                className: "bg-white dark:bg-gray-800 rounded-lg shadow p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-3 text-gray-900 dark:text-white",
                        children: "Filter by Month"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Revenue.js",
                        lineNumber: 290,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: months.map(function(month) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: function() {
                                    return handleMonthToggle(month);
                                },
                                className: "px-3 py-1 rounded-md text-sm font-medium transition-colors ".concat(selectedMonths.includes(month) ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'),
                                children: month
                            }, month, false, {
                                fileName: "[project]/src/components/Revenue.js",
                                lineNumber: 293,
                                columnNumber: 25
                            }, _this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/Revenue.js",
                        lineNumber: 291,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Revenue.js",
                lineNumber: 289,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-lg shadow p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-gray-500 dark:text-gray-400",
                                children: "Total MV Tax"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Revenue.js",
                                lineNumber: 310,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-blue-600 dark:text-blue-400 mt-2",
                                children: formatCurrency(stats.totalMVTax)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Revenue.js",
                                lineNumber: 311,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Revenue.js",
                        lineNumber: 309,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-lg shadow p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-gray-500 dark:text-gray-400",
                                children: "Total MV Fees"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Revenue.js",
                                lineNumber: 314,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-green-600 dark:text-green-400 mt-2",
                                children: formatCurrency(stats.totalMVFees)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Revenue.js",
                                lineNumber: 315,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Revenue.js",
                        lineNumber: 313,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-lg shadow p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-gray-500 dark:text-gray-400",
                                children: "Road Safety Cess"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Revenue.js",
                                lineNumber: 318,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-yellow-600 dark:text-yellow-400 mt-2",
                                children: formatCurrency(stats.totalRoadSafetyCess)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Revenue.js",
                                lineNumber: 319,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Revenue.js",
                        lineNumber: 317,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-lg shadow p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-gray-500 dark:text-gray-400",
                                children: "Green Tax"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Revenue.js",
                                lineNumber: 322,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-2",
                                children: formatCurrency(stats.totalGreenTax)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Revenue.js",
                                lineNumber: 323,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Revenue.js",
                        lineNumber: 321,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-lg shadow p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-gray-500 dark:text-gray-400",
                                children: "Compounding Fees"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Revenue.js",
                                lineNumber: 326,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-red-600 dark:text-red-400 mt-2",
                                children: formatCurrency(stats.totalCF)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Revenue.js",
                                lineNumber: 327,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Revenue.js",
                        lineNumber: 325,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-lg shadow p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-gray-500 dark:text-gray-400",
                                children: "Other Fees"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Revenue.js",
                                lineNumber: 330,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-purple-600 dark:text-purple-400 mt-2",
                                children: formatCurrency(stats.totalOther)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Revenue.js",
                                lineNumber: 331,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Revenue.js",
                        lineNumber: 329,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-lg shadow p-6 md:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-blue-100",
                                children: "Grand Total Revenue"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Revenue.js",
                                lineNumber: 334,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl font-bold text-white mt-2",
                                children: formatCurrency(stats.grandTotal)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Revenue.js",
                                lineNumber: 335,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Revenue.js",
                        lineNumber: 333,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Revenue.js",
                lineNumber: 308,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-lg shadow p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold mb-4 text-gray-900 dark:text-white",
                                children: "Revenue Breakdown by Category"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Revenue.js",
                                lineNumber: 342,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-96",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                    data: revenueBreakdownData,
                                    options: currentChartOptions
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Revenue.js",
                                    lineNumber: 344,
                                    columnNumber: 25
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Revenue.js",
                                lineNumber: 343,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Revenue.js",
                        lineNumber: 341,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-lg shadow p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold mb-4 text-gray-900 dark:text-white",
                                children: "Total Revenue Trend"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Revenue.js",
                                lineNumber: 348,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-80",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                    data: revenueTrendData,
                                    options: currentLineChartOptions
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Revenue.js",
                                    lineNumber: 350,
                                    columnNumber: 25
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Revenue.js",
                                lineNumber: 349,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Revenue.js",
                        lineNumber: 347,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Revenue.js",
                lineNumber: 340,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-4 border-b border-gray-200 dark:border-gray-700",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold text-gray-900 dark:text-white",
                            children: "Revenue Collection Statement"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Revenue.js",
                            lineNumber: 358,
                            columnNumber: 21
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Revenue.js",
                        lineNumber: 357,
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
                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                                children: "Revenue Category"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Revenue.js",
                                                lineNumber: 364,
                                                columnNumber: 33
                                            }, _this),
                                            filteredData.map(function(row) {
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                                    children: row.month
                                                }, row.month, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 366,
                                                    columnNumber: 37
                                                }, _this);
                                            }),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider font-bold",
                                                children: "Total"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Revenue.js",
                                                lineNumber: 368,
                                                columnNumber: 33
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Revenue.js",
                                        lineNumber: 363,
                                        columnNumber: 29
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Revenue.js",
                                    lineNumber: 362,
                                    columnNumber: 25
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "bg-blue-50 dark:bg-blue-900/20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-3 text-sm font-bold text-gray-900 dark:text-white",
                                                colSpan: filteredData.length + 2,
                                                children: "MV Tax (Motor Vehicle Tax)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Revenue.js",
                                                lineNumber: 374,
                                                columnNumber: 33
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Revenue.js",
                                            lineNumber: 373,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-gray-50 dark:hover:bg-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300",
                                                    children: "Non-Transport"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 379,
                                                    columnNumber: 33
                                                }, _this),
                                                filteredData.map(function(row) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-right text-sm text-gray-900 dark:text-white",
                                                        children: formatCurrency(row.mvTaxNonTransport)
                                                    }, row.month, false, {
                                                        fileName: "[project]/src/components/Revenue.js",
                                                        lineNumber: 381,
                                                        columnNumber: 37
                                                    }, _this);
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 text-right text-sm font-semibold text-blue-600 dark:text-blue-400",
                                                    children: formatCurrency(filteredData.reduce(function(sum, d) {
                                                        return sum + d.mvTaxNonTransport;
                                                    }, 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 383,
                                                    columnNumber: 33
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Revenue.js",
                                            lineNumber: 378,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-gray-50 dark:hover:bg-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300",
                                                    children: "Transport"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 388,
                                                    columnNumber: 33
                                                }, _this),
                                                filteredData.map(function(row) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-right text-sm text-gray-900 dark:text-white",
                                                        children: formatCurrency(row.mvTaxTransport)
                                                    }, row.month, false, {
                                                        fileName: "[project]/src/components/Revenue.js",
                                                        lineNumber: 390,
                                                        columnNumber: 37
                                                    }, _this);
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 text-right text-sm font-semibold text-blue-600 dark:text-blue-400",
                                                    children: formatCurrency(filteredData.reduce(function(sum, d) {
                                                        return sum + d.mvTaxTransport;
                                                    }, 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 392,
                                                    columnNumber: 33
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Revenue.js",
                                            lineNumber: 387,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-gray-50 dark:hover:bg-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-3 pl-20 text-sm text-gray-600 dark:text-gray-400",
                                                    children: "New Registration of Vehicle"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 397,
                                                    columnNumber: 33
                                                }, _this),
                                                filteredData.map(function(row) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-right text-sm text-gray-900 dark:text-white",
                                                        children: formatCurrency(row.mvTaxNewRegistration)
                                                    }, row.month, false, {
                                                        fileName: "[project]/src/components/Revenue.js",
                                                        lineNumber: 399,
                                                        columnNumber: 37
                                                    }, _this);
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 text-right text-sm font-semibold text-blue-600 dark:text-blue-400",
                                                    children: formatCurrency(filteredData.reduce(function(sum, d) {
                                                        return sum + d.mvTaxNewRegistration;
                                                    }, 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 401,
                                                    columnNumber: 33
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Revenue.js",
                                            lineNumber: 396,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-gray-50 dark:hover:bg-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-3 pl-20 text-sm text-gray-600 dark:text-gray-400",
                                                    children: "M.V. Tax from already registered vehicle"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 406,
                                                    columnNumber: 33
                                                }, _this),
                                                filteredData.map(function(row) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-right text-sm text-gray-900 dark:text-white",
                                                        children: formatCurrency(row.mvTaxFromRegistered)
                                                    }, row.month, false, {
                                                        fileName: "[project]/src/components/Revenue.js",
                                                        lineNumber: 408,
                                                        columnNumber: 37
                                                    }, _this);
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 text-right text-sm font-semibold text-blue-600 dark:text-blue-400",
                                                    children: formatCurrency(filteredData.reduce(function(sum, d) {
                                                        return sum + d.mvTaxFromRegistered;
                                                    }, 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 410,
                                                    columnNumber: 33
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Revenue.js",
                                            lineNumber: 405,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "bg-green-50 dark:bg-green-900/20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-3 text-sm font-bold text-gray-900 dark:text-white",
                                                colSpan: filteredData.length + 2,
                                                children: "MV Fees"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Revenue.js",
                                                lineNumber: 417,
                                                columnNumber: 33
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Revenue.js",
                                            lineNumber: 416,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-gray-50 dark:hover:bg-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300",
                                                    children: [
                                                        "Sarathi ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-500",
                                                            children: "(Driving Licence related services)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Revenue.js",
                                                            lineNumber: 422,
                                                            columnNumber: 114
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 422,
                                                    columnNumber: 33
                                                }, _this),
                                                filteredData.map(function(row) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-right text-sm text-gray-900 dark:text-white",
                                                        children: formatCurrency(row.mvFeesSarathi)
                                                    }, row.month, false, {
                                                        fileName: "[project]/src/components/Revenue.js",
                                                        lineNumber: 424,
                                                        columnNumber: 37
                                                    }, _this);
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 text-right text-sm font-semibold text-green-600 dark:text-green-400",
                                                    children: formatCurrency(filteredData.reduce(function(sum, d) {
                                                        return sum + d.mvFeesSarathi;
                                                    }, 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 426,
                                                    columnNumber: 33
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Revenue.js",
                                            lineNumber: 421,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-gray-50 dark:hover:bg-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300",
                                                    children: [
                                                        "Vahan ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-500",
                                                            children: "(Vehicle related services)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Revenue.js",
                                                            lineNumber: 431,
                                                            columnNumber: 112
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 431,
                                                    columnNumber: 33
                                                }, _this),
                                                filteredData.map(function(row) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-right text-sm text-gray-900 dark:text-white",
                                                        children: formatCurrency(row.mvFeesVahan)
                                                    }, row.month, false, {
                                                        fileName: "[project]/src/components/Revenue.js",
                                                        lineNumber: 433,
                                                        columnNumber: 37
                                                    }, _this);
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 text-right text-sm font-semibold text-green-600 dark:text-green-400",
                                                    children: formatCurrency(filteredData.reduce(function(sum, d) {
                                                        return sum + d.mvFeesVahan;
                                                    }, 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 435,
                                                    columnNumber: 33
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Revenue.js",
                                            lineNumber: 430,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-gray-50 dark:hover:bg-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300",
                                                    children: [
                                                        "PUCC ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-500",
                                                            children: "(Pollution Under Control Certificate fees)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Revenue.js",
                                                            lineNumber: 440,
                                                            columnNumber: 111
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 440,
                                                    columnNumber: 33
                                                }, _this),
                                                filteredData.map(function(row) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-right text-sm text-gray-900 dark:text-white",
                                                        children: formatCurrency(row.mvFeesPUCC)
                                                    }, row.month, false, {
                                                        fileName: "[project]/src/components/Revenue.js",
                                                        lineNumber: 442,
                                                        columnNumber: 37
                                                    }, _this);
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 text-right text-sm font-semibold text-green-600 dark:text-green-400",
                                                    children: formatCurrency(filteredData.reduce(function(sum, d) {
                                                        return sum + d.mvFeesPUCC;
                                                    }, 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 444,
                                                    columnNumber: 33
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Revenue.js",
                                            lineNumber: 439,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "bg-yellow-50 dark:bg-yellow-900/20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-3 text-sm font-bold text-gray-900 dark:text-white",
                                                colSpan: filteredData.length + 2,
                                                children: "Road Safety Cess"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Revenue.js",
                                                lineNumber: 451,
                                                columnNumber: 33
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Revenue.js",
                                            lineNumber: 450,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-gray-50 dark:hover:bg-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300",
                                                    children: "Non-Transport"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 456,
                                                    columnNumber: 33
                                                }, _this),
                                                filteredData.map(function(row) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-right text-sm text-gray-900 dark:text-white",
                                                        children: formatCurrency(row.roadSafetyCessNonTransport)
                                                    }, row.month, false, {
                                                        fileName: "[project]/src/components/Revenue.js",
                                                        lineNumber: 458,
                                                        columnNumber: 37
                                                    }, _this);
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 text-right text-sm font-semibold text-yellow-600 dark:text-yellow-400",
                                                    children: formatCurrency(filteredData.reduce(function(sum, d) {
                                                        return sum + d.roadSafetyCessNonTransport;
                                                    }, 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 460,
                                                    columnNumber: 33
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Revenue.js",
                                            lineNumber: 455,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-gray-50 dark:hover:bg-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300",
                                                    children: "Transport"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 465,
                                                    columnNumber: 33
                                                }, _this),
                                                filteredData.map(function(row) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-right text-sm text-gray-900 dark:text-white",
                                                        children: formatCurrency(row.roadSafetyCessTransport)
                                                    }, row.month, false, {
                                                        fileName: "[project]/src/components/Revenue.js",
                                                        lineNumber: 467,
                                                        columnNumber: 37
                                                    }, _this);
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 text-right text-sm font-semibold text-yellow-600 dark:text-yellow-400",
                                                    children: formatCurrency(filteredData.reduce(function(sum, d) {
                                                        return sum + d.roadSafetyCessTransport;
                                                    }, 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 469,
                                                    columnNumber: 33
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Revenue.js",
                                            lineNumber: 464,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "bg-emerald-50 dark:bg-emerald-900/20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-3 text-sm font-bold text-gray-900 dark:text-white",
                                                colSpan: filteredData.length + 2,
                                                children: "Green Tax"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Revenue.js",
                                                lineNumber: 476,
                                                columnNumber: 33
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Revenue.js",
                                            lineNumber: 475,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-gray-50 dark:hover:bg-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300",
                                                    children: "Non-Transport"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 481,
                                                    columnNumber: 33
                                                }, _this),
                                                filteredData.map(function(row) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-right text-sm text-gray-900 dark:text-white",
                                                        children: formatCurrency(row.greenTaxNonTransport)
                                                    }, row.month, false, {
                                                        fileName: "[project]/src/components/Revenue.js",
                                                        lineNumber: 483,
                                                        columnNumber: 37
                                                    }, _this);
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 text-right text-sm font-semibold text-emerald-600 dark:text-emerald-400",
                                                    children: formatCurrency(filteredData.reduce(function(sum, d) {
                                                        return sum + d.greenTaxNonTransport;
                                                    }, 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 485,
                                                    columnNumber: 33
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Revenue.js",
                                            lineNumber: 480,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-gray-50 dark:hover:bg-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300",
                                                    children: "Transport"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 490,
                                                    columnNumber: 33
                                                }, _this),
                                                filteredData.map(function(row) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-right text-sm text-gray-900 dark:text-white",
                                                        children: formatCurrency(row.greenTaxTransport)
                                                    }, row.month, false, {
                                                        fileName: "[project]/src/components/Revenue.js",
                                                        lineNumber: 492,
                                                        columnNumber: 37
                                                    }, _this);
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 text-right text-sm font-semibold text-emerald-600 dark:text-emerald-400",
                                                    children: formatCurrency(filteredData.reduce(function(sum, d) {
                                                        return sum + d.greenTaxTransport;
                                                    }, 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 494,
                                                    columnNumber: 33
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Revenue.js",
                                            lineNumber: 489,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "bg-red-50 dark:bg-red-900/20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-3 text-sm font-bold text-gray-900 dark:text-white",
                                                colSpan: filteredData.length + 2,
                                                children: "C.F. (Compounding Fee)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Revenue.js",
                                                lineNumber: 501,
                                                columnNumber: 33
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Revenue.js",
                                            lineNumber: 500,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-gray-50 dark:hover:bg-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300",
                                                    children: "Offence CF"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 506,
                                                    columnNumber: 33
                                                }, _this),
                                                filteredData.map(function(row) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-right text-sm text-gray-900 dark:text-white",
                                                        children: formatCurrency(row.cfOffence)
                                                    }, row.month, false, {
                                                        fileName: "[project]/src/components/Revenue.js",
                                                        lineNumber: 508,
                                                        columnNumber: 37
                                                    }, _this);
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 text-right text-sm font-semibold text-red-600 dark:text-red-400",
                                                    children: formatCurrency(filteredData.reduce(function(sum, d) {
                                                        return sum + d.cfOffence;
                                                    }, 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 510,
                                                    columnNumber: 33
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Revenue.js",
                                            lineNumber: 505,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-gray-50 dark:hover:bg-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300",
                                                    children: "CF @ ₹5 per day (delay fine)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 515,
                                                    columnNumber: 33
                                                }, _this),
                                                filteredData.map(function(row) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-right text-sm text-gray-900 dark:text-white",
                                                        children: formatCurrency(row.cfDelayFine)
                                                    }, row.month, false, {
                                                        fileName: "[project]/src/components/Revenue.js",
                                                        lineNumber: 517,
                                                        columnNumber: 37
                                                    }, _this);
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 text-right text-sm font-semibold text-red-600 dark:text-red-400",
                                                    children: formatCurrency(filteredData.reduce(function(sum, d) {
                                                        return sum + d.cfDelayFine;
                                                    }, 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 519,
                                                    columnNumber: 33
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Revenue.js",
                                            lineNumber: 514,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-gray-50 dark:hover:bg-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300",
                                                    children: "Fitness CF @ ₹50 per day delay"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 524,
                                                    columnNumber: 33
                                                }, _this),
                                                filteredData.map(function(row) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-right text-sm text-gray-900 dark:text-white",
                                                        children: formatCurrency(row.fitnessCF)
                                                    }, row.month, false, {
                                                        fileName: "[project]/src/components/Revenue.js",
                                                        lineNumber: 526,
                                                        columnNumber: 37
                                                    }, _this);
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 text-right text-sm font-semibold text-red-600 dark:text-red-400",
                                                    children: formatCurrency(filteredData.reduce(function(sum, d) {
                                                        return sum + d.fitnessCF;
                                                    }, 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 528,
                                                    columnNumber: 33
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Revenue.js",
                                            lineNumber: 523,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-gray-50 dark:hover:bg-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300",
                                                    children: "PUCC Late fine @ ₹500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 533,
                                                    columnNumber: 33
                                                }, _this),
                                                filteredData.map(function(row) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-right text-sm text-gray-900 dark:text-white",
                                                        children: formatCurrency(row.puccLateFine)
                                                    }, row.month, false, {
                                                        fileName: "[project]/src/components/Revenue.js",
                                                        lineNumber: 535,
                                                        columnNumber: 37
                                                    }, _this);
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 text-right text-sm font-semibold text-red-600 dark:text-red-400",
                                                    children: formatCurrency(filteredData.reduce(function(sum, d) {
                                                        return sum + d.puccLateFine;
                                                    }, 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 537,
                                                    columnNumber: 33
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Revenue.js",
                                            lineNumber: 532,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-gray-50 dark:hover:bg-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300",
                                                    children: "Other late fee / fine / etc."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 542,
                                                    columnNumber: 33
                                                }, _this),
                                                filteredData.map(function(row) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-right text-sm text-gray-900 dark:text-white",
                                                        children: formatCurrency(row.otherLateFees)
                                                    }, row.month, false, {
                                                        fileName: "[project]/src/components/Revenue.js",
                                                        lineNumber: 544,
                                                        columnNumber: 37
                                                    }, _this);
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 text-right text-sm font-semibold text-red-600 dark:text-red-400",
                                                    children: formatCurrency(filteredData.reduce(function(sum, d) {
                                                        return sum + d.otherLateFees;
                                                    }, 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 546,
                                                    columnNumber: 33
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Revenue.js",
                                            lineNumber: 541,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "bg-purple-50 dark:bg-purple-900/20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-3 text-sm font-bold text-gray-900 dark:text-white",
                                                colSpan: filteredData.length + 2,
                                                children: "APGT"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Revenue.js",
                                                lineNumber: 553,
                                                columnNumber: 33
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Revenue.js",
                                            lineNumber: 552,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-gray-50 dark:hover:bg-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300",
                                                    children: "APGT Fees"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 558,
                                                    columnNumber: 33
                                                }, _this),
                                                filteredData.map(function(row) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-right text-sm text-gray-900 dark:text-white",
                                                        children: formatCurrency(row.apgt)
                                                    }, row.month, false, {
                                                        fileName: "[project]/src/components/Revenue.js",
                                                        lineNumber: 560,
                                                        columnNumber: 37
                                                    }, _this);
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 text-right text-sm font-semibold text-purple-600 dark:text-purple-400",
                                                    children: formatCurrency(filteredData.reduce(function(sum, d) {
                                                        return sum + d.apgt;
                                                    }, 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 562,
                                                    columnNumber: 33
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Revenue.js",
                                            lineNumber: 557,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "bg-indigo-50 dark:bg-indigo-900/20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-3 text-sm font-bold text-gray-900 dark:text-white",
                                                colSpan: filteredData.length + 2,
                                                children: "HSRP"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Revenue.js",
                                                lineNumber: 569,
                                                columnNumber: 33
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Revenue.js",
                                            lineNumber: 568,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-gray-50 dark:hover:bg-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-3 pl-12 text-sm text-gray-700 dark:text-gray-300",
                                                    children: [
                                                        "HSRP Fees ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-500",
                                                            children: "(High Security Registration Plate)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Revenue.js",
                                                            lineNumber: 574,
                                                            columnNumber: 116
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 574,
                                                    columnNumber: 33
                                                }, _this),
                                                filteredData.map(function(row) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-right text-sm text-gray-900 dark:text-white",
                                                        children: formatCurrency(row.hsrp)
                                                    }, row.month, false, {
                                                        fileName: "[project]/src/components/Revenue.js",
                                                        lineNumber: 576,
                                                        columnNumber: 37
                                                    }, _this);
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 text-right text-sm font-semibold text-indigo-600 dark:text-indigo-400",
                                                    children: formatCurrency(filteredData.reduce(function(sum, d) {
                                                        return sum + d.hsrp;
                                                    }, 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 578,
                                                    columnNumber: 33
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Revenue.js",
                                            lineNumber: 573,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 border-t-2 border-blue-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 text-sm font-bold text-gray-900 dark:text-white uppercase",
                                                    children: "Grand Total"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 585,
                                                    columnNumber: 33
                                                }, _this),
                                                filteredData.map(function(row) {
                                                    var monthTotal = row.mvTaxNonTransport + row.mvTaxTransport + row.mvTaxNewRegistration + row.mvTaxFromRegistered + row.mvFeesSarathi + row.mvFeesVahan + row.mvFeesPUCC + row.roadSafetyCessNonTransport + row.roadSafetyCessTransport + row.greenTaxNonTransport + row.greenTaxTransport + row.cfOffence + row.cfDelayFine + row.fitnessCF + row.puccLateFine + row.otherLateFees + row.apgt + row.hsrp;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-4 text-right text-sm font-bold text-gray-900 dark:text-white",
                                                        children: formatCurrency(monthTotal)
                                                    }, row.month, false, {
                                                        fileName: "[project]/src/components/Revenue.js",
                                                        lineNumber: 595,
                                                        columnNumber: 41
                                                    }, _this);
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-4 text-right text-sm font-bold text-blue-700 dark:text-blue-300 text-lg",
                                                    children: formatCurrency(stats.grandTotal)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 600,
                                                    columnNumber: 33
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Revenue.js",
                                            lineNumber: 584,
                                            columnNumber: 29
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Revenue.js",
                                    lineNumber: 371,
                                    columnNumber: 25
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Revenue.js",
                            lineNumber: 361,
                            columnNumber: 21
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Revenue.js",
                        lineNumber: 360,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Revenue.js",
                lineNumber: 356,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-gray-800 rounded-lg shadow mb-6 p-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2",
                    children: [
                        {
                            id: 'new',
                            name: 'New Registration'
                        },
                        {
                            id: 'reassign',
                            name: 'Re-assignment'
                        },
                        {
                            id: 'green',
                            name: 'Green Tax'
                        },
                        {
                            id: 'renewal',
                            name: 'Old / Renewals'
                        }
                    ].map(function(mode) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: function() {
                                return setViewMode(mode.id);
                            },
                            className: "px-4 py-2 rounded-md text-sm font-medium transition-colors ".concat(viewMode === mode.id ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'),
                            children: mode.name
                        }, mode.id, false, {
                            fileName: "[project]/src/components/Revenue.js",
                            lineNumber: 618,
                            columnNumber: 25
                        }, _this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/Revenue.js",
                    lineNumber: 611,
                    columnNumber: 17
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/components/Revenue.js",
                lineNumber: 610,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center flex-wrap gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold text-gray-900 dark:text-white",
                                    children: viewMode === 'new' ? 'For New Registration (Non-Transport)' : viewMode === 'reassign' ? 'Re-assignment Revenue' : viewMode === 'green' ? 'Green Tax Revenue' : 'Old Non-Transport / Renewals'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Revenue.js",
                                    lineNumber: 636,
                                    columnNumber: 25
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Revenue.js",
                                lineNumber: 635,
                                columnNumber: 21
                            }, _this),
                            viewMode === 'new' && activeTab === 'fourWheeler' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 p-1 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: function() {
                                            return setTaxTenure('all');
                                        },
                                        className: "px-3 py-1 text-xs font-medium rounded ".concat(taxTenure === 'all' ? 'bg-white dark:bg-gray-600 shadow text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'),
                                        children: "All"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Revenue.js",
                                        lineNumber: 647,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: function() {
                                            return setTaxTenure('fiveYear');
                                        },
                                        className: "px-3 py-1 text-xs font-medium rounded ".concat(taxTenure === 'fiveYear' ? 'bg-white dark:bg-gray-600 shadow text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'),
                                        children: "5-Year Tax"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Revenue.js",
                                        lineNumber: 653,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: function() {
                                            return setTaxTenure('fifteenYear');
                                        },
                                        className: "px-3 py-1 text-xs font-medium rounded ".concat(taxTenure === 'fifteenYear' ? 'bg-white dark:bg-gray-600 shadow text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'),
                                        children: "Lifetime (15Y)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Revenue.js",
                                        lineNumber: 659,
                                        columnNumber: 29
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Revenue.js",
                                lineNumber: 646,
                                columnNumber: 25
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Revenue.js",
                        lineNumber: 634,
                        columnNumber: 17
                    }, _this),
                    (viewMode === 'new' || viewMode === 'reassign') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b border-gray-200 dark:border-gray-700",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "-mb-px flex px-6",
                            "aria-label": "Tabs",
                            children: [
                                {
                                    id: 'twoWheeler',
                                    name: 'Two-wheeler'
                                },
                                {
                                    id: 'threeWheeler',
                                    name: 'Three-wheeler'
                                },
                                {
                                    id: 'fourWheeler',
                                    name: 'Four-wheeler'
                                },
                                {
                                    id: 'otherVehicles',
                                    name: 'Other Vehicles'
                                }
                            ].map(function(tab) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: function() {
                                        return setActiveTab(tab.id);
                                    },
                                    className: "whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm transition-colors ".concat(activeTab === tab.id ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300'),
                                    children: tab.name
                                }, tab.id, false, {
                                    fileName: "[project]/src/components/Revenue.js",
                                    lineNumber: 679,
                                    columnNumber: 33
                                }, _this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/Revenue.js",
                            lineNumber: 672,
                            columnNumber: 25
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Revenue.js",
                        lineNumber: 671,
                        columnNumber: 21
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
                                                children: "Name of District"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Revenue.js",
                                                lineNumber: 699,
                                                columnNumber: 33
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                                children: "Total Vehicles"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Revenue.js",
                                                lineNumber: 700,
                                                columnNumber: 33
                                            }, _this),
                                            viewMode !== 'green' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                                children: viewMode === 'reassign' ? 'Transaction Type' : 'MV Tax'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Revenue.js",
                                                lineNumber: 702,
                                                columnNumber: 37
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                                children: activeTab === 'fourWheeler' && viewMode === 'new' ? 'Original Cost Price' : activeTab === 'otherVehicles' || viewMode === 'green' ? 'Tax Basis/Period' : 'Weight of Vehicle'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Revenue.js",
                                                lineNumber: 707,
                                                columnNumber: 33
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                                children: viewMode === 'green' ? 'Green Tax Realised' : 'MV Tax Realised'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Revenue.js",
                                                lineNumber: 712,
                                                columnNumber: 33
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                                children: "MV Fees Realized"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Revenue.js",
                                                lineNumber: 715,
                                                columnNumber: 33
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                                children: "Road Safety Cess"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Revenue.js",
                                                lineNumber: 716,
                                                columnNumber: 33
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                                children: "CF (Delay Fine)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Revenue.js",
                                                lineNumber: 717,
                                                columnNumber: 33
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Revenue.js",
                                        lineNumber: 698,
                                        columnNumber: 29
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Revenue.js",
                                    lineNumber: 697,
                                    columnNumber: 25
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700",
                                    children: function() {
                                        var dataToRender = [];
                                        if (viewMode === 'new') {
                                            if (activeTab === 'fourWheeler' && taxTenure !== 'all') {
                                                dataToRender = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].newReg4WheelerSplit[taxTenure];
                                            } else {
                                                dataToRender = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].newRegistrationRevenue ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].newRegistrationRevenue[activeTab] : [];
                                            }
                                        } else if (viewMode === 'reassign') {
                                            dataToRender = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].reassignmentRevenue ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].reassignmentRevenue[activeTab] : [];
                                        } else if (viewMode === 'green') {
                                            dataToRender = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greenTaxRevenue ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greenTaxRevenue.nonTransport : []; // Using non-transport as default for green view
                                        } else if (viewMode === 'renewal') {
                                            dataToRender = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].renewalRevenue ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].renewalRevenue.nonTransport : [];
                                        }
                                        if (dataToRender && dataToRender.length > 0) {
                                            return dataToRender.map(function(row, idx) {
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "hover:bg-gray-50 dark:hover:bg-gray-700 ".concat(idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-800/50'),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white",
                                                            children: row.district
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Revenue.js",
                                                            lineNumber: 741,
                                                            columnNumber: 45
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900 dark:text-gray-300",
                                                            children: row.totalVehicles.toLocaleString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Revenue.js",
                                                            lineNumber: 742,
                                                            columnNumber: 45
                                                        }, _this),
                                                        viewMode !== 'green' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400",
                                                            children: row.mvTaxNonTransport
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Revenue.js",
                                                            lineNumber: 744,
                                                            columnNumber: 49
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400",
                                                            children: activeTab === 'fourWheeler' && viewMode === 'new' ? row.originalCost : viewMode === 'green' ? row.period : activeTab === 'otherVehicles' || viewMode === 'renewal' ? row.otherParams || 'N/A' : row.weight
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Revenue.js",
                                                            lineNumber: 746,
                                                            columnNumber: 45
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 whitespace-nowrap text-sm text-right text-blue-600 dark:text-blue-400 font-medium",
                                                            children: formatCurrency(viewMode === 'green' ? row.taxRealised : row.mvTaxRealised)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Revenue.js",
                                                            lineNumber: 751,
                                                            columnNumber: 45
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 whitespace-nowrap text-sm text-right text-green-600 dark:text-green-400 font-medium",
                                                            children: formatCurrency(row.mvFeesRealised)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Revenue.js",
                                                            lineNumber: 754,
                                                            columnNumber: 45
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 whitespace-nowrap text-sm text-right text-yellow-600 dark:text-yellow-400",
                                                            children: formatCurrency(row.roadSafetyCess)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Revenue.js",
                                                            lineNumber: 755,
                                                            columnNumber: 45
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 whitespace-nowrap text-sm text-right text-red-600 dark:text-red-400",
                                                            children: (row.cfPenalty || row.cfPerDay) > 0 ? formatCurrency(row.cfPenalty || row.cfPerDay) : '-'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Revenue.js",
                                                            lineNumber: 756,
                                                            columnNumber: 45
                                                        }, _this)
                                                    ]
                                                }, row.district, true, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 740,
                                                    columnNumber: 41
                                                }, _this);
                                            });
                                        } else {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    colSpan: "8",
                                                    className: "px-6 py-8 text-center text-sm text-gray-500 dark:text-gray-400",
                                                    children: "No data available for this category"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 764,
                                                    columnNumber: 45
                                                }, _this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Revenue.js",
                                                lineNumber: 763,
                                                columnNumber: 41
                                            }, _this);
                                        }
                                    }()
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Revenue.js",
                                    lineNumber: 720,
                                    columnNumber: 25
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Revenue.js",
                            lineNumber: 696,
                            columnNumber: 21
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Revenue.js",
                        lineNumber: 695,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Revenue.js",
                lineNumber: 633,
                columnNumber: 13
            }, _this),
            (viewMode === 'new' || viewMode === 'green') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-4 border-b border-gray-200 dark:border-gray-700",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold text-gray-900 dark:text-white",
                            children: "For New Registration (Transport) - Revenue by District"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Revenue.js",
                            lineNumber: 778,
                            columnNumber: 25
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Revenue.js",
                        lineNumber: 777,
                        columnNumber: 21
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b border-gray-200 dark:border-gray-700 overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "-mb-px flex px-6",
                            "aria-label": "Tabs",
                            children: [
                                {
                                    id: 'twoWheeler',
                                    name: 'Two-wheeler'
                                },
                                {
                                    id: 'threeWheelerPassenger',
                                    name: '3-W (Pass)'
                                },
                                {
                                    id: 'threeWheelerGoods',
                                    name: '3-W (Goods)'
                                },
                                {
                                    id: 'lmvPassenger',
                                    name: '4-W (LMV) Pass'
                                },
                                {
                                    id: 'lmvGoods',
                                    name: '4-W (LMV) Goods'
                                },
                                {
                                    id: 'mmvPassenger',
                                    name: 'MMV (Pass)'
                                },
                                {
                                    id: 'mmvGoods',
                                    name: 'MMV (Goods)'
                                },
                                {
                                    id: 'hmvPassenger',
                                    name: 'HMV (Pass)'
                                },
                                {
                                    id: 'hmvGoods',
                                    name: 'HMV (Goods)'
                                }
                            ].map(function(tab) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: function() {
                                        return setActiveTransportTab(tab.id);
                                    },
                                    className: "whitespace-nowrap py-4 px-4 border-b-2 font-medium text-sm transition-colors ".concat(activeTransportTab === tab.id ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300'),
                                    children: tab.name
                                }, tab.id, false, {
                                    fileName: "[project]/src/components/Revenue.js",
                                    lineNumber: 797,
                                    columnNumber: 33
                                }, _this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/Revenue.js",
                            lineNumber: 785,
                            columnNumber: 25
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Revenue.js",
                        lineNumber: 784,
                        columnNumber: 21
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
                                                children: "Name of District"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Revenue.js",
                                                lineNumber: 816,
                                                columnNumber: 37
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                                children: "Total Vehicles"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Revenue.js",
                                                lineNumber: 819,
                                                columnNumber: 37
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                                children: "MV Tax (Transport)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Revenue.js",
                                                lineNumber: 822,
                                                columnNumber: 37
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                                children: [
                                                    'twoWheeler',
                                                    'threeWheelerGoods',
                                                    'lmvGoods',
                                                    'mmvGoods',
                                                    'hmvGoods'
                                                ].includes(activeTransportTab) ? 'Weight of Vehicle' : 'Seating Capacity'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Revenue.js",
                                                lineNumber: 825,
                                                columnNumber: 37
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                                children: "MV Tax Realised"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Revenue.js",
                                                lineNumber: 830,
                                                columnNumber: 37
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                                children: "MV Fees Realized"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Revenue.js",
                                                lineNumber: 833,
                                                columnNumber: 37
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                                children: "Road Safety Cess"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Revenue.js",
                                                lineNumber: 836,
                                                columnNumber: 37
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                                children: "CF (Delay Fine)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Revenue.js",
                                                lineNumber: 839,
                                                columnNumber: 37
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Revenue.js",
                                        lineNumber: 815,
                                        columnNumber: 33
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Revenue.js",
                                    lineNumber: 814,
                                    columnNumber: 29
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].newRegistrationTransportRevenue && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].newRegistrationTransportRevenue[activeTransportTab] ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].newRegistrationTransportRevenue[activeTransportTab].map(function(row, idx) {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-gray-50 dark:hover:bg-gray-700 ".concat(idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-800/50'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white",
                                                    children: row.district
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 848,
                                                    columnNumber: 45
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900 dark:text-gray-300",
                                                    children: row.totalVehicles.toLocaleString()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 851,
                                                    columnNumber: 45
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400",
                                                    children: row.mvTaxTransport
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 854,
                                                    columnNumber: 45
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400",
                                                    children: row.param
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 857,
                                                    columnNumber: 45
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 whitespace-nowrap text-sm text-right text-blue-600 dark:text-blue-400 font-medium",
                                                    children: formatCurrency(row.mvTaxRealised)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 860,
                                                    columnNumber: 45
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 whitespace-nowrap text-sm text-right text-green-600 dark:text-green-400 font-medium",
                                                    children: formatCurrency(row.mvFeesRealised)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 863,
                                                    columnNumber: 45
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 whitespace-nowrap text-sm text-right text-yellow-600 dark:text-yellow-400",
                                                    children: formatCurrency(row.roadSafetyCess)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 866,
                                                    columnNumber: 45
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 whitespace-nowrap text-sm text-right text-red-600 dark:text-red-400",
                                                    children: row.cfPerDay > 0 ? formatCurrency(row.cfPerDay) : '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Revenue.js",
                                                    lineNumber: 869,
                                                    columnNumber: 45
                                                }, _this)
                                            ]
                                        }, row.district, true, {
                                            fileName: "[project]/src/components/Revenue.js",
                                            lineNumber: 847,
                                            columnNumber: 41
                                        }, _this);
                                    }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: "8",
                                            className: "px-6 py-8 text-center text-sm text-gray-500 dark:text-gray-400",
                                            children: "No data available for this category"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Revenue.js",
                                            lineNumber: 876,
                                            columnNumber: 41
                                        }, _this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Revenue.js",
                                        lineNumber: 875,
                                        columnNumber: 37
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Revenue.js",
                                    lineNumber: 844,
                                    columnNumber: 29
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Revenue.js",
                            lineNumber: 813,
                            columnNumber: 25
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Revenue.js",
                        lineNumber: 812,
                        columnNumber: 21
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Revenue.js",
                lineNumber: 776,
                columnNumber: 17
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Revenue.js",
        lineNumber: 287,
        columnNumber: 9
    }, _this);
};
_s(Revenue, "y/2Mhr4ARfb1561no5MDCgTPuhQ=");
_c = Revenue;
const __TURBOPACK__default__export__ = Revenue;
var _c;
__turbopack_context__.k.register(_c, "Revenue");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0459df28._.js.map