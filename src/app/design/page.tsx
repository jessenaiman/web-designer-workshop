import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brush } from "lucide-react";

export default function DesignPage() {
  return (
    <div className="space-y-4">
      <Card className="flex flex-col items-center justify-center p-8 text-center">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Brush className="h-8 w-8" />
          </div>
          <CardTitle>Select a Category</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Choose a category from the sidebar to start exploring design components.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
