import ProjectTable from '@/components/modules/Projects/ProjectTable';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const ManageProject = () => {
    return (
        <div className='max-w-7xl mx-auto mt-12'>
            <div className='flex flex-wrap justify-center items-center sm:justify-between  px-10  p-6 bg-white shadow-md rounded-lg gap-4 w-full'>
                <h1 className='text-xl sm:text-2xl font-semibold'>Manage Project</h1>
                <Link href={'/dashboard/create-project'}>
                    <Button className="bg-gradient-to-r from-green-600  to-sky-600 font-semibold hover:bg-gradient-to-br hover:from-sky-600 hover:to-green-600 transition duration-300 ">Create Project</Button>
                </Link>
            </div>
            <div className='mt-10'>
                <ProjectTable></ProjectTable>
            </div>

        </div>
    );
};

export default ManageProject;