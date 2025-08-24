import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code } from "lucide-react";

export default function TailwindPage() {
  return (
    <div className="space-y-4">
      <Card className="flex flex-col items-center justify-center p-8 text-center">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Code className="h-8 w-8" />
          </div>
          <CardTitle>Tailwind Buttons</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This section is under construction. Check back soon for button examples using Tailwind CSS.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
