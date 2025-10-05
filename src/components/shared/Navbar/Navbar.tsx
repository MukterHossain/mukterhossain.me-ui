'use client'
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"
import { LogOut } from "lucide-react"
import Image from "next/image"

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/blogs", label: "Blogs" },
  { href: "/about", label: "About me" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/projects", label: "Projects" },
]

export default function Navbar() {

  const session = useSession()

  return (
    <main className="w-full  top-0  h-16 fixed inset-x-0   bg-background border-b shadow-sm  z-30">
      <header className=" max-w-7xl h-full flex  mx-auto px-4 md:px-6 ">
        <div className="flex  items-center w-full justify-between gap-4">
          {/* Left side */}
          <div className="flex items-center gap-2">
              <Link href="/">
              <Image
                src={"https://i.ibb.co.com/3zj13YK/Mukter-Hossain1.jpg"}
                alt={`MUKTER`}
                width={36}
                height={36}
                className="rounded-full border-2 border-gray-200 dark:border-gray-700"
              />
              </Link>
              <div className="flex flex-col ">
                <h1 className="font-semibold text-[15px] mb-0 sm:text-lg leading-tight">Md Mukter Hossain</h1>
                <p className="text-[13px] mt-0 leading-tight">Web Developer</p>
              </div>
            
          </div>
          {/* Right side */}
          <div className="flex items-center gap-2">

            {/* Main nav */}
            <div className="flex items-center gap-6">

              {/* Navigation menu */}
              <NavigationMenu className="max-md:hidden">
                <NavigationMenuList className="gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink asChild>
                        <Link className="text-muted-foreground hover:text-primary py-1.5 font-medium" href={link.href} passHref >
                          {link.label}
                        </Link>
                      </NavigationMenuLink>

                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
              <div>
                {session?.status === "authenticated" ? (<Button
                  variant="destructive"
                  className="w-full justify-start gap-1 cursor-pointer"
                  onClick={() => signOut()}
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>) : (<Link  href="/login">
                  <Button  className="bg-gradient-to-r text-white from-green-600  to-sky-600 font-semibold hover:bg-gradient-to-br hover:from-sky-600 hover:to-green-600 transition duration-300 ">Login</Button>
                </Link>)}
              </div>
            </div>

            {/* Mobile menu trigger */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="group size-8 md:hidden"
                  variant="ghost"
                  size="icon"
                >
                  <svg
                    className="pointer-events-none"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12L20 12"
                      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                    />
                  </svg>
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-36 p-1 md:hidden">
                <NavigationMenu className="max-w-none *:w-full">
                  <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                    {navigationLinks.map((link, index) => (
                      <NavigationMenuItem key={index} className="w-full">
                        <NavigationMenuLink asChild className="py-1.5">
                          <Link href={link.href} passHref>
                            {link.label}
                          </Link>
                        </NavigationMenuLink>

                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </header>
    </main>
  )
}
