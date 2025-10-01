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