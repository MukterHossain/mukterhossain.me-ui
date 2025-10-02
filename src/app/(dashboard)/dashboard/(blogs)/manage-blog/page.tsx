import BlogTable from '@/components/modules/Blogs/BlogTable';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const ManageBlog = () => {
    return (
        <div className='mt-12 max-w-7xl mx-auto'>
            <div className='flex justify-between px-10  p-6 bg-white shadow-md rounded-lg space-y-4 w-full'>
                <h1>Manage Blog</h1>
                <Link href={'/dashboard/create-blog'}>
                    <Button >Create Blog</Button>
                </Link>
            </div>
            <div className='mt-10 w-full'>
                <BlogTable></BlogTable>
            </div>
        </div>
    );
};

export default ManageBlog;