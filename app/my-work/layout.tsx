import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Work - Architecting Scalable Growth Engines",
  description:
    "Explore my approach to Go-To-Market Strategy, Omnichannel Performance Marketing, Advanced Tracking & SEO/GEO, and AI & Business Automation.",
  openGraph: {
    title: "My Work - Architecting Scalable Growth Engines",
    description:
      "Explore my approach to Go-To-Market Strategy, Omnichannel Performance Marketing, Advanced Tracking & SEO/GEO, and AI & Business Automation.",
    url: "https://voiqu.com/my-work",
    type: "website",
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
    title: "Architecting Scalable Growth Engines",
    description:
      "Explore my approach to Go-To-Market Strategy, Omnichannel Performance Marketing, Advanced Tracking & SEO/GEO, and AI & Business Automation.",
    images: ["/h-voiqu.webp"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
