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
       const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`,{
        cache: "no-store",
     })
    const data  = await res.json()
//     console.log("data", data)
    console.log("data", data.result
.blogs)
const blogs = data?.result?.blogs
console.log("blogs", blogs)
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>Name</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Slug</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogs?.map((item:IBlog) => (
            <TableRow key={item.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Image
                    className="rounded-full"
                    src={item?.thumbnail}
                    width={40}
                    height={40}
                    alt={item?.title}
                  />
                  <div>
                    <div className="font-medium">{item?.title}</div>
                    <span className="text-muted-foreground mt-0.5 text-xs">
                      {item?.slug}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell>{item?.title}</TableCell>
              <TableCell>{item?.slug}</TableCell>
              <TableCell className="text-right">
                <div className="flex gap-2">
                  <Link href={`/dashboard/edit-blog/${item?.id}`}>
                  <Button>Edit</Button></Link>
                  <DeleteBlogConfirmation blogId={item?.id} deleteAction={deleteBlog}>
          <Button variant={"destructive"}>Delete</Button>
                  </DeleteBlogConfirmation>
                  {/* <form action={deleteBlog}>
                    <input type="hidden" name="id" value={item?.id}  className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200" />
                    
                  </form> */}
                
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
