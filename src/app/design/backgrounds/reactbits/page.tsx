import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ToyBrick } from "lucide-react";

export default function ReactBitsPage() {
  return (
    <div className="space-y-4">
      <Card className="flex flex-col items-center justify-center p-8 text-center">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <ToyBrick className="h-8 w-8" />
          </div>
          <CardTitle>React Bits</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This section is under construction. Check back soon for background examples using React Bits.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}