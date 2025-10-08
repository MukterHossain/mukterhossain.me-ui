
"use client";

import { createProject } from "@/actions/create";
import RichTextEditor from "@/components/Editor/RichTextEditor";
import Form from "next/form";
import { useState } from "react";
import toast from "react-hot-toast";


export default function CreateProjectForm() {
const [description, setDescription] = useState("")

const isValidUrl = (url:string) =>{
  try {
      new URL(url);
      return true;
  } catch {
    return false;
  }
}

  return (
    <Form
      action={async(formData:FormData) =>{
        try {
          const title = formData.get("title")?.toString() || ""
          const features = formData.get("features")?.toString() || ""
          const thumbnail = formData.get("thumbnail")?.toString() || ""
          const liveUrl = formData.get("liveUrl")?.toString() || ""
          const repoUrl = formData.get("repoUrl")?.toString() || ""
         

          if(!title || title.trim() === ""){
            toast.error("Title is required")
            return;
          }
          if(!features || features.trim() === ""){
            toast.error("Features is required")
            return;
          }

          
          if(thumbnail && !isValidUrl(thumbnail) ){
            toast.error("Thumbnail must be a valid URL")
            return;
          }
          if(liveUrl && !isValidUrl(liveUrl) ){
            toast.error("Live Url must be a valid URL")
            return;
          }
          if(repoUrl && !isValidUrl(repoUrl) ){
            toast.error("Repository Url must be a valid URL")
            return;
          }
          if(!description || description.trim() === ""){
            toast.error("Description is required")
            return;
          }
          formData.append("description", description);
          const featuresArray = features.split(",").map(feat => feat.trim()).filter(feat => feat !== "");
          formData.set("features", featuresArray.toString());        
         
          const res = await createProject(formData)
          if(res?.success){
            toast.success("Project created successfully!")
            window.location.href = "/dashboard/manage-project"
          }else{
            toast.error(" Failed to create project")
          }
        } catch (error) {
          console.error(error)
          toast.error(" Failed to create project. Please try again.")
        }
        
        }}
      className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4 w-full"
    >
      <h2 className="text-xl font-semibold mb-4">Add Project</h2>

      {/* Title */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>


      {/* features */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="content">
          Features (comma separated)
        </label>
        <input
        type="text"
          id="features"
          name="features"
          placeholder="e.g. React, TailwindCSS, Next.js, TypeScript"
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
          placeholder="https://example.com/image.jpg"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* liveUrl */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="thumbnail">
          Live URL
        </label>
        <input
          type="url"
          id="liveUrl"
          name="liveUrl"
          placeholder="https://exampleProject.com"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* liveUrl */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="thumbnail">
          Repository URL
        </label>
        <input
          type="url"
          id="repoUrl"
          name="repoUrl"
          placeholder="https://github.com/exampleProject"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>


        {/* Content */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="content">
          Description
        </label>
        <div className="w-full h-full">
        <RichTextEditor value={description} onChange={setDescription}/>
        </div>
        
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
