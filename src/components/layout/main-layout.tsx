import { Sidebar, SidebarInset, SidebarProvider, SidebarRail } from "@/components/animate-ui/radix/sidebar";
import { AppSidebar } from "./sidebar";
import { AppHeader } from "./header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar>
        <AppSidebar />
      </Sidebar>
      <SidebarRail />
      <SidebarInset className="flex flex-col">
        <AppHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
