"use client"

import { SidebarTrigger } from "@/components/animate-ui/radix/sidebar";
import { ThemeToggle } from "@/components/theme-toggle"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Home, ChevronRight } from "lucide-react"

function Breadcrumbs() {
  const pathname = usePathname()
  
  if (pathname === '/') {
    return null;
  }

  const pathSegments = pathname.split('/').filter(Boolean)

  return (
    <nav className="hidden md:flex items-center text-sm font-medium text-muted-foreground">
      <Link href="/dashboard" className="hover:text-primary">
        <Home className="h-4 w-4" />
      </Link>
      {pathSegments.map((segment, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join('/')}`
        const isLast = index === pathSegments.length - 1
        const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')
        
        return (
          <div key={href} className="flex items-center">
            <ChevronRight className="h-4 w-4" />
            <Link 
              href={href} 
              className={isLast ? "text-foreground" : "hover:text-primary"}
              aria-current={isLast ? 'page' : undefined}
            >
              {name}
            </Link>
          </div>
        )
      })}
    </nav>
  )
}

export function AppHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:h-16 sm:px-6">
      <SidebarTrigger className="md:hidden" />
      <Breadcrumbs />
      <div className="ml-auto flex items-center gap-2">
        <ThemeToggle />
      </div>
    </header>
  );
}
