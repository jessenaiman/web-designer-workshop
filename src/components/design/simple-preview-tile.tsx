"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type SimplePreviewTileProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function SimplePreviewTile({ title, description, children }: SimplePreviewTileProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-center justify-center bg-muted/30 p-8 rounded-md m-6 mt-0 min-h-[200px]">
        {children}
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          View Component
        </Button>
      </CardFooter>
    </Card>
  );
}
