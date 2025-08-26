"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Settings, Code2, Sparkles } from "lucide-react";

type MinimalPreviewTileProps = {
  title: string;
  description: string;
  children: React.ReactNode;
  componentName: string;
  initialSettings: Record<string, any>;
};

export function MinimalPreviewTile({ 
  title, 
  description, 
  children, 
  componentName, 
  initialSettings
}: MinimalPreviewTileProps) {
  const [showControls, setShowControls] = useState(false);

  return (
    <Card className="flex flex-col transition-all hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              {title}
              <Badge variant="secondary" className="text-xs">Interactive</Badge>
            </CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-2"
            >
              <Sparkles className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowControls(!showControls)}
              className="h-8 px-2"
            >
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 items-center justify-center bg-muted/30 p-8 rounded-md m-6 mt-0 min-h-[200px]">
        {children}
      </CardContent>
      
      <CardFooter className="flex gap-2">
        <Button variant="outline" className="flex-1">
          Advanced Editor
        </Button>
        <Button variant="outline" className="flex-1">
          <Code2 className="h-4 w-4 mr-2" />
          View Code
        </Button>
      </CardFooter>
    </Card>
  );
}
