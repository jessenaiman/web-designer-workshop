import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Code, ToyBrick, ImageIcon } from "lucide-react";

function CategoryTabs() {
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
    const defaultValue = pathname.split('/').pop() || 'overview';

    return (
        <Tabs defaultValue={defaultValue} className="w-full mb-4">
            <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview" asChild>
                    <Link href="/design/backgrounds"><ImageIcon className="mr-2 h-4 w-4" /> Overview</Link>
                </TabsTrigger>
                <TabsTrigger value="html-css" asChild>
                    <Link href="/design/backgrounds/html-css"><Code className="mr-2 h-4 w-4" /> HTML/CSS</Link>
                </TabsTrigger>
                <TabsTrigger value="tailwind" asChild>
                    <Link href="/design/backgrounds/tailwind"><Code className="mr-2 h-4 w-4" /> Tailwind</Link>
                </TabsTrigger>
                <TabsTrigger value="magicui" asChild>
                    <Link href="/design/backgrounds/magicui"><ToyBrick className="mr-2 h-4 w-4" /> Magic UI</Link>
                </TabsTrigger>
                 <TabsTrigger value="reactbits" asChild>
                    <Link href="/design/backgrounds/reactbits"><ToyBrick className="mr-2 h-4 w-4" /> React Bits</Link>
                </TabsTrigger>
            </TabsList>
        </Tabs>
    )
}


export default function BackgroundsLayout({
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