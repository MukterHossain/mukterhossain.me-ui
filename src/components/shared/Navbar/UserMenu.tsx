"use client"
import {  LogOutIcon,
  PinIcon,
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

export default function UserMenu() {
    const [open, setOpen] = useState(false)
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild 
      onMouseEnter={()=>setOpen(true)} 
      onMouseLeave={()=>setOpen(false)}>
        <Button variant="ghost" className="h-auto p-0 bg-transparent">
          <Avatar>
            <AvatarImage src="https://i.ibb.co.com/3zj13YK/Mukter-Hossain1.jpg" alt="Profile image" />
            <AvatarFallback>Profile Image</AvatarFallback>
          </Avatar>
        </Button>
        
      </DropdownMenuTrigger>
      <DropdownMenuContent 
      className="max-w-96 trasition-all duration-300 ease-in-out transform origin-top scale-95 opacity-0 "
      onMouseEnter={()=>setOpen(true)} 
      onMouseLeave={()=>setOpen(false)}
        align="end" style={{transform: open ? "scale(1": "scale(0.95", opacity: open ? 1 : 0, transition: "all 0.3s ease-in-out"}}>
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="text-foreground truncate text-sm font-medium">
            Name
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <PinIcon size={16} className="opacity-60" aria-hidden="true" />
            <span>Option 1</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOutIcon size={16} className="opacity-60" aria-hidden="true" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
