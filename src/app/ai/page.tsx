import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Component, MessageSquare, ImageIcon, VideoIcon } from "lucide-react";

export default function AIPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
            <CardHeader>
                <Component className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Component Customizer</CardTitle>
                <CardDescription>Use natural language to customize and generate component variations.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button asChild>
                    <Link href="/ai/component-customizer">Try Customizer <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <MessageSquare className="h-8 w-8 text-primary mb-2" />
                <CardTitle>AI Chat Assistant</CardTitle>
                <CardDescription>Get instant help and mock responses for your design questions.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button asChild>
                    <Link href="/ai/chat">Start Chatting <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <ImageIcon className="h-8 w-8 text-primary mb-2" />
                <CardTitle>AI Image Creator</CardTitle>
                <CardDescription>Generate stunning visuals and web assets with a simple prompt.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button asChild>
                    <Link href="/ai/image-creator">Create Images <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <VideoIcon className="h-8 w-8 text-primary mb-2" />
                <CardTitle>AI Video Creator</CardTitle>
                <CardDescription>Generate short video clips from text prompts.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button asChild>
                    <Link href="/ai/video-creator">Create Videos <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardContent>
        </Card>
    </div>
  );
}
