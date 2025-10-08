"use client";

import { createBlog } from "@/actions/create";
import RichTextEditor from "@/components/Editor/RichTextEditor";
import Form from "next/form";
import { useState } from "react";
import toast from "react-hot-toast";



export default function CreateBlogForm() {
  const [content,setContent] = useState("")
  const [published, setPublished] = useState(false)


  return (
    <Form
      action={async(formData:FormData) =>{
        try {
          if(!content || content.trim() === ""){
            toast.error("Content is required")
            return
          }
          formData.append("content", content);
          formData.append("published", String(published));
      const res = await createBlog(formData, published)
      if(res?.success){
        toast.success(" Blog created successfully!")
        window.location.href = "/dashboard/manage-blog"
      }else{
        toast.error(" Failed to create blog")
      }
        } catch (error) {
          toast.error(" Failed to create blog. Please try again.")
          console.error(error)
        }
        }}
      className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4 w-full"
    >
      <h2 className="text-xl font-semibold mb-4">Add Blog</h2>

      {/* Title */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* slug */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="content">
          Slug
        </label>
        <input
        type="text"
          id="slug"
          name="slug"
          required
    
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* excerpt */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="content">
          Excerpt
        </label>
        <input
        type="text"
          id="excerpt"
          name="excerpt"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Thumbnail */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="thumbnail">
          Thumbnail URL
        </label>
        <input
          type="url"
          id="thumbnail"
          name="thumbnail"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>
        {/* Content */}
      <div className="">
        <label className="block text-sm font-medium mb-1" htmlFor="content">
          Content
        </label>
        <div className="w-full h-full">
          <RichTextEditor  value={content} onChange={setContent}/>
        </div>
        
      </div>
      <div className="flex items-center gap-2">       
        <input
          type="checkbox"
          id="published"
          name="published"
          checked={published}
          onChange={(e) => setPublished(e.target.checked)}
          className="w-4 h-4 rounded-md border  focus:ring focus:ring-blue-200"
        /> 
        <label className="text-sm font-medium" htmlFor="published">
          Published Blog
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </Form>
  );
}