import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const ManageBlog = () => {
    return (
        <div className=''>
            <h1>Manage Blog</h1>
            <Link href={'/dashboard/create-blog'}><Button >Create Blog</Button></Link>
            
            <div>
                <h1>Table</h1>
            </div>
        </div>
    );
};

export default ManageBlog;