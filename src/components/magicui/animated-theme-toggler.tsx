"use client";

import { Moon, SunDim } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

type Props = {
  className?: string;
};

export const AnimatedThemeToggler = ({ className }: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isDark = theme === "dark";

  // Ensure component is mounted before applying browser APIs
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Check if View Transitions API is supported
  const supportsViewTransitions = () => {
    return 'startViewTransition' in document;
  };

  const changeTheme = () => {
    if (!isMounted) return;
    
    const newTheme = isDark ? "light" : "dark";
    
    if (supportsViewTransitions()) {
      // With View Transitions API
      const transition = document.startViewTransition(() => {
        flushSync(() => {
          setTheme(newTheme);
        });
      });

      // Animation for the transition
      if (buttonRef.current) {
        const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
        const y = top + height / 2;
        const x = left + width / 2;
        const right = window.innerWidth - left;
        const bottom = window.innerHeight - top;
        const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${maxRad}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 500,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      }
    } else {
      // Fallback without View Transitions API
      setTheme(newTheme);
    }
  };

  if (!isMounted) {
    // Render a simple button while mounting to avoid hydration mismatch
    return (
      <button 
        ref={buttonRef} 
        className={cn("p-2 rounded-full", className)}
        aria-label="Toggle theme"
      >
        <SunDim className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      ref={buttonRef}
      onClick={changeTheme}
      className={cn(
        "p-2 rounded-full transition-colors",
        "hover:bg-gray-100 dark:hover:bg-gray-800",
        className
      )}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <SunDim className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
};
