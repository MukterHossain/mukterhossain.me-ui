import { IProject } from "@/types";
import { ExternalLink } from "lucide-react";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";


const ProjectDetailsCard = ({ project }: { project: IProject }) => {
    return (
        <main className="bg-white max-w-5xl  mx-auto dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 mt-12">
            {project?.thumbnail ? (
                <div className="relative h-56 sm:h-70 md:h-80 lg:h-90 w-full overflow-hidden">
                    <Image
                        src={project?.thumbnail}

                        alt={`${project?.title ? project?.title : "No Picture found"}`}
                        fill
                        sizes="full"
                        loading="lazy"
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

                 <div className=" mb-4">
            <div dangerouslySetInnerHTML={{ __html: project?.description ? project?.description : "No Description found"} }/>
          </div>
                <div className=" gap-4 my-4">
                    <h1 className="font-bold text-lg">Features:</h1>
                    <ul className="list-disc ml-5 list-inside space-y-1 text-gray-700 dark:text-gray-300">
                        {project?.features?.map((fea, i) => (
                            <li key={i}>{fea}</li>
                        ))}
                    </ul>
                </div>

                <div className="flex gap-4 my-4">
                    <a href={project?.liveUrl ? project?.liveUrl : "Not Found"} className="flex items-center gap-1 text-blue-600 hover:underline" target="_blank"> <ExternalLink size={18}></ExternalLink>Live Site</a>
                    <a href={project?.repoUrl ? project?.repoUrl : "Not Found"} className="flex items-center gap-1 text-blue-600 hover:underline" target="_blank"> <FaGithub size={18}></FaGithub>Github Repo</a>
                </div>


                <div className="flex items-center justify-end mb-4">
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
                        <div className="flex flex-col">
                            <span className="text-gray-600 dark:text-gray-300 text-sm flex items-center gap-1">
                                {project?.owner?.name}

                            </span>
                            <span className="text-gray-500 dark:text-gray-400 text-sm">
                                {project?.owner?.email}
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default ProjectDetailsCard;