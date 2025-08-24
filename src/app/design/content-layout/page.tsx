import { PreviewTile } from "@/components/design/preview-tile";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { FileText, Globe, GraduationCap } from "lucide-react";

export default function ContentLayoutPage() {
  const features = [
    {
      Icon: FileText,
      name: "Save Time",
      description: "Automate your documentation process.",
      href: "/",
      cta: "Learn More",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: Globe,
      name: "Multilingual",
      description: "Generate documentation in multiple languages.",
      href: "/",
      cta: "Learn More",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: GraduationCap,
      name: "Context-Aware",
      description: "Documentation that understands your codebase.",
      href: "/",
      cta: "Learn More",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1">
      <PreviewTile
        title="Bento Grid"
        description="A modern, flexible grid layout for showcasing features."
        componentName="BentoGrid"
        initialSettings={{}}
      >
        <BentoGrid className="lg:grid-rows-2">
            {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
            ))}
        </BentoGrid>
      </PreviewTile>
    </div>
  );
}
