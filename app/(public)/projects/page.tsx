import ProjectCard from '@/components/modules/Projects/ProjectCard';
import Loading from '@/components/ui/Loading';
import { IProject } from '@/types';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "All Projects | Portfolio",
    description: "Browser all projects post on web development, Next.js, React, Typescript, and more. Stay updated with the latest tutorials and articles.",
}

const ProjectsPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
        next: {
            revalidate: 60,
            tags: ["PROJECTS"]
        },
    })
    const data = await res.json()
    const projects = data?.data?.projects || []

    return (
        <div className='max-w-7xl mx-auto p-5 my-16'>
            <h2 className="text-3xl font-bold text-center mb-6">All Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 md:grid-cols-3 gap-5 ">
                {projects?.length > 0 ? (
                    projects?.map((project: IProject) => (
                        <ProjectCard key={project?.id} project={project}></ProjectCard>
                    ))
                ) :
                    (
                        <p className="text-center text-2xl py-10">No Projects available</p>
                    )}
                {

                }
            </div>
        </div>
    );
};

export default ProjectsPage;