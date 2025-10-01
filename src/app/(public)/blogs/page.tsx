import BlogCard from "@/components/modules/Blogs/BlogCard";
import { IBlog } from "@/types";
import { Metadata } from "next";

export const metadata:Metadata ={
    title: "All Blogs | Portfolio",
    description: "Browser all blogs post on web development, Next.js, React, Typescript, and more. Stay updated with the latest tutorials and articles.",
}

const BlogsPage =async () => {
     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`,{
        cache: "no-store",
     })
    const data  = await res.json()
//     console.log("data", data)
    console.log("data", data.result
.blogs)
const blogs = data?.result?.blogs
    return (
        <div>
           <h1>All Blogs</h1>
           <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto">
            {
                blogs?.map((blog:IBlog) => (
                    <BlogCard key={blog?.id} post={blog}></BlogCard>
                ))
            }
            </div> 
        </div>
    );
};

export default BlogsPage;