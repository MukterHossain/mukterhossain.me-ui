import React from 'react';

const PublicLayout = ({children}:{children: React.ReactNode}) => {
    return (
        <div>
            <main className='w-full min-h-dvh' >{children}</main>
        </div>
    );
};

export default PublicLayout;