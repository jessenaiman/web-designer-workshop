import { PreviewTile } from "@/components/design/preview-tile";
import { Button } from "@/components/ui/button";
import { PulsatingButton } from "@/components/magicui/pulsating-button";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ArrowRight } from "lucide-react";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export default function ButtonsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Buttons</h1>
        <p className="text-muted-foreground">
          Interactive button components with various animations and effects
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <PreviewTile
          title="Pulsing Button"
          description="A button with a subtle pulse animation."
          componentName="PulsatingButton"
          initialSettings={{
            buttonText: "Click Me",
            pulseColor: "#8B5CF6",
            speed: "2s",
          }}
          quickControls={[
            {
              key: 'buttonText',
              label: 'Button Text',
              type: 'text'
            },
            {
              key: 'pulseColor',
              label: 'Pulse Color',
              type: 'select',
              options: ['#8B5CF6', '#EF4444', '#10B981', '#F59E0B', '#3B82F6']
            }
          ]}
        >
          <PulsatingButton>Click Me</PulsatingButton>
        </PreviewTile>
        
        <PreviewTile
          title="Shimmer Button"
          description="A button with a shimmering gradient effect."
          componentName="ShimmerButton"
          initialSettings={{
            buttonText: "Get Started",
            variant: "default",
          }}
          quickControls={[
            {
              key: 'buttonText',
              label: 'Button Text',
              type: 'text'
            },
            {
              key: 'variant',
              label: 'Variant',
              type: 'select',
              options: ['default', 'secondary', 'destructive', 'outline']
            }
          ]}
        >
          <ShimmerButton>Get Started</ShimmerButton>
        </PreviewTile>
        
         <PreviewTile
          title="Shiny Button"
          description="A button with a shiny, reflective effect."
          componentName="ShinyButton"
          initialSettings={{
            buttonText: "Submit",
          }}
        >
          <ShinyButton>Submit</ShinyButton>
        </PreviewTile>
        
        <PreviewTile
          title="Interactive Hover"
          description="A button that animates on hover to reveal more."
          componentName="InteractiveHoverButton"
          initialSettings={{
            buttonText: "Learn More",
          }}
        >
          <InteractiveHoverButton>Learn More</InteractiveHoverButton>
        </PreviewTile>
        
         <PreviewTile
          title="Icon Button"
          description="A compact button with an icon."
          componentName="IconButton"
          initialSettings={{
            icon: "ArrowRight",
          }}
        >
          <Button size="icon" aria-label="Next">
              <ArrowRight />
          </Button>
        </PreviewTile>
      </div>
    </div>
  );
}
