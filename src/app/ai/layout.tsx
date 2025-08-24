
"use client";

import MainLayout from "@/components/layout/main-layout";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from 'next/link';
import { Bot, Component, MessageSquare, ImageIcon, VideoIcon } from "lucide-react";
import { usePathname } from "next/navigation";

function AINav() {
    const pathname = usePathname();
    const defaultValue = pathname.split('/').pop() || 'component-customizer';

    return (
        <Tabs defaultValue={defaultValue} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="component-customizer" asChild>
                    <Link href="/ai/component-customizer"><Component className="mr-2 h-4 w-4" /> Component Customizer</Link>
                </TabsTrigger>
                <TabsTrigger value="chat" asChild>
                    <Link href="/ai/chat"><MessageSquare className="mr-2 h-4 w-4" /> AI Chat</Link>
                </TabsTrigger>
                <TabsTrigger value="image-creator" asChild>
                    <Link href="/ai/image-creator"><ImageIcon className="mr-2 h-4 w-4" /> Image Creator</Link>
                </TabsTrigger>
                <TabsTrigger value="video-creator" asChild>
                    <Link href="/ai/video-creator"><VideoIcon className="mr-2 h-4 w-4" /> Video Creator</Link>
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
            <AINav />
            <div className="pt-4">
                {children}
            </div>
        </div>
    </MainLayout>
  );
}
