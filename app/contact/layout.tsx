import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Horațiu Voicu | Book a Growth Strategy Audit",
  description:
    "Ready to scale your business with data-driven precision? Contact Horațiu Voicu to discuss automated growth engines, SEO, and tracking infrastructures.",
  openGraph: {
    title: "Contact Horațiu Voicu | Book a Growth Strategy Audit",
    description:
      "Ready to scale your business with data-driven precision? Contact Horațiu Voicu to discuss automated growth engines, SEO, and tracking infrastructures.",
    url: "https://voiqu.com/contact",
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
    title: "Contact Horațiu Voicu | Book a Growth Strategy Audit",
    description:
      "Ready to scale your business with data-driven precision? Contact Horațiu Voicu to discuss automated growth engines, SEO, and tracking infrastructures.",
    images: ["/h-voiqu.webp"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
