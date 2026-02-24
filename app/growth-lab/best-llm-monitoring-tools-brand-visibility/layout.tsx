import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The 10 Best LLM Monitoring Tools for Brand Visibility in 2026",
  description:
    "Compare the 10 best LLM monitoring tools for brand visibility in 2026. Hands-on reviews of Genezio, Semrush, Peec AI, Profound, and more GEO platforms.",
  openGraph: {
    title: "The 10 Best LLM Monitoring Tools for Brand Visibility in 2026",
    description:
      "Compare the 10 best LLM monitoring tools for brand visibility in 2026. Hands-on reviews of Genezio, Semrush, Peec AI, Profound, and more GEO platforms.",
    url: "https://voiqu.com/growth-lab/best-llm-monitoring-tools-brand-visibility",
    images: [
      {
        url: "/posts/thumbnail-10-ai-visibility-tools.webp",
        width: 1200,
        height: 630,
        alt: "The 10 Best LLM Monitoring Tools for Brand Visibility in 2026",
      },
    ],
    type: "article",
    publishedTime: "2026-02-24T09:00:00+02:00",
  },
  twitter: {
    card: "summary_large_image",
    title: "The 10 Best LLM Monitoring Tools for Brand Visibility in 2026",
    description:
      "Compare the 10 best LLM monitoring tools for brand visibility in 2026. Hands-on reviews of Genezio, Semrush, Peec AI, Profound, and more GEO platforms.",
    images: ["/posts/thumbnail-10-ai-visibility-tools.webp"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
