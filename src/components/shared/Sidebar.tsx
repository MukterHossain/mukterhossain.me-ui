"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, PlusCircle, LogOut, LayoutDashboard, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import clsx from "clsx";

import Loading from "../ui/Loading";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const session = useSession()
  const router = useRouter()


  useEffect(() => {
    if(session.status === "unauthenticated"){
      router.push("/login")
    }
  },[session.status, router])

  if(session.status === "loading"){
    return <Loading></Loading>
  }
  console.log(session)
  return (
    <>
    <button onClick={()=>setIsOpen(!isOpen)} className="absolute top-4 right-4 z-50 md:hidden bg-gray-200 text-gray-900 p-2 rounded-md">
    <Menu className="h-5 w-5"></Menu>
    </button>
    
    <aside className={clsx("fixed md:static  top-0 left-0 h-screen w-64 bg-black text-white transform flex flex-col border-r  z-40 transition-transform duration-300 ease-in-out", isOpen ? "md:translate-x-0" : "-translate-x-full", "md:translate-x-0")}>
      {/*  */}
      <button onClick={()=>setIsOpen(false)} className="absolute top-4 right-4 z-50 md:hidden bg-black text-white p-2 rounded-md">
    <X className="h-5 w-5"></X>
    </button>
      {/* Top navigation */}
      <nav className="flex-1 space-y-2 p-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
        >
          <Home className="h-4 w-4" />
          
          Home
        </Link>

        <Link
          href="/dashboard"
          className="flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-medium hover:bg-gray-100 hover:text-black"
        >
          <LayoutDashboard className="h-4 w-4" />
          Dashboard
        </Link>
        <Link
          href="/dashboard/manage-blog"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
        >
          <PlusCircle className="h-4 w-4" />
          Manage Blog
        </Link>
        <Link
          href="/dashboard/manage-project"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
        >
          <PlusCircle className="h-4 w-4" />
          Manage Project
        </Link>
      </nav>

      {/* Bottom action */}
      <div className="p-4 border-t border-gray-500">
        {session.status === "authenticated" && <Button
          variant="destructive"
          className="w-full justify-start gap-2 cursor-pointer"
          onClick={() => signOut()}
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>}
      </div>
    </aside>
    </>
    
  );
}
