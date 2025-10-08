import EditBlogForm from "@/components/modules/Blogs/EditBlogForm";


const EditBlog = async ({params}: {params:Promise<{blogId:string}>}) => {
    const {blogId} =await params
    
     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${blogId}`)
    const data  = await res.json()
    const blog = data?.data?.blog
    

    return (
        <div className="w-full">
           <EditBlogForm blog={blog}></EditBlogForm>
        </div>
    );
};

export default EditBlog;