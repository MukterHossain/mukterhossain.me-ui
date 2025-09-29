import ProjectCard from '@/components/modules/Projects/ProjectCard';
import { IProject } from '@/types';


const ProjectsPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`)
    const data = await res.json()
    console.log("data", data.data.projects)
    const projects = data.data.projects
    return (
        <div>
            <h1>Projects</h1>
            <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto">
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