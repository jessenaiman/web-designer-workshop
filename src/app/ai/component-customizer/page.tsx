"use client";

import { useState } from "react";
import { customizeComponent } from "@/ai/flows/component-customizer-flow";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, Loader2 } from "lucide-react";
import { PreviewTile } from "@/components/design/preview-tile";

export default function ComponentCustomizerPage() {
  const [prompt, setPrompt] = useState("");
  const [componentName, setComponentName] = useState("PulsingButton");
  const [customizedComponent, setCustomizedComponent] = useState<React.ReactNode | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a prompt.",
      });
      return;
    }
    setIsLoading(true);
    setCustomizedComponent(null);
    try {
      const result = await customizeComponent({ componentName, prompt });
      
      // For demonstration, we'll create a new PreviewTile.
      // In a real app, you might dynamically render the returned code.
      const newComponent = (
        <PreviewTile
          title="AI-Customized Component"
          description={prompt}
          componentName={componentName}
          initialSettings={{ buttonText: "AI Button", pulseColor: "#4F46E5", speed: "1.5s" }}
        >
          <Button>{result.customizedComponent}</Button>
        </PreviewTile>
      );
      setCustomizedComponent(newComponent);

    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Could not customize the component.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Component Customizer</CardTitle>
          <CardDescription>Select a component and describe the changes you want to see.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="component-select" className="block text-sm font-medium text-muted-foreground mb-1">Component</label>
              <Select value={componentName} onValueChange={setComponentName}>
                <SelectTrigger id="component-select">
                  <SelectValue placeholder="Select a component" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PulsingButton">Pulsing Button</SelectItem>
                  <SelectItem value="GradientText" disabled>Gradient Text (soon)</SelectItem>
                  <SelectItem value="AnimatedBorderCard" disabled>Animated Border Card (soon)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="prompt" className="block text-sm font-medium text-muted-foreground mb-1">Prompt</label>
              <Textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., 'Make the button text uppercase and the pulse faster'"
                rows={4}
              />
            </div>
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              Generate
            </Button>
          </form>
        </CardContent>
      </Card>
      
      <Card className="min-h-[400px]">
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>Your customized component will appear here.</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-full">
          {isLoading && <Loader2 className="h-8 w-8 animate-spin text-primary" />}
          {!isLoading && !customizedComponent && <div className="text-muted-foreground">Waiting for generation...</div>}
          {!isLoading && customizedComponent}
        </CardContent>
      </Card>
    </div>
  );
}
