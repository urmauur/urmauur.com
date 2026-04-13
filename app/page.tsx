import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import profileData from "@/data/profile.json";
import { ThemeToggle } from "@/components/containers/theme-toggle";
import { ExperienceList } from "@/components/containers/experience-list";

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
        <header className="mb-8">
          <h1 className="mb-1 text-xl font-normal">
            {profileData.header.name}
          </h1>
          <p className="text-muted-foreground mb-1 text-sm leading-relaxed">
            {profileData.header.role}
          </p>
        </header>

        {/* About Section */}
        <section className="mb-10">
          <h2 className="mb-4 text-sm font-normal">
            {profileData.about.title}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {profileData.about.description}
          </p>
        </section>

        {/* Interfaces Section */}
        <section className="mb-10">
          <h2 className="mb-1 text-sm font-normal">Interfaces</h2>
          <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
            UI components and micro-interactions, free to use and install.
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a
              href="/interfaces/file-card-collections"
              className="group block transition-opacity hover:opacity-80"
            >
              <Image
                src="/images/file-card/file-card-thumb.png"
                alt="File Card Collections preview"
                width={800}
                height={450}
                className="w-full rounded-lg border"
                loading="eager"
              />
              <p className="mt-4 text-sm">File Card Collections</p>
              <p className="text-muted-foreground mt-0.5 line-clamp-2 text-xs leading-relaxed">
                A collection of file preview cards for common file types (PDF,
                DOC, images, MD, PPT, video, archives, and more). Ideal for
                dashboards, file managers, and upload UIs with consistent visual
                language.
              </p>
            </a>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-10">
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
