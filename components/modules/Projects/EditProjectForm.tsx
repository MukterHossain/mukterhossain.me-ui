
"use client";

import { updateProject } from "@/actions/create";
import RichTextEditor from "@/components/Editor/RichTextEditor";
import { IProject } from "@/types";
import Form from "next/form";
import { useState } from "react";
import toast from "react-hot-toast";


export default function EditProjectForm({ project }: { project: IProject }) {
  const [description, setDescription] = useState(project?.description || "")

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  return (
    <Form
      action={async (formData: FormData) => {
        try {
          const id = formData.get("id")?.toString() || "";
          const title = formData.get("title")?.toString() || ""
          const features = formData.get("features")?.toString() || ""
          const thumbnail = formData.get("thumbnail")?.toString() || ""
          const liveUrl = formData.get("liveUrl")?.toString() || ""
          const repoUrl = formData.get("repoUrl")?.toString() || ""


          if (!id) {
            toast.error("Invalid project ID")
            return;
          }
          if (!title || title.trim() === "") {
            toast.error("Title is required")
            return;
          }
          if (!features || features.trim() === "") {
            toast.error("Features is required")
            return;
          }


          if (thumbnail && !isValidUrl(thumbnail)) {
            toast.error("Thumbnail must be a valid URL")
            return;
          }
          if (liveUrl && !isValidUrl(liveUrl)) {
            toast.error("Live Url must be a valid URL")
            return;
          }
          if (repoUrl && !isValidUrl(repoUrl)) {
            toast.error("Repository Url must be a valid URL")
            return;
          }
          if (!description || description.trim() === "") {
            toast.error("Description is required")
            return;
          }
          formData.append("description", description);
          const featuresArray = features.split(",").map(feat => feat.trim()).filter(feat => feat !== "");

          formData.set("features", featuresArray.toString());
          const res = await updateProject(formData)
          if (res?.success) {
            toast.success("Project created successfully!")
            window.location.href = "/dashboard/manage-project"
          } else {
            toast.error(" Failed to create project")
          }
        } catch (error) {
          console.error(error)
          toast.error(" Failed to create project. Please try again.")
        }

      }}
      className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4 w-full"
    >
      <input
        type="hidden"
        name="id"
        value={project?.id}
        className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
      />
      <h2 className="text-xl font-semibold mb-4">Update Project</h2>

      {/* Title */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          defaultValue={project?.title}
          name="title"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>


      {/* features */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="content">
          Features
        </label>
        <input
          type="text"
          id="features"
          defaultValue={project?.features}
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
          defaultValue={project?.thumbnail}
          id="thumbnail"
          name="thumbnail"
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
          defaultValue={project?.liveUrl}
          name="liveUrl"
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
          defaultValue={project?.repoUrl}
          name="repoUrl"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>


      {/* Content */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="content">
          Description
        </label>

        <div className="w-full h-full">
          <RichTextEditor value={description} onChange={setDescription} />
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
