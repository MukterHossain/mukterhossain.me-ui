import ProjectTable from '@/components/modules/Projects/ProjectTable';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const ManageProject = () => {
    return (
        <div className='max-w-7xl mx-auto mt-12'>
            <div className='flex justify-between p-5 bg-white shadow-md rounded-lg space-y-4 w-full'>
                <h1>Manage Project</h1>
                <Link href={'/dashboard/create-project'}>
                    <Button >Create Project</Button>
                </Link>
            </div>
            <div className='mt-10'>
                <ProjectTable></ProjectTable>
            </div>

        </div>
    );
};

export default ManageProject;