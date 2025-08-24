
import { useId } from "react";
import { cn } from "@/lib/utils";

export function DotPattern({
  className,
  ...props
}: {
  className?: string;
}) {
  const id = useId();
  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-[var(--dot-color)]",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x="0"
          y="0"
        >
          <circle id="pattern-circle" cx="1" cy="1" r="1"></circle>
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth="0"
        fill={`url(#${id})`}
      ></rect>
    </svg>
  );
}
