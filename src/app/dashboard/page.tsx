import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Code, Brush, Bot, BookOpen } from "lucide-react";

export default function DashboardPage() {
  return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome to your collaborative design workshop
            </p>
          </div>
        </div>
        
        <Card className="border-primary/20 shadow-sm">
          <CardHeader>
            <CardTitle>Welcome to WebCraft Studio!</CardTitle>
            <CardDescription>Your collaborative workshop for modern web design. Explore, customize, and share design components seamlessly.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This is your central hub for creativity and collaboration. Whether you're a designer, developer, or manager, WebCraft Studio is built to streamline your workflow.
            </p>
          </CardContent>
        </Card>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="transition-colors hover:bg-accent/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Design Library
              </CardTitle>
              <Brush className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Explore</div>
              <p className="text-xs text-muted-foreground mb-4">
                Browse interactive design patterns.
              </p>
              <Button asChild size="sm" className="w-full">
                <Link href="/design">Go to Design <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="transition-colors hover:bg-accent/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                AI Tools
              </CardTitle>
              <Bot className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Create</div>
              <p className="text-xs text-muted-foreground mb-4">
                Leverage AI for code and inspiration.
              </p>
              <Button asChild size="sm" className="w-full">
                <Link href="/ai">Use AI Tools <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="transition-colors hover:bg-accent/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Style Guides
              </CardTitle>
              <Code className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Learn</div>
              <p className="text-xs text-muted-foreground mb-4">
                Access framework style guides.
              </p>
              <Button asChild size="sm" className="w-full">
                <Link href="/styleguides">View Guides <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="transition-colors hover:bg-accent/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Blog
              </CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Read</div>
              <p className="text-xs text-muted-foreground mb-4">
                Articles and news from the team.
              </p>
              <Button asChild size="sm" className="w-full">
                <Link href="/blog">Visit Blog <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
  );
}
