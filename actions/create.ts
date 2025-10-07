'use server'

import { getUserSession } from "@/helpers/getUserSession"
import { revalidatePath, revalidateTag } from "next/cache"

export const createBlog = async(data:FormData, published:boolean) =>{
    const session =await getUserSession()
    const blogInfo = Object.fromEntries(data.entries())

    const modifiedData = {
        ...blogInfo,
        ownerId: session?.user?.id,
        published
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(modifiedData)
    })

    
    const result = await res.json()
  
    if(result?.data?.id){
        revalidateTag('BLOGS')
        revalidatePath('/blogs')
        return {success:true}
    }
    return result
}
export const updateBlog = async(data:FormData, published:boolean) =>{
    const session =await getUserSession()
    const blogInfo = Object.fromEntries(data.entries())
    const {id, ...rest} = blogInfo
    const cleanData =Object.fromEntries(Object.entries(rest).filter(([key]) => !key.startsWith("$ACTION_ID")))
    const modifiedData = {
        ...cleanData,
        ownerId: session?.user?.id,
        published

    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${id}`,{
        method: "PATCH",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(modifiedData)
    })
    const result = await res.json()
    if(result?.data?.id){
        revalidateTag('BLOGS')
        revalidatePath('/blogs')
        return {success:true}
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
    const session =await getUserSession()
    const projectInfo = Object.fromEntries(data.entries())
    const modifiedData = {
        ...projectInfo,
        features: projectInfo.features.toString().split(',').map((feature) => feature.trim()),
        ownerId: session?.user?.id,
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(modifiedData)
    })
    const result = await res.json()
    if(result?.data?.id){
        revalidateTag('PROJECTS')
        revalidatePath('/projects')
    }
    return result
}
export const updateProject = async(data:FormData) =>{
    const session =await getUserSession()
     const projectInfo = Object.fromEntries(data.entries())
    const {id, ...rest} = projectInfo
    const cleanData =Object.fromEntries(Object.entries(rest).filter(([key]) => !key.startsWith("$ACTION_ID")))
    const modifiedData = {
        ...cleanData,
        features: projectInfo.features.toString().split(',').map((feature) => feature.trim()),
        ownerId: session?.user?.id,
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`,{
        method: "PATCH",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(modifiedData)
    })
    const result = await res.json()
    if(result?.data?.id){
        revalidateTag('PROJECTS')
        revalidatePath('/projects')
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