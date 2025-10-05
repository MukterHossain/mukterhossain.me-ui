import Analytics from '@/components/modules/Dashboard/Analytics';
import Loading from '@/components/ui/Loading';
import { getUserSession } from '@/helpers/getUserSession';
import React from 'react';


const DashboardHome =async () => {
      const session = await getUserSession()
   
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/${session?.user.id}` )
    const {dashboardData} = await res.json()
    if(!dashboardData){
        return <Loading></Loading>
    }
    if(!dashboardData){
        return <div className="py-20 text-center text-gray-500">No Data Found</div>
    }
    // console.log("dashboardData", dashboardData);

    return (
        <div className='max-w-7xl mx-auto p-5 mt-12'>
            <h1 className="text-3xl font-bold mb-4">Dashboar Overview</h1>
            <Analytics dashboardData={dashboardData}></Analytics>
        </div>
    );
};

export default DashboardHome;