import MainLayout from "@/components/layout/main-layout";
import { CategoryNav } from "@/components/design/category-nav";

export default function DesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainLayout>
      <div className="flex flex-col">
        <header className="border-b p-4 sm:px-6">
          <h1 className="text-2xl font-bold tracking-tight">Design Library</h1>
          <p className="text-muted-foreground">Explore interactive components and design patterns.</p>
        </header>
        <div className="flex flex-col md:flex-row">
          <CategoryNav />
          <main className="flex-1 p-4 sm:p-6">{children}</main>
        </div>
      </div>
    </MainLayout>
  );
}
