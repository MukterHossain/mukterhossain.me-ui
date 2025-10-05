import BlogTable from '@/components/modules/Blogs/BlogTable';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const ManageBlog = () => {
    return (
        <div className='mt-12 max-w-7xl mx-auto'>
            <div className='flex flex-wrap justify-center items-center sm:justify-between  px-10  p-6 bg-white shadow-md rounded-lg gap-4 w-full'>
                <h1 className='text-xl sm:text-2xl font-semibold'>Manage Blog</h1>
                <Link href={'/dashboard/create-blog'}>
                    <Button className="bg-gradient-to-r from-green-600  to-sky-600 font-semibold hover:bg-gradient-to-br hover:from-sky-600 hover:to-green-600 transition duration-300 ">Create Blog</Button>
                </Link>
            </div>
            <div className='mt-10 w-full'>
                <BlogTable></BlogTable>
            </div>
        </div>
    );
};

export default ManageBlog;