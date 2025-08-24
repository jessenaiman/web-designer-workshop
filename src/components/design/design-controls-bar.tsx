"use client";

import { useDesignControls } from "@/hooks/use-design-controls";
import { Play, Square, RefreshCcw } from "lucide-react";
import { IconButton } from "@/components/animate-ui/buttons/icon";
import { cn } from "@/lib/utils";

export function DesignControlsBar() {
  const { controls, setPlaying, resetControls } = useDesignControls();

  return (
    <div
      className={cn(
        "fixed bottom-6 left-1/2 z-50 -translate-x-1/2",
        "flex items-center gap-3 rounded-full border bg-background/60 p-2 shadow-lg backdrop-blur-md",
      )}
    >
      <IconButton
        size="lg"
        active={controls.playing}
        onClick={() => setPlaying(true)}
        aria-label="Play"
      >
        <Play />
      </IconButton>
      <IconButton
        size="lg"
        active={!controls.playing}
        onClick={() => setPlaying(false)}
        aria-label="Stop"
      >
        <Square />
      </IconButton>
      <div className="mx-2 h-8 w-px bg-border" />
      <IconButton
        size="lg"
        onClick={resetControls}
        aria-label="Reset"
        className="text-muted-foreground hover:text-primary"
      >
        <RefreshCcw />
      </IconButton>
    </div>
  );
}
