import React from 'react';
import Navbar from '@/components/shared/Navbar/Navbar'
import Footer from '@/components/shared/Footer';
const PublicLayout = ({children}:{children: React.ReactNode}) => {
    return (
        <div>
            <Navbar></Navbar>
            <main className='w-full min-h-dvh' >{children}</main>
            <Footer></Footer>
        </div>
    );
};

export default PublicLayout;