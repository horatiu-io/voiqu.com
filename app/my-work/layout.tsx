import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Work on GTM Strategy, Omnichannel & Automation | Voiqu",
  description:
    "Bridge the gap between complex data architecture, high-ROI media buying, and AI automation. Discover my systematic approach to scaling your revenue.",
  openGraph: {
    title: "My Work on GTM Strategy, Omnichannel & Automation | Voiqu",
    description:
      "Bridge the gap between complex data architecture, high-ROI media buying, and AI automation. Discover my systematic approach to scaling your revenue.",
    url: "https://voiqu.com/my-work",
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
    title: "My Work on GTM Strategy, Omnichannel & Automation | Voiqu",
    description:
      "Bridge the gap between complex data architecture, high-ROI media buying, and AI automation. Discover my systematic approach to scaling your revenue.",
    images: ["/h-voiqu.webp"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
