import MainLayout from "@/components/layout/main-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "mastering-css-animations",
    title: "Mastering CSS Animations",
    description: "A deep dive into creating smooth and performant animations with pure CSS.",
    date: "2024-07-15",
  },
  {
    slug: "collaborative-design-systems",
    title: "Building Collaborative Design Systems",
    description: "How to create a design system that bridges the gap between designers and developers.",
    date: "2024-07-10",
  },
  {
    slug: "intro-to-generative-ui",
    title: "An Introduction to Generative UI",
    description: "Exploring the future of user interface design with AI.",
    date: "2024-07-05",
  },
];

export default function BlogPage() {
  return (
    <MainLayout>
      <div className="flex-1 space-y-4 p-4 sm:p-8">
        <div className="flex items-center justify-between space-y-2">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
                <p className="text-muted-foreground">
                    Articles and tutorials on web design, development, and collaboration.
                </p>
            </div>
        </div>
        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.slug}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.description}</p>
                <Button asChild variant="secondary">
                  <Link href={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
