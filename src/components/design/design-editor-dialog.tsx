"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { Share2, Code, Copy, RefreshCw } from "lucide-react";

type DesignEditorDialogProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  componentName: string;
  initialSettings: Record<string, any>;
};

export function DesignEditorDialog({ trigger, children, componentName, initialSettings }: DesignEditorDialogProps) {
  const [settings, setSettings] = useState(initialSettings);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();

  const settingsFromUrl = useMemo(() => {
    const params = new URLSearchParams(searchParams);
    const settingsParam = params.get("settings");
    if (settingsParam) {
      try {
        return JSON.parse(atob(settingsParam));
      } catch (e) {
        console.error("Failed to parse settings from URL", e);
      }
    }
    return null;
  }, [searchParams]);

  useEffect(() => {
    if (settingsFromUrl && settingsFromUrl.componentName === componentName) {
      setSettings(settingsFromUrl.settings);
      setIsOpen(true);
    }
  }, [settingsFromUrl, componentName]);

  const handleSettingChange = (key: string, value: string) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleShare = () => {
    const dataToEncode = { componentName, settings };
    const encodedSettings = btoa(JSON.stringify(dataToEncode));
    const url = new URL(window.location.href);
    url.searchParams.set("settings", encodedSettings);
    navigator.clipboard.writeText(url.toString());
    toast({
      title: "Link Copied!",
      description: "Shareable link has been copied to your clipboard.",
    });
  };
  
  const handleReset = () => {
    setSettings(initialSettings);
    toast({
      title: "Settings Reset",
      description: "The component settings have been reset to their default values.",
    });
  };

  const codeString = useMemo(() => {
    // This is a simplified representation. A real implementation would be more complex.
    return `<Button style={{ 
  '--pulse-color': '${settings.pulseColor}', 
  animationDuration: '${settings.speed}' 
}}>
  ${settings.buttonText}
</Button>`;
  }, [settings]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeString);
    toast({
      title: "Code Copied!",
      description: "Component code has been copied to your clipboard.",
    });
  };

  const previewComponent = React.cloneElement(children as React.ReactElement, {
    style: {
      backgroundColor: settings.pulseColor,
      animationDuration: settings.speed,
    },
    children: settings.buttonText,
  });

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Customize: {componentName}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 rounded-lg bg-muted/30 flex items-center justify-center p-8 min-h-[300px]">
            {previewComponent}
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Controls</h3>
            {Object.keys(initialSettings).map((key) => (
              <div key={key} className="grid gap-2">
                <Label htmlFor={key} className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</Label>
                <Input
                  id={key}
                  value={settings[key]}
                  onChange={(e) => handleSettingChange(key, e.target.value)}
                  type={key.includes('Color') ? 'color' : 'text'}
                />
              </div>
            ))}
          </div>
        </div>
        <DialogFooter className="sm:justify-between flex-col sm:flex-row gap-2">
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleReset}><RefreshCw className="mr-2 h-4 w-4" /> Reset</Button>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" onClick={handleCopyCode}><Copy className="mr-2 h-4 w-4" /> Copy Code</Button>
            <Button variant="secondary" onClick={handleShare}><Share2 className="mr-2 h-4 w-4" /> Share</Button>
            <DialogClose asChild>
              <Button>Done</Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
