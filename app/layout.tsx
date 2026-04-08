import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://urmauur.com"),
  title: {
    template: "%s - Faisal Amir",
    default: "Faisal Amir — Frontend & UI Engineer from Indonesia",
  },
  description:
    "Frontend and UI Engineer from Indonesia. I craft production-ready UIs with tidy details and micro interactions.",
  keywords: [
    "Frontend Engineer",
    "UI Engineer",
    "React",
    "Tauri",
    "Indonesia",
    "Faisal Amir",
  ],
  authors: [{ name: "Faisal Amir" }],
  creator: "Faisal Amir",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://urmauur.com",
    title: "Faisal Amir — Frontend & UI Engineer from Indonesia",
    description:
      "Frontend and UI Engineer from Indonesia. I craft production-ready UIs with tidy details and micro interactions.",
    siteName: "Faisal Amir",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faisal Amir — Frontend & UI Engineer from Indonesia",
    description:
      "Frontend and UI Engineer from Indonesia. I craft production-ready UIs with tidy details and micro interactions.",
    creator: "@urmauur",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://urmauur.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
