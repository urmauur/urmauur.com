import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { ThemeToggle } from "@/components/containers/theme-toggle";
import { FileCard } from "@/components/publish/file-card";
import { Badge } from "@/components/ui/badge";
import { InstallCommand } from "@/components/containers/install-command";

export const metadata: Metadata = {
  title: "File Card Collections",
  description:
    "A file card component that displays file format badges with content previews. Supports 26 file types including doc, pdf, md, csv, zip, code, img, video, and more. Free to use and installable via the shadcn CLI.",
  keywords: [
    "file card",
    "UI component",
    "shadcn",
    "React",
    "Tailwind CSS",
    "file format",
    "Next.js",
  ],
  alternates: {
    canonical: "https://urmauur.com/interfaces/file-card-collections",
  },
  openGraph: {
    type: "website",
    url: "https://urmauur.com/interfaces/file-card-collections",
    title: "File Card Collections — Interfaces by Faisal Amir",
    description:
      "A file card component that displays file format badges with content previews. Supports 26 file types. Installable via shadcn CLI.",
    siteName: "Faisal Amir",
    images: [
      {
        url: `https://urmauur.com/api/og?title=${encodeURIComponent("File Card Collections")}&description=${encodeURIComponent("26 file types, installable via shadcn CLI")}`,
        width: 1200,
        height: 630,
        alt: "File Card Collections — Interfaces by Faisal Amir",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "File Card Collections — Interfaces by Faisal Amir",
    description:
      "A file card component that displays file format badges with content previews. Supports 26 file types. Installable via shadcn CLI.",
    creator: "@urmauur",
    images: [
      `https://urmauur.com/api/og?title=${encodeURIComponent("File Card Collections")}&description=${encodeURIComponent("26 file types, installable via shadcn CLI")}`,
    ],
  },
};

const fileFormats = [
  "doc",
  "pdf",
  "md",
  "mdx",
  "csv",
  "xls",
  "xlsx",
  "txt",
  "ppt",
  "pptx",
  "zip",
  "rar",
  "tar",
  "code",
  "html",
  "js",
  "tsx",
  "css",
  "json",
  "img",
  "png",
  "jpg",
  "jpeg",
  "video",
] as const;

export default function FileCardCollectionsPage() {
  return (
    <div className="bg-background text-foreground flex min-h-screen py-16">
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
          <h1 className="mb-3 text-xl font-normal">File Card Collections</h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            A collection of file card components built with shadcn/ui and
            Tailwind CSS. Each card displays a recognizable format badge
            alongside a content preview, making it easy to communicate file
            types at a glance. Covers 26 formats across documents, spreadsheets,
            archives, code, and media — drop it into any React or Next.js
            project and install it directly via the shadcn CLI.
          </p>
        </header>

        <section className="mb-12">
          <div className="mb-6 flex flex-col justify-between gap-2 md:flex-row">
            <a
              href="https://github.com/urmauur/urmauur.com/blob/main/components/publish/file-card/index.tsx"
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
              src="/images/file-card/file-card-video.mp4"
              poster="/images/file-card/file-card-thumb.png"
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
            A collection of file preview cards for common file types (PDF, DOC,
            images, MD, PPT, video, archives, and more). Ideal for dashboards,
            file managers, and upload UIs with consistent visual language.
          </p>
          <div className="my-6 flex flex-wrap gap-8">
            {fileFormats.map((format) => (
              <FileCard key={format} formatFile={format} />
            ))}
          </div>

          {/* Install */}
          <h2 className="mt-10 mb-2 text-sm font-medium">Installation</h2>
          <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
            Run the command below to add the component to your project. It
            registers automatically with shadcn and requires no additional
            configuration.
          </p>
          <div className="mb-8">
            <InstallCommand registry="https://urmauur.com/r/file-card.json" />
          </div>

          {/* Props */}
          <h2 className="mt-10 mb-2 text-sm font-medium">Props</h2>
          <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
            The component accepts a single prop that controls which file type is
            displayed.
          </p>
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
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2.5">
                    <code className="font-mono text-xs">formatFile</code>
                  </td>
                  <td className="px-4 py-2.5">
                    <code className="text-muted-foreground font-mono text-xs">
                      string
                    </code>
                  </td>
                  <td className="px-4 py-2.5">
                    <div className="flex flex-wrap gap-1">
                      {(
                        [
                          "doc",
                          "pdf",
                          "md",
                          "mdx",
                          "csv",
                          "xls",
                          "xlsx",
                          "txt",
                          "ppt",
                          "pptx",
                          "zip",
                          "rar",
                          "tar",
                          "gz",
                          "code",
                          "html",
                          "js",
                          "jsx",
                          "tsx",
                          "css",
                          "json",
                          "img",
                          "png",
                          "jpg",
                          "jpeg",
                          "video",
                        ] as const
                      ).map((f) => (
                        <Badge
                          key={f}
                          variant="outline"
                          className="text-muted-foreground font-mono text-xs font-normal"
                        >
                          {f}
                        </Badge>
                      ))}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <footer className="mt-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <a
                href="https://x.com/urmauur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter / X"
              >
                <svg viewBox="0 0 24 24" className="size-4 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/urmauur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="size-4 fill-current">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/urmauur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" className="size-5 fill-current">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
            <a
              href="https://github.com/sponsors/urmauur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-pink-500/40 bg-pink-500/10 px-3 py-1.5 text-xs text-pink-500 transition-colors hover:bg-pink-500/20"
            >
              <svg viewBox="0 0 16 16" className="size-4 fill-current">
                <path d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 0 0 8 13.393a20.561 20.561 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5z" />
              </svg>
              Sponsor
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
