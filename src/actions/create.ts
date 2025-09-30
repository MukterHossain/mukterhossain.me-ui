'use server'

export const createBlog = async(data:FormData) =>{

    const blogInfo = Object.fromEntries(data.entries())
    // const modifiedData = {
    //     ...blogInfo,
    // }
    console.log("blogInfo", blogInfo)
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(blogInfo)
    })
    const result = await res.json()
    console.log("result", result)
    return result
}