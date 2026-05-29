import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How I Use n8n to Automate SEO, Newsletters, and Link Building",
  description:
    "A full breakdown of how to build an automated, self-hosted SEO & marketing workspace using n8n. Guest posting arbitrage, AI newsletters, and SEO meta tags.",
  openGraph: {
    title: "How I Use n8n to Automate SEO, Newsletters, and Link Building",
    description:
      "A full breakdown of how to build an automated, self-hosted SEO & marketing workspace using n8n. Guest posting arbitrage, AI newsletters, and SEO meta tags.",
    url: "https://voiqu.com/growth-lab/how-i-use-n8n-to-automate-seo-newsletters-and-link-building",
    type: "article",
    images: [
      {
        url: "/posts/n8n-automation.webp",
        alt: "How I Use n8n to Automate SEO, Newsletters, and Link Building",
        width: 1200,
        height: 630,
      },
    ],
    publishedTime: "2026-05-29T12:30:00+03:00",
  },
  other: {
    "og:logo": "https://voiqu.com/logo.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "How I Use n8n to Automate SEO, Newsletters, and Link Building",
    description:
      "A full breakdown of how to build an automated, self-hosted SEO & marketing workspace using n8n. Guest posting arbitrage, AI newsletters, and SEO meta tags.",
    images: ["/posts/n8n-automation.webp"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
