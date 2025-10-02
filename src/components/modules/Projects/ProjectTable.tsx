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



export default async function ProjectTable() {
       const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`,{
        cache: "no-store",
     })
    const data  = await res.json()
//     console.log("data", data)
    
const projects = data?.data?.projects
console.log("projects", projects)
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg  w-full overflow-x-hidden">
      <Table className="w-full table-auto overflow-x-hidden">
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>Name</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Slug</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects?.map((item:IBlog) => (
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
                  <Link href={`/dashboard/edit-project/${item?.id}`}><Button>Edit</Button></Link>
                <Button>Delete</Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p className="text-muted-foreground mt-4 text-center text-sm">
        Table with images
      </p>
    </div>
  )
}
