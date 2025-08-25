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
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent
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
    href: "/dashboard",
    label: "Dashboard",
    icon: <Layout className="h-5 w-5" />
  }
]

const designItems = [
  {
    href: "/design",
    label: "Overview",
    icon: <BoxIcon className="h-5 w-5" />
  },
  {
    href: "/design/buttons",
    label: "Buttons",
    icon: <BoxIcon className="h-5 w-5" />
  },
  {
    href: "/design/text",
    label: "Text",
    icon: <FileText className="h-5 w-5" />
  },
  {
    href: "/design/effects",
    label: "Effects", 
    icon: <BoxIcon className="h-5 w-5" />
  },
  {
    href: "/design/backgrounds",
    label: "Backgrounds",
    icon: <BoxIcon className="h-5 w-5" />
  }
]

const aiItems = [
  {
    href: "/ai",
    label: "AI Tools",
    icon: <CodeIcon className="h-5 w-5" />
  },
  {
    href: "/ai/chat",
    label: "AI Assistant",
    icon: <CodeIcon className="h-5 w-5" />
  },
  {
    href: "/ai/component-customizer",
    label: "Customizer",
    icon: <CodeIcon className="h-5 w-5" />
  }
]

export function AppSidebarContent() {
  const pathname = usePathname()
  
  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/" className="flex items-center px-4 py-2">
          <div className="h-8 w-8 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold">
            W
          </div>
          <span className="text-lg font-semibold ml-2">
            WebCraft Studio
          </span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
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
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Design Library</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {designItems.map((item) => (
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
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>AI Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {aiItems.map((item) => (
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
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === '/blog'}>
              <Link href="/blog" className="flex items-center">
                <FileText className="h-5 w-5" />
                <span className="ml-2">Blog</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === '/styleguides'}>
              <Link href="/styleguides" className="flex items-center">
                <SettingsIcon className="h-5 w-5" />
                <span className="ml-2">Style Guides</span>
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
