import { ArrowUpRight } from "lucide-react";
import profileData from "@/data/profile.json";
import { ThemeToggle } from "@/components/containers/theme-toggle";

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
    name: "Jan",
    url: "https://www.jan.ai/",
  },
};

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ThemeToggle />
      <div className="mx-auto max-w-3xl px-6 py-16 md:px-8 md:py-16">
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

        {/* Experience Section */}
        <section className="mb-10">
          <h2 className="mb-6 text-sm font-normal">
            {profileData.experience.title}
          </h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-[140px_1fr]">
            {profileData.experience.items.map((item, index) => (
              <div key={index} className="contents">
                <div className="text-muted-foreground text-sm">
                  {item.period}
                </div>
                <div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-2 inline-flex items-center gap-1 text-sm font-normal underline-offset-4 transition-all hover:underline"
                  >
                    {item.title}
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
