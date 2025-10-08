import BlogCard from "@/components/modules/Blogs/BlogCard";
import { IBlog } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Blogs | Portfolio",
    description: "Browser all blogs post on web development, Next.js, React, Typescript, and more. Stay updated with the latest tutorials and articles.",
}

const BlogsPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
        next: {
            revalidate: 60,
            tags: ["BLOGS"]
        },
    })
    const data = await res.json()
    const blogs = data?.result?.blogs
    if(blogs?.length === 0){
        return <p className="text-center text-xl py-10 mt-10">Blogs are not available</p>
    }
    return (
        <div className="max-w-7xl mx-auto p-5 my-16 ">
            <h2 className="text-3xl font-bold text-center mb-6">All Blogs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 md:grid-cols-3 gap-5 items-stretch">
                {
                    blogs?.map((blog: IBlog) => (
                        <BlogCard key={blog?.id} post={blog}></BlogCard>
                    ))
                }
            </div>
        </div>
    );
};

export default BlogsPage;