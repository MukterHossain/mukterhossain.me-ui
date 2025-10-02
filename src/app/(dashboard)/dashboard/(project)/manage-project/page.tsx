import ProjectTable from '@/components/modules/Projects/ProjectTable';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const ManageProject = () => {
    return (
        <div>
            <h1>Manage Project</h1>
            <Link href={'/dashboard/create-project'}><Button >Create Project</Button></Link>
            <h1>Table</h1>
            <div>
                <ProjectTable></ProjectTable>
            </div>
            
        </div>
    );
};

export default ManageProject;