import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Voiqu — the terms and conditions governing your use of our website and services, including integrations with Google APIs.",
  openGraph: {
    title: "Terms of Service | Voiqu",
    description:
      "Terms of Service for Voiqu — the terms and conditions governing your use of our website and services, including integrations with Google APIs.",
    url: "https://voiqu.com/terms-of-service",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | Voiqu",
    description:
      "Terms of Service for Voiqu — the terms and conditions governing your use of our services.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
