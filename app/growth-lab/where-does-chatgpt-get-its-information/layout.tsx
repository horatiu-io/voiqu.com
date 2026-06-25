import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Where Does ChatGPT Get Its Info? UK Banking Citations | Voiqu",
  description:
    "Inside 143,010 citations from 25,417 simulated UK banking conversations: Only 2.57% point to a bank's own site. Here is where the rest come from.",
  keywords: "ChatGPT, GEO, AI search, citations, UK banking, Generative Engine Optimization, brand visibility",
  openGraph: {
    title: "Where Does ChatGPT Get Its Info? UK Banking Citations | Voiqu",
    description:
      "Inside 143,010 citations from 25,417 simulated UK banking conversations: Only 2.57% point to a bank's own site. Here is where the rest come from.",
    url: "https://voiqu.com/growth-lab/where-does-chatgpt-get-its-information",
    type: "article",
    images: [
      {
        url: "/posts/where-does-chatgpt-get-its-information.webp",
        alt: "Where Does ChatGPT Get Its Information?",
        width: 1200,
        height: 630,
      },
    ],
    publishedTime: "2026-05-28T15:34:59+03:00",
  },
  other: {
    "og:logo": "https://voiqu.com/logo.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where Does ChatGPT Get Its Info? UK Banking Citations | Voiqu",
    description:
      "Inside 143,010 citations from 25,417 simulated UK banking conversations: Only 2.57% point to a bank's own site. Here is where the rest come from.",
    images: ["/posts/where-does-chatgpt-get-its-information.webp"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
