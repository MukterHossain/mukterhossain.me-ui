import Analytics from '@/components/modules/Dashboard/Analytics';
import { getUserSession } from '@/helpers/getUserSession';
import React from 'react';

const DashboardHome =async () => {
    const session =await getUserSession()
    console.log("Dashboard Session:", session?.user.id);
    return (
        <div className='max-w-7xl mx-auto p-5 mt-12'>
            <h1>Dashboard</h1>
            <Analytics></Analytics>
        </div>
    );
};

export default DashboardHome;