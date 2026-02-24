import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact - Get in Touch",
  description:
    "Ready to accelerate your growth? Get in touch for a free initial consultation. Custom growth strategy proposals for B2B SaaS and e-commerce brands.",
  openGraph: {
    title: "Contact - Get in Touch",
    description:
      "Ready to accelerate your growth? Get in touch for a free initial consultation. Custom growth strategy proposals for B2B SaaS and e-commerce brands.",
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
    title: "Contact - Get in Touch",
    description:
      "Ready to accelerate your growth? Get in touch for a free initial consultation. Custom growth strategy proposals for B2B SaaS and e-commerce brands.",
    images: ["/h-voiqu.webp"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
