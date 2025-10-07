"use client";

import { updateBlog } from "@/actions/create";
import RichTextEditor from "@/components/Editor/RichTextEditor";
import { IBlog } from "@/types";
import Form from "next/form";
import { useState } from "react";
import toast from "react-hot-toast";


const EditBlogForm = ({ blog }: { blog: IBlog }) => {
  const [content, setContent] = useState(blog?.content || "")
  const [published, setPublished] = useState(blog?.published || false)

  return (
    <Form
      action={async (formData: FormData) => {
        try {
          const title = formData.get("title")?.toString() || "";
          if (!title || title.trim() === "") {
            toast.error("Title is required")
            return
          }
          const slug = formData.get("slug")?.toString() || "";
          if (!slug || slug.trim() === "") {
            toast.error("slug is required")
            return
          }
          if (!content || content.trim() === "") {
            toast.error("Content is required")
            return
          }
          formData.append("content", content);
          formData.append("published", String(published));
          const res = await updateBlog(formData, published)
          if (res?.success) {
            toast.success("✅ Blog updated successfully!")
            window.location.href = "/dashboard/manage-blog"
          } else {
            toast.error("Failed to update blog")
          }
        } catch (error) {
          toast.error(" Failed to update blog. Please try again.")
          console.error(error)
        }
      }}
      className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4 w-full"
    >
      <input
        type="hidden"
        name="id"
        value={blog?.id}
        className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
      />
      <h2 className="text-xl font-semibold mb-4">Create Blog</h2>

      {/* Title */}
      <div>

        <label className="block text-sm font-medium mb-1" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          defaultValue={blog?.title}
          id="title"
          name="title"
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
          defaultValue={blog?.slug}
          id="slug"
          name="slug"
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
          defaultValue={blog?.excerpt}
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
          defaultValue={blog?.thumbnail}
          id="thumbnail"
          name="thumbnail"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>
      {/* Content */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="content">
          Content
        </label>
        <RichTextEditor value={content} onChange={setContent} />
        {/* <textarea
          id="content"
          defaultValue={blog?.content}
          name="content"
          rows={4}
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        /> */}
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
        Update Blog
      </button>
    </Form>
  );
};

export default EditBlogForm;