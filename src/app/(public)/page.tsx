import BlogCard from "@/components/modules/Blogs/BlogCard"
import Hero from "@/components/modules/Home/Hero"
import ProjectCard from "@/components/modules/Projects/ProjectCard"
import { IBlog, IProject } from "@/types"


export default async function HomePage() {
  const resBlogs = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
    next: {
      tags: ["BLOGS"]
    }
  })
  const blogsData = await resBlogs.json()
  const blogs = blogsData?.result?.blogs


  const resProjects = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
    next: {
      tags: ["PROJECTS"]
    }
  })
  const data = await resProjects.json()
  const projects = data.data.projects
  return (
    <div className="max-w-7xl mx-auto p-5">
      <Hero></Hero>
      <div className="my-16 ">
        <h2 className="text-3xl font-bold text-center mb-6">Latest Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 md:grid-cols-3 gap-5 ">

          {
            blogs?.slice(0, 3)?.map((blog: IBlog) => (
              <BlogCard key={blog?.id} post={blog}></BlogCard>
            ))
          }
        </div>
      </div>
      <div className="my-16 ">
        <h2 className="text-3xl font-bold text-center mb-6">Latest Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 md:grid-cols-3 gap-5 ">

          {
            projects?.slice(0, 3)?.map((project: IProject) => (
              <ProjectCard key={project?.id} project={project}></ProjectCard>
            ))
          }
        </div>
      </div>

    </div>
  )
}
