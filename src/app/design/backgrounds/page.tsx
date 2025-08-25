import { PreviewTile } from "@/components/design/preview-tile";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { cn } from "@/lib/utils";

export default function BackgroundsPage() {
  return (
    <div className="container mx-auto max-w-7xl space-y-8 p-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Background Components</h1>
        <p className="text-muted-foreground">
          Animated background patterns and effects for your interfaces
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <PreviewTile
          title="Animated Grid Pattern"
          description="A subtle, animated grid pattern for backgrounds."
          componentName="AnimatedGridPattern"
          initialSettings={{
            numSquares: 30,
            duration: 3,
            repeatDelay: 1,
          }}
          quickControls={[
            {
              key: 'numSquares',
              label: 'Number of Squares',
              type: 'number',
              min: 10,
              max: 50
            },
            {
              key: 'duration',
              label: 'Animation Duration (s)',
              type: 'number',
              min: 1,
              max: 10
            }
          ]}
        >
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20">
            <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
              Animated Grid
            </p>
            <AnimatedGridPattern
              numSquares={30}
              maxOpacity={0.5}
              duration={3}
              repeatDelay={1}
              className={cn(
                "[mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]",
                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
              )}
            />
          </div>
        </PreviewTile>
        
        <PreviewTile
          title="Dot Pattern"
          description="A simple, clean dot pattern background."
          componentName="DotPattern"
          initialSettings={{}}
        >
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20">
            <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
              Dot Pattern
            </p>
            <DotPattern
              className={cn(
                "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]",
              )}
            />
          </div>
        </PreviewTile>
        
        <PreviewTile
          title="Retro Grid"
          description="A cool, retro-style animated grid."
          componentName="RetroGrid"
          initialSettings={{}}
        >
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20">
            <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
              Retro Grid
            </p>
            <RetroGrid />
          </div>
        </PreviewTile>
      </div>
    </div>
  );
}
