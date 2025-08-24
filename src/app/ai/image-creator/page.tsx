"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ImageIcon, Loader2, Sparkles, Wand2 } from "lucide-react";
import Image from "next/image";
import { generateImage, refineImagePrompt } from "@/ai/flows/image-generation-flow";

export default function ImageCreatorPage() {
  const [prompt, setPrompt] = useState("A futuristic cityscape at sunset, with flying cars and neon signs.");
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefining, setIsRefining] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async (e: React.FormEvent) => {
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
    setGeneratedImage(null);

    try {
        const result = await generateImage({ prompt, aspectRatio });
        if (result.imageUrl) {
            setGeneratedImage(result.imageUrl);
            toast({
                title: "Image Generated!",
                description: "Your new image is ready.",
            });
        } else {
            throw new Error("Image generation failed.");
        }
    } catch (error) {
        console.error(error);
        toast({
            variant: "destructive",
            title: "An error occurred",
            description: "Could not generate the image. Please try again.",
        });
    } finally {
        setIsLoading(false);
    }
  };
  
  const handleRefinePrompt = async () => {
    if (!prompt.trim()) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a prompt to refine.",
      });
      return;
    }
    setIsRefining(true);
    try {
        const result = await refineImagePrompt({ prompt });
        setPrompt(result.refinedPrompt);
        toast({
            title: "Prompt Refined!",
            description: "The prompt has been enhanced with more detail.",
        });
    } catch (error) {
        console.error(error);
        toast({
            variant: "destructive",
            title: "An error occurred",
            description: "Could not refine the prompt.",
        });
    } finally {
        setIsRefining(false);
    }
  };

  const [width, height] = aspectRatio === '1:1' ? [1024, 1024] : aspectRatio === '16:9' ? [1024, 576] : [576, 1024];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle>Image Creator</CardTitle>
          <CardDescription>Generate stunning visuals and web assets with a simple prompt.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleGenerate} className="space-y-4">
            <div>
              <label htmlFor="prompt" className="block text-sm font-medium text-muted-foreground mb-1">Prompt</label>
              <Textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., 'A serene forest with a glowing river...'"
                rows={5}
                disabled={isLoading || isRefining}
              />
            </div>
             <Button type="button" variant="outline" onClick={handleRefinePrompt} disabled={isLoading || isRefining} className="w-full">
                {isRefining ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                Refine Prompt
            </Button>
            <div>
              <label htmlFor="aspect-ratio-select" className="block text-sm font-medium text-muted-foreground mb-1">Aspect Ratio</label>
              <Select value={aspectRatio} onValueChange={setAspectRatio} disabled={isLoading || isRefining}>
                <SelectTrigger id="aspect-ratio-select">
                  <SelectValue placeholder="Select ratio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="16:9">16:9 (Widescreen)</SelectItem>
                  <SelectItem value="1:1">1:1 (Square)</SelectItem>
                  <SelectItem value="9:16">9:16 (Vertical)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" disabled={isLoading || isRefining} className="w-full">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              Generate Image
            </Button>
          </form>
        </CardContent>
      </Card>
      
      <Card className="lg:col-span-2 min-h-[400px]">
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>Your generated image will appear here.</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-full aspect-video bg-muted/30 rounded-lg">
          {(isLoading || isRefining) && <Loader2 className="h-8 w-8 animate-spin text-primary" />}
          {!isLoading && !isRefining && !generatedImage && <div className="text-muted-foreground flex flex-col items-center gap-2"><ImageIcon className="h-10 w-10" /><span>Waiting for generation...</span></div>}
          {!isLoading && !isRefining && generatedImage && (
             <Image 
                src={generatedImage} 
                alt={prompt}
                width={width}
                height={height}
                className="rounded-lg object-contain"
                data-ai-hint="futuristic cityscape"
             />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
