import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DesignEditorDialog } from "./design-editor-dialog";

type PreviewTileProps = {
  title: string;
  description: string;
  children: React.ReactNode;
  componentName: string;
  initialSettings: Record<string, any>;
};

export function PreviewTile({ title, description, children, componentName, initialSettings }: PreviewTileProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-center justify-center bg-muted/30 p-8 rounded-md m-6 mt-0">
        {children}
      </CardContent>
      <CardFooter>
        <DesignEditorDialog
          trigger={<Button className="w-full">Customize</Button>}
          componentName={componentName}
          initialSettings={initialSettings}
        >
          {children}
        </DesignEditorDialog>
      </CardFooter>
    </Card>
  );
}
