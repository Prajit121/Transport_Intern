// Dummy data for Transport Department Statistics Dashboard
// Monthly data for Jan-Dec 2025

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const pad2 = (n) => String(n).padStart(2, '0');
const formatISODate = (d) => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
const addDays = (date, days) => {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
};

// Vehicle Registrations by type
export const vehicleRegistrations = months.map((month, index) => {
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
    transport: Math.floor((cars + twoWheeler) * 0.1 + threeWheeler + others * 0.8),
  };
});

export const vehicleRegistrations2026 = months.map((month, index) => {
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
    transport: Math.floor((cars + twoWheeler) * 0.1 + threeWheeler + others * 0.8),
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
    laborCess: Math.floor((25000 + Math.random() * 8000) * revenueFactor),
  };
});

export const revenueCollection2026 = months.map((month, index) => {
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
    laborCess: Math.floor((25000 + Math.random() * 8000) * revenueFactor),
  };
});

// List of Districts in Assam
export const assamDistricts = [
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
      permitIssuanceDate: (() => {
        const d = new Date(2025, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
        return formatISODate(d);
      })(),
      validity: (() => {
        const options = ['1 Year', '3 Year', '5 Year'];
        return options[Math.floor(Math.random() * options.length)];
      })(),
      permitValidUpto: (() => {
        const base = new Date(2025, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
        const years = [1, 3, 5][Math.floor(Math.random() * 3)];
        const upto = new Date(base);
        upto.setFullYear(upto.getFullYear() + years);
        return formatISODate(upto);
      })(),
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

export const permitFeesData2026 = permitFeesData.map(d => ({
  ...d,
  totalVehicles: Math.floor(d.totalVehicles * 1.15),
  period1Year: Math.floor(d.period1Year * 1.15),
  period3Year: Math.floor(d.period3Year * 1.15),
  period5Year: Math.floor(d.period5Year * 1.15),
  permitFeeRealised: Math.floor(d.permitFeeRealised * 1.15),
  lateFeeRealised: Math.floor(d.lateFeeRealised * 1.15),
}));

// PUCC (Pollution Under Control Certificate) Data
const vehicleCategories = ['Two Wheeler', 'Three Wheeler', 'Four Wheeler', 'LMV', 'MMV', 'HMV'];

export const puccData = assamDistricts.flatMap(district => {
  const aetsNameAddress = `AETS ${district} - Main Road, ${district}, Assam`;
  return vehicleCategories.map(category => {
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
      aetsNameAddress,
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

// Generate district-wise detailed revenue collection statement
export const districtWiseRevenue = assamDistricts.map(district => {
  const factor = 0.5 + Math.random(); // Varied performance by district
  return {
    district,
    mvTax: {
      nonTransport: Math.floor(1200000 * factor),
      newReg: Math.floor(850000 * factor),
      alreadyReg: Math.floor(450000 * factor),
    },
    mvFees: {
      sarathi: Math.floor(150000 * factor),
      vahan: Math.floor(220000 * factor),
      pucc: Math.floor(80000 * factor),
    },
    roadSafetyCess: {
      nonTransport: Math.floor(350000 * factor),
      transport: Math.floor(250000 * factor),
    },
    greenTax: {
      nonTransport: Math.floor(180000 * factor),
      transport: Math.floor(120000 * factor),
    },
    compoundingFees: {
      offenceCF: Math.floor(95000 * factor),
      perDayCF: Math.floor(45000 * factor),
      fitnessCF: Math.floor(35000 * factor),
      puccLateFine: Math.floor(25000 * factor),
      otherLateFees: Math.floor(15000 * factor),
    },
    apgt: Math.floor(110000 * factor),
    hsrp: Math.floor(140000 * factor),
    laborCess: Math.floor(80000 * factor),
    mvArrear: Math.floor(60000 * factor),
    socialSecurity: Math.floor(40000 * factor),
    permitFeeCess: Math.floor(30000 * factor),
  };
});

// Generate district-wise detailed revenue collection statement for 2024
export const districtWiseRevenue2024 = assamDistricts.map(district => {
  const factor = 0.5 + Math.random(); // Varied performance by district
  const growth = 1 + (Math.random() * 0.2 - 0.2); // -20% to 0% growth
  return {
    district,
    mvTax: {
      nonTransport: Math.floor(1200000 * factor * growth),
      newReg: Math.floor(850000 * factor * growth),
      alreadyReg: Math.floor(450000 * factor * growth),
    },
    mvFees: {
      sarathi: Math.floor(150000 * factor * growth),
      vahan: Math.floor(220000 * factor * growth),
      pucc: Math.floor(80000 * factor * growth),
    },
    roadSafetyCess: {
      nonTransport: Math.floor(350000 * factor * growth),
      transport: Math.floor(250000 * factor * growth),
    },
    greenTax: {
      nonTransport: Math.floor(180000 * factor * growth),
      transport: Math.floor(120000 * factor * growth),
    },
    compoundingFees: {
      offenceCF: Math.floor(95000 * factor * growth),
      perDayCF: Math.floor(45000 * factor * growth),
      fitnessCF: Math.floor(35000 * factor * growth),
      puccLateFine: Math.floor(25000 * factor * growth),
      otherLateFees: Math.floor(15000 * factor * growth),
    },
    apgt: Math.floor(110000 * factor * growth),
    hsrp: Math.floor(140000 * factor * growth),
    laborCess: Math.floor(80000 * factor * growth),
    mvArrear: Math.floor(60000 * factor * growth),
    socialSecurity: Math.floor(40000 * factor * growth),
    permitFeeCess: Math.floor(30000 * factor * growth),
  };
});

// Generate district-wise detailed revenue collection statement for 2023
export const districtWiseRevenue2023 = assamDistricts.map(district => {
  const factor = 0.5 + Math.random(); // Varied performance by district
  const growth = 1 + (Math.random() * 0.2 - 0.4); // -40% to -20% growth
  return {
    district,
    mvTax: {
      nonTransport: Math.floor(1200000 * factor * growth),
      newReg: Math.floor(850000 * factor * growth),
      alreadyReg: Math.floor(450000 * factor * growth),
    },
    mvFees: {
      sarathi: Math.floor(150000 * factor * growth),
      vahan: Math.floor(220000 * factor * growth),
      pucc: Math.floor(80000 * factor * growth),
    },
    roadSafetyCess: {
      nonTransport: Math.floor(350000 * factor * growth),
      transport: Math.floor(250000 * factor * growth),
    },
    greenTax: {
      nonTransport: Math.floor(180000 * factor * growth),
      transport: Math.floor(120000 * factor * growth),
    },
    compoundingFees: {
      offenceCF: Math.floor(95000 * factor * growth),
      perDayCF: Math.floor(45000 * factor * growth),
      fitnessCF: Math.floor(35000 * factor * growth),
      puccLateFine: Math.floor(25000 * factor * growth),
      otherLateFees: Math.floor(15000 * factor * growth),
    },
    apgt: Math.floor(110000 * factor * growth),
    hsrp: Math.floor(140000 * factor * growth),
    laborCess: Math.floor(80000 * factor * growth),
    mvArrear: Math.floor(60000 * factor * growth),
    socialSecurity: Math.floor(40000 * factor * growth),
    permitFeeCess: Math.floor(30000 * factor * growth),
  };
});

// Generate district-wise detailed revenue collection statement for 2026
export const districtWiseRevenue2026 = assamDistricts.map(district => {
  const factor = 0.5 + Math.random(); // Varied performance by district
  const growth = 1 + (Math.random() * 0.4 - 0.1); // -10% to +30% growth
  return {
    district,
    mvTax: {
      nonTransport: Math.floor(1200000 * factor * growth),
      newReg: Math.floor(850000 * factor * growth),
      alreadyReg: Math.floor(450000 * factor * growth),
    },
    mvFees: {
      sarathi: Math.floor(150000 * factor * growth),
      vahan: Math.floor(220000 * factor * growth),
      pucc: Math.floor(80000 * factor * growth),
    },
    roadSafetyCess: {
      nonTransport: Math.floor(350000 * factor * growth),
      transport: Math.floor(250000 * factor * growth),
    },
    greenTax: {
      nonTransport: Math.floor(180000 * factor * growth),
      transport: Math.floor(120000 * factor * growth),
    },
    compoundingFees: {
      offenceCF: Math.floor(95000 * factor * growth),
      perDayCF: Math.floor(45000 * factor * growth),
      fitnessCF: Math.floor(35000 * factor * growth),
      puccLateFine: Math.floor(25000 * factor * growth),
      otherLateFees: Math.floor(15000 * factor * growth),
    },
    apgt: Math.floor(110000 * factor * growth),
    hsrp: Math.floor(140000 * factor * growth),
    laborCess: Math.floor(80000 * factor * growth),
    mvArrear: Math.floor(60000 * factor * growth),
    socialSecurity: Math.floor(40000 * factor * growth),
    permitFeeCess: Math.floor(30000 * factor * growth),
  };
});

// Generate district-wise vehicle registration data
export const districtWiseVehicles = assamDistricts.map(district => {
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

// Generate district-wise vehicle registration data for 2024 (Baseline)
export const districtWiseVehicles2024 = assamDistricts.map(district => {
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

// Generate district-wise vehicle registration data for 2026 (Projected)
export const districtWiseVehicles2026 = assamDistricts.map(district => {
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

// Generate district-wise vehicle registration applications data (from image)
export const registrationApplicationsData = assamDistricts.map(district => {
  const totalReceived = Math.floor(Math.random() * 800) + 200;
  const dealerPoint = Math.floor(totalReceived * (0.85 + Math.random() * 0.1));
  const dtoOffice = totalReceived - dealerPoint;
  const approved = Math.floor(totalReceived * (0.75 + Math.random() * 0.2));
  const scrutiny = Math.floor((totalReceived - approved) * 0.6);
  const approvalStage = totalReceived - approved - scrutiny;
  const baseDate = new Date(2026, 3, 1 + Math.floor(Math.random() * 60)); // Apr-May 2026
  const scrutinyDate = addDays(baseDate, 2 + Math.floor(Math.random() * 6));
  const approvalDate = addDays(scrutinyDate, 1 + Math.floor(Math.random() * 5));
  const timeTakenDays = Math.max(0, Math.round((approvalDate - baseDate) / (1000 * 60 * 60 * 24)));

  return {
    district,
    totalReceived,
    dealerPoint,
    dtoOffice,
    scrutiny,
    approvalStage,
    approved,
    applicationDate: formatISODate(baseDate),
    scrutinyDate: formatISODate(scrutinyDate),
    approvalDate: formatISODate(approvalDate),
    timeTakenDays,
  };
});

export const registrationApplicationsData2026 = registrationApplicationsData.map(d => ({
  district: d.district,
  totalReceived: Math.floor(d.totalReceived * 1.12),
  dealerPoint: Math.floor(d.dealerPoint * 1.12),
  dtoOffice: Math.floor(d.dtoOffice * 1.12),
  scrutiny: Math.floor(d.scrutiny * 1.12),
  approvalStage: Math.floor(d.approvalStage * 1.12),
  approved: Math.floor(d.approved * 1.12)
}));

// Generate 2024 and 2026 variants for Permit, PUCC, AETS, Fitness, and Enforcement
export const permitApplicationsData2024 = permitApplicationsData.map(row => {
  const g = 1 + (Math.random() * 0.2 - 0.2);
  return { ...row, totalReceived: Math.floor(row.totalReceived * g), online: Math.floor(row.online * g), offline: Math.floor(row.offline * g), scrutiny: Math.floor(row.scrutiny * g), approvalStage: Math.floor(row.approvalStage * g), approved: Math.floor(row.approved * g) };
});
export const permitApplicationsData2026 = permitApplicationsData.map(row => {
  const g = 1 + (Math.random() * 0.4 - 0.1);
  return { ...row, totalReceived: Math.floor(row.totalReceived * g), online: Math.floor(row.online * g), offline: Math.floor(row.offline * g), scrutiny: Math.floor(row.scrutiny * g), approvalStage: Math.floor(row.approvalStage * g), approved: Math.floor(row.approved * g) };
});
export const aetsData2024 = aetsData.map(r => { const g = 1 + (Math.random() * 0.2 - 0.2); return {...r, totalCentres: r.totalCentres, calibratedCentres: Math.floor(r.calibratedCentres * g), feesDeposited: Math.floor(r.feesDeposited * g)}; });
export const aetsData2026 = aetsData.map(r => { const g = 1 + (Math.random() * 0.4 - 0.1); return {...r, totalCentres: r.totalCentres, calibratedCentres: Math.floor(r.calibratedCentres * g), feesDeposited: Math.floor(r.feesDeposited * g)}; });
export const puccData2024 = puccData.map(r => { const g = 1 + (Math.random() * 0.2 - 0.2); return {...r, totalVehicles: Math.floor(r.totalVehicles*g), totalApplications: Math.floor(r.totalApplications*g), freshWithoutLateFee: Math.floor(r.freshWithoutLateFee*g), freshWithLateFee: Math.floor(r.freshWithLateFee*g), grandTotal: Math.floor(r.grandTotal*g), feesRealized: Math.floor(r.feesRealized*g), lateFeeRealized: Math.floor(r.lateFeeRealized*g)}; });
export const puccData2026 = puccData.map(r => { const g = 1 + (Math.random() * 0.4 - 0.1); return {...r, totalVehicles: Math.floor(r.totalVehicles*g), totalApplications: Math.floor(r.totalApplications*g), freshWithoutLateFee: Math.floor(r.freshWithoutLateFee*g), freshWithLateFee: Math.floor(r.freshWithLateFee*g), grandTotal: Math.floor(r.grandTotal*g), feesRealized: Math.floor(r.feesRealized*g), lateFeeRealized: Math.floor(r.lateFeeRealized*g)}; });
export const fitnessData2024 = fitnessData.map(r => { const g = 1 + (Math.random() * 0.2 - 0.2); return {...r, totalTransportVehicles: Math.floor(r.totalTransportVehicles*g), certificatesApplied: Math.floor(r.certificatesApplied*g), certificatesIssued: Math.floor(r.certificatesIssued*g), certificatesRejected: Math.floor(r.certificatesRejected*g), certificatesImpounded: Math.floor(r.certificatesImpounded*g), feesRealised: Math.floor(r.feesRealised*g), lateFeeRealised: Math.floor(r.lateFeeRealised*g), withoutFCCasesBooked: Math.floor(r.withoutFCCasesBooked*g)};});
export const fitnessData2026 = fitnessData.map(r => { const g = 1 + (Math.random() * 0.4 - 0.1); return {...r, totalTransportVehicles: Math.floor(r.totalTransportVehicles*g), certificatesApplied: Math.floor(r.certificatesApplied*g), certificatesIssued: Math.floor(r.certificatesIssued*g), certificatesRejected: Math.floor(r.certificatesRejected*g), certificatesImpounded: Math.floor(r.certificatesImpounded*g), feesRealised: Math.floor(r.feesRealised*g), lateFeeRealised: Math.floor(r.lateFeeRealised*g), withoutFCCasesBooked: Math.floor(r.withoutFCCasesBooked*g)};});
export const enforcementData2024 = enforcementData.map(r => { const g = 1 + (Math.random() * 0.2 - 0.2); return {...r, casesBooked: Math.floor(r.casesBooked*g), cfImposed: Math.floor(r.cfImposed*g), casesDisposed: Math.floor(r.casesDisposed*g), cfRealised: Math.floor(r.cfRealised*g), casesPending: Math.floor(r.casesPending*g), licensesSuspended: Math.floor(r.licensesSuspended*g)};});
export const enforcementData2026 = enforcementData.map(r => { const g = 1 + (Math.random() * 0.4 - 0.1); return {...r, casesBooked: Math.floor(r.casesBooked*g), cfImposed: Math.floor(r.cfImposed*g), casesDisposed: Math.floor(r.casesDisposed*g), cfRealised: Math.floor(r.cfRealised*g), casesPending: Math.floor(r.casesPending*g), licensesSuspended: Math.floor(r.licensesSuspended*g)};});

// Dealer Audit Data
export const dealerAuditData = [
  { dealerName: 'Sri Kamakhya Motors', totalRegistrations: 450, twoWheeler: 400, threeWheeler: 0, nonTransport: 50, mobileUpdates: 120, tradeCertStatus: 'Valid', validUntil: '2027-10-15', tradeRegMarksObtained: 28 },
  { dealerName: 'Bimal Auto Agency', totalRegistrations: 320, twoWheeler: 150, threeWheeler: 20, nonTransport: 150, mobileUpdates: 95, tradeCertStatus: 'Valid', validUntil: '2026-11-20', tradeRegMarksObtained: 19 },
  { dealerName: 'Podder Car World', totalRegistrations: 680, twoWheeler: 0, threeWheeler: 0, nonTransport: 680, mobileUpdates: 420, tradeCertStatus: 'Expired', validUntil: '2025-12-31', tradeRegMarksObtained: 35 },
  { dealerName: 'Pallavi Motors', totalRegistrations: 290, twoWheeler: 290, threeWheeler: 0, nonTransport: 0, mobileUpdates: 110, tradeCertStatus: 'Valid', validUntil: '2026-08-05', tradeRegMarksObtained: 14 },
  { dealerName: 'Gargya Toyota', totalRegistrations: 180, twoWheeler: 0, threeWheeler: 0, nonTransport: 180, mobileUpdates: 140, tradeCertStatus: 'Expiring Soon', validUntil: '2026-05-15', tradeRegMarksObtained: 9 },
  { dealerName: 'Sethi Motors', totalRegistrations: 510, twoWheeler: 480, threeWheeler: 30, nonTransport: 0, mobileUpdates: 230, tradeCertStatus: 'Valid', validUntil: '2028-02-10', tradeRegMarksObtained: 31 },
];

// District-wise enforcement manpower & equipment availability (blank/partial dummy for now)
export const districtWiseEnforcementManpowerEquipment = assamDistricts.map((district) => ({
  district,
  dtoName: '',
  enforcementInspectorName: '',
  mvis: '',
  aeis: '',
  enforcementCheckers: '',
  totalTIVsAvailable: '',
  vehiclesForEnforcementDrive: '',
  echallanDeviceNumber: '',
  breathAnalyserDeviceNumber: '',
  echallanFunctionalStatus: '',
  breathAnalyserFunctionalStatus: '',
  tivFunctionalStatus: '',
  otherDeviceEquipment: '',
  officialDrivers: '',
  homeguardsTotal: '',
  vehicleDetails: [
    {
      vehicleNumber: '',
      speedometerReadingAsOnDate: '',
      makeModel: '',
      runningCondition: '',
    },
  ],
}));

// Service Delivery Data
export const serviceDeliveryData = {
  contactless: {
    physical: 125000,
    eService: 480000 
  },
  delivery: [
    { serviceName: 'Learner License Issuance', applicationsHandled: 150000, avgProcessingTime: '2 Days' },
    { serviceName: 'Driving License Renewal', applicationsHandled: 85000, avgProcessingTime: '5 Days' },
    { serviceName: 'Vehicle Registration (Dealer)', applicationsHandled: 210000, avgProcessingTime: '1 Day' },
    { serviceName: 'Fitness Certificate', applicationsHandled: 45000, avgProcessingTime: 'Same Day' },
    { serviceName: 'Permit Issuance/Renewal', applicationsHandled: 32000, avgProcessingTime: '3 Days' },
  ],
  pendency: [
    { serviceName: 'Learner License Issuance', pendingApplications: 450 },
    { serviceName: 'Driving License Renewal', pendingApplications: 1200 },
    { serviceName: 'Vehicle Registration', pendingApplications: 350 },
    { serviceName: 'Fitness Certificate', pendingApplications: 80 },
    { serviceName: 'Permit Issuance/Renewal', pendingApplications: 210 },
  ]
};

// Export all data as a single object
export default {
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
  serviceDeliveryData,
  districtWiseEnforcementManpowerEquipment,
  assamDistricts,
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

