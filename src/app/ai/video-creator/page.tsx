
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { VideoIcon, Loader2, Sparkles } from "lucide-react";
import { generateVideo } from "@/ai/flows/video-generation-flow";

export default function VideoCreatorPage() {
  const [prompt, setPrompt] = useState("A majestic dragon soaring over a mystical forest at dawn.");
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
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
    setGeneratedVideo(null);

    try {
        const result = await generateVideo({ prompt });
        if (result.videoUrl) {
            setGeneratedVideo(result.videoUrl);
            toast({
                title: "Video Generated!",
                description: "Your new video is ready.",
            });
        } else {
            throw new Error("Video generation failed to return a URL.");
        }
    } catch (error: any) {
        console.error(error);
        toast({
            variant: "destructive",
            title: "An error occurred",
            description: `Could not generate the video. ${error.message || ''}`.trim(),
        });
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle>Video Creator</CardTitle>
          <CardDescription>Generate short video clips from text prompts using AI.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleGenerate} className="space-y-4">
            <div>
              <label htmlFor="prompt" className="block text-sm font-medium text-muted-foreground mb-1">Prompt</label>
              <Textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., 'A robot walking through a futuristic city...'"
                rows={5}
                disabled={isLoading}
              />
            </div>
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              Generate Video
            </Button>
          </form>
        </CardContent>
      </Card>
      
      <Card className="lg:col-span-2 min-h-[400px]">
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>Your generated video will appear here. Generation can take up to a minute.</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-full aspect-video bg-muted/30 rounded-lg">
          {isLoading && <Loader2 className="h-8 w-8 animate-spin text-primary" />}
          {!isLoading && !generatedVideo && <div className="text-muted-foreground flex flex-col items-center gap-2"><VideoIcon className="h-10 w-10" /><span>Waiting for generation...</span></div>}
          {!isLoading && generatedVideo && (
             <video 
                src={generatedVideo} 
                controls
                autoPlay
                loop
                className="rounded-lg object-contain w-full"
                data-ai-hint="dragon forest"
             />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
