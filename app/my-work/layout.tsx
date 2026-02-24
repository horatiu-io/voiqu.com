import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Work - Philosophy & Services",
  description:
    "Discover my approach to growth marketing: SEO, Google Ads, Facebook Ads, and Analytics. Guided by conscious business principles and data-driven strategies.",
  openGraph: {
    title: "My Work - Philosophy & Services",
    description:
      "Discover my approach to growth marketing: SEO, Google Ads, Facebook Ads, and Analytics. Guided by conscious business principles and data-driven strategies.",
    url: "https://voiqu.com/my-work",
    images: [
      {
        url: "/h-voiqu.webp",
        width: 500,
        height: 600,
        alt: "Voiqu - My Work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Work - Philosophy & Services",
    description:
      "Discover my approach to growth marketing: SEO, Google Ads, Facebook Ads, and Analytics. Guided by conscious business principles and data-driven strategies.",
    images: ["/h-voiqu.webp"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
