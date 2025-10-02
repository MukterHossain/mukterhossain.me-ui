import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";


export const generateMetadata =async({params}:{params:Promise<{blogId:string}>})=>{
const {blogId} =await params
    
     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${blogId}`)
    const data  = await res.json()
    const blog = data?.data?.blog
    return {
        title: blog?.title,
        content: blog?.content
    }
}
const BlogDetails =async ({params}: {params:Promise<{blogId:string}>}) => {
    const {blogId} =await params
    
     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${blogId}`)
    const data  = await res.json()
    const blog = data?.data?.blog
    // console.log("data", data)
    
    return (
        <div className="max-w-7xl mx-auto p-5">
            <h1>Blog Details</h1>
            <div>
                <BlogDetailsCard key={blog?.id} blog={blog}></BlogDetailsCard>
            </div>
        </div>
    );
};

export default BlogDetails;