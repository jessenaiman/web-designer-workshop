import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rows4 } from "lucide-react";
import { PreviewTile } from "@/components/design/preview-tile";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function PageTransitionsPage() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
       <PreviewTile
        title="Blur Fade"
        description="A transition that blurs and fades content in."
        componentName="BlurFade"
        initialSettings={{
          text: "Revealed with a blur.",
        }}
      >
        <BlurFade delay={0.25} inView>
            <h2 className="text-2xl font-bold tracking-tighter">Revealed with a blur.</h2>
        </BlurFade>
      </PreviewTile>
    </div>
  );
}
