import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Component, MessageSquare, ImageIcon, VideoIcon } from "lucide-react";

export default function AIPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">AI Tools</h1>
        <p className="text-muted-foreground">
          Leverage artificial intelligence to enhance your design and development workflow
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          <Card className="transition-colors hover:bg-accent/50">
              <CardHeader>
                  <Component className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Component Customizer</CardTitle>
                  <CardDescription>Use natural language to customize and generate component variations.</CardDescription>
              </CardHeader>
              <CardContent>
                  <Button asChild className="w-full">
                      <Link href="/ai/component-customizer">Try Customizer <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
              </CardContent>
          </Card>
          
          <Card className="transition-colors hover:bg-accent/50">
              <CardHeader>
                  <MessageSquare className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>AI Chat Assistant</CardTitle>
                  <CardDescription>Get instant help and mock responses for your design questions.</CardDescription>
              </CardHeader>
              <CardContent>
                  <Button asChild className="w-full">
                      <Link href="/ai/chat">Start Chatting <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
              </CardContent>
          </Card>
          
          <Card className="transition-colors hover:bg-accent/50">
              <CardHeader>
                  <ImageIcon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>AI Image Creator</CardTitle>
                  <CardDescription>Generate stunning visuals and web assets with a simple prompt.</CardDescription>
              </CardHeader>
              <CardContent>
                  <Button asChild className="w-full">
                      <Link href="/ai/image-creator">Create Images <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
              </CardContent>
          </Card>
          
          <Card className="transition-colors hover:bg-accent/50">
              <CardHeader>
                  <VideoIcon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>AI Video Creator</CardTitle>
                  <CardDescription>Generate short video clips from text prompts.</CardDescription>
              </CardHeader>
              <CardContent>
                  <Button asChild className="w-full">
                      <Link href="/ai/video-creator">Create Videos <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
              </CardContent>
          </Card>
      </div>
    </div>
  );
}
