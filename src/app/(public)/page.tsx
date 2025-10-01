import BlogCard from "@/components/modules/Blogs/BlogCard"
import { IBlog } from "@/types"


export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`,{
    next:{
      // revalidate:30,
      tags:["BLOGS"]
    }
  })
  const data = await res.json()
  //     console.log("data", data)
  console.log("data", data.result
    .blogs)
  const blogs = data?.result?.blogs
  return (
    <div>
      <h1>Hero Section 11</h1>
      <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto">
        {
          blogs?.slice(0, 3)?.map((blog: IBlog) => (
            <BlogCard key={blog?.id} post={blog}></BlogCard>
          ))
        }
      </div>
    </div>
  )
}
