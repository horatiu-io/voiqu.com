import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - My Story & Career Journey",
  description:
    "13+ years in digital marketing. From SEO Monitor to leading digital at Perceptum and MTH Digital. Google Partner since 2015. Currently at Genezio.",
  openGraph: {
    title: "About - My Story & Career Journey",
    description:
      "13+ years in digital marketing. From SEO Monitor to leading digital at Perceptum and MTH Digital. Google Partner since 2015. Currently at Genezio.",
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
    title: "About - My Story & Career Journey",
    description:
      "13+ years in digital marketing. From SEO Monitor to leading digital at Perceptum and MTH Digital. Google Partner since 2015. Currently at Genezio.",
    images: ["/h-voiqu.webp"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
