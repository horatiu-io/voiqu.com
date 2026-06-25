import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Voiqu — the terms and conditions governing your use of our website and services, including integrations with Google APIs.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
