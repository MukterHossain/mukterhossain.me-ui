import ProjectCard from '@/components/modules/Projects/ProjectCard';
import { IProject } from '@/types';
import { Metadata } from 'next';


export const metadata:Metadata ={
    title: "All Projects | Portfolio",
    description: "Browser all projects post on web development, Next.js, React, Typescript, and more. Stay updated with the latest tutorials and articles.",
}

const ProjectsPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`)
    const data = await res.json()
    console.log("data", data.data.projects)
    const projects = data.data.projects
    return (
        <div className='max-w-7xl mx-auto p-5'>
            <h1>Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-5">
                {
                    projects?.map((project: IProject) => (
                        <ProjectCard key={project?.id} project={project}></ProjectCard>
                    ))
                }
            </div>
        </div>
    );
};

export default ProjectsPage;