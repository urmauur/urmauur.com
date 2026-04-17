import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import profileData from "@/data/profile.json";
import { ThemeToggle } from "@/components/containers/theme-toggle";
import { ExperienceList } from "@/components/containers/experience-list";
import FileCard from "@/components/publish/file-card";
import Folder from "@/components/publish/folder";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://urmauur.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Faisal Amir",
  url: "https://urmauur.com",
  jobTitle: "Frontend & UI Engineer",
  description:
    "Frontend and UI Engineer from Indonesia. I craft production-ready UIs with tidy details and micro interactions.",
  sameAs: [
    "https://x.com/urmauur",
    "https://www.linkedin.com/in/urmauur",
    "https://github.com/urmauur",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Urmauur",
    url: "https://urmauur.com/",
  },
};

export default function Home() {
  return (
    <div className="bg-background text-foreground flex min-h-screen items-center py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ThemeToggle />
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        {/* Header */}
        <header className="mb-3 flex items-center gap-4">
          <Image
            src="/images/misc/avatar.png"
            alt="Avatar"
            width={56}
            height={56}
            className="rounded-full border p-0.5"
            priority
          />
          <div>
            <h1 className="mb-1 text-xl font-normal">
              {profileData.header.name}
            </h1>
            <p className="text-muted-foreground mb-1 text-sm leading-relaxed">
              {profileData.header.role}
            </p>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-10">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {profileData.about.description}
          </p>
        </section>

        {/* Interfaces Section */}
        <section className="mb-20">
          <h2 className="mb-1 text-sm font-normal">Interfaces</h2>
          <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
            UI components and micro-interactions, free to use and install.
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <a
              href="/interfaces/folder"
              className="group block transition-opacity hover:opacity-80"
            >
              <div className="flex h-80 items-center justify-center rounded-3xl border">
                <Folder color="blue" size="md" label="Components" />
              </div>
              <p className="mt-4 text-sm">Folder Components</p>
              <p className="text-muted-foreground mt-0.5 line-clamp-2 text-xs leading-relaxed">
                Folder components with default, open, glass, and document
                variants across 6 color themes. Great for file managers,
                dashboards, and productivity UIs.
              </p>
              <p className="text-muted-foreground mt-2 text-xs">
                17 April 2026
              </p>
            </a>

            <a
              href="/interfaces/file-card-collections"
              className="group block transition-opacity hover:opacity-80"
            >
              <div className="flex h-80 items-center justify-center rounded-3xl border">
                <div className="space-y-4">
                  <div className="flex gap-6">
                    <FileCard formatFile="mdx" />
                    <FileCard formatFile="css" />
                  </div>
                  <div className="flex gap-6">
                    <FileCard formatFile="img" />
                    <FileCard formatFile="ppt" />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm">File Card Collections</p>
              <p className="text-muted-foreground mt-0.5 line-clamp-2 text-xs leading-relaxed">
                A collection of file preview cards for common file types (PDF,
                DOC, images, MD, PPT, video, archives, and more). Ideal for
                dashboards, file managers, and upload UIs with consistent visual
                language.
              </p>
              <p className="text-muted-foreground mt-2 text-xs">
                12 April 2026
              </p>
            </a>
          </div>
        </section>

        {/* Experience Section */}
        <section className="my-10">
          <h2 className="mb-6 text-sm font-normal">
            {profileData.experience.title}
          </h2>
          <ExperienceList items={profileData.experience.items} />
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="mb-6 text-sm font-normal">
            {profileData.contact.title}
          </h2>
          <div className="grid grid-cols-[140px_1fr] gap-x-8 gap-y-4">
            {profileData.contact.items.map((item, index) => (
              <div key={index} className="contents">
                <div className="text-muted-foreground text-sm">
                  {item.label}
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm lowercase underline-offset-4 transition-all hover:underline"
                >
                  {item.label}/{item.text}
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
