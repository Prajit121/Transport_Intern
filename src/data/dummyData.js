// Dummy data for Transport Department Statistics Dashboard
// Monthly data for Jan-Dec 2025

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Vehicle Registrations by type
export const vehicleRegistrations = months.map((month, index) => {
  // Seasonal variations: higher in spring/summer, lower in winter
  const seasonalFactor = index < 2 || index > 9 ? 0.85 : index < 5 ? 1.15 : 1.0;

  return {
    month,
    cars: Math.floor((1200 + Math.random() * 300) * seasonalFactor),
    bikes: Math.floor((800 + Math.random() * 200) * seasonalFactor * 1.2),
    trucks: Math.floor((200 + Math.random() * 100) * seasonalFactor * 0.9),
  };
});

// Traffic Incidents by type
export const trafficIncidents = months.map((month, index) => {
  // Higher incidents in winter months (Nov-Feb) and summer vacation
  const incidentFactor = index < 2 || index === 11 ? 1.3 : index > 5 && index < 8 ? 1.15 : 1.0;

  return {
    month,
    accidents: Math.floor((45 + Math.random() * 15) * incidentFactor),
    violations: Math.floor((320 + Math.random() * 80) * incidentFactor),
    breakdowns: Math.floor((180 + Math.random() * 50) * incidentFactor * 0.8),
  };
});

// Public Transport Ridership
export const publicTransportRidership = months.map((month, index) => {
  // Higher ridership in fall/winter, lower in summer
  const ridershipFactor = index > 7 && index < 11 ? 1.2 : index > 4 && index < 8 ? 0.85 : 1.0;

  return {
    month,
    passengerCount: Math.floor((450000 + Math.random() * 50000) * ridershipFactor),
    onTimePercentage: 85 + Math.random() * 10, // 85-95%
  };
});

// Congestion Levels (average delay times in minutes)
export const congestionLevels = months.map((month, index) => {
  // Higher congestion in fall (back to school) and holiday season
  const congestionFactor = index > 7 && index < 11 ? 1.25 : index === 11 ? 1.15 : 1.0;

  return {
    month,
    averageDelayMinutes: Number(((12 + Math.random() * 8) * congestionFactor).toFixed(1)),
  };
});

// Fuel Efficiency (average MPG trends)
export const fuelEfficiency = months.map((month, index) => {
  // Slightly better efficiency in warmer months
  const efficiencyFactor = index > 3 && index < 9 ? 1.05 : 1.0;

  return {
    month,
    averageMPG: Number(((28 + Math.random() * 4) * efficiencyFactor).toFixed(1)),
  };
});

// Road Maintenance (completion rates as percentage)
export const roadMaintenance = months.map((month, index) => {
  // Higher completion in warmer months (better weather for construction)
  const maintenanceFactor = index > 3 && index < 9 ? 1.1 : 0.9;

  return {
    month,
    completionRate: Number(Math.min(100, (75 + Math.random() * 20) * maintenanceFactor).toFixed(1)),
    scheduledProjects: Math.floor(15 + Math.random() * 10),
    completedProjects: Math.floor((15 + Math.random() * 10) * maintenanceFactor * 0.8),
  };
});

// Revenue Collection (daily/monthly/yearly revenue statement)
export const revenueCollection = months.map((month, index) => {
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
  };
});

// List of Districts in Assam
const assamDistricts = [
  "Bajali", "Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo",
  "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Dima Hasao", "Goalpara",
  "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup", "Kamrup Metropolitan",
  "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon",
  "Nagaon", "Nalbari", "Sivasagar", "Sonitpur", "South Salmara-Mankachar",
  "Tamulpur", "Tinsukia", "Udalguri", "West Karbi Anglong"
];

// Generate district-wise new registration revenue data
export const newRegistrationRevenue = {
  twoWheeler: assamDistricts.map(district => ({
    district,
    totalVehicles: Math.floor(500 + Math.random() * 2000),
    mvTaxNonTransport: "One-time",
    category: "Two-wheeler",
    weight: "Below 65kg",
    mvTaxRealised: Math.floor(500000 + Math.random() * 2000000),
    mvFeesRealised: Math.floor(50000 + Math.random() * 200000),
    roadSafetyCess: Math.floor(10000 + Math.random() * 50000),
    cfPenalty: Math.floor(Math.random() * 10000),
  })),
  threeWheeler: assamDistricts.map(district => ({
    district,
    totalVehicles: Math.floor(100 + Math.random() * 500),
    mvTaxNonTransport: "One-time",
    category: "Three-wheeler",
    weight: "N/A",
    mvTaxRealised: Math.floor(200000 + Math.random() * 800000),
    mvFeesRealised: Math.floor(20000 + Math.random() * 80000),
    roadSafetyCess: Math.floor(5000 + Math.random() * 20000),
    cfPenalty: Math.floor(Math.random() * 5000),
  })),
  fourWheeler: assamDistricts.map(district => ({
    district,
    totalVehicles: Math.floor(50 + Math.random() * 300),
    mvTaxNonTransport: "One-time",
    category: "Four-wheeler",
    originalCost: "VARIES",
    mvTaxRealised: Math.floor(1500000 + Math.random() * 5000000),
    mvFeesRealised: Math.floor(100000 + Math.random() * 300000),
    roadSafetyCess: Math.floor(30000 + Math.random() * 100000),
    cfPenalty: Math.floor(Math.random() * 20000),
  })),
  otherVehicles: assamDistricts.map(district => ({
    district,
    totalVehicles: Math.floor(20 + Math.random() * 100),
    mvTaxNonTransport: "Annual",
    category: "LMV/MMV/HMV",
    otherParams: "2% annual tax",
    mvTaxRealised: Math.floor(800000 + Math.random() * 3000000),
    mvFeesRealised: Math.floor(50000 + Math.random() * 150000),
    roadSafetyCess: Math.floor(20000 + Math.random() * 60000),
    cfPenalty: Math.floor(Math.random() * 15000),
  })),
};

// Generate district-wise new registration transport revenue data
export const newRegistrationTransportRevenue = {
  twoWheeler: assamDistricts.map(district => ({
    district,
    totalVehicles: Math.floor(100 + Math.random() * 500),
    mvTaxTransport: "Quarterly",
    category: "Two-wheeler",
    param: "Below 65kg", // weight
    mvTaxRealised: Math.floor(100000 + Math.random() * 500000),
    mvFeesRealised: Math.floor(10000 + Math.random() * 50000),
    roadSafetyCess: Math.floor(5000 + Math.random() * 20000),
    cfPerDay: Math.floor(Math.random() * 2000),
  })),
  threeWheelerPassenger: assamDistricts.map(district => ({
    district,
    totalVehicles: Math.floor(200 + Math.random() * 800),
    mvTaxTransport: "Quarterly",
    category: "Three-wheeler (Passenger)",
    param: "3+1", // seating capacity
    mvTaxRealised: Math.floor(300000 + Math.random() * 1000000),
    mvFeesRealised: Math.floor(30000 + Math.random() * 100000),
    roadSafetyCess: Math.floor(10000 + Math.random() * 40000),
    cfPerDay: Math.floor(Math.random() * 5000),
  })),
  threeWheelerGoods: assamDistricts.map(district => ({
    district,
    totalVehicles: Math.floor(150 + Math.random() * 600),
    mvTaxTransport: "Quarterly",
    category: "Three-wheeler (Goods)",
    param: "500kg", // weight
    mvTaxRealised: Math.floor(250000 + Math.random() * 900000),
    mvFeesRealised: Math.floor(25000 + Math.random() * 90000),
    roadSafetyCess: Math.floor(8000 + Math.random() * 30000),
    cfPerDay: Math.floor(Math.random() * 4000),
  })),
  lmvPassenger: assamDistricts.map(district => ({
    district,
    totalVehicles: Math.floor(100 + Math.random() * 400),
    mvTaxTransport: "Quarterly",
    category: "Four-wheeler (LMV) Passenger",
    param: "4+1", // seating capacity
    mvTaxRealised: Math.floor(500000 + Math.random() * 2000000),
    mvFeesRealised: Math.floor(50000 + Math.random() * 200000),
    roadSafetyCess: Math.floor(15000 + Math.random() * 60000),
    cfPerDay: Math.floor(Math.random() * 8000),
  })),
  lmvGoods: assamDistricts.map(district => ({
    district,
    totalVehicles: Math.floor(80 + Math.random() * 350),
    mvTaxTransport: "Quarterly",
    category: "Four-wheeler (LMV) Goods",
    param: "1500kg", // weight
    mvTaxRealised: Math.floor(450000 + Math.random() * 1800000),
    mvFeesRealised: Math.floor(45000 + Math.random() * 180000),
    roadSafetyCess: Math.floor(12000 + Math.random() * 50000),
    cfPerDay: Math.floor(Math.random() * 7000),
  })),
  mmvPassenger: assamDistricts.map(district => ({
    district,
    totalVehicles: Math.floor(50 + Math.random() * 200),
    mvTaxTransport: "Quarterly",
    category: "MMV (Passenger)",
    param: "12+1", // seating capacity
    mvTaxRealised: Math.floor(600000 + Math.random() * 2500000),
    mvFeesRealised: Math.floor(60000 + Math.random() * 250000),
    roadSafetyCess: Math.floor(20000 + Math.random() * 80000),
    cfPerDay: Math.floor(Math.random() * 10000),
  })),
  mmvGoods: assamDistricts.map(district => ({
    district,
    totalVehicles: Math.floor(40 + Math.random() * 180),
    mvTaxTransport: "Quarterly",
    category: "MMV (Goods)",
    param: "5000kg", // weight
    mvTaxRealised: Math.floor(700000 + Math.random() * 3000000),
    mvFeesRealised: Math.floor(70000 + Math.random() * 300000),
    roadSafetyCess: Math.floor(25000 + Math.random() * 90000),
    cfPerDay: Math.floor(Math.random() * 12000),
  })),
  hmvPassenger: assamDistricts.map(district => ({
    district,
    totalVehicles: Math.floor(30 + Math.random() * 150),
    mvTaxTransport: "Quarterly",
    category: "HMV (Passenger)",
    param: "32+1", // seating capacity
    mvTaxRealised: Math.floor(1000000 + Math.random() * 4000000),
    mvFeesRealised: Math.floor(100000 + Math.random() * 400000),
    roadSafetyCess: Math.floor(40000 + Math.random() * 120000),
    cfPerDay: Math.floor(Math.random() * 15000),
  })),
  hmvGoods: assamDistricts.map(district => ({
    district,
    totalVehicles: Math.floor(60 + Math.random() * 250),
    mvTaxTransport: "Quarterly",
    category: "HMV (Goods)",
    param: "12000kg", // weight
    mvTaxRealised: Math.floor(1200000 + Math.random() * 5000000),
    mvFeesRealised: Math.floor(120000 + Math.random() * 500000),
    roadSafetyCess: Math.floor(50000 + Math.random() * 150000),
    cfPerDay: Math.floor(Math.random() * 18000),
  })),
  hmvGoods: assamDistricts.map(district => ({
    district,
    totalVehicles: Math.floor(60 + Math.random() * 250),
    mvTaxTransport: "Quarterly",
    category: "HMV (Goods)",
    param: "12000kg", // weight
    mvTaxRealised: Math.floor(1200000 + Math.random() * 5000000),
    mvFeesRealised: Math.floor(120000 + Math.random() * 500000),
    roadSafetyCess: Math.floor(50000 + Math.random() * 150000),
    cfPerDay: Math.floor(Math.random() * 18000),
  })),
};

// 4-Wheeler Split Data (5-Year vs 15-Year)
export const newReg4WheelerSplit = {
  fiveYear: assamDistricts.map(district => ({
    district,
    totalVehicles: Math.floor(20 + Math.random() * 100),
    mvTaxNonTransport: "5-Year",
    category: "Four-wheeler",
    originalCost: "VARIES",
    mvTaxRealised: Math.floor(500000 + Math.random() * 1500000),
    mvFeesRealised: Math.floor(20000 + Math.random() * 80000),
    roadSafetyCess: Math.floor(10000 + Math.random() * 30000),
    cfPenalty: Math.floor(Math.random() * 5000),
  })),
  fifteenYear: assamDistricts.map(district => ({
    district,
    totalVehicles: Math.floor(30 + Math.random() * 200),
    mvTaxNonTransport: "Lifetime (15Y)",
    category: "Four-wheeler",
    originalCost: "VARIES",
    mvTaxRealised: Math.floor(1000000 + Math.random() * 3500000),
    mvFeesRealised: Math.floor(80000 + Math.random() * 220000),
    roadSafetyCess: Math.floor(20000 + Math.random() * 70000),
    cfPenalty: Math.floor(Math.random() * 15000),
  })),
};

// Re-assignment Revenue Data (Clone structure of New Reg)
export const reassignmentRevenue = {
  twoWheeler: assamDistricts.map(district => ({
    district,
    totalVehicles: Math.floor(50 + Math.random() * 200),
    mvTaxNonTransport: "Re-assign",
    category: "Two-wheeler",
    weight: "Below 65kg",
    mvTaxRealised: Math.floor(100000 + Math.random() * 500000),
    mvFeesRealised: Math.floor(10000 + Math.random() * 50000),
    roadSafetyCess: Math.floor(5000 + Math.random() * 15000),
    cfPenalty: Math.floor(Math.random() * 2000),
  })),
  threeWheeler: assamDistricts.map(district => ({
    district,
    totalVehicles: Math.floor(20 + Math.random() * 80),
    mvTaxNonTransport: "Re-assign",
    category: "Three-wheeler",
    weight: "N/A",
    mvTaxRealised: Math.floor(50000 + Math.random() * 200000),
    mvFeesRealised: Math.floor(5000 + Math.random() * 20000),
    roadSafetyCess: Math.floor(2000 + Math.random() * 8000),
    cfPenalty: Math.floor(Math.random() * 1000),
  })),
  fourWheeler: assamDistricts.map(district => ({
    district,
    totalVehicles: Math.floor(30 + Math.random() * 150),
    mvTaxNonTransport: "Re-assign",
    category: "Four-wheeler",
    originalCost: "VARIES",
    mvTaxRealised: Math.floor(300000 + Math.random() * 1000000),
    mvFeesRealised: Math.floor(30000 + Math.random() * 100000),
    roadSafetyCess: Math.floor(10000 + Math.random() * 30000),
    cfPenalty: Math.floor(Math.random() * 5000),
  })),
  otherVehicles: assamDistricts.map(district => ({
    district,
    totalVehicles: Math.floor(10 + Math.random() * 50),
    mvTaxNonTransport: "Re-assign",
    category: "LMV/MMV/HMV",
    otherParams: "N/A",
    mvTaxRealised: Math.floor(200000 + Math.random() * 800000),
    mvFeesRealised: Math.floor(20000 + Math.random() * 60000),
    roadSafetyCess: Math.floor(8000 + Math.random() * 20000),
    cfPenalty: Math.floor(Math.random() * 4000),
  })),
};

// Green Tax Revenue Data
export const greenTaxRevenue = {
  nonTransport: assamDistricts.map(district => ({
    district,
    totalVehicles: Math.floor(100 + Math.random() * 600),
    period: "5 Years",
    category: "Non-Transport",
    mvFeesRealised: Math.floor(15000 + Math.random() * 60000),
    roadSafetyCess: Math.floor(5000 + Math.random() * 20000),
    cfPerDay: Math.floor(Math.random() * 3000),
    taxRealised: Math.floor(200000 + Math.random() * 800000),
  })),
  transport: assamDistricts.map(district => ({
    district,
    totalVehicles: Math.floor(150 + Math.random() * 800),
    period: "Annual",
    category: "Transport",
    mvFeesRealised: Math.floor(25000 + Math.random() * 90000),
    roadSafetyCess: Math.floor(8000 + Math.random() * 35000),
    cfPerDay: Math.floor(Math.random() * 5000),
    taxRealised: Math.floor(400000 + Math.random() * 1500000),
  })),
};

// Old/Renewal Revenue Data
export const renewalRevenue = {
  nonTransport: assamDistricts.map(district => ({
    district,
    totalVehicles: Math.floor(80 + Math.random() * 400),
    mvTaxNonTransport: "10-Year (Post 5Y)",
    category: "Non-Transport",
    mvTaxRealised: Math.floor(600000 + Math.random() * 2000000),
    mvFeesRealised: Math.floor(60000 + Math.random() * 200000),
    roadSafetyCess: Math.floor(20000 + Math.random() * 60000),
    cfPenalty: Math.floor(Math.random() * 10000),
  })),
};

// Permit Data
const permitTypes = ['Contract Carriage', 'Stage Carriage', 'Goods Carriage', 'National Permit', 'AITP'];
const vehicleClasses = ['Three Wheeler', 'Four Wheeler', 'MMV', 'HMV'];
const permitSubTypes = ['Temporary', 'Periodic', 'Special'];

export const permitFeesData = [];
export const permitApplicationsData = [];

assamDistricts.forEach(district => {
  // Permit Fees Data - 1-2 entries per district
  const numEntries = Math.floor(Math.random() * 2) + 1;
  for (let i = 0; i < numEntries; i++) {
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

// AETS (Automated Emission Testing Station) Data
export const aetsData = assamDistricts.map(district => {
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

// PUCC (Pollution Under Control Certificate) Data
const vehicleCategories = ['Two Wheeler', 'Three Wheeler', 'Four Wheeler', 'LMV', 'MMV', 'HMV'];

export const puccData = assamDistricts.flatMap(district => {
  return vehicleCategories.map(category => {
    const totalApplications = Math.floor(Math.random() * 500) + 100;
    const freshWithoutLateFee = Math.floor(totalApplications * (0.4 + Math.random() * 0.2));
    const freshWithLateFee = Math.floor(totalApplications * (0.2 + Math.random() * 0.15));
    const grandTotal = freshWithoutLateFee + freshWithLateFee;
    const feesRealized = grandTotal * (Math.floor(Math.random() * 200) + 100); // ₹100-300 per PUCC
    const lateFeeRealized = freshWithLateFee * 500; // ₹500 late fee per certificate

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

// Fitness Certificate Data
export const fitnessData = assamDistricts.map(district => {
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

export const enforcementData = assamDistricts.flatMap(district => {
  return offenceTypes.map(offence => {
    const casesBooked = Math.floor(Math.random() * 500) + 100;
    const cfImposed = casesBooked * (Math.floor(Math.random() * 1000) + 500); // ₹500-1500 per case
    const casesDisposed = Math.floor(casesBooked * (0.6 + Math.random() * 0.25)); // 60-85% disposed
    const cfRealised = Math.floor(cfImposed * (casesDisposed / casesBooked) * (0.8 + Math.random() * 0.15)); // 80-95% of imposed for disposed cases
    const casesPending = casesBooked - casesDisposed;
    const licensesSuspended = offence === 'Drunk Driving' || offence === 'Over Speeding'
      ? Math.floor(casesDisposed * (0.1 + Math.random() * 0.15)) // 10-25% for serious offences
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

// Export all data as a single object
export default {
  vehicleRegistrations,
  trafficIncidents,
  publicTransportRidership,
  congestionLevels,
  fuelEfficiency,
  roadMaintenance,
  revenueCollection,
  newRegistrationRevenue,
  newRegistrationTransportRevenue,
  newReg4WheelerSplit,
  reassignmentRevenue,
  greenTaxRevenue,
  renewalRevenue,
  permitFeesData,
  permitApplicationsData,
  aetsData,
  puccData,
  fitnessData,
  enforcementData,
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

