"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Code, Copy } from "lucide-react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { cn } from "@/lib/utils";

type CodeModalProps = {
  triggerText?: string;
  title: string;
  code: string;
  language: string;
  className?: string;
  iconOnly?: boolean;
};

export function CodeModal({
  triggerText = "View Code",
  title,
  code,
  language,
  className,
  iconOnly = false
}: CodeModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Highlight code using Prism
  const highlightedCode = Prism.highlight(code, Prism.languages[language] || Prism.languages.text, language);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className={cn("flex items-center gap-2", className)}>
          <Code className="w-4 h-4" />
          {!iconOnly && triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="relative mt-4">
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2"
            onClick={handleCopy}
          >
            <Copy className="w-4 h-4 mr-1" />
            {copied ? "Copied!" : "Copy"}
          </Button>
          <pre className={`language-${language} p-4 rounded-md bg-muted max-w-full overflow-x-auto`}>
            <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
          </pre>
        </div>
      </DialogContent>
    </Dialog>
  );
}
