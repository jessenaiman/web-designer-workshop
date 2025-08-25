import { ArrowRight, Palette, Brain, Library, Users } from "lucide-react";
import Link from "next/link";
import { AuroraText } from "@/components/magicui/aurora-text";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { WarpBackground } from "@/components/magicui/warp-background";
import { Button } from "@/components/ui/button";

const features = [
  {
    name: "Design-Dev Symphony",
    description: "Bridge the gap between design and code with interactive component previews.",
    className: "col-span-3 lg:col-span-1",
    Icon: Palette,
    href: "/design",
    cta: "Explore Design",
    background: (
      <img
        alt="Relational Data"
        src="https://placehold.co/800x400.png"
        width="800"
        height="400"
        className="absolute -right-20 -top-20 opacity-20"
        data-ai-hint="abstract design"
      />
    ),
  },
  {
    name: "AI-Powered Workflow",
    description: "Leverage generative AI to customize components, generate assets, and accelerate your workflow.",
    className: "col-span-3 lg:col-span-2",
    Icon: Brain,
    href: "/ai",
    cta: "Try AI Features",
    background: (
      <img
        alt="Relational Data"
        src="https://placehold.co/800x400.png"
        width="800"
        height="400"
        className="absolute -right-20 -top-20 opacity-20"
        data-ai-hint="abstract ai"
      />
    ),
  },
  {
    name: "Library of Wonders",
    description: "Explore a curated collection of design patterns and interactive components.",
    className: "col-span-3 lg:col-span-2",
    Icon: Library,
    href: "/design",
    cta: "Browse Library",
     background: (
      <img
        alt="Relational Data"
        src="https://placehold.co/800x400.png"
        width="800"
        height="400"
        className="absolute -right-20 -top-20 opacity-20"
        data-ai-hint="abstract library"
      />
    ),
  },
  {
    name: "Shareable & Collaborative",
    description: "Instantly share any component variation with a unique, state-encoded URL.",
    className: "col-span-3 lg:col-span-1",
    Icon: Users,
    href: "/dashboard",
    cta: "Start Collaborating",
    background: (
      <img
        alt="Relational Data"
        src="https://placehold.co/800x400.png"
        width="800"
        height="400"
        className="absolute -right-20 -top-20 opacity-20"
        data-ai-hint="abstract collaboration"
      />
    ),
  },
];


export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="relative flex min-h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <WarpBackground>
          <div className="z-10 flex flex-col items-center text-center space-y-6">
              <AuroraText className="px-4 py-2 text-4xl font-extrabold tracking-tighter text-center md:text-6xl lg:text-8xl">
                  Beyond Rounded Edges
              </AuroraText>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                  A collaborative workshop where design meets development. Stop the hand-off headaches and start building in harmony.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                      <Link href="/dashboard">Enter the Workshop <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                      <Link href="/design">Explore Components</Link>
                  </Button>
              </div>
          </div>
        </WarpBackground>
      </section>

      <section className="space-y-8">
          <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">A New Way to Collaborate</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                  Discover how WebCraft Studio bridges the gap between design and development with powerful tools and seamless workflows.
              </p>
          </div>
          <BentoGrid className="max-w-6xl mx-auto">
              {features.map((feature, idx) => (
                  <BentoCard key={idx} {...feature} />
              ))}
          </BentoGrid>
      </section>

       <section className="text-center space-y-8">
          <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Ready to Build Better, Together?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Jump into the workshop and experience a seamless design-to-development workflow.
              </p>
          </div>
          <Button asChild size="lg">
              <Link href="/dashboard">Get Started Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
      </section>
    </div>
  );
}
