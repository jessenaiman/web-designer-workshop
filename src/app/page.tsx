import { ArrowRight } from "lucide-react";
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
    <>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
        <div className="z-10 flex flex-col items-center text-center">
            <AuroraText className="px-4 py-2 text-3xl font-extrabold tracking-tighter text-center md:text-5xl lg:text-7xl">
                Beyond Rounded Edges
            </AuroraText>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                A collaborative workshop where design meets development. Stop the hand-off headaches and start building in harmony.
            </p>
            <div className="mt-6 flex gap-4">
                <Button asChild size="lg">
                    <Link href="/dashboard">Enter the Workshop <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                    <Link href="/design">Explore Components</Link>
                </Button>
            </div>
        </div>
        <WarpBackground />
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold tracking-tight mb-8">A New Way to Collaborate</h2>
            <BentoGrid className="grid-rows-2">
                {features.map((feature, idx) => (
                    <BentoCard key={idx} {...feature} />
                ))}
            </BentoGrid>
        </div>
      </section>

       <section className="py-20">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Ready to Build Better, Together?</h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
                Jump into the workshop and experience a seamless design-to-development workflow.
            </p>
            <Button asChild size="lg" className="mt-8">
                <Link href="/dashboard">Get Started Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
        </div>
      </section>
    </>
  );
}
