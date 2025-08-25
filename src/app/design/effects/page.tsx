import { PreviewTile } from "@/components/design/preview-tile";
import { MagicCard } from "@/components/magicui/magic-card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { Meteors } from "@/components/magicui/meteors";

export default function EffectsPage() {
  return (
    <div className="container mx-auto max-w-7xl space-y-8 p-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Effect Components</h1>
        <p className="text-muted-foreground">
          Explore our collection of visual effects and interactive components
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <PreviewTile
          title="Magic Card"
          description="A card with a glowing, interactive border."
          componentName="MagicCard"
          initialSettings={{}}
        >
          <MagicCard className="w-full h-48 flex items-center justify-center">
            <p className="text-center text-muted-foreground">Hover over me</p>
          </MagicCard>
        </PreviewTile>
        
        <PreviewTile
          title="Border Beam"
          description="An animated beam that travels around a container's border."
          componentName="BorderBeam"
          initialSettings={{}}
        >
          <div className="w-full h-48 rounded-md border relative flex items-center justify-center">
            <p className="text-center text-muted-foreground">Look at my border</p>
            <BorderBeam />
          </div>
        </PreviewTile>
        
        <PreviewTile
          title="Neon Gradient Card"
          description="A card with a vibrant, animated neon border."
          componentName="NeonGradientCard"
          initialSettings={{}}
        >
          <NeonGradientCard className="w-full h-48 flex items-center justify-center">
            <p className="text-center text-muted-foreground">I've got a neon glow</p>
          </NeonGradientCard>
        </PreviewTile>
        
        <PreviewTile
          title="Meteors"
          description="An effect that adds animated meteors to the background."
          componentName="Meteors"
          initialSettings={{}}
        >
          <div className="w-full h-48 rounded-md border relative flex items-center justify-center overflow-hidden">
            <Meteors number={20} />
            <p className="text-center text-white z-10">Look at the sky</p>
          </div>
        </PreviewTile>
      </div>
    </div>
  );
}
