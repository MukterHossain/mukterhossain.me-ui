
import { IBlog } from "@/types";
import Image from "next/image";

export default async function BlogDetailsCard({ blog }: { blog: IBlog }) {

  console.log("Blog in BlogDetailsCard:", blog);
  if (!blog) {
    return (
      <div className="py-20 text-center text-gray-500">Blog not found.</div>
    );
  }

  return (
    <main className="bg-white max-w-5xl mx-auto dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 mt-12">
      {blog?.thumbnail ? (
        <div className="relative h-56 sm:h-70 md:h-80 w-full overflow-hidden">
          <Image
            src={blog?.thumbnail}

            alt={`${blog?.title ? blog?.title : "No Picture found"}`}
            fill
            sizes="full"
            priority={false}
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="h-56 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300">
          No Image
        </div>
      )}

      <div className="p-6 ">
        <h3 className="text-xl font-bold  group-hover:text-blue-600 transition-colors">
          {blog?.title}
        </h3>
        <div className="text-gray-500 dark:text-gray-400 text-sm mb-4 prose">
          <div dangerouslySetInnerHTML={{ __html: blog?.content }}/>
        </div>
        {/* <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
          {blog?.content}
        </p> */}
        <hr />
        <div className="mt-4 space-y-1">
          <p className="text-gray-700 dark:text-gray-300  line-clamp-3">
            <span className="font-semibold">Excerpt:</span> {blog?.excerpt}
          </p>
          <p className="text-gray-700 dark:text-gray-300  line-clamp-3">
            <span className="font-semibold">Blog posted on:</span> {blog?.createdAt?.slice(0, 10)}
          </p>
          <p className="text-gray-700 dark:text-gray-300  line-clamp-3">
           <span className="font-semibold">Slug:</span> {blog?.slug}
          </p>
        </div>

        <div className="flex items-center justify-end mb-4">
          <div className="flex items-center gap-2">
            <Image
              src={
                blog?.owner?.image ||
                "https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
              }
              alt={`${blog?.owner?.name ? blog?.owner?.name : "No Picture found"}`}
              width={36}
              height={36}
              className="rounded-full border-2 border-gray-200 dark:border-gray-700"
            />
            <div className="flex flex-col">
              <span className="text-gray-600 dark:text-gray-300 text-sm flex items-center gap-1">
                {blog?.owner?.name}

              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                {blog?.owner?.email}
              </span>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
