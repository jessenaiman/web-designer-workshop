import { Sidebar, SidebarProvider, SidebarRail, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "./sidebar";
import { AppHeader } from "./header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
        <div className="flex h-screen">
            <Sidebar>
                <AppSidebar />
            </Sidebar>
            <SidebarRail />
            <div className="flex flex-col flex-1">
                <AppHeader />
                <SidebarInset>{children}</SidebarInset>
            </div>
        </div>
    </SidebarProvider>
  );
}
