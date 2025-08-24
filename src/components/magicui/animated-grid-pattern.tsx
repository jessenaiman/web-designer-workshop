
"use client";

import { cn } from "@/lib/utils";
import { useMotionValue, motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export function AnimatedGridPattern({
  className,
  gridWidth = 40,
  gridHeight = 40,
  maxOpacity = 0.5,
  duration = 3,
  ...props
}: {
  className?: string;
  gridWidth?: number;
  gridHeight?: number;
  maxOpacity?: number;
  duration?: number;
}) {
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);

  useEffect(() => {
    const calculateGrid = () => {
      const columnCount = Math.ceil(window.innerWidth / gridWidth);
      const rowCount = Math.ceil(window.innerHeight / gridHeight);
      setColumns(columnCount);
      setRows(rowCount);
    };

    calculateGrid();
    window.addEventListener("resize", calculateGrid);

    return () => {
      window.removeEventListener("resize", calculateGrid);
    };
  }, [gridWidth, gridHeight]);

  const grid = Array.from({ length: columns * rows });

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center",
        className,
      )}
      {...props}
    >
      <div
        className="relative flex h-full w-full"
        style={{
          width: columns * gridWidth,
          height: rows * gridHeight,
        }}
      >
        {grid.map((_, i) => (
          <motion.div
            key={i}
            className="h-full w-full border-l border-t border-muted-foreground/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            transition={{
              duration,
              repeat: Infinity,
              delay: Math.random() * 5,
              repeatType: "mirror",
            }}
          />
        ))}
      </div>
    </div>
  );
}
