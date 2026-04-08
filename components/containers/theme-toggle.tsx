"use client";

import { useCallback } from "react";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const handleToggle = useCallback(
    (checked: boolean) => {
      setTheme(checked ? "dark" : "light");
    },
    [setTheme]
  );

  return (
    <div className="fixed top-2 right-4">
      <Switch
        size="default"
        checked={isDark}
        onCheckedChange={handleToggle}
        haptic="double"
        checkedIcon={<Moon className="size-4 fill-white/80 stroke-white/80" />}
        uncheckedIcon={<Sun className="size-4 fill-white/80 stroke-white/80" />}
        className="peer-checked:border-blue-500 peer-checked:bg-blue-500"
      />
    </div>
  );
}
