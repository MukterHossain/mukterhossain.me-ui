import Sidebar from '@/components/shared/Sidebar';
import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    
    return (
        <div className='overflow-x-hidden relative'>
            <main className="min-h-screen flex overflow-hidden">
                <Sidebar />
                <div className='flex-1 overflow-y-auto px-10'>
                  {children}  
                </div>
                
            </main>
        </div>
    );
};

export default DashboardLayout;