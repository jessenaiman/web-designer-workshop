import MainLayout from "@/components/layout/main-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Code, Brush, Bot } from "lucide-react";

export default function DashboardPage() {
  return (
    <MainLayout>
      <div className="flex-1 space-y-4 p-4 sm:p-8">
        <div className="flex items-center justify-between space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        </div>
        <div className="space-y-4">
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
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Design Library
                </CardTitle>
                <Brush className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Explore</div>
                <p className="text-xs text-muted-foreground">
                  Browse interactive design patterns.
                </p>
                <Button asChild size="sm" className="mt-4">
                  <Link href="/design">Go to Design <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  AI Tools
                </CardTitle>
                <Bot className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Create</div>
                <p className="text-xs text-muted-foreground">
                  Leverage AI for code and inspiration.
                </p>
                <Button asChild size="sm" className="mt-4">
                  <Link href="/ai">Use AI Tools <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Style Guides
                </CardTitle>
                <Code className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Learn</div>
                <p className="text-xs text-muted-foreground">
                  Access framework style guides.
                </p>
                <Button asChild size="sm" className="mt-4">
                  <Link href="/styleguides">View Guides <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
