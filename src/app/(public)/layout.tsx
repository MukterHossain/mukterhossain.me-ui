import React from 'react';
import Navbar from '@/components/shared/Navbar/Navbar'
const PublicLayout = ({children}:{children: React.ReactNode}) => {
    return (
        <div>
            <Navbar></Navbar>
            <main className='w-full min-h-dvh' >{children}</main>
        </div>
    );
};

export default PublicLayout;