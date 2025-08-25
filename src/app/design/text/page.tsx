import { PreviewTile } from "@/components/design/preview-tile";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { FlipText } from "@/components/magicui/flip-text";
import { WordRotate } from "@/components/magicui/word-rotate";
import { TextReveal } from "@/components/magicui/text-reveal";

export default function TextPage() {
  return (
    <div className="container mx-auto max-w-7xl space-y-8 p-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Text Components</h1>
        <p className="text-muted-foreground">
          Explore our collection of animated text components
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <PreviewTile
          title="Animated Gradient"
          description="Text with an animated gradient background."
          componentName="AnimatedGradientText"
          initialSettings={{
            text: "Hello World",
          }}
          quickControls={[
            {
              key: 'text',
              label: 'Text Content',
              type: 'text'
            }
          ]}
        >
          <AnimatedGradientText>Hello World</AnimatedGradientText>
        </PreviewTile>
        
        <PreviewTile
          title="Flip Text"
          description="Text that flips in character by character."
          componentName="FlipText"
          initialSettings={{
            text: "Flipping Great",
          }}
        >
          <FlipText>Flipping Great</FlipText>
        </PreviewTile>
        
        <PreviewTile
          title="Word Rotate"
          description="Rotates through a series of words."
          componentName="WordRotate"
          initialSettings={{
            words: "Innovate,Create,Design",
            duration: 2500,
          }}
          quickControls={[
            {
              key: 'words',
              label: 'Words (comma separated)',
              type: 'text'
            },
            {
              key: 'duration',
              label: 'Duration (ms)',
              type: 'number',
              min: 1000,
              max: 5000
            }
          ]}
        >
          <WordRotate words={["Innovate", "Create", "Design"]} />
        </PreviewTile>
        
        <PreviewTile
          title="Text Reveal"
          description="Text that reveals itself on scroll."
          componentName="TextReveal"
          initialSettings={{
            text: "Scroll down to reveal the magic of this component.",
          }}
        >
          <div className="h-48 overflow-y-auto rounded-md border p-4">
            <TextReveal>Scroll down to reveal the magic of this component. The text will appear as you scroll through this container.</TextReveal>
          </div>
        </PreviewTile>
      </div>
    </div>
  );
}
