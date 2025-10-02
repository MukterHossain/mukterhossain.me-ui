'use server'

import { revalidatePath, revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export const createBlog = async(data:FormData) =>{
    console.log("data", data)
    const blogInfo = Object.fromEntries(data.entries())
    console.log("blogInfo", blogInfo)
    const modifiedData = {
        ...blogInfo,
        ownerId: '70550982-8a52-40e9-9532-0a13fc1f8f13'
    }
    console.log("modifiedData", modifiedData)
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(modifiedData)
    })
    console.log("modifiedData", modifiedData)
    const result = await res.json()
    console.log("result", result)
    if(result?.data?.id){
        revalidateTag('BLOGS')
        revalidatePath('/blogs')
        redirect('/dashboard/manage-blog')
    }
    return result
}
export const updateBlog = async(data:FormData) =>{
    console.log("data", data)
    const blogInfo = Object.fromEntries(data.entries())
    console.log("blogInfo", blogInfo)
    const {id, ...rest} = blogInfo
    const cleanData =Object.fromEntries(Object.entries(rest).filter(([key]) => !key.startsWith("$ACTION_ID")))
    const modifiedData = {
        ...cleanData,
        ownerId: '70550982-8a52-40e9-9532-0a13fc1f8f13'
    }
    console.log("modifiedData", modifiedData)
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${id}`,{
        method: "PATCH",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(modifiedData)
    })

    console.log("modifiedData", modifiedData)
    const result = await res.json()
    console.log("result", result)
    if(result?.data?.id){
        redirect('/dashboard/manage-blog')
    }
    return result
}
export const deleteBlog = async(formData:FormData) =>{
    const id = formData.get("id")
    if(!id){
        throw new Error("Blog id is missing")
    }
     await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${id}`,{
        method: "DELETE",
    })
    revalidatePath('/dashboard/manage-blog')
   
    
}



export const createProject = async(data:FormData) =>{
    console.log("data", data)
    const projectInfo = Object.fromEntries(data.entries())
    console.log("projectInfo", projectInfo)
    const modifiedData = {
        ...projectInfo,
        features: projectInfo.features.toString().split(',').map((feature) => feature.trim()),
        ownerId: '70550982-8a52-40e9-9532-0a13fc1f8f13'
    }
    console.log("modifiedData", modifiedData)
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(modifiedData)
    })
    console.log("modifiedData", modifiedData)
    const result = await res.json()
    console.log("result", result)
    if(result?.data?.id){
        // revalidateTag('BLOGS')
        // revalidatePath('/blogs')
        // redirect('/dashboard/manage-blog')
    }
    return result
}
export const updateProject = async(data:FormData) =>{
     const projectInfo = Object.fromEntries(data.entries())
    console.log("blogInfo", projectInfo)
    const {id, ...rest} = projectInfo
    const cleanData =Object.fromEntries(Object.entries(rest).filter(([key]) => !key.startsWith("$ACTION_ID")))
    const modifiedData = {
        ...cleanData,
        features: projectInfo.features.toString().split(',').map((feature) => feature.trim()),
        ownerId: '70550982-8a52-40e9-9532-0a13fc1f8f13'
    }
    console.log("modifiedData", modifiedData)
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`,{
        method: "PATCH",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(modifiedData)
    })
    console.log("modifiedData", modifiedData)
    const result = await res.json()
    console.log("result", result)
    if(result?.data?.id){
        redirect('/dashboard/manage-project')
    }
    return result
}


export const deleteProject = async(formData:FormData) =>{
    const id = formData.get("id")
    if(!id){
        throw new Error("Blog id is missing")
    }
     await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`,{
        method: "DELETE",
    })
    revalidatePath('/dashboard/manage-project')
   
    
}