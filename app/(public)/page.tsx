import BlogCard from "@/components/modules/Blogs/BlogCard"
import Hero from "@/components/modules/Home/Hero"
import ProjectCard from "@/components/modules/Projects/ProjectCard"
import { IBlog, IProject } from "@/types"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home | Portfolio",
  description: "This is home page of Mukter Hossain portfolio website. Explore his latest blogs and projects on web development, Next.js, React, Typescript, and more.",
}

export default async function HomePage() {
  const resBlogs = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
    next: {
      tags: ["BLOGS"]
    }
  })
  const blogsData = await resBlogs.json()
  const blogs = blogsData?.result?.blogs ?? []


  const resProjects = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
    next: {
      tags: ["PROJECTS"]
    }
  })
  const data = await resProjects.json()
  const projects = data?.data?.projects ?? []




  return (
    <div className="max-w-7xl mx-auto p-5">
      <Hero></Hero>
      <div>
        <div className="my-16">
          <h2 className="text-3xl font-bold text-center mb-4">Latest Blogs</h2>
          <p className="text-center  max-w-xl mx-auto border-b pb-3 border-gray-300">Check out the latest blogs on web development, Next.js, React, Typescript, and more. Learn how to build modern web applications with these technologies. </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 md:grid-cols-3 gap-5 items-stretch">
            {blogs.length > 0 ? (
              blogs?.slice(0, 3)?.map((blog: IBlog) => (
                <BlogCard key={blog?.id} post={blog}></BlogCard>
              ))
            ) :
              (
                <p className="text-center w-full text-lg py-10">Blogs are not available</p>
              )}

          </div>
        </div>
        <div className="my-16 ">
          <h2 className="text-3xl font-bold text-center mb-4">Latest Projects</h2>
          <p className="text-center  max-w-xl mx-auto border-b pb-3 border-gray-300">Explore my latest projects showcasing my skills in web development, React, Next.js, and more. Each project highlights my ability to create dynamic and responsive web applications.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 md:grid-cols-3 gap-5 items-stretch">
            {projects.length > 0 ? (
              projects?.slice(0, 3)?.map((project: IProject) => (
                <ProjectCard key={project?.id} project={project}></ProjectCard>
              ))
            ) :
              (
                <p className="text-center w-full text-lg py-10">Project are not available</p>
              )}
          </div>
        </div>
      </div>


    </div>
  )
}
