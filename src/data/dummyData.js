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

// Export all data as a single object
export default {
  vehicleRegistrations,
  trafficIncidents,
  publicTransportRidership,
  congestionLevels,
  fuelEfficiency,
  roadMaintenance,
  revenueCollection,
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

