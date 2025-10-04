"use client"
import {
  Link2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { useSession } from "next-auth/react"
import Loading from "@/components/ui/Loading"
import Image from "next/image"
import Link from "next/link"

export default function UserMenu() {
  const [open, setOpen] = useState(false)
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <Loading></Loading>
  }

  const user = session?.user
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}>
        <Button variant="ghost" className="h-auto rounded-full p-0 bg-transparent">
          <Avatar>
            <AvatarImage src={user?.image ? user?.image : "https://i.ibb.co.com/3zj13YK/Mukter-Hossain1.jpg"} alt="Profile image" />
            <AvatarFallback>Profile Image</AvatarFallback>
          </Avatar>
        </Button>

      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="max-w-lg trasition-all duration-300 ease-in-out transform origin-top scale-95 opacity-0 "
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        align="end" style={{ transform: open ? "scale(1" : "scale(0.95", opacity: open ? 1 : 0, transition: "all 0.3s ease-in-out" }}>
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <div className="w-full px-6 sm:px-10 md:px-16">
            <div className="flex flex-col gap-y-4 justify-center items-center">
              <Image src={user?.image ? user?.image : "https://i.ibb.co.com/3zj13YK/Mukter-Hossain1.jpg"} alt="Profile image" width={100} height={100} className="rounded-full md:w-40 md:h-40"></Image>
              <div>
                <h2 className="text-lg font-semibold">{user?.name}</h2>
              </div>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col gap-y-1 ">
                <p className="text-sm flex items-center gap-x-1"><Mail size={16}></Mail> <span>{user?.email}</span></p>
                <p className="text-sm flex items-center gap-x-1"><Phone size={16}></Phone> <span>{user?.phone}</span></p>

                <p className="text-sm">Role: {user?.role?.toUpperCase()}</p>
                <p className="text-sm">Start Date: {user?.updatedAt?.slice(0, 10)}</p>
              </div>
              <div className="flex flex-col gap-y-1 ">
                <p className="text-sm flex items-center gap-x-1"><MapPin  size={16}></MapPin> <span>Dhaka, Bangladesh</span></p>
                <Link href={`https://www.linkedin.com/in/md-mukter-hossain-341358295`} className="text-sm flex items-center gap-x-1 text-blue-500"> <Link2  size={16}></Link2> <span>LinkeIn</span></Link>
                <Link href={`https://github.com/MukterHossain`} className="text-sm flex items-center gap-x-1 text-blue-500"> <Link2  size={16}></Link2> <span>Github</span></Link>                
              </div>
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
