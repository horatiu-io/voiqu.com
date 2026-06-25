import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How to Run an LLM Brand Visibility Audit (Enterprise Framework)",
  description:
    "A step-by-step enterprise framework for running an LLM Brand Visibility Audit. Connect technical SEO debt to chatbot recommendation rates.",
  openGraph: {
    title: "How to Run an LLM Brand Visibility Audit (Enterprise Framework)",
    description:
      "A step-by-step enterprise framework for running an LLM Brand Visibility Audit. Connect technical SEO debt to chatbot recommendation rates.",
    url: "https://voiqu.com/growth-lab/how-to-run-an-llm-brand-visibility-audit",
    type: "article",
    images: [
      {
        url: "/posts/llm-brand-visibility-audit.webp",
        alt: "How to Run an LLM Brand Visibility Audit (Enterprise Framework)",
        width: 1200,
        height: 630,
      },
    ],
    publishedTime: "2026-06-25T14:00:00+03:00",
  },
  other: {
    "og:logo": "https://voiqu.com/logo.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Run an LLM Brand Visibility Audit (Enterprise Framework)",
    description:
      "A step-by-step enterprise framework for running an LLM Brand Visibility Audit. Connect technical SEO debt to chatbot recommendation rates.",
    images: ["/posts/llm-brand-visibility-audit.webp"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
