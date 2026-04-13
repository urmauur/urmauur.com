import { MetadataRoute } from "next";
import { readdirSync, statSync } from "fs";
import { join } from "path";

const BASE_URL = "https://urmauur.com";

function getRoutes(dir: string, base = ""): string[] {
  const routes: string[] = [];

  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const isDir = statSync(fullPath).isDirectory();

    // Skip Next.js internals, API routes, and private folders
    if (entry.startsWith("_") || entry.startsWith("(") || entry === "api") {
      continue;
    }

    if (isDir) {
      routes.push(...getRoutes(fullPath, `${base}/${entry}`));
    } else if (entry === "page.tsx" || entry === "page.ts") {
      routes.push(base || "/");
    }
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = join(process.cwd(), "app");
  const routes = getRoutes(appDir);

  return routes.map((route) => ({
    url: `${BASE_URL}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "monthly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
