import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Code, ToyBrick, Wind } from "lucide-react";

// This component can be adapted for each category's layout
function CategoryTabs() {
    // In a real app, you'd likely derive the defaultValue from the current pathname.
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
    const defaultValue = pathname.split('/').pop() || 'overview';

    return (
        <Tabs defaultValue={defaultValue} className="w-full mb-4">
            <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview" asChild>
                    <Link href="/design/buttons"><ToyBrick className="mr-2 h-4 w-4" /> Overview</Link>
                </TabsTrigger>
                <TabsTrigger value="animate-css" asChild>
                    <Link href="/design/buttons/animate-css"><Wind className="mr-2 h-4 w-4" /> Animate.css</Link>
                </TabsTrigger>
                <TabsTrigger value="tailwind" asChild>
                    <Link href="/design/buttons/tailwind"><Code className="mr-2 h-4 w-4" /> Tailwind</Link>
                </TabsTrigger>
                <TabsTrigger value="magicui" asChild>
                    <Link href="/design/buttons/magicui"><ToyBrick className="mr-2 h-4 w-4" /> Magic UI</Link>
                </TabsTrigger>
            </TabsList>
        </Tabs>
    )
}


export default function ButtonsLayout({
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
