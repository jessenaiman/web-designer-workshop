import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Code, ToyBrick, Rows4, Wind } from "lucide-react";

function CategoryTabs() {
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
    const defaultValue = pathname.split('/').pop() || 'overview';

    return (
        <Tabs defaultValue={defaultValue} className="w-full mb-4">
            <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview" asChild>
                    <Link href="/design/page-transitions"><Rows4 className="mr-2 h-4 w-4" /> Overview</Link>
                </TabsTrigger>
                <TabsTrigger value="html-css" asChild>
                    <Link href="/design/page-transitions/html-css"><Code className="mr-2 h-4 w-4" /> HTML/CSS</Link>
                </TabsTrigger>
                <TabsTrigger value="nextjs" asChild>
                    <Link href="/design/page-transitions/nextjs"><Wind className="mr-2 h-4 w-4" /> Next.js</Link>
                </TabsTrigger>
                <TabsTrigger value="magicui" asChild>
                    <Link href="/design/page-transitions/magicui"><ToyBrick className="mr-2 h-4 w-4" /> Magic UI</Link>
                </TabsTrigger>
            </TabsList>
        </Tabs>
    )
}


export default function PageTransitionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        <CategoryTabs />
        {children}
    </div>
  );
}