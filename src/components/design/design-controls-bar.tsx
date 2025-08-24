"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDesignControls } from "@/hooks/use-design-controls";
import { Play, Square, RefreshCcw } from "lucide-react";

export function DesignControlsBar() {
  const { controls, setPlaying, setText, resetControls } = useDesignControls();

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-md">
        <Card className="shadow-2xl">
            <CardContent className="p-4 flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <Button
                        size="icon"
                        variant={controls.playing ? "secondary" : "default"}
                        onClick={() => setPlaying(true)}
                        aria-label="Play"
                        >
                        <Play className="h-4 w-4" />
                    </Button>
                    <Button
                        size="icon"
                        variant={!controls.playing ? "secondary" : "default"}
                        onClick={() => setPlaying(false)}
                        aria-label="Stop"
                        >
                        <Square className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" onClick={resetControls} aria-label="Reset">
                        <RefreshCcw className="h-4 w-4" />
                    </Button>
                </div>
                <div className="flex-1 grid gap-1.5">
                    <Label htmlFor="global-text-input" className="sr-only">Global Text</Label>
                    <Input
                        id="global-text-input"
                        placeholder="Global Text"
                        value={controls.text}
                        onChange={(e) => setText(e.target.value)}
                        className="h-9"
                    />
                </div>
            </CardContent>
        </Card>
    </div>
  );
}
