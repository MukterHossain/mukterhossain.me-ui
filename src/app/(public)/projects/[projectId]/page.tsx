import ProjectDetailsCard from '@/components/modules/Projects/ProjectDetailsCard';
import React from 'react';

const ProjectDetails = async ({params}: {params:Promise<{projectId:string}>}) => {
    const {projectId} =await params
    
     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${projectId}`)
    const data  = await res.json()
    const project = data?.data?.project
    console.log("data", project)
    return (
        <div>
            <h1>Project Details</h1>
            <div>
                <ProjectDetailsCard key={project?.id} project={project}></ProjectDetailsCard>
            </div>
        </div>
    );
};

export default ProjectDetails;