import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Horațiu Voicu | Senior Growth Consultant",
  description:
    "Discover my journey from leading organic growth for top brands to pioneering Generative Engine Optimization (GEO) and AI search strategies. Let's connect!",
  openGraph: {
    title: "About Horațiu Voicu | Senior Growth Consultant",
    description:
      "Discover my journey from leading organic growth for top brands to pioneering Generative Engine Optimization (GEO) and AI search strategies. Let's connect!",
    url: "https://voiqu.com/about",
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
    title: "About Horațiu Voicu | Senior Growth Consultant",
    description:
      "Discover my journey from leading organic growth for top brands to pioneering Generative Engine Optimization (GEO) and AI search strategies. Let's connect!",
    images: ["/h-voiqu.webp"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
