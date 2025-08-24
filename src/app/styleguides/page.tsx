import MainLayout from "@/components/layout/main-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const guides = [
  {
    name: "Next.js",
    description: "The React framework for production. Covers routing, rendering, data fetching, and more.",
    link: "https://nextjs.org/docs",
  },
  {
    name: "Tailwind CSS",
    description: "A utility-first CSS framework for rapid UI development.",
    link: "https://tailwindcss.com/docs",
  },
  {
    name: "shadcn/ui",
    description: "Beautifully designed components that you can copy and paste into your apps.",
    link: "https://ui.shadcn.com/docs",
  },
  {
    name: "Lucide Icons",
    description: "An open-source icon library with a wide range of icons.",
    link: "https://lucide.dev/guide",
  },
];

export default function StyleguidesPage() {
  return (
    <MainLayout>
      <div className="flex-1 space-y-4 p-4 sm:p-8">
        <div className="flex items-center justify-between space-y-2">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Style Guides</h1>
                <p className="text-muted-foreground">
                    Links to official documentation for the technologies used in this workshop.
                </p>
            </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {guides.map((guide) => (
            <Card key={guide.name}>
              <CardHeader>
                <CardTitle>{guide.name}</CardTitle>
                <CardDescription>{guide.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline">
                  <Link href={guide.link} target="_blank" rel="noopener noreferrer">
                    Visit Guide <ArrowUpRight className="ml-2 h-4 w-4" />
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
