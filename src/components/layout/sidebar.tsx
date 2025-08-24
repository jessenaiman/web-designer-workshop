"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/animate-ui/radix/sidebar"
import { 
  HelpCircle as HelpIcon, 
  Settings as SettingsIcon,
  Home,
  Layout,
  Box as BoxIcon,
  Code as CodeIcon,
  FileText
} from "lucide-react"

const menuItems = [
  {
    href: "/",
    label: "Home",
    icon: <Home className="h-5 w-5" />
  },
  {
    href: "/components",
    label: "Components",
    icon: <BoxIcon className="h-5 w-5" />
  },
  {
    href: "/layouts",
    label: "Layouts",
    icon: <Layout className="h-5 w-5" />
  },
  {
    href: "/code",
    label: "Code",
    icon: <CodeIcon className="h-5 w-5" />
  },
  {
    href: "/docs",
    label: "Documentation",
    icon: <FileText className="h-5 w-5" />
  }
]

export function AppSidebarContent() {
  const pathname = usePathname()
  
  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/" className="flex items-center px-4">
          <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
            W
          </div>
          <span className="text-lg font-semibold ml-2">
            WebCraft Studio
          </span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={pathname === item.href}>
                <Link href={item.href} className="flex items-center">
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === '/help'}>
              <Link href="/help" className="flex items-center">
                <HelpIcon className="h-5 w-5" />
                <span className="ml-2">Help</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === '/settings'}>
              <Link href="/settings" className="flex items-center">
                <SettingsIcon className="h-5 w-5" />
                <span className="ml-2">Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export function AppSidebar() {
  return <AppSidebarContent />
}
