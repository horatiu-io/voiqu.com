import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Ultimate Guide to LLM Brand Visibility & GEO | Voiqu",
  description:
    "Discover how to optimize your brand for LLMs like ChatGPT and Perplexity. Learn the 5 advanced strategies for Generative Engine Optimization (GEO) in 2026.",
  keywords: "GEO, Generative Engine Optimization, LLM Brand Visibility, AI SEO, ChatGPT, Perplexity, Answer Engine Optimization",
  openGraph: {
    title: "The Ultimate Guide to LLM Brand Visibility & GEO | Voiqu",
    description:
      "Discover how to optimize your brand for LLMs like ChatGPT and Perplexity. Learn the 5 advanced strategies for Generative Engine Optimization (GEO) in 2026.",
    url: "https://voiqu.com/growth-lab/the-ultimate-guide-llm-brand-visibility-geo",
    type: "article",
    images: [
      {
        url: "/posts/The Ultimate Guide to LLM Brand Visibility.webp",
        alt: "The Ultimate Guide to LLM Brand Visibility & GEO",
        width: 1200,
        height: 630,
      },
    ],
    publishedTime: "2026-03-11T09:00:00+02:00",
  },
  other: {
    "og:logo": "https://voiqu.com/logo.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ultimate Guide to LLM Brand Visibility & GEO | Voiqu",
    description:
      "Discover how to optimize your brand for LLMs like ChatGPT and Perplexity. Learn the 5 advanced strategies for Generative Engine Optimization (GEO) in 2026.",
    images: ["/posts/The Ultimate Guide to LLM Brand Visibility.webp"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
