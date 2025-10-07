import { deleteBlog } from "@/actions/create"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IBlog } from "@/types"
import Image from "next/image"
import Link from "next/link"
import DeleteBlogConfirmation from "./DeleteBlogConfirmation"



export default async function BlogTable() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
    cache: "no-store",
  })
  const data = await res.json()

  const blogs = data?.result?.blogs

  return (
    <main className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded-lg  w-full overflow-x-hidden">
      <Table className="w-full table-auto overflow-x-hidden">
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>Thumbnail</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Publised</TableHead>
            <TableHead>Slug</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogs?.map((item: IBlog) => (
            <TableRow key={item.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Image
                    className="rounded-full w-9 h-9 object-cover "
                    src={item?.thumbnail}
                    width={40}
                    height={40}
                    loading="lazy"
                    alt={item?.title}
                  />
                </div>
              </TableCell>
              <TableCell>{item?.title?.slice(0, 15)}{item?.title?.length > 15 ? "..." : ""}</TableCell>
              <TableCell className={item?.published === true ? "text-green-600" : "text-red-600"}>{item?.published === true ? "Yes" : "No"}</TableCell>
              <TableCell>{item?.slug?.slice(0, 10)}{item?.title?.length > 10 ? "..." : ""}</TableCell>
              <TableCell className="text-right">
                <div className="flex gap-2">
                  <Link href={`/dashboard/edit-blog/${item?.id}`}>
                    <Button className="bg-gradient-to-r from-green-600  to-sky-600 font-semibold hover:bg-gradient-to-br hover:from-sky-600 hover:to-green-600 transition duration-300 ">Edit</Button></Link>
                  <DeleteBlogConfirmation blogId={item?.id} deleteAction={deleteBlog}>
                    <Button variant={"destructive"}>Delete</Button>
                  </DeleteBlogConfirmation>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  )
}
