import BlogCard from "@/components/modules/Blogs/BlogCard";
import { IBlog } from "@/types";


const BlogsPage =async () => {
     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`)
    const data  = await res.json()
//     console.log("data", data)
    console.log("data", data.result
.blogs)
const blogs = data?.result?.blogs
    return (
        <div>
           <h1>Blogs Page</h1>
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