import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";


const BlogDetails =async ({params}: {params:Promise<{blogId:string}>}) => {
    const {blogId} =await params
    
     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${blogId}`)
    const data  = await res.json()
    const blog = data?.data?.blog
    // console.log("data", data)
    
    return (
        <div>
            <h1>Blog Details</h1>
            <div>
                <BlogDetailsCard key={blog?.id} blog={blog}></BlogDetailsCard>
            </div>
        </div>
    );
};

export default BlogDetails;