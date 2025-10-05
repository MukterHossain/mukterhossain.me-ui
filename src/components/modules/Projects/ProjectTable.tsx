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
import DeleteProjectConfirmed from "./DeleteProjectConfirmed"
import { deleteProject } from "@/actions/create"



export default async function ProjectTable() {
       const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`,{
        cache: "no-store",
     })
    const data  = await res.json()
//     console.log("data", data)
    
const projects = data?.data?.projects
console.log("projects", projects)
  return (
    <main className="max-w-7xl mx-auto p-5 bg-white shadow-md rounded-lg  w-full overflow-x-hidden">
      <Table className="w-full table-auto overflow-x-hidden">
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>Thumbnail</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects?.map((item:IBlog) => (
            <TableRow key={item.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Image
                    className="rounded-full  w-9 h-9 object-cover"
                    src={item?.thumbnail}
                    width={40}
                    height={40}
                    loading="lazy"
                    alt={item?.title}
                  />
                </div>
              </TableCell>
              <TableCell>{item?.title?.slice(0, 15)}{item?.title?.length > 15 ? "..." : ""} </TableCell>
              <TableCell>{item?.owner?.name}</TableCell>
              <TableCell className="text-center">
                <div className="flex gap-2">
                  <Link href={`/dashboard/edit-project/${item?.id}`}><Button className="bg-gradient-to-r from-green-600  to-sky-600 font-semibold hover:bg-gradient-to-br hover:from-sky-600 hover:to-green-600 transition duration-300 ">Edit</Button></Link>
                <DeleteProjectConfirmed projectId={item?.id} deleteAction={deleteProject}>
                    <Button variant={"destructive"}>Delete</Button>
                  </DeleteProjectConfirmed>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  )
}
