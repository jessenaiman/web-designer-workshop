
"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface TextAnimateProps {
  children: string;
  className?: string;
  as?: React.ElementType;
  animation?: Variants;
}

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export function TextAnimate({
  children,
  className,
  as: Tag = "p",
  animation = defaultAnimations,
}: TextAnimateProps) {
  return (
    <Tag className={cn("inline-block", className)}>
      {children.split(" ").map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={animation}
          initial="hidden"
          animate="visible"
          custom={i}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </Tag>
  );
}
