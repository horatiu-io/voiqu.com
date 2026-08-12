import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Is Generative Engine Optimization (GEO) Going to Ruin the Web?",
  description:
    "Discover why GEO threatens to pollute the internet with synthetic content and how brands can build lasting, model-resilient authority.",
  openGraph: {
    title: "Is Generative Engine Optimization (GEO) Going to Ruin the Web?",
    description:
      "Discover why GEO threatens to pollute the internet with synthetic content and how brands can build lasting, model-resilient authority.",
    url: "https://voiqu.com/growth-lab/is-geo-going-to-ruin-the-web-like-seo-did",
    type: "article",
    images: [
      {
        url: "/posts/is-geo-going-to-ruin-the-web-like-seo-did.webp",
        alt: "Is Generative Engine Optimization (GEO) Going to Ruin the Web?",
        width: 1200,
        height: 630,
      },
    ],
    publishedTime: "2026-08-12T10:00:00+03:00",
  },
  other: {
    "og:logo": "https://voiqu.com/logo.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Is Generative Engine Optimization (GEO) Going to Ruin the Web?",
    description:
      "Discover why GEO threatens to pollute the internet with synthetic content and how brands can build lasting, model-resilient authority.",
    images: ["/posts/is-geo-going-to-ruin-the-web-like-seo-did.webp"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
