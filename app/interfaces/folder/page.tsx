import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { ThemeToggle } from "@/components/containers/theme-toggle";
import { Folder } from "@/components/publish/folder";
import { Badge } from "@/components/ui/badge";
import { InstallCommand } from "@/components/containers/install-command";
import { PageFooter } from "@/components/containers/page-footer";

export const metadata: Metadata = {
  title: "Folder Collections",
  description:
    "An animated folder icon component with noise texture, document peek animation on hover, and full color customization. Built with React and Tailwind CSS. Installable via the shadcn CLI.",
  keywords: [
    "folder",
    "animated icon",
    "UI component",
    "shadcn",
    "React",
    "Tailwind CSS",
    "file manager",
    "Next.js",
  ],
  alternates: {
    canonical: "https://urmauur.com/interfaces/folder",
  },
  openGraph: {
    type: "website",
    url: "https://urmauur.com/interfaces/folder",
    title: "Folder Collections — Interfaces by Faisal Amir",
    description:
      "Animated folder icon with noise texture and hover document animation. Fully color-customizable. Installable via shadcn CLI.",
    siteName: "Faisal Amir",
    images: [
      {
        url: `https://urmauur.com/api/og?title=${encodeURIComponent("Folder Collections")}&description=${encodeURIComponent("Animated folder icon, hover animation, noise texture")}`,
        width: 1200,
        height: 630,
        alt: "Folder Collections — Interfaces by Faisal Amir",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Folder Collections — Interfaces by Faisal Amir",
    description:
      "Animated folder icon with noise texture and hover document animation. Installable via shadcn CLI.",
    creator: "@urmauur",
    images: [
      `https://urmauur.com/api/og?title=${encodeURIComponent("Folder Collections")}&description=${encodeURIComponent("Animated folder icon, hover animation, noise texture")}`,
    ],
  },
};

const folders = [
  { color: "black", label: "Pictures", size: "md" },
  { color: "yellow", label: "Documents", size: "md" },
  { color: "orange", label: "Videos", size: "md" },
  { color: "red", label: "Downloads", size: "md" },
  { color: "blue", label: "Archives", size: "md" },
  { color: "grey", label: "Trash", size: "md" },
] as const;

const videoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Folder Collections — UI Component Demo",
  description:
    "Animated folder icon with frosted glass flap, stacked document peek, and spring hover animation. 6 color themes. Built with React and Tailwind CSS.",
  thumbnailUrl:
    "https://urmauur.com/api/og?title=Folder%20Collections&description=Animated%20folder%20icon%2C%20hover%20animation%2C%20noise%20texture",
  uploadDate: "2026-04-17T00:00:00+00:00",
  contentUrl: "https://urmauur.com/images/folder/folder-video.mp4",
  embedUrl: "https://urmauur.com/interfaces/folder",
  publisher: {
    "@type": "Person",
    name: "Faisal Amir",
    url: "https://urmauur.com",
  },
};

export default function FolderPage() {
  return (
    <div className="bg-background text-foreground flex min-h-screen py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />
      <ThemeToggle />
      <div className="mx-auto w-full max-w-3xl px-6 md:px-8">
        {/* Header */}
        <header className="mb-10">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-1 text-sm transition-colors"
          >
            <ChevronLeft className="h-3 w-3" />
            Back
          </Link>
          <h1 className="mb-1 text-xl font-normal">Folder Collections</h1>
          <p className="text-muted-foreground mb-3 text-xs">17 April 2026</p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            A folder icon component with a frosted glass front flap, stacked
            document peek, and smooth spring hover animation that fans the
            papers open. Pick from 6 color themes via the{" "}
            <code className="bg-secondary rounded px-1 py-0.5 font-mono text-xs">
              color
            </code>{" "}
            prop. Drop it into any React or Next.js project and install directly
            via the shadcn CLI.
          </p>
        </header>

        <section className="mb-12">
          <div className="mb-6 flex flex-col justify-between gap-2 md:flex-row">
            <a
              href="https://github.com/urmauur/urmauur.com/blob/main/components/publish/folder/index.tsx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground inline-flex shrink-0 items-center gap-1.5 text-sm transition-colors"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              Source
            </a>
            <div className="flex flex-wrap items-center gap-1.5">
              <Badge variant="secondary">shadcn/ui</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">TypeScript</Badge>
            </div>
          </div>

          {/* Video demo */}
          <div className="border-border bg-secondary/30 mb-6 overflow-hidden rounded-lg border">
            <video
              src="/images/folder/folder-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
            />
          </div>

          {/* Live demo */}
          <h2 className="mt-8 mb-2 text-sm font-medium">Preview</h2>
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
            Hover over a folder to see the document fan animation. Each color
            uses a noise texture and scratch overlay for a tactile feel.
          </p>

          {/* Size showcase */}
          <div className="mb-6 flex flex-wrap items-end justify-center gap-10 p-10">
            <Folder color="blue" size="sm" label="Small" />
            <Folder color="blue" size="md" label="Medium" />
            <Folder color="blue" size="lg" label="Large" />
          </div>

          <div className="mb-6 flex flex-wrap items-center justify-center gap-10 p-10">
            {folders.map((f) => (
              <Folder
                key={f.color}
                color={f.color}
                label={f.label}
                size={f.size}
              />
            ))}
          </div>

          {/* Install */}
          <h2 className="mt-10 mb-2 text-sm font-medium">Installation</h2>
          <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
            Run the command below to add the component to your project.
          </p>
          <div className="mb-8">
            <InstallCommand registry="https://urmauur.com/r/folder.json" />
          </div>

          {/* Props */}
          <h2 className="mt-10 mb-2 text-sm font-medium">Props</h2>
          <div className="border-border mb-8 overflow-hidden rounded-md border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-border bg-secondary/40 border-b">
                  <th className="text-muted-foreground px-4 py-2 text-left text-xs font-medium">
                    Prop
                  </th>
                  <th className="text-muted-foreground px-4 py-2 text-left text-xs font-medium">
                    Type
                  </th>
                  <th className="text-muted-foreground px-4 py-2 text-left text-xs font-medium">
                    Default
                  </th>
                  <th className="text-muted-foreground px-4 py-2 text-left text-xs font-medium">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-border divide-y">
                {[
                  {
                    prop: "color",
                    type: "string",
                    def: "blue",
                    desc: "blue · black · grey · yellow · orange · red",
                  },
                  {
                    prop: "size",
                    type: "string",
                    def: "lg",
                    desc: "sm · md · lg",
                  },
                  {
                    prop: "label",
                    type: "string",
                    def: "—",
                    desc: "Optional text badge shown bottom-left of flap",
                  },
                  {
                    prop: "className",
                    type: "string",
                    def: "—",
                    desc: "Extra classes on the root element",
                  },
                ].map(({ prop, type, def, desc }) => (
                  <tr key={prop}>
                    <td className="px-4 py-2.5">
                      <code className="font-mono text-xs">{prop}</code>
                    </td>
                    <td className="px-4 py-2.5">
                      <code className="text-muted-foreground font-mono text-xs">
                        {type}
                      </code>
                    </td>
                    <td className="px-4 py-2.5">
                      <code className="text-muted-foreground font-mono text-xs">
                        {def}
                      </code>
                    </td>
                    <td className="text-muted-foreground px-4 py-2.5 text-xs">
                      {desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <PageFooter />
      </div>
    </div>
  );
}
