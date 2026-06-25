import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Voiqu — learn how we collect, use, and protect your data, including information accessed via Google APIs (GA4, Search Console).",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
