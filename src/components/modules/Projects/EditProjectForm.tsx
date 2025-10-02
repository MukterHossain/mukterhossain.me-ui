
"use client";

import { updateProject } from "@/actions/create";
import { IProject } from "@/types";
import Form from "next/form";


export default function EditProjectForm({project}: {project:IProject}) {


  return (
    <Form
      action={updateProject}
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
        <textarea
          id="description"
          defaultValue={project?.description}
          name="description"
          rows={4}
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
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
