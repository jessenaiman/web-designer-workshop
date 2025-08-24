import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rows4 } from "lucide-react";

export default function PageTransitionsPage() {
  return (
    <div className="space-y-4">
      <Card className="flex flex-col items-center justify-center p-8 text-center">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Rows4 className="h-8 w-8" />
          </div>
          <CardTitle>Page Transitions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This section is under construction. Check back soon for page transition examples.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
