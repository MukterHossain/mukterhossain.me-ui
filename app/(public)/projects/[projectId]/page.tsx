import ProjectDetailsCard from '@/components/modules/Projects/ProjectDetailsCard';
import React from 'react';

export const generateMetadata =async({params}:{params:Promise<{projectId:string}>})=>{
const {projectId} =await params
    
     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${projectId}`)
    const data  = await res.json()
    const project = data?.data?.project
    return {
        title: project?.title,
        description: project?.description
    }
}

const ProjectDetails = async ({params}: {params:Promise<{projectId:string}>}) => {
    const {projectId} =await params
    
     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${projectId}`)
    const data  = await res.json()
    const project = data?.data?.project
    return (
        <div className='max-w-7xl mx-auto p-5'>
            <h1>Project Details</h1>
            <div>
                <ProjectDetailsCard key={project?.id} project={project}></ProjectDetailsCard>
            </div>
        </div>
    );
};

export default ProjectDetails;