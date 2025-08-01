"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Experience", 
    href: "#experience",
    items: [
      {
        title: "Gander YC24",
        href: "/experience/gander-yc24",
        description: "Full Stack Developer - Summer 2024"
      },
      {
        title: "Automated Logic Corporation",
        href: "/experience/alc-internship",
        description: "Control Systems Engineer Intern - Summer 2024"
      },
      {
        title: "UCF Biomechanics Laboratory", 
        href: "/experience/ucf-research",
        description: "Undergraduate Research Assistant - 2023-2024"
      }
    ]
  },
  {
    name: "Projects",
    href: "#projects",
    items: [
      {
        title: "RTLS Rocketry",
        href: "/projects/rtls-rocketry", 
        description: "Return-To-Launch-Site trajectory control system"
      },
      {
        title: "Spotify Wrapped Analysis",
        href: "/projects/spotify-wrapped",
        description: "FastAPI web application with GPT integration"
      },
      {
        title: "Autonomous Boat", 
        href: "/projects/autonomous-boat",
        description: "Self-guided vessel navigation system"
      },
      {
        title: "Vertical Rocket Erector",
        href: "/projects/rocket-erector", 
        description: "Rocket erector system design and development"
      }
    ]
  },
  {
    name: "Tools",
    href: "#tools",
  },
]

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <motion.header 
      className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex ml-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Adam Zarak</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                      <NavigationMenuContent className="left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto">
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] lg:grid-cols-2">
                          {item.items.map((subItem) => (
                            <ListItem
                              key={subItem.title}
                              title={subItem.title}
                              href={subItem.href}
                            >
                              {subItem.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                      <Link href={item.href}>
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.items ? (
                      <div>
                        <h4 className="font-medium mb-2">{item.name}</h4>
                        <div className="ml-4 space-y-2">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className="block text-sm text-muted-foreground hover:text-foreground"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link 
                        href={item.href}
                        className="block font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"