import MainLayout from "@/components/layout/main-layout";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from 'next/link';
import { Bot, Component, MessageSquare } from "lucide-react";

// This component is a placeholder for a more robust tab navigation that would likely use the URL path.
function AINav() {
    return (
        <Tabs defaultValue="component-customizer" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="component-customizer" asChild>
                    <Link href="/ai/component-customizer"><Component className="mr-2 h-4 w-4" /> Component Customizer</Link>
                </TabsTrigger>
                <TabsTrigger value="chat" asChild>
                    <Link href="/ai/chat"><MessageSquare className="mr-2 h-4 w-4" /> AI Chat</Link>
                </TabsTrigger>
            </TabsList>
        </Tabs>
    )
}

export default function AILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainLayout>
        <div className="flex-1 space-y-4 p-4 sm:p-8">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                        <Bot /> AI Tools
                    </h1>
                    <p className="text-muted-foreground">Leverage AI to accelerate your design and development workflow.</p>
                </div>
            </div>
            {/* <AINav /> */}
            <div className="pt-4">
                {children}
            </div>
        </div>
    </MainLayout>
  );
}
