"use client";

import { useState, useEffect, cloneElement, ReactElement } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Code2, Sparkles } from "lucide-react";
import { DesignEditorDialog } from "./design-editor-dialog";
import { CodeModal } from "./code-modal";
import { AICustomizerDialog } from "./ai-customizer-dialog";

type PreviewTileProps = {
  title: string;
  description: string;
  children: React.ReactNode;
  componentName: string;
  initialSettings: Record<string, any>;
  quickControls?: {
    key: string;
    label: string;
    type: 'text' | 'number' | 'boolean' | 'select' | 'color';
    options?: string[];
    min?: number;
    max?: number;
  }[];
};

export function PreviewTile({ 
  title, 
  description, 
  children, 
  componentName, 
  initialSettings,
  quickControls = []
}: PreviewTileProps) {
  const [settings, setSettings] = useState(initialSettings);
  const [showControls, setShowControls] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);

  // Clone children with updated props
  const renderComponent = () => {
    if (!isInteractive || !children) return children;
    
    try {
      return cloneElement(children as ReactElement, settings);
    } catch {
      return children;
    }
  };

  // Generate sample code (this would be enhanced with actual component code generation)
  const generateComponentCode = () => {
    const props = Object.entries(settings)
      .map(([key, value]) => {
        if (typeof value === 'string') return `${key}="${value}"`;
        if (typeof value === 'boolean') return value ? key : '';
        if (Array.isArray(value)) return `${key}={${JSON.stringify(value)}}`;
        return `${key}={${JSON.stringify(value)}}`;
      })
      .filter(Boolean)
      .join(' ');
    
    return `<${componentName} ${props} />`;
  };

  const generateTailwindCode = () => {
    // This would generate pure HTML/CSS version
    return `<div class="component-placeholder">\n  <!-- ${componentName} implementation -->\n</div>`;
  };

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Card className="flex flex-col transition-all hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              {title}
              {isInteractive && <Badge variant="secondary" className="text-xs">Interactive</Badge>}
            </CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsInteractive(!isInteractive)}
              className="h-8 px-2"
            >
              <Sparkles className="h-4 w-4" />
            </Button>
            {quickControls.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowControls(!showControls)}
                className="h-8 px-2"
              >
                <Settings className="h-4 w-4" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowCode(true)}
              className="h-8 px-2"
            >
              <Code2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      {showControls && quickControls.length > 0 && (
        <div className="px-6 pb-4">
          <div className="space-y-4 rounded-md border p-4 bg-muted/30">
            <h4 className="text-sm font-medium">Quick Controls</h4>
            <div className="grid gap-3">
              {quickControls.map((control) => (
                <div key={control.key} className="grid gap-2">
                  <Label htmlFor={control.key} className="text-xs">
                    {control.label}
                  </Label>
                  {control.type === 'text' && (
                    <Input
                      id={control.key}
                      value={settings[control.key] || ''}
                      onChange={(e) => updateSetting(control.key, e.target.value)}
                      className="h-8"
                    />
                  )}
                  {control.type === 'number' && (
                    <div className="space-y-2">
                      <Slider
                        value={[settings[control.key] || control.min || 0]}
                        onValueChange={([value]) => updateSetting(control.key, value)}
                        max={control.max || 100}
                        min={control.min || 0}
                        step={1}
                        className="w-full"
                      />
                      <div className="text-xs text-muted-foreground text-center">
                        {settings[control.key] || control.min || 0}
                      </div>
                    </div>
                  )}
                  {control.type === 'boolean' && (
                    <Switch
                      checked={settings[control.key] || false}
                      onCheckedChange={(checked) => updateSetting(control.key, checked)}
                    />
                  )}
                  {control.type === 'select' && control.options && (
                    <Select
                      value={settings[control.key] || ''}
                      onValueChange={(value) => updateSetting(control.key, value)}
                    >
                      <SelectTrigger className="h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {control.options.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <CardContent className="flex flex-1 items-center justify-center bg-muted/30 p-8 rounded-md m-6 mt-0 min-h-[200px]">
        {renderComponent()}
      </CardContent>
      
      <CardFooter className="flex gap-2">
        <DesignEditorDialog
          trigger={<Button variant="outline" className="flex-1">Advanced Editor</Button>}
          componentName={componentName}
          initialSettings={settings}
        >
          {renderComponent()}
        </DesignEditorDialog>
        <AICustomizerDialog
          componentName={componentName}
          trigger={
            <Button variant="outline" className="flex-1">
              <Sparkles className="h-4 w-4 mr-2" />
              AI Customize
            </Button>
          }
        />
        <Button 
          variant="outline"
          onClick={() => setShowCode(true)}
          className="flex-1"
        >
          <Code2 className="h-4 w-4 mr-2" />
          View Code
        </Button>
      </CardFooter>

      <CodeModal
        open={showCode}
        onOpenChange={setShowCode}
        componentName={componentName}
        componentCode={generateComponentCode()}
        tailwindCode={generateTailwindCode()}
      />
    </Card>
  );
}
