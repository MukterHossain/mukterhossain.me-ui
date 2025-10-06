import { IProject } from "@/types";
import Image from "next/image";
import Link from "next/link";


const ProjectCard = ({project}:{project:IProject}) => {
    return (
        <Link
      href={`/projects/${project?.id}`}
      className="block group h-full transform hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        {project?.thumbnail ? (
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={project?.thumbnail}
              
              alt={`${project?.title ? project?.title : "No Picture found"}`}
              fill
              sizes="full"
              priority={false}
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="h-56 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300">
            No Image
          </div>
        )}

        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
            {project?.title} 
          </h3>
          <div className="flex item-center mb-4">
            <div dangerouslySetInnerHTML={{ __html: project?.description?.slice(0, 40) || ""} }/> <span>...</span>
          </div>
          

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Image
                src={
                  project?.owner?.image ||
                  "https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
                }
                alt={`${project?.owner?.name ? project?.owner?.name : "No Picture found"}`}
                width={36}
                height={36}
                className="rounded-full border-2 border-gray-200 dark:border-gray-700"
              />
              <span className="text-gray-600 dark:text-gray-300 text-sm flex items-center gap-1">
                {project?.owner?.name}
                
              </span>
            </div>
          </div>

          <div className="text-right">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline">
              Read More →
            </span>
          </div>
        </div>
      </div>
    </Link>
    );
};

export default ProjectCard;