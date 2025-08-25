import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "next-steps-and-revised-plan",
    title: "Next Steps and Revised Plan",
    description: "Outlining the future direction for the WebCraft Studio, focusing on AI, interactivity, and collaboration.",
    date: "2024-07-18",
  },
  {
    slug: "retrospective-initial-scaffold",
    title: "Project Retrospective: Building the Foundation",
    description: "A look back at the initial scaffolding phase and the progress made on the WebCraft Studio.",
    date: "2024-07-18",
  },
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
    <div className="space-y-6">
      <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
          <p className="text-muted-foreground">
              Articles and tutorials on web design, development, and collaboration.
          </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.slug} className="transition-colors hover:bg-accent/50">
            <CardHeader>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 line-clamp-3">{post.description}</p>
              <Button asChild variant="secondary" className="w-full">
                <Link href={`/blog/${post.slug}`}>
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
