import EditProjectForm from '@/components/modules/Projects/EditProjectForm';
import React from 'react';

const EditProject =async ({params}: {params:Promise<{projectId:string}>}) => {
    const {projectId} =await params
    
     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${projectId}`)
    const data  = await res.json()
    const projects = data?.data?.project
   
    return (
        <div>
            <h1>Edit Project</h1>
            <div>
                <EditProjectForm project={projects}></EditProjectForm>
            </div>
        </div>
    );
};

export default EditProject;