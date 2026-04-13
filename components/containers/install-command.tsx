"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PACKAGE_MANAGERS = ["npx", "bunx", "yarn", "pnpm"] as const;
type PackageManager = (typeof PACKAGE_MANAGERS)[number];

function getCommand(pkg: PackageManager, registry: string): string {
  switch (pkg) {
    case "npx":
      return `npx shadcn@latest add ${registry}`;
    case "bunx":
      return `bunx --bun shadcn@latest add ${registry}`;
    case "yarn":
      return `yarn shadcn@latest add ${registry}`;
    case "pnpm":
      return `pnpm dlx shadcn@latest add ${registry}`;
  }
}

export function InstallCommand({ registry }: { registry: string }) {
  const [pkg, setPkg] = useState<PackageManager>("npx");
  const [copied, setCopied] = useState(false);

  const command = getCommand(pkg, registry);

  function copy() {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="border-border bg-secondary/50 overflow-hidden rounded-md border">
      <div className="border-border flex items-center justify-between border-b px-4 py-1.5">
        <Tabs value={pkg} onValueChange={(v) => setPkg(v as PackageManager)}>
          <TabsList className="h-7 gap-0 bg-transparent p-0">
            {PACKAGE_MANAGERS.map((p) => (
              <TabsTrigger
                key={p}
                value={p}
                className="data-[state=active]:text-foreground data-[state=inactive]:text-muted-foreground data-[state=active]:border-foreground/50 h-7 rounded-md border-transparent px-3 text-xs data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                {p}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <button
          onClick={copy}
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Copy command"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </button>
      </div>
      <div className="px-4 py-2.5">
        <code className="font-mono text-xs">{command}</code>
      </div>
    </div>
  );
}
