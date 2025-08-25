"use client";

import { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Loader2, Copy, Check } from "lucide-react";
import { customizeComponent } from "@/ai/flows/component-customizer-flow";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface AICustomizerDialogProps {
  componentName: string;
  trigger: React.ReactElement;
}

export function AICustomizerDialog({ 
  componentName, 
  trigger 
}: AICustomizerDialogProps) {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setError("");
    setGeneratedCode("");

    try {
      const result = await customizeComponent({
        componentName,
        prompt: prompt.trim()
      });
      setGeneratedCode(result.customizedComponent);
    } catch (err) {
      setError("Failed to generate customized component. Please try again.");
      console.error("AI Customization Error:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setPrompt("");
    setGeneratedCode("");
    setError("");
    setCopied(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            AI Component Customizer
            <Badge variant="secondary" className="ml-2">
              {componentName}
            </Badge>
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col gap-4 flex-1 overflow-hidden">
          <div className="space-y-2">
            <Label htmlFor="prompt">
              Describe how you want to customize this component:
            </Label>
            <Textarea
              id="prompt"
              placeholder="e.g., Make it blue with rounded corners, add a subtle shadow, change the animation duration to 2 seconds..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={3}
              className="resize-none"
            />
          </div>

          <div className="flex gap-2">
            <Button 
              onClick={handleGenerate}
              disabled={!prompt.trim() || isGenerating}
              className="flex-1"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Generate Custom Component
                </>
              )}
            </Button>
            {generatedCode && (
              <Button variant="outline" onClick={handleReset}>
                Reset
              </Button>
            )}
          </div>

          {error && (
            <div className="p-4 rounded-md bg-destructive/15 text-destructive text-sm">
              {error}
            </div>
          )}

          {generatedCode && (
            <div className="flex-1 overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <Label>Generated Component:</Label>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(generatedCode)}
                >
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <div className="rounded-md border overflow-auto h-full max-h-96">
                <SyntaxHighlighter
                  language="tsx"
                  style={oneDark}
                  customStyle={{
                    margin: 0,
                    background: "transparent",
                    fontSize: "0.875rem",
                  }}
                >
                  {generatedCode}
                </SyntaxHighlighter>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
