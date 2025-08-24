import { PreviewTile } from "@/components/design/preview-tile";
import { Button } from "@/components/ui/button";

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
        <Button className="animate-pulse">Click Me</Button>
      </PreviewTile>
      <PreviewTile
        title="Shimmer Button"
        description="A button with a shimmering gradient effect."
        componentName="ShimmerButton"
        initialSettings={{
          buttonText: "Get Started",
        }}
      >
        <Button>Get Started</Button>
      </PreviewTile>
       <PreviewTile
        title="Icon Button"
        description="A compact button with an icon."
        componentName="IconButton"
        initialSettings={{
          icon: "ArrowRight",
        }}
      >
        <Button size="icon">{"->"}</Button>
      </PreviewTile>
    </div>
  );
}
