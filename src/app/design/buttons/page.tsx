import { PreviewTile } from "@/components/design/preview-tile";
import { Button } from "@/components/ui/button";
import { PulsatingButton } from "@/components/magicui/pulsating-button";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ArrowRight } from "lucide-react";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export default function ButtonsPage() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <PreviewTile
        title="Pulsing Button"
        description="A button with a subtle pulse animation."
        componentName="PulsingButton"
        initialSettings={{
          buttonText: "Click Me",
          pulseColor: "#8B5CF6",
          speed: "2s",
        }}
      >
        <PulsatingButton>Click Me</PulsatingButton>
      </PreviewTile>
      <PreviewTile
        title="Shimmer Button"
        description="A button with a shimmering gradient effect."
        componentName="ShimmerButton"
        initialSettings={{
          buttonText: "Get Started",
        }}
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
  );
}
