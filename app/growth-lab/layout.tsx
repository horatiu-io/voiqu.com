import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Growth Lab - Experiments & Insights",
  description:
    "Deep dives into growth strategies, SEO, analytics, and digital marketing insights from the trenches. Data-driven experiments and actionable guides.",
  openGraph: {
    title: "Growth Lab - Experiments & Insights",
    description:
      "Deep dives into growth strategies, SEO, analytics, and digital marketing insights from the trenches. Data-driven experiments and actionable guides.",
    url: "https://voiqu.com/growth-lab",
    images: [
      {
        url: "/h-voiqu.webp",
        alt: "Voiqu - Growth Hacker",
      },
    ],
  }, // <-- Aici se închide obiectul openGraph. Pune virgula!
  other: {
    "og:logo": "https://voiqu.com/logo.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Lab - Experiments & Insights",
    description:
      "Deep dives into growth strategies, SEO, analytics, and digital marketing insights from the trenches. Data-driven experiments and actionable guides.",
    images: ["/h-voiqu.webp"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
