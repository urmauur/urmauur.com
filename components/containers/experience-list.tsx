"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

function getDuration(period: string): string {
  const parts = period.split(/\s*—\s*/);
  if (parts.length !== 2) return "";
  const start = parseInt(parts[0]);
  if (parts[1].trim().toLowerCase() === "now") return "";
  const end = parseInt(parts[1]);
  if (isNaN(start) || isNaN(end)) return "";
  const years = end - start;
  if (years <= 0) return "< 1y";
  return `${years}y`;
}

type ExperienceItem = {
  period: string;
  title: string;
  url: string;
  description: string;
};

export function ExperienceList({ items }: { items: ExperienceItem[] }) {
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? items : items.slice(0, 3);

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-[140px_1fr]">
      {visible.map((item, index) => (
        <div key={index} className="contents">
          <div className="text-muted-foreground flex items-baseline gap-1.5 text-sm">
            <span>{item.period}</span>
            <span className="text-muted-foreground/60 text-xs">
              {getDuration(item.period)}
            </span>
          </div>
          <div>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 inline-flex items-center gap-1.5 text-sm font-normal underline-offset-4 transition-all hover:underline"
            >
              <Image
                src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${new URL(item.url).origin}&size=24`}
                alt={`Favicon for ${item.title}`}
                width={16}
                height={16}
                unoptimized
                className="rounded-sm"
              />
              {item.title}
              <ArrowUpRight className="h-3 w-3" />
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}

      {items.length > 3 && (
        <>
          <div />
          <button
            onClick={() => setExpanded((v) => !v)}
            className="text-muted-foreground hover:text-foreground w-fit text-sm transition-colors"
          >
            {expanded ? "Show less" : `Show ${items.length - 3} more`}
          </button>
        </>
      )}
    </div>
  );
}
