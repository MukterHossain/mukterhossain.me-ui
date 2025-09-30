import Sidebar from '@/components/shared/Sidebar';
import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    
    return (
        <div>
            <main className="min-h-dvh flex gap-4">
                <Sidebar />
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;