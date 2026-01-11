# Transport Department Statistics Dashboard

A comprehensive React-based dashboard for visualizing transport department statistics and metrics.

## Features

- **Overview Dashboard**: Aggregated statistics and key metrics across all categories
- **Vehicle Registrations**: Track registrations by type (cars, bikes, trucks)
- **Traffic Incidents**: Monitor accidents, violations, and breakdowns
- **Public Transport**: Ridership data and on-time performance metrics
- **Sustainability**: Fuel efficiency trends and congestion levels
- **Road Maintenance**: Project completion rates and maintenance statistics

## Technologies Used

- React 18.2.0
- React Router DOM 6.20.0
- Chart.js 4.4.0 & react-chartjs-2 5.2.0
- Tailwind CSS 3.3.6
- PapaParse 5.4.1 (prepared for CSV import functionality)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
Transport_intern/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Overview.js
│   │   ├── Vehicles.js
│   │   ├── Traffic.js
│   │   ├── PublicTransport.js
│   │   ├── Sustainability.js
│   │   └── Maintenance.js
│   ├── data/
│   │   └── dummyData.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Features Details

### Interactive Features

- **Month Filtering**: Filter data by selecting specific months
- **Search Functionality**: Search across metrics (Overview tab)
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Chart Tooltips**: Interactive tooltips on all charts
- **Data Tables**: Detailed tabular views of all metrics

### Data Structure

The dummy data is structured in `src/data/dummyData.js` with monthly data for Jan-Dec 2025:

- Vehicle Registrations (cars, bikes, trucks)
- Traffic Incidents (accidents, violations, breakdowns)
- Public Transport Ridership (passenger counts, on-time percentage)
- Congestion Levels (average delay times)
- Fuel Efficiency (average MPG trends)
- Road Maintenance (completion rates, scheduled/completed projects)

### CSV Import (Prepared)

The codebase includes commented-out CSV import functionality using PapaParse. To enable:

1. Uncomment the import and function in `src/data/dummyData.js`
2. Add file upload UI component
3. Implement data parsing and state management

## Customization

### Styling

The app uses Tailwind CSS. Customize colors and themes in `tailwind.config.js`.

### Adding New Metrics

1. Add data structure to `src/data/dummyData.js`
2. Create a new component in `src/components/`
3. Add route in `src/App.js`
4. Add navigation link in the header

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for educational and demonstration purposes.

