import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Growth Lab: SEO, AI & Marketing Automation",
  description:
    "Read the latest growth marketing experiments. Actionable insights on Generative Engine Optimization (GEO), AI tools, SEO, and web analytics.",
  openGraph: {
    title: "Growth Lab: SEO, AI & Marketing Automation",
    description:
      "Read the latest growth marketing experiments. Actionable insights on Generative Engine Optimization (GEO), AI tools, SEO, and web analytics.",
    url: "https://voiqu.com/growth-lab",
    type: "article",
    images: [
      {
        url: "/h-voiqu.webp",
        alt: "Voiqu - Growth Hacker",
        width: 1200,
        height: 630,
      },
    ],
  }, // <-- Aici se închide obiectul openGraph. Pune virgula!
  other: {
    "og:logo": "https://voiqu.com/logo.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Lab: SEO, AI & Marketing Automation",
    description:
      "Read the latest growth marketing experiments. Actionable insights on Generative Engine Optimization (GEO), AI tools, SEO, and web analytics.",
    images: ["/h-voiqu.webp"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
