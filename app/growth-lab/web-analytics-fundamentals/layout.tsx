import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Analytics Fundamentals: A Complete Guide to Implementation and Optimization",
  description:
    "Master web analytics with this complete guide. Learn essential metrics, tools like GA4 and Clarity, and strategies to optimize your digital presence.",
  openGraph: {
    title: "Web Analytics Fundamentals: A Complete Guide to Implementation and Optimization",
    description:
      "Master web analytics with this complete guide. Learn essential metrics, tools like GA4 and Clarity, and strategies to optimize your digital presence.",
    url: "https://voiqu.com/growth-lab/web-analytics-fundamentals",
    images: [
      {
        url: "/posts/google-analytics-focus-hero-image.webp",
        width: 1200,
        height: 630,
        alt: "Web Analytics Fundamentals: A Complete Guide",
      },
    ],
    type: "article",
    publishedTime: "2024-07-29T09:00:00+08:00",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Analytics Fundamentals: A Complete Guide to Implementation and Optimization",
    description:
      "Master web analytics with this complete guide. Learn essential metrics, tools like GA4 and Clarity, and strategies to optimize your digital presence.",
    images: ["/posts/google-analytics-focus-hero-image.webp"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
