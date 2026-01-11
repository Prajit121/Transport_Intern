import './globals.css';
import DashboardLayout from '../components/DashboardLayout';

export const metadata = {
    title: 'Transport Department Dashboard',
    description: 'Dashboard for Assam State Transport Department',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <DashboardLayout>
                    {children}
                </DashboardLayout>
            </body>
        </html>
    );
}
