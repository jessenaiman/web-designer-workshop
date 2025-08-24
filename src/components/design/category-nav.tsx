"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  { name: "Buttons", href: "/design/buttons" },
  { name: "Text", href: "/design/text" },
  { name: "Effects", href: "/design/effects" },
  { name: "Backgrounds", href: "/design/backgrounds" },
  { name: "Page Transitions", href: "/design/page-transitions" },
  { name: "Content Layout", href: "/design/content-layout" },
];

export function CategoryNav() {
  const pathname = usePathname();

  return (
    <aside className="w-full border-b md:w-56 md:border-b-0 md:border-r">
      <nav className="flex flex-row p-2 md:flex-col md:space-y-1">
        {categories.map((category) => (
          <Button
            key={category.name}
            asChild
            variant="ghost"
            className={cn(
              "w-full justify-start",
              pathname.startsWith(category.href) && "bg-accent text-accent-foreground"
            )}
          >
            <Link href={category.href}>{category.name}</Link>
          </Button>
        ))}
      </nav>
    </aside>
  );
}
